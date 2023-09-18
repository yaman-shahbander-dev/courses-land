<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $author = User::all()->where('type_id',2);
        return [
            //
            'title' => $this->faker->sentence( $this->faker->numberBetween(5, 15)),
            'description' =>  $this->faker->sentence($this->faker->numberBetween(15, 20)),
            'picture' =>  'courseOfDummyData.jpg',
            'secret_key' =>  $this->faker->regexify('[a-z0-9]{20}'),
            'number_of_complete' =>  $this->faker->numberBetween(1, 10),
            'user_id' => $author->random()->id,
            'approved' => $this->faker->numberBetween(0, 1),
        ];
    }
}
