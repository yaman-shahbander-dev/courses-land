<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Course::factory(10)->create();
        if(Schema::hasTable('courses')){
            $faker = Faker::create();
            //'Laravel' 4  , 'PHP'  3, 'HTML'  3, 'CSS' 3, 'React' 3 , 'JavaScript' 3 , 'MySQL' 3
            // authors [7,11]
            // authors [6,10] new

            //00 not approved
            DB::table('courses')->insert(
                [
                    "id" => 1,
                    'title' => 'Laravel 5.8 Tutorial From Scratch',
                    'description' =>  'Learn all the basics of laravel concepts and how to build a website with laravel framework and we will show you the easy way to start learning laravel version 5.8 .',
                    'picture' =>  'courseOfDummyData00.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  0,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'user_id' => 6, //must be an author
                    'approved' => '0',
                ],
            );

            //01
            DB::table('courses')->insert(
                [
                    "id" => 2,
                    'title' => 'Laravel 8.0 Tutorial From Scratch',
                    'description' =>  'Learn all the basics of laravel concepts and how to build a website with laravel framework and we will show you the easy way to start learning laravel version 8.0 .',
                    'picture' =>  'courseOfDummyData01.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'user_id' => 6, //must be an author
                    'approved' => '1',
                ],
            );

            //02
            DB::table('courses')->insert(
                [
                    "id" => 3,
                    'title' => 'Laravel 8.0 Advanced Concepts',
                    'description' =>  'Learn laravel advanced concepts and we will show you the tips and tricks to do advanced concepts in laravel version 8.0 .',
                    'picture' =>  'courseOfDummyData02.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 6, //must be an author
                    'approved' => '1',
                ],
            );

            //03
            DB::table('courses')->insert(
                [
                    "id" => 4,
                    'title' => 'Laravel 8.0 Building A Website From Scratch',
                    'description' =>  'In this course we will build a website using laravel and discuss everything that you may encounter in the future.',
                    'picture' =>  'courseOfDummyData03.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 6, //must be an author
                    'approved' => '1',
                ],
            );

            //04
            DB::table('courses')->insert(
                [
                    "id" => 5,
                    'title' => 'PHP Basics',
                    'description' =>  'Learn all the basics of PHP concepts and how to use it in a website and we will use the simple way to explain PHP.',
                    'picture' =>  'courseOfDummyData04.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 6, //must be an author
                    'approved' => '1',
                ],
            );

            //05
            DB::table('courses')->insert(
                [
                    "id" => 6,
                    'title' => 'PHP Advanced',
                    'description' =>  'Learn advanced concepts of PHP  and how to use it with other programming languages.',
                    'picture' =>  'courseOfDummyData05.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 6, //must be an author
                    'approved' => '1',
                ],
            );

            //06
            DB::table('courses')->insert(
                [
                    "id" => 7,
                    'title' => 'PHP OOP And Implements',
                    'description' =>  'Learn PHP OOP -Object-Oriented Programming- and some tips and tricks with examples.',
                    'picture' =>  'courseOfDummyData06.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 7, //must be an author
                    'approved' => '1',
                ],
            );

            //07
            DB::table('courses')->insert(
                [
                    "id" => 8,
                    'title' => 'HTML Basics',
                    'description' =>  'Learn how to build HTML page and you will get to know many of HTML tags.',
                    'picture' =>  'courseOfDummyData07.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 7, //must be an author
                    'approved' => '1',
                ],
            );

            //08
            DB::table('courses')->insert(
                [
                    "id" => 9,
                    'title' => 'HTML Advanced',
                    'description' =>  'Tips and tricks in using HTML, explained with examples.',
                    'picture' =>  'courseOfDummyData08.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 7, //must be an author
                    'approved' => '1',
                ],
            );

            //09
            DB::table('courses')->insert(
                [
                    "id" => 10,
                    'title' => 'HTML Implements',
                    'description' =>  'All you need to know about HTML in one course.',
                    'picture' =>  'courseOfDummyData09.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 7, //must be an author
                    'approved' => '1',
                ],
            );

            //10
            DB::table('courses')->insert(
                [
                    "id" => 11,
                    'title' => 'CSS Basics',
                    'description' =>  'Learn about CSS and how to use it in actual web pages.',
                    'picture' =>  'courseOfDummyData10.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 8, //must be an author
                    'approved' => '1',
                ],
            );

            //11
            DB::table('courses')->insert(
                [
                    "id" => 12,
                    'title' => 'CSS Advanced',
                    'description' =>  'Learn tips and tricks of CSS and some awesome features that CSS provide.',
                    'picture' =>  'courseOfDummyData11.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 8, //must be an author
                    'approved' => '1',
                ],
            );

            //12
            DB::table('courses')->insert(
                [
                    "id" => 13,
                    'title' => 'CSS Implements',
                    'description' =>  'Learn more about CSS with a lot of examples.',
                    'picture' =>  'courseOfDummyData12.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 8, //must be an author
                    'approved' => '1',
                ],
            );

            //13
            DB::table('courses')->insert(
                [
                    "id" => 14,
                    'title' => 'React Basics',
                    'description' =>  'Learn all the basics of react concepts and how to build a website with react framework and we will show you the easy way to start learning react.',
                    'picture' =>  'courseOfDummyData13.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 8, //must be an author
                    'approved' => '1',
                ],
            );

            //14
            DB::table('courses')->insert(
                [
                    "id" => 15,
                    'title' => 'React Advanced',
                    'description' =>  'Learn react advanced concepts and we will show you the tips and tricks to do advanced concepts in react.',
                    'picture' =>  'courseOfDummyData14.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 9, //must be an author
                    'approved' => '1',
                ],
            );

            //15
            DB::table('courses')->insert(
                [
                    "id" => 16,
                    'title' => 'React Implements',
                    'description' =>  'In this course we will build a website using react and discuss everything that you may encounter in the future.',
                    'picture' =>  'courseOfDummyData15.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 9, //must be an author
                    'approved' => '1',
                ],
            );

            //16
            DB::table('courses')->insert(
                [
                    "id" => 17,
                    'title' => 'JavaScript Basics',
                    'description' =>  'Learn all the basics of javascript concepts and how to use it in a website and we will use the simple way to explain javascript.',
                    'picture' =>  'courseOfDummyData16.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 9, //must be an author
                    'approved' => '1',
                ],
            );

            //17
            DB::table('courses')->insert(
                [
                    "id" => 18,
                    'title' => 'JavaScript Advanced',
                    'description' =>  'Learn advanced concepts of javascript  and how to use it with other programming languages.',
                    'picture' =>  'courseOfDummyData17.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 9, //must be an author
                    'approved' => '1',
                ],
            );

            //18
            DB::table('courses')->insert(
                [
                    "id" => 19,
                    'title' => 'JavaScript Implements',
                    'description' =>  'Learn some tips and tricks with examples in javascript, and learn how to do animation and interactive fields in javascript.',
                    'picture' =>  'courseOfDummyData18.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 10, //must be an author
                    'approved' => '1',
                ],
            );

            //19
            DB::table('courses')->insert(
                [
                    "id" => 20,
                    'title' => 'MySQL Basics',
                    'description' =>  'Learn how to build database in MySQL and learn many of MySQL statements explained in easy way.',
                    'picture' =>  'courseOfDummyData19.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 10, //must be an author
                    'approved' => '1',
                ],
            );

            //20
            DB::table('courses')->insert(
                [
                    "id" => 21,
                    'title' => 'MySQL Advanced',
                    'description' =>  'Learn how to do advanced MySQL queries with examples.',
                    'picture' =>  'courseOfDummyData20.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 10, //must be an author
                    'approved' => '1',
                ],
            );

            //21
            DB::table('courses')->insert(
                [
                    "id" => 22,
                    'title' => 'MySQL Implements',
                    'description' =>  'Learn how to to implement MySQL in actual application.',
                    'picture' =>  'courseOfDummyData21.jpg',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'number_of_complete' =>  $faker->numberBetween(1, 10),
                    'user_id' => 10, //must be an author
                    'approved' => '1',
                ],
            );
        }
    }
}
