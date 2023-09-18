<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\VideosRepositoryInterface;

class VideosController extends Controller
{
    private VideosRepositoryInterface $videosRepository;

    public function __construct(VideosRepositoryInterface $videosRepository)
    {
        $this->videosRepository = $videosRepository;
    }

    public function getAllVideos(Request $request) {
        return $this->videosRepository->getAllVideos($request);
    }

    public function VideoExists(Request $request) {
        return $this->videosRepository->VideoExists($request);
    }

    public function UpdateVideoInforamtion(Request $request) {
        return $this->videosRepository->UpdateVideoInforamtion($request);
    }

    public function searchVideo(Request $request) {
        return $this->videosRepository->searchVideo($request);
    }

    public function uploadVideo(Request $request) {
        return $this->videosRepository->uploadVideo($request);
    }

    public function getCoursesSelect(Request $request) {
        return $this->videosRepository->getCoursesSelect($request);
    }

    public function makeVideoComment(Request $request) { // [user interface] add comment to a video
        return $this->videosRepository->makeVideoComment($request);
    }

    public function getUserCommentVideo(Request $request) { // Dashboard
        return $this->videosRepository->getUserCommentVideo($request);
    }

    public function removeUserCommentVideo(Request $request) { // Dashboard
        return $this->videosRepository->removeUserCommentVideo($request);
    }

    public function searchCommentVideos(Request $request) { //dashboard
        return $this->videosRepository->searchCommentVideos($request);
    }
}
