<?php

namespace App\Repositories;

use App\Interfaces\JobsOffersRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Job;
use DB;

class JobsOffersRepository implements JobsOffersRepositoryInterface
{
    public function getJobsOffers()
    { // user interface
        $jobs = Job::where('approved', 1)->inRandomOrder()->limit(4)->get();

        $jobs = $jobs->map(function ($job) {
            $job->picture = asset('images/Jobs') . '/' . $job->picture;
            $job->user_id = $job->user->username;
            return $job;
        });

        return $jobs->makeHidden(['user', 'updated_at']);
    }

    public function getJobOfferDetails(Request $request)
    { // user interface
        $secret = $request->secret;
        $offer = Job::where('secret_key', $secret)->first();
        $offer->username = $offer->user->username;
        $offer->getFullOfferPictureURL($offer);
        $hide = ['updated_at', 'secret_key', 'user'];
        return $offer->makeHidden($hide);
    }

    public function getJobsOffersPage()
    { // user interface
        $jobs = Job::where('approved', 1)->get(['id', 'title', 'description', 'picture', 'user_id', 'created_at', 'secret_key']);

        $jobs = $jobs->map(function ($job) {
            $job->user_id = $job->user->username;
            $job->getFullOfferPictureURL($job);
            return $job;
        });

        return $jobs->makeHidden('user');
    }

    public function getJobsOffersDashboard(Request $request)
    { // dashboard
        $userTypeID = $request->UserTypeID;

        $UserID = $request->UserID;

        $jobsOffers = [];

        if ($userTypeID == 3) {
            $jobsOffers = Job::all();
        } else if ($userTypeID == 4) {
            $jobsOffers = Job::where('user_id', $UserID)->get();
        }

        $jobsOffers = collect($jobsOffers)->map(function ($jobsOffer) {
            $jobsOffer->user_id = $jobsOffer->user->username;
            return $jobsOffer;
        });

        return $jobsOffers;
    }

    public function JobOfferExists(Request $request)
    { // dashboard
        $offerID = $request->jobOfferID;

        $operation = $request->operation;

        $jobOffer = Job::find($offerID);

        if (empty($jobOffer)) {
            return response()->json(['error' => 'offer does not exist']);
        } elseif ($operation == 'delete') {
            $jobOffer->delete();
            if ($request->value == '') {
                if ($request->usertypeID == 3) {
                    $jobsOffers = Job::all();
                } else if ($request->usertypeID == 4) {
                    $jobsOffers = Job::where('user_id', $request->userID)->get();
                }

                $jobsOffers = collect($jobsOffers)->map(function ($jobsOffer) {
                    $jobsOffer->user_id = $jobsOffer->user->username;
                    return $jobsOffer;
                });
            } else {
                $value = $request->value;

                if ($request->usertypeID == 3) {
                    $jobsOffers = Job::where('title', 'like', '%' . $value . '%')
                        ->orWhere('description', 'like', '%' . $value . '%')->get();

                } elseif ($request->usertypeID == 4) {
                    $jobsOffers = Job::where('title', 'like', '%' . $value . '%')->where('user_id', $request->userID)
                        ->orWhere('description', 'like', '%' . $value . '%')->where('user_id', $request->userID)
                        ->get();
                }

                $jobsOffers = $jobsOffers->map(function ($offer) {
                    $offer->user_id = $offer->user->username;
                    return $offer;
                });
            }
            return response()->json(['success' => 'offer deleted successfully', 'jobs' => $jobsOffers]);
        } elseif ($operation == 'edit') {
            return response()->json(['success' => $jobOffer]);
        }
    }

    public function UpdateOfferInforamtion(Request $request)
    { // dashboard
        $offerInfo = $request->all();

        $offerDB = Job::find($offerInfo['OfferID']);

        if (empty($offerDB)) {
            return response()->json(['error' => 'Job offer does not exist']);
        } else {
            $offerDB->title = $offerInfo['title'];

            $offerDB->description = $offerInfo['description'];

            if (!empty($request->file('picture'))) {

                $filename = time() . '.' . $request->file('picture')->getClientOriginalExtension();

                $request->file('picture')->move(public_path('images/Jobs'), $filename);

                $offerDB->picture = $filename;
            }

            $offerDB->save();

            return response()->json(['success' => 'Job offer updated successfully']);
        }
    }

    public function searchjobOffer(Request $request)
    { // dashboard
        $value = $request->value;

        $userID = $request->UserID;

        $userTypeID = $request->UserTypeID;

        if ($userTypeID == 3) {
            $offers = Job::where('title', 'like', '%' . $value . '%')
                ->orWhere('description', 'like', '%' . $value . '%')->get();
        } else if ($userTypeID == 4) {
            $offers = Job::where('title', 'like', '%' . $value . '%')->where('user_id', $userID)
                ->orWhere('description', 'like', '%' . $value . '%')->where('user_id', $userID)
                ->get();
        }

        $offers = $offers->map(function ($offer) {
            $offer->user_id = $offer->user->username;
            return $offer;
        });

        return response()->json(['success' => $offers]);
    }

    public function createJobOffer(Request $request)
    { // dashboard
        $title       = $request->title;
        $description = $request->description;
        $picture     = $request->file('picture');

        $filename = time() . '.' . $picture->getClientOriginalExtension();
        $picture->move(public_path('images/Jobs'), $filename);

        $offer = new Job();
        $offer->title       = $title;
        $offer->description = $description;
        $offer->picture     = $filename;
        $offer->user_id     = $request->userID;
        $offer->approved    = 0;

        $secret_key = bin2hex(random_bytes(10));
        while (!empty(Job::where('secret_key', $secret_key)->first())) {
            $secret_key = bin2hex(random_bytes(10));
        }

        $offer->secret_key     = $secret_key;
        $offer->save();

        return response()->json(['success' => 'Job offer saved successfully']);
    }

    public function getSearchedJobsData(Request $request) { // user interface
        $value = $request->value;

        $jobs = Job::where('title', 'like', '%' . $value . '%')->orWhere('description', 'like', '%' . $value . '%')->get(['id', 'title', 'description', 'picture', 'user_id', 'created_at', 'secret_key']);

        $jobs = $jobs->map(function ($job) {
            $job->user_id = $job->user->username;
            $job->getFullOfferPictureURL($job);
            return $job;
        });

        return $jobs->makeHidden('user');
    }

    public function applyToJobOffer(Request $request) { // user interface (applying to an offer)
        $ID = mt_rand(9, 999999999) + time();
        $fromID = $request->fromID;
        $toID = $request->toID;
        $type = 'user';
        $body = htmlentities(trim($request->text), ENT_QUOTES, 'UTF-8');
        $seen = 0;
        $attachment = null;
        DB::table('ch_messages')->insert([
            'id'         => $ID,
            'type'       => $type,
            'from_id'    => $fromID,
            'to_id'      => $toID,
            'body'       => $body,
            'attachment' => $attachment,
            'seen'       => $seen,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json([
            'message' => 'success'
        ]);
    }
}
