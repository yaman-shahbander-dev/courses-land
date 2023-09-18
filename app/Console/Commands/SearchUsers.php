<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Models\Type;

class SearchUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'search:users {user*}  {--by=username}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to search for a specific user';

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
        $value = implode(' ', $this->argument('user'));
        if ($by === 'username') {
            $users = User::where('username', 'like', '%' . $value . '%')->get(['id', 'username', 'email', 'type_id']);

            $users = $users->map(function($user) {
                $user->type_id = Type::find($user->type_id)->name;
                return $user;
            });

            $this->table(
                ['id', 'username', 'email', 'type']
            , $users);

        } elseif ($by === 'email') {
            $users = User::where('email', 'like', '%' . $value . '%')->get(['id', 'username', 'email', 'type_id']);
            $users = $users->map(function($user) {
                $user->type_id = Type::find($user->type_id)->name;
                return $user;
            });

            $this->table(
                ['id', 'username', 'email', 'type']
            , $users);
        }
        return 0;
    }
}
