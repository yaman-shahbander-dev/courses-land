<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface TagRepositoryInterface {
    public function dashboardAllTags(); // dashboard
    public function checkTagExistance(Request $request); // dashboard
    public function UpdateTagInforamtion(Request $request); // dashboard
    public function searchTag(Request $request); // dashobard
    public function createTag(Request $request); // dashboard
}