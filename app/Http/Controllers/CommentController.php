<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Interfaces\CommentsRepositoryInterface;

class CommentController extends Controller
{
    private CommentsRepositoryInterface $commentsRepository;

    public function __construct(CommentsRepositoryInterface $commentsRepository) {
        $this->commentsRepository = $commentsRepository;
    }

    public function makeArticleComment(Request $request) { // user interface
        return $this->commentsRepository->makeArticleComment($request);
    }
}
