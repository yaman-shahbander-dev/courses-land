<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Report;
use DB;

class listReports extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'list:reports';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to list all reports(complaints)';

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
        $reports = Report::all(['problem_title', 'problem_description', 'user_id']);

        $reports = $reports->transform(function($report) {
            $user = DB::table('users')->where('id', $report->user_id)->get();
            $report->user_id = $user[0]->username;
            return $report;
        });

        $this->table(
            ['Title', 'Description', 'user'],
            $reports
        );
        return 0;
    }
}
