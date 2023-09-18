<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

class VideoFactory extends Factory
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
            'title' => $this->faker->sentence( $this->faker->numberBetween(5, 20)),
            'description' =>  $this->faker->sentence($this->faker->numberBetween(15, 20)),
            'secret_key' =>  $this->faker->regexify('[a-z0-9]{20}'),
            'course_id' => Course::all()->random()->id,
            'approved' => $this->faker->numberBetween(0, 1),
            'video' =>  'videoOfDummyData.mp4',
            // $table->string('locked')->default(1);
            // // $table->string('quiz_id'); this will be added later, a foreign key
        ];
    }
}
