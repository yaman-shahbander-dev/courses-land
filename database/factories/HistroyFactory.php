<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\Course;
use App\Models\Job;
use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Eloquent\Factories\Factory;

class HistroyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // choose whether to fill course_id or video_id or article_id or job_id
        $pick_one= $this->faker->numberBetween(1, 4);

        if($pick_one == 1) return [
            'user_id' => User::all()->random()->id,
            'course_id' => Course::all()->random()->id,
        ];
        if($pick_one == 2) return [
            'user_id' => User::all()->random()->id,
            'video_id' => Video::all()->random()->id,
        ];
        if($pick_one == 3) return [
            'user_id' => User::all()->random()->id,
            'article_id' => Article::all()->random()->id,
        ];
        if($pick_one == 4) return [
            'user_id' => User::all()->random()->id,
            'job_id' => Job::all()->random()->id,
        ];
    }
}
