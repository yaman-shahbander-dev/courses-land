<?php

namespace Database\Seeders;

use App\Models\ChFavorite;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class ChFavoriteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(Schema::hasTable('ch_favorites')){
            ChFavorite::factory(10)->create();
        }
    }
}
