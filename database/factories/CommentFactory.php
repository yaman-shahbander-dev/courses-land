<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
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
        'article_id' => Article::all()->random()->id,
        'user_id' => User::all()->random()->id,
        'approved' => $this->faker->numberBetween(0, 1),
        ];
    }
}
