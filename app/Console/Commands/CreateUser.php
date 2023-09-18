<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'add:user {--role=user}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used to add a new user. The role by default is user, but you can add a user as an admin, author, or agent.';

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
        $temp = '';
        $userData = [];
        $temp = $this->ask('What is your name?');
        if (strlen($temp) < 6 || strlen($temp) === 0) {
           return $this->error('Username should be 6 letters and above');
        } else {
            if(empty(User::where('username', $temp)->first())) {
                $userData['username'] = $temp;
            } else {
                return $this->error('Username already exists');
            }
        }

        $userData['name'] = $temp;

        $temp = $this->ask('What is your email?');
        if(!empty(User::where('email', $temp)->first())) {
            return $this->error('Email already exists');
        }

        $userData['email'] = $temp;

        $temp = bin2hex(random_bytes(10));
        while (!empty(User::where('secret_key', $temp)->first())) {
            $temp = bin2hex(random_bytes(10));
        }
        $userData['secret_key'] = $temp;
        $userData['verified'] = 0;
        $userData['picture'] = 'avatar.png';

        $temp = $this->secret('What is your password?');
        if(strlen($temp) < 8)
           return $this->error('Password should be at least 8 characters');

        $userData['password'] = Hash::make($temp);
        $userData['created_at'] = now();
        $userData['updated_at'] = now();
        $userData['description'] = null;
        $userData['fcm_token'] = null;
        $userData['avatar'] = 'avatar.png';

        if ($this->option('role') === 'user') {
            $userData['type_id'] = 1;
        } elseif($this->option('role') === 'author') {
            $userData['type_id'] = 2;
        } elseif($this->option('role') === 'admin') {
            $userData['type_id'] = 3;
        } elseif($this->option('role') === 'agent') {
            $userData['type_id'] = 4;
        }

        if(User::create($userData)) {
            $this->info('User added successfully!');
        }

        return 0;
    }
}
