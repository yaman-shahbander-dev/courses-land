<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Video;
use DB;

class VideosDetails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'videos:details {video*} {--by=title}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to show details of all videos';

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
        $value = implode(' ', $this->argument('video'));
        $by = $this->option('by');
        if ($by === 'title' || $by === 'description' || $by === 'desc') {
            if ($by === 'title') {
                $videos = Video::where('title', 'like', '%' . $value . '%')->get([
                    'id',
                    'title',
                    'description',
                    'course_id',
                    'secret_key',
                    'created_at',
                ]);
            } else {
                $videos = Video::where('description', 'like', '%' . $value . '%')->get([
                    'id',
                    'title',
                    'description',
                    'course_id',
                    'secret_key',
                    'created_at',
                ]);
            }

            $videos = $videos->map(function($video) {
                $course = DB::table('courses')->where('id', $video->course_id)->get('title');
                $video->description = substr($video->description, 0, 50);
                $video->course_id = $course[0]->title;
                return $video;
            });

            $this->table(
                [
                'id',
                'title',
                'description',
                'course',
                'secret_key',
                'created_at'
                ],
                $videos
            );
        }
        return 0;
    }
}
