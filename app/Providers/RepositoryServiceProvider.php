<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\UserRepositoryInterface;
use App\Interfaces\CourseRepositoryInterface;
use App\Interfaces\JobsOffersRepositoryInterface;
use App\Interfaces\ArticlesRepositoryInterface;
use App\Interfaces\CategoriesRepositoryInterface;
use App\Interfaces\TagRepositoryInterface;
use App\Interfaces\ReportsRepositoryInterface;
use App\Interfaces\VideosRepositoryInterface;
use App\Interfaces\NotificationsRepositoryInterface;
use App\Interfaces\CommentsRepositoryInterface;
use App\Interfaces\HistoriesRepositoryInterface;
use App\Interfaces\FavoritesRepositoryInterface;
use App\Interfaces\AIChatsRepositoryInterface;
use App\Repositories\UserRepository;
use App\Repositories\CourseRepository;
use App\Repositories\JobsOffersRepository;
use App\Repositories\ArticleRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\TagsRepository;
use App\Repositories\ReportsRepository;
use App\Repositories\VideosRepository;
use App\Repositories\NotificationsRepository;
use App\Repositories\CommentsRepository;
use App\Repositories\HistoriesRepository;
use App\Repositories\FavoritesRepository;
use App\Repositories\AIChatsRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(CourseRepositoryInterface::class, CourseRepository::class);
        $this->app->bind(JobsOffersRepositoryInterface::class, JobsOffersRepository::class);
        $this->app->bind(ArticlesRepositoryInterface::class, ArticleRepository::class);
        $this->app->bind(CategoriesRepositoryInterface::class, CategoryRepository::class);
        $this->app->bind(TagRepositoryInterface::class, TagsRepository::class);
        $this->app->bind(ReportsRepositoryInterface::class, ReportsRepository::class);
        $this->app->bind(VideosRepositoryInterface::class, VideosRepository::class);
        $this->app->bind(NotificationsRepositoryInterface::class, NotificationsRepository::class);
        $this->app->bind(CommentsRepositoryInterface::class, CommentsRepository::class);
        $this->app->bind(HistoriesRepositoryInterface::class, HistoriesRepository::class);
        $this->app->bind(FavoritesRepositoryInterface::class, FavoritesRepository::class);
        $this->app->bind(AIChatsRepositoryInterface::class, AIChatsRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
