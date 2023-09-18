<?php

namespace Database\Seeders;

use App\Models\CommentVideo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CommentsVideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(Schema::hasTable('comments_videos')){
            CommentVideo::factory(100)->create();
        }
    }
}
