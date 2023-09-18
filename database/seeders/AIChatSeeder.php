<?php

namespace Database\Seeders;

use App\Models\AIChat;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class AIChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(Schema::hasTable('a_i_chats')){
            AIChat::factory(20)->create();
        }
    }
}
