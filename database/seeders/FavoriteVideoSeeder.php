<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Video;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class FavoriteVideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            if(Schema::hasTable('favorites_videos')){
            $faker = Faker::create();
            $users = User::all();

            foreach ($users as $user) {
                $numOfFavCoursesForThisUser = $faker->numberBetween(0, 10);
                for ($i=0; $i < $numOfFavCoursesForThisUser ; $i++) {
                    DB::table('favorites_videos')->insert(
                        [
                            'user_id' => $user->id,
                            'video_id' => Video::all()->random()->id,
                            'created_at' => new \DateTime(),
                            'updated_at' => new \DateTime(),
                        ],
                    );
                }
            }
        }
    }
}
