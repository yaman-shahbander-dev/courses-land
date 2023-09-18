<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class AIChatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $choose = $this->faker->numberBetween(0, 1);
        $wordForClassName = 'self';
        if($choose == 1){$wordForClassName = 'other';}

        return [
            'text' => $this->faker->sentence( $this->faker->numberBetween(1, 30)),
            'class_name' => $wordForClassName,
            'is_bot' => $choose,
            'user_id' => User::all()->random()->id,
        ];
    }
}
