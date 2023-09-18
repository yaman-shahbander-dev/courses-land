<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Course;
use App\Models\CommentVideo;
use DateTimeInterface;
class Video extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'secret_key', 'locked', 'course_id'];

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

    public function course() {
        return $this->belongsTo(Course::class);
    }

    public function commentVideo() {
        return $this->hasMany(CommentVideo::class);
    }
}
