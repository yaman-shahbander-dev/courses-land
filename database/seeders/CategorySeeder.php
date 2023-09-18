<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(Schema::hasTable('categories')){
            // $programmingLanguages = [
            //     'Laravel' , 'PHP' , 'HTML' , 'CSS' , 'React' , 'JavaScript' , 'MySQL' ,
            //      'C++' , 'C#' , 'Java' , 'Python' , 'Ajax' , 'SQL' , 'Bootstrap' , 'TypeScript' ,
            //     'Scala' , 'Shell' , 'PowerShell' , 'Perl' , 'Haskell' ,
            //     'Kotlin' , 'Visual' , 'Basic' , '.NET' , 'Delphi' ,
            //     'MATLAB' , 'Groovy' , 'Lua' , 'Axios' , 'Rust' , 'Ruby' , 'Swift'
            // ];
            $programmingLanguages = [
                'Laravel' , 'PHP' , 'HTML' , 'CSS' , 'React' , 'JavaScript' , 'MySQL' ,
            ];
            foreach ($programmingLanguages as $programmingLanguage) {
                Category::create(
                    [
                        'name' => $programmingLanguage,
                    ]
                );
            }
        }
    }
}
