<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\TagRepositoryInterface;

class TagsController extends Controller
{
    private TagRepositoryInterface $TagRepository;

    public function __construct(TagRepositoryInterface $TagRepository) {
        $this->TagRepository = $TagRepository;
    }

    public function dashboardAllTags() {
        return $this->TagRepository->dashboardAllTags();
    }

    public function checkTagExistance(Request $request) {
        return $this->TagRepository->checkTagExistance($request);
    }

    public function UpdateTagInforamtion(Request $request) {
        return $this->TagRepository->UpdateTagInforamtion($request);
    }

    public function searchTag(Request $request) {
        return $this->TagRepository->searchTag($request);
    }

    public function createTag(Request $request) {
        return $this->TagRepository->createTag($request);
    }
}
