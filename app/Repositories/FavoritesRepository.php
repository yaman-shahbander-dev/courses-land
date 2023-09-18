<?php

namespace App\Repositories;

use App\Interfaces\FavoritesRepositoryInterface;
use Illuminate\Http\Request;
use DB;
use App\Models\Course;
use App\Models\Video;
use App\Models\User;

class FavoritesRepository implements FavoritesRepositoryInterface
{
    public function checkCourseFavoriteExistence(Request $request)
    {  // check if the course is already in favorite table for the current user
        $userID = $request->userID;
        $courseID = $request->courseID;

        $exists = DB::table('favorites_courses')
        ->where('user_id', $userID)
        ->where('course_id', $courseID)
        ->first();

        return !empty($exists) ? true : false;
    }

    public function addToFavorite(Request $request)
    { // [user interface]
        $userID = $request->userID;
        $courseID = $request->courseID;

        $exists = DB::table('favorites_courses')
        ->where('user_id', $userID)
        ->where('course_id', $courseID)
        ->first();

        if (empty($exists)) {
            DB::table('favorites_courses')
            ->insert([
                'user_id'    => $userID,
                'course_id'  => $courseID,
                'created_at' => now(),
                'updated_at' => now()
            ]);

            return response()->json([
                'title' => 'Great!',
                'success' => 'Course added successfully to favorite!',
                'state' => 'success'
            ]);
        }

        return response()->json([
            'title' => 'Error!',
            'success' => 'Course is already in favorite!',
            'state' => 'warning'
        ]);
    }

    public function removeFromFavorite(Request $request)
    { // [user interface]
        $userID = $request->userID;
        $courseID = $request->courseID;

        $exists = DB::table('favorites_courses')
        ->where('user_id', $userID)
        ->where('course_id', $courseID)
        ->first();


        if (!empty($exists)) {
            DB::table('favorites_courses')
            ->where('user_id', $userID)
            ->where('course_id', $courseID)
            ->delete();

            if ($request->value == '') {
                $courses = DB::table('favorites_courses')
                    ->where('user_id', $userID)
                    ->get(['id', 'course_id', 'created_at']);

                foreach ($courses as $course) {
                    $searchedCourse = Course::find($course->course_id);
                    $course->course_description = $searchedCourse->description;
                    $course->secret_key = $searchedCourse->secret_key;
                }
            } else {
                $userFavoriteCourses = DB::table('favorites_courses')
                ->where('user_id', $userID)
                ->get('course_id');

                $allCourses = Course::where('title', 'like', '%' . $request->value . '%')
                ->orWhere('description', 'like', '%' . $request->value . '%')
                ->get(['id', 'description', 'secret_key']);

                $courses = [];

                foreach ($allCourses as $course) {
                    foreach ($userFavoriteCourses as $favorite) {
                        if ($course->id == $favorite->course_id) {
                            $courses[] = $course;
                        }
                    }
                }
            }

            return response()->json([
                'title' => 'Great!',
                'success' => 'Course removed successfully from favorite!',
                'state' => 'success',
                'favorites' => $courses
            ]);
        } else {
            $exists = DB::table('favorites_courses')
                ->where('id', $courseID)
                ->first();

            if (!empty($exists)) {
                DB::table('favorites_courses')
                        ->where('id', $courseID)->delete();

                $courses = DB::table('favorites_courses')
                        ->where('user_id', $userID)
                        ->get(['id', 'course_id', 'created_at']);

                foreach ($courses as $course) {
                    $searchedCourse = Course::find($course->course_id);
                    $course->course_description = $searchedCourse->description;
                    $course->secret_key = $searchedCourse->secret_key;
                }

                return response()->json([
                        'title' => 'Great!',
                        'success' => 'Course removed successfully from favorite!',
                        'state' => 'success',
                        'favorites' => $courses
                    ]);
            }
        }

        return response()->json([
            'title' => 'Error!',
            'success' => 'Course is not in favorite!',
            'state' => 'warning'
        ]);
    }

    public function getUserFavoriteCourses(Request $request)
    { // [Dashboard]
        $userID = $request->userID;

        $courses = DB::table('favorites_courses')
            ->where('user_id', $userID)
            ->get(['id', 'course_id', 'created_at']);

        foreach ($courses as $course) {
            $searchedCourse = Course::find($course->course_id);
            $course->course_description = $searchedCourse->description;
            $course->secret_key = $searchedCourse->secret_key;
        }

        return $courses;
    }

    public function checkvideoFavoriteExistence(Request $request)
    { // [user interface]
        // check if the video is already in favorite table for the current user
        $userID = $request->userID;
        $videoID = $request->videoID;

        $exists = DB::table('favorites_videos')
        ->where('user_id', $userID)
        ->where('video_id', $videoID)
        ->first();

        return !empty($exists) ? true : false;
    }

    public function addVideoToFavorite(Request $request)
    {
        // [user interface]
        $userID = $request->userID;
        $videoID = $request->videoID;

        $exists = DB::table('favorites_videos')
        ->where('user_id', $userID)
        ->where('video_id', $videoID)
        ->first();

        if (empty($exists)) {
            DB::table('favorites_videos')
            ->insert([
                'user_id'    => $userID,
                'video_id'  => $videoID,
                'created_at' => now(),
                'updated_at' => now()
            ]);

            return response()->json([
                'title' => 'Great!',
                'success' => 'Video added successfully to favorite!',
                'state' => 'success'
            ]);
        }

        return response()->json([
            'title' => 'Error!',
            'success' => 'Video is already in favorite!',
            'state' => 'warning'
        ]);
    }

    public function removeVideoFromFavorite(Request $request)
    { // [user interface]
        $userID = $request->userID;
        $videoID = $request->videoID;

        if ($request->value == '') {
            $exists = DB::table('favorites_videos')
            ->where('user_id', $userID)
            ->where('video_id', $videoID)
            ->first();

            if (!empty($exists)) {
                DB::table('favorites_videos')
                    ->where('user_id', $userID)
                    ->where('video_id', $videoID)
                    ->delete();

                $videos = DB::table('favorites_videos')
                ->where('user_id', $userID)
                ->get(['id', 'video_id', 'created_at']);

                foreach ($videos as $video) {
                    $searchedVideo = Video::find($video->video_id);
                    $video->video_description = $searchedVideo->description;
                    $video->secret_key = $searchedVideo->secret_key;
                }
            } else {
                return response()->json([
                    'title' => 'Error!',
                    'success' => 'Video is not in favorite!',
                    'state' => 'warning'
                ]);
            }
        } else {
            $exists = DB::table('favorites_videos')
                ->where('user_id', $userID)
                ->where('video_id', $videoID)
                ->first();

            if (!empty($exists)) {
                DB::table('favorites_videos')
                    ->where('user_id', $userID)
                    ->where('video_id', $videoID)
                    ->delete();

                $userFavoriteVideos = DB::table('favorites_videos')
                ->where('user_id', $userID)
                ->get('video_id');

                $allVideos = Video::where('title', 'like', '%' . $request->value . '%')
                ->orWhere('description', 'like', '%' . $request->value . '%')
                ->get(['id', 'description', 'secret_key']);

                $videos = [];

                foreach ($allVideos as $video) {
                    foreach ($userFavoriteVideos as $favorite) {
                        if ($video->id == $favorite->video_id) {
                            $videos[] = $video;
                        }
                    }
                }
            } else {
                return response()->json([
                    'title' => 'Error!',
                    'success' => 'Video is not in favorite!',
                    'state' => 'warning'
                ]);
            }
        }

        return response()->json([
            'title' => 'Great!',
            'success' => 'Video removed successfully from favorite!',
            'state' => 'success',
            'favorites' => $videos
        ]);
    }

    public function getUserFavoriteVideos(Request $request)
    { // [Dashboard]
        $userID = $request->userID;

        $videos = DB::table('favorites_videos')
        ->where('user_id', $userID)
        ->get(['id', 'video_id', 'created_at']);

        foreach ($videos as $video) {
            $searchedVideo = Video::find($video->video_id);
            $video->video_description = $searchedVideo->description;
            $video->secret_key = $searchedVideo->secret_key;
        }

        return $videos;
    }

    public function searchFavoriteCourseOrVideo(Request $request)
    { // [Dashboard]
        $userID = $request->userID;
        $value = $request->value;
        $keyword = $request->keyword;
        if ($keyword == 'course') {
            $userFavoriteCourses = DB::table('favorites_courses')
            ->where('user_id', $userID)
            ->get('course_id');

            $allCourses = Course::where('title', 'like', '%' . $value . '%')
            ->orWhere('description', 'like', '%' . $value . '%')
            ->get(['id', 'description', 'secret_key']);

            $courses = [];

            foreach ($allCourses as $course) {
                foreach ($userFavoriteCourses as $favorite) {
                    if ($course->id == $favorite->course_id) {
                        $courses[] = $course;
                    }
                }
            }

            return $courses;
        }

        $userFavoriteVideos = DB::table('favorites_videos')
            ->where('user_id', $userID)
            ->get('video_id');

        $allVideos = Video::where('title', 'like', '%' . $value . '%')
        ->orWhere('description', 'like', '%' . $value . '%')
        ->get(['id', 'description', 'secret_key']);

        $videos = [];

        foreach ($allVideos as $video) {
            foreach ($userFavoriteVideos as $favorite) {
                if ($video->id == $favorite->video_id) {
                    $videos[] = $video;
                }
            }
        }

        return $videos;
    }

    public function mainPageStatistics() {// [user interface]
        $data = [];
        $data['users'] = count(User::all());
        $data['courses'] = count(Course::all());
        $data['authors'] = count(User::where('type_id', 2)->get());
        $data['agents'] = count(User::where('type_id', 4)->get());
        
        return $data;
    }
}
