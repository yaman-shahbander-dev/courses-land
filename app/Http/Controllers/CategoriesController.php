<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\CategoriesRepositoryInterface;

class CategoriesController extends Controller
{
    private CategoriesRepositoryInterface $categoryRepository;

    public function __construct(CategoriesRepositoryInterface $categoryRepository) {
        $this->categoryRepository = $categoryRepository;
    }

    public function getFiveCategories() {
        return $this->categoryRepository->getFiveCategories();
    }

    public function getCategories() {
        return $this->categoryRepository->getCategories();
    }

    public function checkCategoryExistance(Request $request) {
        return $this->categoryRepository->checkCategoryExistance($request);
    }

    public function UpdateCategoryInforamtion(Request $request) {
        return $this->categoryRepository->UpdateCategoryInforamtion($request);
    }

    public function searchCategory(Request $request) {
        return $this->categoryRepository->searchCategory($request);
    }

    public function createCategory(Request $request) {
        return $this->categoryRepository->createCategory($request);
    }

    public function getSearchedCategories(Request $request) { // user interface (search)
        return $this->categoryRepository->getSearchedCategories($request);
    }

    public function getCategoryCoursesUserInterface(Request $request) { // user interface
        return $this->categoryRepository->getCategoryCoursesUserInterface($request);
    }
}
