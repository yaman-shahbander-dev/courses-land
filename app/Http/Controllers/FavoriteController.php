<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\FavoritesRepositoryInterface;

class FavoriteController extends Controller
{
    private FavoritesRepositoryInterface $favoritesRepository;

    public function __construct(FavoritesRepositoryInterface $favoritesRepository) {
        $this->favoritesRepository = $favoritesRepository;
    }

    public function checkCourseFavoriteExistence(Request $request) {  // check if the course is already in favorite table for the current user
        return $this->favoritesRepository->checkCourseFavoriteExistence($request);
    }

    public function addToFavorite(Request $request) { // [user interface]
        return $this->favoritesRepository->addToFavorite($request);
    }

    public function removeFromFavorite(Request $request) { // [user interface]
        return $this->favoritesRepository->removeFromFavorite($request);
    }

    public function getUserFavoriteCourses(Request $request)
    { // [Dashboard]
        return $this->favoritesRepository->getUserFavoriteCourses($request);
    }

    public function checkvideoFavoriteExistence(Request $request) { // [user interface]
        return $this->favoritesRepository->checkvideoFavoriteExistence($request);
    }

    public function addVideoToFavorite(Request $request) { // [user interface]
        return $this->favoritesRepository->addVideoToFavorite($request);
    }

    public function removeVideoFromFavorite(Request $request) { // [user interface]
        return $this->favoritesRepository->removeVideoFromFavorite($request);
    }

    public function getUserFavoriteVideos(Request $request) { // [Dashboard]
        return $this->favoritesRepository->getUserFavoriteVideos($request);
    }

    public function searchFavoriteCourseOrVideo(Request $request) { // [Dashboard]
        return $this->favoritesRepository->searchFavoriteCourseOrVideo($request);
    }

    public function mainPageStatistics() {// [user interface]
        return $this->favoritesRepository->mainPageStatistics();
    }
}
