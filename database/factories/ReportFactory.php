<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'problem_title' => $this->faker->sentence( $this->faker->numberBetween(5, 10)),
            'problem_description' =>  $this->faker->sentence($this->faker->numberBetween(15, 20)),
            'user_id' => User::all()->random()->id,
        ];
    }
}
