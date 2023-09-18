<?php

namespace App\Repositories;

use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use App\Models\Course;
use App\Models\Video;
use App\Models\Category;
use App\Models\Article;
use App\Models\Job;
use App\Http\Requests\CreateUserRequest;
use Illuminate\Http\Request;
use Hash;
use DB;
use Auth;
use Illuminate\Support\Facades\Cache;

class UserRepository implements UserRepositoryInterface
{
    public function Register(CreateUserRequest $request)
    {
        $user = new User();
        $user->username = $request->username;
        $user->name = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $secret_key = bin2hex(random_bytes(10));
        while (!empty(User::where('secret_key', $secret_key)->first())) {
            $secret_key = bin2hex(random_bytes(10));
        }
        $user->secret_key = $secret_key;
        $user->picture = 'images/avatar.png';
        $user->verified = 0;
        $user->type_id = 1;
        $user->description = null;
        $user->fcm_token = $request->token;
        Auth::attempt($user->toArray());
        $user->save();

        return $user->makeHidden(['created_at', 'updated_at']);
    }

    public function Login(Request $request)
    {
        $email    = $request->email;
        $password = $request->password;
        $user = User::where('email', $email)->first();

        if ($user == null) {
            return response()->json([
                'message'   => 'Email does not exist'
            ], 400);
        }
        if (Hash::check($user->password, $password)) {
            return response()->json([
                'message'   => 'password does not match'
            ], 400);
        }

        auth()->login($user);

        return $user->makeHidden(['created_at', 'updated_at']);
    }

    public function sendNotification($notificationTitle, $notificationBody, $FirebaseToken)
    {
        $firebaseToken = [$FirebaseToken];

        $SERVER_API_KEY = 'AAAAGFZeFmY:APA91bGjwSo90juzemtoF7X0r7IylDLwm4TkNNrmlLSUt-5-WVbiJpVfO0he0kohnwRGYOeYRxHq9hvcKuQCG2xwNcENMdiOZ6XBqz58TB4AfukEreixNqYZNGu5eT4EVZmzTki93HpY';

        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => $notificationTitle,
                "body" => $notificationBody,
            ]
        ];

        $dataString = json_encode($data);

        $headers = [
            'Authorization: key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);

        $response = curl_exec($ch);
    }

    public function Statistics()
    { // for dashboard
        $response = [];

        $response = [
            'users'       => count(User::all()),
            'courses'     => count(Course::all()),
            'videos'      => count(Video::all()),
            'categories'  => count(Category::all()),
            'articles'    => count(Article::all()),
            'offers'      => count(Job::all()),
        ];

        return $response;
    }

    public function getActiveUsers() {
        $activeUsers = 0;

        if (Cache::has('activeUsers')) {
            $activeUsers = Cache::get('activeUsers');
        } else {
            Cache::put('activeUsers', 1, now()->addHours(23));
            $activeUsers = Cache::get('activeUsers');
        }

        return $activeUsers;
    }

    public function increaseActiveUsers() {
        if (Cache::has('activeUsers')) {
            Cache::increment('activeUsers');
        } else {
            Cache::add('activeUsers', 1, now()->addHours(23));
        }
    }

    public function decreaseActiveUsers() {
        if (Cache::has('activeUsers')) {
            Cache::decrement('activeUsers');
        } else {
            Cache::add('activeUsers', 1, now()->addHours(23));
        }
    }

    public function getAllUsers()
    { // for dashboard

        $users = User::all(['id', 'username', 'email', 'verified', 'created_at', 'type_id']);

        $users = $users->map(function ($user) {
            $user->type_id = $user->type->name;
            return $user;
        });

        return $users;
    }

    public function checkUserExistance(Request $request)
    { // for dashboard
        $userID = $request->userID;

        $operation = $request->operation;

        $user = User::find($userID);

        if (empty($user)) {
            return response()->json(['error' => 'User does not exist']);
        } elseif ($operation == 'delete') {
            $user->delete();
            if($request->value == '') {
                $users = User::all(['id', 'username', 'email', 'verified', 'created_at', 'type_id']);

                $users = $users->map(function ($user) {
                    $user->type_id = $user->type->name;
                    return $user;
                });
            } else {
                $value = $request->value;

                if (trim($value, ' ') == 'user') $value = 1;
                elseif (trim($value, ' ') == 'author') $value = 2;
                elseif (trim($value, ' ') == 'admin')  $value = 3;
                elseif (trim($value, ' ') == 'agent')  $value = 4;

                $users = User::where('username', 'like', '%' . $value . '%')
                    ->orWhere('email', 'like', '%' . $value . '%')
                    ->orWhere('type_id', 'like', '%' . $value . '%')
                    ->orWhere('description', 'like', '%' . $value . '%')
                    ->get();

                $users = $users->map(function ($user) {
                    $user->type_id = $user->type->name;
                    return $user;
                });

                $users->makeHidden(['picture', 'updated_at', 'fcm_token', 'secret_key', 'type']);
            }

            return response()->json(['success' => 'User deleted successfully', 'users' => $users]);
        } elseif ($operation == 'edit') {
            $user->makeHidden(['picture', 'created_at', 'updated_at', 'fcm_token', 'secret_key', 'type']);

            return response()->json(['success' => $user]);
        }
    }

    public function UpdateUserInforamtion(Request $request)
    { // for dashboard
        $userInfo = $request->all();

        $userDB = User::find($userInfo['userID']);

        if (empty($userDB)) {
            return response()->json(['error' => 'User does not exist']);
        } else {
            $userDB->username = $userInfo['userName'];

            $userDB->email = $userInfo['email'];

            $userDB->verified = $userInfo['verified'];

            $userDB->type_id = $userInfo['type'];

            $userDB->description = $userInfo['description'];

            $userDB->save();

            return response()->json(['success' => 'User updated successfully']);
        }
    }

    public function searchUser(Request $request)
    { // for dashboard
        $value = $request->value;

        if (trim($value, ' ') == 'user') $value = 1;
        elseif (trim($value, ' ') == 'author') $value = 2;
        elseif (trim($value, ' ') == 'admin')  $value = 3;
        elseif (trim($value, ' ') == 'agent')  $value = 4;

        $users = User::where('username', 'like', '%' . $value . '%')
            ->orWhere('email', 'like', '%' . $value . '%')
            ->orWhere('type_id', 'like', '%' . $value . '%')
            ->orWhere('description', 'like', '%' . $value . '%')
            ->get();

        $users = $users->map(function ($user) {
            $user->type_id = $user->type->name;
            return $user;
        });

        $users->makeHidden(['picture', 'updated_at', 'fcm_token', 'secret_key', 'type']);

        return response()->json(['success' => $users]);
    }

    public function getAuthorsRequests()
    {
        // Dashboard
        $becomeAuthorsRequests = DB::table('authors_requests')->get(['id', 'user_id', 'description', 'created_at']);

        $becomeAuthorsRequests = $becomeAuthorsRequests->map(function ($request) {
            $request->user_id = User::where('id', $request->user_id)->get()[0]->username;
            return $request;
        });

        return $becomeAuthorsRequests;
    }

    public function getAgentsRequests()
    {
        // Dashboard
        $becomeAgentsRequests = DB::table('agents_requests')->get(['id', 'user_id', 'description', 'created_at']);

        $becomeAgentsRequests = $becomeAgentsRequests->map(function ($request) {
            $request->user_id = User::where('id', $request->user_id)->get()[0]->username;
            return $request;
        });

        return $becomeAgentsRequests;
    }

    public function AuthorRequestExists(Request $request)
    {
        // Dashboard
        $authorRequestID = $request->authorRequestID;

        $operation = $request->operation;

        $authorRequest = DB::table('authors_requests')->where('id', $authorRequestID)->first();

        $userFCM = User::find($authorRequest->user_id)->fcm_token;

        if (empty($authorRequest)) {
            return response()->json(['error' => 'Request does not exist']);
        } elseif ($operation == 'delete') {
            // deleting author request from authors_requests table
            DB::table('authors_requests')->where('id', $authorRequestID)->delete();

            $this->sendNotification('Author Request', 'Your request to become an author was not approved', $userFCM);

            $becomeAuthorsRequests = DB::table('authors_requests')->get(['id', 'user_id', 'description', 'created_at']);

            $becomeAuthorsRequests = $becomeAuthorsRequests->map(function ($request) {
                $request->user_id = User::where('id', $request->user_id)->get()[0]->username;
                return $request;
            });

            return response()->json(['success' => 'Request deleted successfully', 'requests' => $becomeAuthorsRequests]);
        } elseif ($operation == 'approve') {
            // deleting author request from authors_requests table
            DB::table('authors_requests')->where('id', $authorRequestID)->delete();
            // Update the user to become an author
            DB::table('users')->where('id', $authorRequest->user_id)->update([
                'type_id' => '2'
            ]);

            $becomeAuthorsRequests = DB::table('authors_requests')->get(['id', 'user_id', 'description', 'created_at']);

            $becomeAuthorsRequests = $becomeAuthorsRequests->map(function ($request) {
                $request->user_id = User::where('id', $request->user_id)->get()[0]->username;
                return $request;
            });

            $this->sendNotification('Author Request', 'Your request to become an author was approved. Log out and in to see changes', $userFCM);

            return response()->json(['success' => $authorRequest, 'requests' => $becomeAuthorsRequests]);
        }
    }

    public function AgentRequestExists(Request $request)
    {
        // Dashboard
        $agentRequestID = $request->agentRequestID;

        $operation = $request->operation;

        $agentRequest = DB::table('agents_requests')->where('id', $agentRequestID)->first();

        $userFCM = User::find($agentRequest->user_id)->fcm_token;

        if (empty($agentRequest)) {
            return response()->json(['error' => 'Request does not exist']);
        } elseif ($operation == 'delete') {
            // deleting author request from authors_requests table
            DB::table('agents_requests')->where('id', $agentRequestID)->delete();

            $this->sendNotification('Agent Request', 'Your request to become an agent was not approved', $userFCM);

            $becomeAgentsRequests = DB::table('agents_requests')->get(['id', 'user_id', 'description', 'created_at']);

            $becomeAgentsRequests = $becomeAgentsRequests->map(function ($request) {
                $request->user_id = User::where('id', $request->user_id)->get()[0]->username;
                return $request;
            });

            return response()->json(['success' => 'Request deleted successfully', 'requests' => $becomeAgentsRequests]);
        } elseif ($operation == 'approve') {
            // deleting author request from authors_requests table
            DB::table('agents_requests')->where('id', $agentRequestID)->delete();
            // Update the user to become an author
            DB::table('users')->where('id', $agentRequest->user_id)->update([
                'type_id' => '4'
            ]);

            $this->sendNotification('Agent Request', 'Your request to become an agent was approved. Log out and in to see changes', $userFCM);

            $becomeAgentsRequests = DB::table('agents_requests')->get(['id', 'user_id', 'description', 'created_at']);

            $becomeAgentsRequests = $becomeAgentsRequests->map(function ($request) {
                $request->user_id = User::where('id', $request->user_id)->get()[0]->username;
                return $request;
            });

            return response()->json(['success' => $agentRequest, 'requests' => $becomeAgentsRequests]);
        }
    }

    public function userProfileData(Request $request) {
        // Receiving user id
        $userID = $request->userID;
        // Getting the user from DB
        $user = User::find($userID)->only('username');
        return $user;
    }

    public function updateProfile(Request $request) {
        if (!empty($request->file('picture'))) {
            $picture = $request->file('picture');
            $username = $request->username;

            $filename = time() . '.' . $picture->getClientOriginalExtension();

            $picture->move(public_path('images/Avatar'), $filename);

            User::where('id', $request->userID)->update([
                'username' => $username,
                'picture'  => $filename,
            ]);

        }
        else {
            $username = $request->username;

            User::where('id', $request->userID)->update([
                'username' => $username
            ]);
        }

        return response()->json(['success' => 'Profile has been updated successfully!']);
    }

    public function getUserInfo(Request $request) {
        $user = User::find($request->userID)->only(['username', 'picture']);
        $user['picture'] = asset('images/Avatar') . '/' . $user['picture'] ;
        return $user;
    }

    public function becomeAuthorAgentRequest(Request $request) { // [Dashboard]
        $becomeRequest = $request->becomeRequest;
        $description = $request->description;
        $userID = $request->userID;

        if ($becomeRequest == 0) {
            return response()->json([
                "status"  => 'error',
                "message" => 'You did\'t choose what to become',
                "result"  => 'error'
            ]);
        } elseif ($becomeRequest == 1) {
            if (empty(DB::table('authors_requests')->where('user_id', $userID)->first())
               && empty(DB::table('agents_requests')->where('user_id', $userID)->first())) {
                DB::table('authors_requests')->insert([
                    'description' => $description,
                    'user_id' => $userID,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);

                return response()->json([
                    "status"  => 'success',
                    "message" => 'Your request to become an author has been sent successfully',
                    "result"  => 'success'
                ]);
            } else {
                return response()->json([
                    "status"  => 'error',
                    "message" => 'You already sent a request',
                    "result"  => 'error'
                ]);
            }
        } elseif ($becomeRequest == 2) {
            if (empty(DB::table('authors_requests')->where('user_id', $userID)->first())
               && empty(DB::table('agents_requests')->where('user_id', $userID)->first())) {
                DB::table('agents_requests')->insert([
                    'description' => $description,
                    'user_id' => $userID,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);

                return response()->json([
                    "status"  => 'success',
                    "message" => 'Your request to become an agent has been sent successfully',
                    "result"  => 'success'
                ]);
            } else {
                return response()->json([
                    "status"  => 'error',
                    "message" => 'You already sent a request',
                    "result"  => 'error'
                ]);
            }
        }

        return 0;
    }

    public function hasAlreadyRequested(Request $request) { // [Dashboard]
        $requestedToBeAuthor = DB::table('authors_requests')->where('user_id', $request->userID)->first();
        $requestedToBeAgent = DB::table('agents_requests')->where('user_id', $request->userID)->first();
        if (empty($requestedToBeAuthor) && empty($requestedToBeAgent)) return 0;
        else return 1;
    }
}
