<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use DateTimeInterface;

class Job extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'picture'];

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

    public function getFullOfferPictureURL($offer) {
        return $offer->picture = asset('/images/Jobs') . '/' . $offer->picture;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
