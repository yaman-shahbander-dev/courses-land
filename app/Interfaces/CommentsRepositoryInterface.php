<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface CommentsRepositoryInterface {
    public function makeArticleComment(Request $request); // user interface
}
