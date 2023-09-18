<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface ArticlesRepositoryInterface {
    public function getThreeRandomArticles(); // user interface
    public function getArticleDetails(Request $request); // user interface
    public function getAllArticles(); // user interface
    public function getArticlesDashboard(Request $request); // getting articles [Dashboard]
    public function ArticleExists(Request $request); // deleting or returning an article
    public function UpdateArticleInforamtion(Request $request); // updating an article [Dashboard]
    public function searchArticle(Request $request); // Search article [Dashboard]
    public function createArticle(Request $request); // Creating a new article [Dashboard]
    public function getSearchedArticlesData(Request $request); // (user interface)
    public function getAuthorInformationArticle(Request $request); // (user interface)
    public function getUserCommentArticle(Request $request); //[Dashboard]
    public function removeCommentArticle(Request $request); //[Dashboard]
    public function searchCommentArticles(Request $request); //[Dashboard]
    public function checkBuilderState(Request $request); //[Dashboard]
    public function storeStateTags(Request $request); //[Dashboard]
    public function uploadImage(Request $request); //[Dashboard]
}
