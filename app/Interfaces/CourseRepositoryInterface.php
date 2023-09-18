<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface CourseRepositoryInterface {
    public function getCourses(); //userinterface
    public function getCourseDetails(Request $request); //userinterface
    public function getvideo(Request $request); //userinterface
    public function getAllCourses(); // For courses page //userinterface
    public function dashboardGetCourses(Request $request); // For dashboard(all courses)
    public function checkCourseExistance(Request $request); // For dashboard (delete course or return its data)
    public function UpdateCourseInforamtion(Request $request); // For dashboard
    public function searchCourse(Request $request); // Dashboard search courses
    public function getAuthors(); // returns all authors
    public function getCategories(); // returns all categories
    public function createCourse(Request $request); // creating a new course
    public function getSearchedCourseData(Request $request); // search course (user interface)
    public function getWidgetCourses(Request $request); // user interface (widget courses)
    public function approveData(Request $request); //
}
