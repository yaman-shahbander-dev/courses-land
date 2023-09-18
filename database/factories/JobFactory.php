<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $agent = User::all()->where('type_id',4);
        return [
            //
            'title' => $this->faker->sentence( $this->faker->numberBetween(5, 10)),
            'description' =>  $this->faker->sentence($this->faker->numberBetween(70, 150)),
            'picture' => 'jobOfDummyData.jpg',
            'user_id' => $agent->random()->id,
            'secret_key' =>  $this->faker->regexify('[a-z0-9]{20}'),
            'approved' => $this->faker->numberBetween(0, 1),
        ];
    }
}
