<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(Schema::hasTable('types')){
            $userTypes = [
                'user' , 'author' , 'admin' , 'agent'
                ];
            foreach ($userTypes as $userType) {
                Type::create(
                    [
                        'name' => $userType,
                    ]
                );
            }
        }
    }
}
