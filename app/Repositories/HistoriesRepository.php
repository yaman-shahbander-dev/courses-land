<?php

namespace App\Repositories;

use App\Interfaces\HistoriesRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Histroy;
use App\Models\Course;
use App\Models\Video;
use App\Models\Article;
use App\Models\Job;

class HistoriesRepository implements HistoriesRepositoryInterface
{
    public function watchHistoryStore(Request $request)  // user interface
    {
        $userID    = $request->userID;

        $request->exists('secret') ? $courseID  = Course::where('secret_key', $request->secret)->first()->id : $courseID = null;

        $request->exists('videoSecret') ? $videoID = Video::where('secret_key', $request->videoSecret)->first()->id : $videoID = null;

        $request->exists('title') ? $articleID = Article::where('title', $request->title)->first()->id : $articleID = null;

        $request->exists('secretJob') ? $jobID = Job::where('secret_key', $request->secretJob)->first()->id : $jobID = null;

        $history = new Histroy();
        $history->user_id = $userID;
        $history->course_id = $courseID;
        $history->video_id = $videoID;
        $history->article_id = $articleID;
        $history->job_id = $jobID;

        $history->save();

        return response()->json([
            'success' => 'history added successfully'
        ]);
    }

    public function getWatchHistory(Request $request) { // Dashboard
        $keyword = $request->keyword;
        $user = User::find($request->userID);
        if ($keyword == 'course') {
            $filtered = [];
            foreach($user->history as $course) {
                if ($course->course_id != null) {
                    $filtered[] = Course::where('id', $course->course_id)->first(['id', 'title', 'description', 'created_at', 'secret_key']);
                }
            }
            return $filtered;
        } else if ($keyword == 'video') {
            $filtered = [];
            foreach($user->history as $video) {
                if ($video->video_id != null) {
                    $filtered[] = Video::where('id', $video->video_id)->first(['id', 'title', 'description', 'created_at', 'secret_key']);
                }
            }
            return $filtered;
        } else if ($keyword == 'article') {
            $filtered = [];
            foreach($user->history as $article) {
                if ($article->article_id != null) {
                    $filtered[] = Article::where('id', $article->article_id)->first(['id', 'title', 'description', 'created_at']);
                }
            }
            return $filtered;
        } else if ($keyword == 'job') {
            $filtered = [];
            foreach($user->history as $job) {
                if ($job->job_id != null) {
                    $filtered[] = Job::where('id', $job->job_id)->first(['id', 'title', 'description', 'created_at', 'secret_key']);
                }
            }
            return $filtered;
        }

        return [];
    }
}
