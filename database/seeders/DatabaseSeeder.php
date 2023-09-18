<?php

namespace Database\Seeders;

use App\Models\AIChat;
use App\Models\Article;
use App\Models\Category;
use App\Models\ChFavorite;
use App\Models\ChMessage;
use App\Models\Comment;
use App\Models\CommentVideo;
use App\Models\Course;
use App\Models\Histroy;
use App\Models\Job;
use App\Models\Notification;
use App\Models\Report;
use App\Models\Tag;
use App\Models\Type;
use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        AIChat::truncate();
        Article::truncate();
        Category::truncate();
        ChFavorite::truncate();
        ChMessage::truncate();
        Comment::truncate();
        CommentVideo::truncate();
        Course::truncate();
        Histroy::truncate();
        Job::truncate();
        Notification::truncate();
        Report::truncate();
        Tag::truncate();
        Type::truncate();
        User::truncate();
        Video::truncate();
        DB::table('agents_requests')->truncate();
        DB::table('authors_requests')->truncate();
        DB::table('categories_courses')->truncate();
        DB::table('favorites_courses')->truncate();
        DB::table('favorites_videos')->truncate();
        Schema::enableForeignKeyConstraints();

        $this->call(TagSeeder::class);
        $this->call(TypeSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(CategoryCourseSeeder::class);
        $this->call(VideoSeeder::class);
        $this->call(ArticleSeeder::class);
        $this->call(JobSeeder::class);
        $this->call(ReportSeeder::class);
        $this->call(CommentSeeder::class);
        $this->call(CommentVideoSeeder::class);
        $this->call(HistroySeeder::class);
        $this->call(NotificationSeeder::class);
        //$this->call(AgentRequestSeeder::class);
        //$this->call(AuthorRequestSeeder::class);
        $this->call(AIChatSeeder::class);
        $this->call(ChFavoriteSeeder::class);
        $this->call(FavoriteCourseSeeder::class);
        $this->call(ChMessageSeeder::class);
        $this->call(FavoriteVideoSeeder::class);
    }
}
