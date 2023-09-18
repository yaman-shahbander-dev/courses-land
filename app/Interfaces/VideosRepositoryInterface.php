<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface VideosRepositoryInterface {
    public function getAllVideos(Request $request); // Dashboard returns all videos
    public function VideoExists(Request $request); // Dashboard delete the video or return its data
    public function UpdateVideoInforamtion(Request $request); // Dashboard update video info
    public function searchVideo(Request $request); // Dashboard
    public function uploadVideo(Request $request); // Dashboard, uploading a new video
    public function getCoursesSelect(Request $request); // Dashboard return all courses for select in upload video
    public function makeVideoComment(Request $request); // [user interface] add comment to a video
    public function getUserCommentVideo(Request $request); // Dashboard
    public function removeUserCommentVideo(Request $request); // Dashboard
    public function searchCommentVideos(Request $request); //dashboard
}
