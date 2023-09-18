<?php

namespace Database\Seeders;

use App\Models\Histroy;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class HistroySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        if(Schema::hasTable('histroys')){
            Histroy::factory(20)->create();
        }
    }
}
