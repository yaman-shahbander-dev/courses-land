<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class NotificationFactory extends Factory
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
            'notification_title' => $this->faker->sentence( $this->faker->numberBetween(5, 10)),
            'notification_description' =>  $this->faker->sentence($this->faker->numberBetween(15, 20)),
        ];
    }
}
