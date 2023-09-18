<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use App\Models\Article;

class ArticleComments extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'article:comments {article?*} {--id=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to show all article\'s comments';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        if (implode(' ', $this->argument('article')) && $this->option('id'))
            return $this->error('Can\'t search with both article and article number!');
        else {
            if ($this->option('id')) {
                $comments = DB::table('comments')->where('article_id',  $this->option('id'))
                    ->get(['id', 'comment', 'user_id', 'article_id', 'created_at']);

                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $article = DB::table('articles')->where('id', $comment->article_id)->get('title');
                    $comment->article_id = substr($article[0]->title, 0, 25);
                    $comment->user_id = $user[0]->username;
                    return (array) $comment;
                });

                $this->table(
                    ['id', 'comment', 'user', 'article', 'created_at'],
                    $comments
                );

            } elseif (implode(' ', $this->argument('article'))) {
                $value = implode(' ', $this->argument('article'));

                $article = Article::where('title', 'like', '%' . $value . '%')
                ->orWhere('description', 'like', '%' . $value . '%')
                ->first();

                $comments = DB::table('comments')->where('article_id', $article->id)
                ->get(['id', 'comment', 'user_id', 'article_id', 'created_at']);

                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $article = DB::table('articles')->where('id', $comment->article_id)->get('title');
                    $comment->article_id = substr($article[0]->title, 0, 25);
                    $comment->user_id = $user[0]->username;
                    return (array) $comment;
                });

                $this->table(
                    ['id', 'comment', 'user', 'article', 'created_at'],
                    $comments
                );
            }
        }
        return 0;
    }
}
