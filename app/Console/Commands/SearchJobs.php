<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Job;
use App\Models\User;
use DB;

class SearchJobs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'search:jobs {job*} {--by=title}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to search for job offers';

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
        $by = $this->option('by');
        $value = implode(' ', $this->argument('job'));
        if ($by === 'title') {
            $jobs = Job::where('title', 'like', '%' . $value . '%')->get(['id', 'title', 'description', 'user_id']);
            $jobs = $jobs->map(function($job) {
                $user = DB::table('users')->where('id', $job->user_id)->get('username');
                $job->user_id = $user[0]->username;
                $job->description = substr($job->description, 0, 50);
                return $job;
            });
            $this->table(
                ['id', 'title', 'description', 'user'],
                $jobs
            );
        } elseif ($by === 'description') {
            $jobs = Job::where('description', 'like', '%' . $value . '%')->get(['id', 'title', 'description', 'user_id']);
            $jobs = $jobs->map(function($job) {
                $user = DB::table('users')->where('id', $job->user_id)->get('username');
                $job->user_id = $user[0]->username;
                $job->description = substr($job->description, 0, 50);
                return $job;
            });
            $this->table(
                ['id', 'title', 'description', 'user'],
                $jobs
            );
        }
        return 0;
    }
}
