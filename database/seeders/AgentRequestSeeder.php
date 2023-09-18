<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AgentRequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(Schema::hasTable('agents_requests')){
            $faker = Faker::create();
            $users = User::all();
            $mycount = User::count();
            $loop = 0; //to help to determine where to start to make user do request to be an agent
            $startPoint = $mycount/4; //start point of users that will make a request
            $numberOfRequests = 0;
            foreach ($users as $user) {
                $loop = $loop + 1;
                if(($loop > $startPoint)
                && (($numberOfRequests < ($mycount / 10)))
                && ($user->type_id == '1')){
                    DB::table('agents_requests')->insert(
                        [
                            'user_id' => $user->id,
                            'description' => $faker->sentence( $faker->numberBetween(15, 20)),
                            'created_at' => new \DateTime(),
                            'updated_at' => new \DateTime(),
                        ],
                    );
                    $numberOfRequests = $numberOfRequests + 1;
                }
            }
        }
    }
}
