<?php

namespace App\Repositories;

use App\Interfaces\CommentsRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Comment;
use DB;

class CommentsRepository implements CommentsRepositoryInterface
{
    public function makeArticleComment(Request $request) { // user interface
        $articleID  = $request->articleID;
        $userID     = $request->userID;
        $comment    = $request->comment;

        $Comment = new Comment();
        $Comment->comment = $comment;
        $Comment->user_id = $userID;
        $Comment->article_id = $articleID;
        $Comment->approved = 0;
        $Comment->save();

        return response()->json(['success' => 'comment saved successfully']);
    }
}
