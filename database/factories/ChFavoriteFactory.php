<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChFavoriteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $inc_id = 1;
            return [
                'id' => $inc_id++,
                'user_id' => User::all()->random()->id,
                'favorite_id' => User::all()->random()->id,
            ];
    }
}
