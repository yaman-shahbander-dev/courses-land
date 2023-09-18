<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(Schema::hasTable('tags')){
            $tags = [
                'Programming' , 'Languages' , 'Learning' , 'Web' , 'Short' ,
                'Completed' , 'Professional' , 'Expert' , 'Basics' , 'Beginner' ,
                'Medium' , 'Educational' , 'App' , 'Examples' , 'Definition' ,
                'Software Engeneering' , 'Advanced' , 'Notes' , 'Long' , 'From Zero' ,
                'Answers' , 'Advices' , 'Still Running' , 'Guides' , 'Informatics' ,
                'Tips' , 'Tasks' , 'Artificial Intelligence' , 'Math' , 'Logic'
            ];
            foreach ($tags as $tag) {
                Tag::create(
                    [
                        'name' => $tag,
                    ]
                );
            }
        }
    }
}
