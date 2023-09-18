<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentVideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
        'comment' => $this->faker->sentence($this->faker->numberBetween(5, 20)),
        'user_id' => User::all()->random()->id,
        'video_id' => Video::all()->random()->id,
        'approved' => $this->faker->numberBetween(0, 1),
        ];
    }
}
