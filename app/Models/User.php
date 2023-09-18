<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Course;
use App\Models\Job;
use App\Models\Article;
use App\Models\Type;
use App\Models\Report;
use App\Models\Comment;
use App\Models\CommentVideo;
use App\Models\Histroy;
use App\Models\AIChat;
use DateTimeInterface;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['username', 'name', 'email', 'password', 'secret_key', 'verified', 'picture', 'created_at', 'updated_at', 'type_id', 'description', 'fcm_token'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Prepare a date for array / JSON serialization.
     *
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function courses() {
        return $this->hasMany(Course::class);
    } // Getting courses of user

    public function jobs() {
        return $this->hasMany(Job::class);
    }

    public function articles() {
        return $this->hasMany(Article::class);
    }

    public function type() {
        return $this->belongsTo(Type::class);
    }

    public function report() {
        return $this->hasOne(Report::class);
    }

    public function comment() {
        return $this->hasMany(Comment::class);
    }

    public function commentVideo() {
        return $this->hasMany(CommentVideo::class);
    }

    public function history() {
        return $this->hasMany(Histroy::class);
    }

    public function AIChat() {
        return $this->hasMany(AIChat::class);
    }
}
