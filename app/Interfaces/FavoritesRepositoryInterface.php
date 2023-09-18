<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface FavoritesRepositoryInterface {
    public function checkCourseFavoriteExistence(Request $request); // check if the course is already in favorite table for the current user [user interface]
    public function addToFavorite(Request $request); // [user interface]
    public function removeFromFavorite(Request $request); // [user interface]
    public function getUserFavoriteCourses(Request $request); // [Dashboard]
    public function searchFavoriteCourseOrVideo(Request $request); // [Dashboard]
    public function checkvideoFavoriteExistence(Request $request); // [user interface]
    public function addVideoToFavorite(Request $request); // [user interface]
    public function removeVideoFromFavorite(Request $request); // [user interface]
    public function getUserFavoriteVideos(Request $request); // [Dashboard]
    public function mainPageStatistics();// [user interface]
}
