<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Category;
use App\Models\Video;
use DateTimeInterface;

class Course extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'picture', 'secret_key', 'number_of_complete'];

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

    public function user() {
        return $this->belongsTo(User::class);
    } 

    public function categories() {
        return $this->belongsToMany(Category::class, 'categories_courses');
    }

    public function getFullPictureURL($course) {
        return $course->picture = asset('/images/Courses') . '/' . $course->picture;
    }

    public function videos() {
        return $this->hasMany(Video::class);
    }
    
}
