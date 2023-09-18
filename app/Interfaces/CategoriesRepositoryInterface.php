<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface CategoriesRepositoryInterface {
    public function getFiveCategories();
    public function getCategories(); // getting all categories for dashboard
    public function checkCategoryExistance(Request $request); // dashboard
    public function UpdateCategoryInforamtion(Request $request); // dashboard
    public function searchCategory(Request $request); // dashboard
    public function createCategory(Request $request); // dashboard
    public function getSearchedCategories(Request $request); // user interface (search)
    public function getCategoryCoursesUserInterface(Request $request); // user interface
}
