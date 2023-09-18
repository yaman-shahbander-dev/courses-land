<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\ArticlesRepositoryInterface;

class ArticlesController extends Controller
{
    private ArticlesRepositoryInterface $ArticlesRepository;

    public function __construct(ArticlesRepositoryInterface $ArticlesRepository) {
        $this->ArticlesRepository = $ArticlesRepository;
    }

    public function getThreeRandomArticles() { // user interface
        return $this->ArticlesRepository->getThreeRandomArticles();
    }

    public function getArticleDetails(Request $request) { // user interface
        return $this->ArticlesRepository->getArticleDetails($request);
    }

    public function getAllArticles() { // user interface
        return $this->ArticlesRepository->getAllArticles();
    }

    public function getArticlesDashboard(Request $request) {
        return $this->ArticlesRepository->getArticlesDashboard($request);
    }

    public function ArticleExists(Request $request) {
        return $this->ArticlesRepository->ArticleExists($request);
    }

    public function UpdateArticleInforamtion(Request $request) {
        return $this->ArticlesRepository->UpdateArticleInforamtion($request);
    }

    public function searchArticle(Request $request) {
        return $this->ArticlesRepository->searchArticle($request);
    }

    public function createArticle(Request $request) {
        return $this->ArticlesRepository->createArticle($request);
    }

    public function getSearchedArticlesData(Request $request) {// (user interface)
        return $this->ArticlesRepository->getSearchedArticlesData($request);
    }

    public function getAuthorInformationArticle(Request $request) { // (user interface)
        return $this->ArticlesRepository->getAuthorInformationArticle($request);
    }

    public function getUserCommentArticle(Request $request) { // [Dashboard]
        return $this->ArticlesRepository->getUserCommentArticle($request);
    }
    public function removeCommentArticle(Request $request) { //[Dashboard]
        return $this->ArticlesRepository->removeCommentArticle($request);
    }
    public function searchCommentArticles(Request $request) {  //[Dashboard]
        return $this->ArticlesRepository->searchCommentArticles($request);
    }

    public function checkBuilderState(Request $request) { //[Dashboard]
        return $this->ArticlesRepository->checkBuilderState($request);
    }

    public function storeStateTags(Request $request) { //[Dashboard]
        return $this->ArticlesRepository->storeStateTags($request);
    }

    public function uploadImage(Request $request) { //[Dashboard]
        return $this->ArticlesRepository->uploadImage($request);
    }
}
