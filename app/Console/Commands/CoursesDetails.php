<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Course;
use DB;

class CoursesDetails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'courses:details {course*} {--by=title}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to show the details of all courses';

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
        $value = implode(' ', $this->argument('course'));
        $by = $this->option('by');
        if ($by === 'title' || $by === 'description' || $by === 'desc') {
            if ($by === 'title') {
                $courses = Course::where('title', 'like', '%' . $value . '%')->get([
                    'id',
                    'title',
                    'description',
                    'user_id',
                    'secret_key',
                    'created_at',
                ]);
            } else {
                $courses = Course::where('description', 'like', '%' . $value . '%')->get([
                    'id',
                    'title',
                    'description',
                    'user_id',
                    'secret_key',
                    'created_at',
                ]);
            }

            $courses = $courses->map(function($course) {
                $user = DB::table('users')->where('id', $course->user_id)->get('username');
                $course->description = substr($course->description, 0, 50);
                $course->user_id = $user[0]->username;
                return $course;
            });

            $this->table(
                [
                'id',
                'title',
                'description',
                'user',
                'secret_key',
                'created_at'
                ],
                $courses
            );
        }

        return 0;
    }
}
