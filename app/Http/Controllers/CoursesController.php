<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\CourseRepositoryInterface;


class CoursesController extends Controller
{
    private CourseRepositoryInterface $courseRepository;

    public function __construct(CourseRepositoryInterface $courseRepository) {
        $this->courseRepository = $courseRepository;
    }

    public function getCourses() { // for user interface
        return $this->courseRepository->getCourses();
    }

    public function getCourseDetails(Request $request) { // for user interface
        return $this->courseRepository->getCourseDetails($request);
    }

    public function getvideo(Request $request) { // for user interface
        return $this->courseRepository->getvideo($request);
    }

    public function getAllCourses() { // for user interface
        return $this->courseRepository->getAllCourses();
    }

    public function dashboardGetCourses(Request $request) { // for dashboard
        return $this->courseRepository->dashboardGetCourses($request);
    }

    public function checkCourseExistance(Request $request) { // for dashboard
        return $this->courseRepository->checkCourseExistance($request);
    }

    public function UpdateCourseInforamtion(Request $request) {
        return $this->courseRepository->UpdateCourseInforamtion($request);
    }

    public function searchCourse(Request $request) {
        return $this->courseRepository->searchCourse($request);
    }

    public function getAuthors() {
        return $this->courseRepository->getAuthors();
    }

    public function getCategories() {
        return $this->courseRepository->getCategories();
    }

    public function createCourse(Request $request) {
        return $this->courseRepository->createCourse($request);
    }

    public function getSearchedCourseData(Request $request) {// search course (user interface)
        return $this->courseRepository->getSearchedCourseData($request);
    }

    public function getWidgetCourses(Request $request) { // user interface (widget courses)
        return $this->courseRepository->getWidgetCourses($request);
    }

    public function approveData(Request $request) {
        return $this->courseRepository->approveData($request);
    }
}
