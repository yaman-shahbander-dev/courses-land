<?php

namespace App\Repositories;

use App\Interfaces\ArticlesRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\User;
use App\Models\Comment;
use DB;

class ArticleRepository implements ArticlesRepositoryInterface
{
    public function getThreeRandomArticles()
    { // user interface
        $articles = Article::where('approved', 1)->inRandomOrder()->limit(3)->get();

        $articles = $articles->map(function ($article) {
            $article->author_id = $article->author->username;
            $article->getFullArticlePictureURL($article);
            return $article;
        });

        $hide = ['updated_at', 'author'];

        return $articles->makeHidden($hide);
    }

    public function getArticleDetails(Request $request)
    { // user interface
        $articleTitle = $request->title;

        $article = Article::where('title', $articleTitle)->first();

        $article->authorName = $article->author->username;

        $article->getFullArticlePictureURL($article);

        $article->comments = DB::table('comments')->where('article_id', $article->id)->where('approved', 1)->get();

        $article->comments = $article->comments->map(function($comment) {
            $user = DB::table('users')->where('id', $comment->user_id)->get(['username', 'picture']);
            $comment->user_id = $user[0]->username;
            $comment->user_picture = asset('images/Avatar') . '/' . $user[0]->picture;
            return $comment;
        });

        $hide = ['updated_at', 'author'];

        return $article->makeHidden($hide);
    }

    public function getAllArticles()
    { // user interface
        $articles = Article::where('approved', 1)->get(['id', 'title', 'description', 'picture', 'created_at', 'author_id']);

        $articles = $articles->map(function ($article) {
            $article->picture = $article->getFullArticlePictureURL($article);
            $article->author_id = $article->author->username;
            return $article;
        });

        return $articles->makeHidden('author');
    }

    public function getArticlesDashboard(Request $request)
    {
        $userTypeID = $request->UserTypeID;

        $UserID = $request->UserID;

        $articles = [];

        if ($userTypeID == 3) {
            $articles = Article::all();
        } else if ($userTypeID == 2) {
            $articles = Article::where('author_id', $UserID)->get();
        }

        $articles = $articles->map(function ($article) {
            $article->user_id = $article->author->username;
            return $article;
        });

        return $articles->makeHidden('user');
    }

    public function ArticleExists(Request $request)
    {
        $articleID = $request->ArticleID;

        $operation = $request->operation;

        $article = Article::find($articleID);

        if (empty($article)) {
            return response()->json(['error' => 'article does not exist']);
        } elseif ($operation == 'delete') {
            $article->delete();
            if ($request->value == '') {
                if ($request->usertypeID == 3) {
                    $articles = Article::all();
                    $articles = $articles->map(function ($article) {
                        $article->user_id = $article->author->username;
                        return $article;
                    });
                } elseif ($request->usertypeID == 2) {
                    $articles = Article::where('author_id', $request->userID)->get();
                    $articles = $articles->map(function ($article) {
                        $article->user_id = $article->author->username;
                        return $article;
                    });
                }
            } else {
                $value = $request->value;
                $userID = $request->userID;
                $userTypeID = $request->usertypeID;

                if ($userTypeID == 3) {
                    $articles = Article::where('title', 'like', '%' . $value . '%')
                        ->orWhere('description', 'like', '%' . $value . '%')->get();
                } elseif ($userTypeID == 2) {
                    $articles = Article::where('title', 'like', '%' . $value . '%')->where('author_id', $userID)
                        ->orWhere('description', 'like', '%' . $value . '%')->where('author_id', $userID)
                        ->get();
                }

                $articles = $articles->map(function ($article) {
                    $article->user_id = $article->author->username;
                    return $article;
                });
            }

            return response()->json(['success' => 'offer deleted successfully', 'articles' => $articles]);
        } elseif ($operation == 'edit') {
            return response()->json(['success' => $article]);
        }
    }

    public function UpdateArticleInforamtion(Request $request)
    {
        $articleInfo = $request->all();

        $articleDB = Article::find($articleInfo['articleID']);

        if (empty($articleDB)) {
            return response()->json(['error' => 'Article does not exist']);
        } else {
            $articleDB->title = $articleInfo['title'];

            $articleDB->description = $articleInfo['description'];

            if (!empty($request->file('picture'))) {

                $filename = time() . '.' . $request->file('picture')->getClientOriginalExtension();

                $request->file('picture')->move(public_path('images/Articles'), $filename);

                $articleDB->picture = $filename;
            }

            $articleDB->save();

            return response()->json(['success' => 'Article updated successfully']);
        }
    }

    public function searchArticle(Request $request)
    {
        $value = $request->value;

        $userID = $request->UserID;

        $userTypeID = $request->UserTypeID;

        if ($userTypeID == 3) {
            $articles = Article::where('title', 'like', '%' . $value . '%')
                ->orWhere('description', 'like', '%' . $value . '%')->get();
        } else if ($userTypeID == 2) {
            $articles = Article::where('title', 'like', '%' . $value . '%')->where('author_id', $userID)
                ->orWhere('description', 'like', '%' . $value . '%')->where('author_id', $userID)
                ->get();
        }

        $articles = $articles->map(function ($article) {
            $article->user_id = $article->author->username;
            return $article;
        });

        return response()->json(['success' => $articles->makeHidden('author')]);
    }

    public function createArticle(Request $request)
    {
        $title       = $request->title;
        $picture     = $request->file('picture');

        $filename = time() . '.' . $picture->getClientOriginalExtension();
        $picture->move(public_path('images/Articles'), $filename);

        $article = new Article();
        $article->title         = $title;
        $article->description   = ' ';
        $article->picture       = $filename;
        $article->author_id     = $request->userID;
        $article->approved      = 0;

        $article->save();

        return response()->json(['success' => 'Article saved successfully']);
    }

    public function getSearchedArticlesData(Request $request) {// (user interface)
        $value = $request->value;

        $articles = Article::where('approved', 1)->where('title', 'like', '%' . $value . '%')->orWhere('description', 'like', '%' . $value . '%')->get(['id', 'title', 'description', 'picture', 'created_at', 'author_id']);

        $articles = $articles->map(function ($article) {
            $article->picture = $article->getFullArticlePictureURL($article);
            $article->author_id = $article->author->username;
            return $article;
        });

        return $articles->makeHidden('author');
    }

    public function getAuthorInformationArticle(Request $request) { // (user interface)
        $authorID = $request->authorID;
        $author = User::find($authorID)->only(['username', 'picture', 'description']);
        $author['picture'] = asset('images/Avatar') . '/' . $author['picture'];
        return $author;
    }

    public function getUserCommentArticle(Request $request) { // [Dashboard]
        $usertype = $request->userType;
        $userID = $request->userId;
        $comments = [];

        if ($usertype == 3) {
            $comments = Comment::get(['id', 'comment', 'user_id', 'article_id', 'approved']);
        } else {
            $comments = Comment::where('user_id', $userID)->get(['id', 'comment', 'user_id', 'article_id', 'approved']);
        }

        $comments = $comments->map(function ($comment) {
            $user = DB::table('users')->where('id', $comment->user_id)->get('username');
            $article = DB::table('articles')->where('id', $comment->article_id)->get('title');
            $comment->user_id = $user[0]->username;
            $comment->article_id = $article[0]->title;
            return $comment;
        });

        return $comments;
    }

    public function removeCommentArticle(Request $request) { //[Dashboard]
        $commentID = $request->commentID;

        $exists = DB::table('comments')
            ->where('id', $commentID)
            ->first();

        if (!empty($exists)) {
            Comment::where('id', $commentID)->delete();

            if ($request->value == '') {
                $comments = Comment::get(['id', 'comment', 'user_id', 'article_id', 'approved']);
                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $article = DB::table('articles')->where('id', $comment->article_id)->get('title');
                    $comment->user_id = $user[0]->username;
                    $comment->article_id = $article[0]->title;
                    return $comment;
                });
            } else {
                $value = $request->value;

                $comments = DB::table('comments')
                    ->where('comment', 'like', '%' . $value . '%')
                    ->get(['id', 'comment', 'user_id', 'article_id', 'approved']);

                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $article = DB::table('articles')->where('id', $comment->article_id)->get('title');
                    $comment->user_id = $user[0]->username;
                    $comment->article_id = $article[0]->title;
                    return $comment;
                });
            }

            return response()->json([
                'title' => 'Great!',
                'success' => 'Comment removed successfully!',
                'state' => 'success',
                'comments' => $comments
            ]);
        }

        return response()->json([
            'title' => 'Error!',
            'success' => 'Comment is not in found!',
            'state' => 'warning'
        ]);
    }

    public function searchCommentArticles(Request $request) {  //[Dashboard]
        $usertypeID = $request->usertypeID;
        $userID = $request->userID;
        $value = $request->value;

        if ($usertypeID == 3) {
            $comments = DB::table('comments')
                ->where('comment', 'like', '%' . $value . '%')
                ->get(['id', 'comment', 'user_id', 'article_id', 'approved']);
        } else {
            $comments = DB::table('comments')
                ->where('comment', 'like', '%' . $value . '%')
                ->where('user_id', $userID)
                ->get(['id', 'comment', 'user_id', 'article_id', 'approved']);
        }

        $comments = $comments->map(function ($comment) {
            $user = DB::table('users')->where('id', $comment->user_id)->get('username');
            $article = DB::table('articles')->where('id', $comment->article_id)->get('title');
            $comment->user_id = $user[0]->username;
            $comment->article_id = $article[0]->title;
            return $comment;
        });

        return $comments;
    }

    public function checkBuilderState(Request $request) { //[Dashboard]
        $state = Article::where('id', $request->id)->first('builder_state');
        return $state;
    }

    public function storeStateTags(Request $request) { //[Dashboard]
        if ($request->id != null) {
            return Article::where('id', $request->id)->update([
                'builder_state' => $request->state,
                'html_tags' => $request->tags
            ]);
        }
        return false;
    }

    public function uploadImage(Request $request) { //[Dashboard]
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension(); // you can also use file name
        $fileName = time() . '.' . $extension;
        $path = public_path() . '/builderImages';
        $uplaod = $image->move($path, $fileName);
        return 'builderImages/' . $fileName;
    }
}
