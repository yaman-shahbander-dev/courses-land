<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Video;
use DB;
class VideoComments extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'video:comments {video?*} {--id=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to show all video\'s comments';

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
        if (implode(' ', $this->argument('video')) && $this->option('id'))
            return $this->error('Can\'t search with both video and video number!');
        else {
            if ($this->option('id')) {
                $comments = DB::table('comments_videos')->where('video_id',  $this->option('id'))
                ->get(['id', 'comment', 'user_id', 'video_id', 'created_at']);

                $comments = $comments->map(function ($comment) {
                    return (array) $comment;
                });
            } elseif (implode(' ', $this->argument('video'))) {
                $value = implode(' ', $this->argument('video'));

                $video = Video::where('title', 'like', '%' . $value . '%')
                ->orWhere('description', 'like', '%' . $value . '%')
                ->first();

                $comments = DB::table('comments_videos')->where('video_id', $video->id)
                ->get(['id', 'comment', 'user_id', 'video_id', 'created_at']);

                $comments = $comments->map(function($comment) {
                    return (array) $comment;
                });
            }

            $this->table(
                ['id', 'comment', 'user_id', 'video_id', 'created_at'],
                $comments
            );
        }
        return 0;
    }
}
