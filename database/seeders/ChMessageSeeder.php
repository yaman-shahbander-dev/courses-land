<?php

namespace Database\Seeders;

use App\Models\ChMessage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class ChMessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(Schema::hasTable('ch_messages')){
            ChMessage::factory(20)->create();
        }
    }
}
