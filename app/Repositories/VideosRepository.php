<?php

namespace App\Repositories;

use App\Interfaces\VideosRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Video;
use App\Models\User;
use App\Models\Course;
use DB;

class VideosRepository implements VideosRepositoryInterface
{
    public function getAllVideos(Request $request)
    {
        $videos = [];
        if ($request->usertypeID == 3) {
            $videos = Video::all(['id', 'title', 'description', 'course_id', 'video', 'approved']);
        } elseif ($request->usertypeID == 2) {
            $user = User::find($request->userID);
            $courses = $user->courses;
            foreach ($courses as $course) {
                if (count(Video::where('course_id', $course->id)->get()) > 0) {
                    $videos = Video::where('course_id', $course->id)
                        ->get(['id', 'title', 'description', 'course_id', 'video', 'approved']);
                }
            }
        }

        $videos = collect($videos)->map(function ($video) {
            $video->course_id = $video->course->title;
            $video->author = DB::table('users')->where('id', $video->course->user_id)->first()->username;
            $video->video = asset('images' . '/' . 'Videos' . '/' . $video->video);
            return $video;
        });

        return $videos;
    }

    public function VideoExists(Request $request)
    {
        $videoID = $request->videoID;

        $operation = $request->operation;

        $video = Video::find($videoID);

        if (empty($video)) {
            return response()->json(['error' => 'Video does not exist']);
        } elseif ($operation == 'delete') {
            $video->delete();
            $videos = [];

            if ($request->value == '') {
                if ($request->usertypeID == 3) {
                    $videos = Video::all(['id', 'title', 'description', 'course_id', 'video', 'approved']);
                } elseif ($request->usertypeID == 2) {
                    $user = User::find($request->userID);
                    $courses = $user->courses;
                    foreach ($courses as $course) {
                        if (count(Video::where('course_id', $course->id)->get()) > 0) {
                            $videos = Video::where('course_id', $course->id)
                                ->get(['id', 'title', 'description', 'course_id', 'video', 'approved']);
                        }
                    }
                }

                $videos = collect($videos)->map(function ($video) {
                    $video->course_id = $video->course->title;
                    $video->author = DB::table('users')->where('id', $video->course->user_id)->first()->username;
                    $video->video = asset('images' . '/' . 'Videos' . '/' . $video->video);
                    return $video;
                });
            } else {
                $value = $request->value;
                if ($request->usertypeID == 3) {
                    $videos = Video::where('title', 'like', '%' . $value . '%')
                        ->orwhere('description', 'like', '%' . $value . '%')
                        ->get(['id', 'title', 'description', 'course_id', 'video', 'approved']);
                } elseif ($request->usertypeID == 2) {
                    $user = User::find($request->userID);
                    $courses = $user->courses;
                    foreach ($courses as $course) {
                        $videos = Video::where('title', 'like', '%' . $value . '%')
                            ->orwhere('description', 'like', '%' . $value . '%')
                            ->where('course_id', $course->id)
                            ->get(['id', 'title', 'description', 'course_id', 'video', 'approved']);
                    }
                }

                $videos = $videos->map(function ($video) {
                    $video->course_id = $video->course->title;
                    $video->author = DB::table('users')->where('id', $video->course->user_id)->first()->username;
                    $video->video = asset('images' . '/' . 'Videos' . '/' . $video->video);
                    return $video;
                });
            }

            return response()->json(['success' => 'Video deleted successfully', 'videos' => $videos]);
        } elseif ($operation == 'edit') {
            return response()->json(['success' => $video]);
        }
    }

    public function UpdateVideoInforamtion(Request $request)
    {
        $videoInfo = $request->all();

        $videoDB = Video::find($videoInfo['videoID']);

        if (empty($videoDB)) {
            return response()->json(['error' => 'Video does not exist']);
        } else {
            $videoDB->title = $videoInfo['title'];

            $videoDB->description = $videoInfo['description'];

            $videoDB->save();

            return response()->json(['success' => 'Video updated successfully']);
        }
    }

    public function searchVideo(Request $request)
    {
        $value = $request->value;

        $videos = [];

        if ($request->usertypeID == 3) {
            $videos = Video::where('title', 'like', '%' . $value . '%')
                ->orwhere('description', 'like', '%' . $value . '%')
                ->get(['id', 'title', 'description', 'course_id', 'video', 'approved']);
        } elseif ($request->usertypeID == 2) {
            $user = User::find($request->userID);
            $courses = $user->courses;
            foreach ($courses as $course) {
                $videos = Video::where('title', 'like', '%' . $value . '%')
                    ->orwhere('description', 'like', '%' . $value . '%')
                    ->where('course_id', $course->id)
                    ->get(['id', 'title', 'description', 'course_id', 'video', 'approved']);
            }
        }

        $videos = $videos->map(function ($video) {
            $video->course_id = $video->course->title;
            $video->author = DB::table('users')->where('id', $video->course->user_id)->first()->username;
            $video->video = asset('images' . '/' . 'Videos' . '/' . $video->video);
            return $video;
        });

        return response()->json(['success' => $videos->makeHidden('course')]);
    }

    public function uploadVideo(Request $request)
    {
        $title       = $request->title;
        $description = $request->description;
        $video       = $request->file('video');
        $course      = $request->course;

        $filename = time() . '.' . $video->getClientOriginalExtension();

        $video->move(public_path('images/Videos'), $filename);

        $video = new Video();
        $video->title       = $title;
        $video->description = $description;
        $video->approved = 0;

        $secret_key = bin2hex(random_bytes(10));
        while (!empty(Video::where('secret_key', $secret_key)->first())) {
            $secret_key = bin2hex(random_bytes(10));
        }

        $video->secret_key = $secret_key;
        $video->course_id  = $course;
        $video->video      = $filename;
        $video->locked     = 1;

        $video->save();

        return response()->json(['success' => 'Video has been uploaded successfully!']);
    }

    public function getCoursesSelect(Request $request)
    {
        if ($request->userID) {
            $courses = Course::where('user_id', $request->userID)->get(['id', 'title', 'user_id']);
        } else {
            $courses = Course::all(['id', 'title', 'user_id']);
        }

        $courses = $courses->map(function ($course) {
            $course->user_id = $course->user->username;
            return $course;
        });

        return $courses->makeHidden('user');
    }

    public function makeVideoComment(Request $request)
    { // [user interface] add comment to a video
        $videoID  = $request->videoID;
        $userID     = $request->userID;
        $comment    = $request->comment;

        DB::table('comments_videos')
            ->insert([
                'comment'    => $comment,
                'user_id'    => $userID,
                'video_id'   => $videoID,
                'approved'   => 0,
                'created_at' => now(),
                'updated_at' => now()
            ]);

        return response()->json(['success' => 'comment saved successfully']);
    }

    public function getUserCommentVideo(Request $request)
    { // Dashboard
        $usertype = $request->userType;
        $userID = $request->userId;
        $comments = [];

        if ($usertype == 3) {
            $comments = DB::table('comments_videos')->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
        } else {
            $comments = DB::table('comments_videos')->where('user_id', $userID)->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
        }

        $comments = $comments->map(function ($comment) {
            $user = DB::table('users')->where('id', $comment->user_id)->get('username');
            $video = DB::table('videos')->where('id', $comment->video_id)->get('title');
            $comment->user_id = $user[0]->username;
            $comment->video_id = $video[0]->title;
            return $comment;
        });

        return $comments;
    }

    public function removeUserCommentVideo(Request $request)
    { // Dashboard
        $commentID = $request->commentID;
        $usertype = $request->userType;
        $userID = $request->userId;


        $exists = DB::table('comments_videos')
            ->where('id', $commentID)
            ->first();

        if (!empty($exists)) {
            DB::table('comments_videos')
                ->where('id', $commentID)
                ->delete();

            $comments = [];

            if ($request->value == '') {
                if ($usertype == 3) {
                    $comments = DB::table('comments_videos')->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
                } else {
                    $comments = DB::table('comments_videos')->where('user_id', $userID)->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
                }

                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $video = DB::table('videos')->where('id', $comment->video_id)->get('title');
                    $comment->user_id = $user[0]->username;
                    $comment->video_id = $video[0]->title;
                    return $comment;
                });
            } else {
                $value = $request->value;

                if ($usertype == 3) {
                    $comments = DB::table('comments_videos')
                        ->where('comment', 'like', '%' . $value . '%')
                        ->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
                } else {
                    $comments = DB::table('comments_videos')
                        ->where('comment', 'like', '%' . $value . '%')
                        ->where('user_id', $userID)
                        ->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
                }

                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $video = DB::table('videos')->where('id', $comment->video_id)->get('title');
                    $comment->user_id = $user[0]->username;
                    $comment->video_id = $video[0]->title;
                    return $comment;
                });

            }

            return response()->json([
                'title' => 'Great!',
                'success' => 'Comment removed successfully!',
                'state' => 'success',
                'comments' => $comments
            ]);
        }

        return response()->json([
            'title' => 'Error!',
            'success' => 'Comment is not in found!',
            'state' => 'warning'
        ]);
    }

    public function searchCommentVideos(Request $request)
    { //dashboard
        $usertypeID = $request->usertypeID;
        $userID = $request->userID;
        $value = $request->value;

        if ($usertypeID == 3) {
            $comments = DB::table('comments_videos')
                ->where('comment', 'like', '%' . $value . '%')
                ->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
        } else {
            $comments = DB::table('comments_videos')
                ->where('comment', 'like', '%' . $value . '%')
                ->where('user_id', $userID)
                ->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
        }

        $comments = $comments->map(function ($comment) {
            $user = DB::table('users')->where('id', $comment->user_id)->get('username');
            $video = DB::table('videos')->where('id', $comment->video_id)->get('title');
            $comment->user_id = $user[0]->username;
            $comment->video_id = $video[0]->title;
            return $comment;
        });

        return $comments;
    }
}
