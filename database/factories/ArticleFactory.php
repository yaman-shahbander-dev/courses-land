<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
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
            //$table->string('title');
            //$table->string('description');
            //$table->string('picture');
            'title' => $this->faker->sentence( $this->faker->numberBetween(7, 15)),
            'description' =>  $this->faker->sentence($this->faker->numberBetween(70, 150)),
            'picture' => 'articleOfDummyData.jpg',
            //'approved' => $this->rand(0, 1),
            'approved' => $this->faker->numberBetween(0, 1),
            //'author_id' => 52,
            'author_id' => $author->random()->id,
            //'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            //'remember_token' => Str::random(10),
        ];
    }

    // public function configure()
    // {
    //     return $this->afterCreating(function (Article $article){
    //         $article->tag()->attach(Tag::inRandomOrder()->take(random_int(1,5))->pluck('id'));
    //     });
    // }

}
