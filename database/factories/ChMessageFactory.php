<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChMessageFactory extends Factory
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
            'type' => 'user',
            'from_id' => User::all()->random()->id,
            'to_id' => User::all()->random()->id,
            'body' => $this->faker->sentence( $this->faker->numberBetween(1, 30)),
            'seen' => $this->faker->numberBetween(0, 1),
        ];
    }
}
