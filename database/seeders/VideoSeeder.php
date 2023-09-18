<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //Video::factory(10)->create();
        if(Schema::hasTable('videos')){

            $faker = Faker::create();
            //00 not approved
            DB::table('videos')->insert(
                [
                    "id" => 1,
                    'title' => 'Laravel 8.0 Tutorial From Scratch - e00 - Installation',
                    'description' =>  'This video about installation laravel 8.0 .',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 2,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData00.mp4',
                    'approved' => '0',
                ],
            );

            //01
            DB::table('videos')->insert(
                [
                    "id" => 2,
                    'title' => 'Laravel 8.0 Tutorial From Scratch - e01 - Web Routes',
                    'description' =>  'This video about web routes in laravel 8.0, It contains everything you need to know about routes.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 2,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData01.mp4',
                    'approved' => '1',
                ],
            );

            //02
            DB::table('videos')->insert(
                [
                    "id" => 3,
                    'title' => 'Laravel 8.0 Tutorial From Scratch - e02 - Views',
                    'description' =>  'This video about views in laravel 8.0, It contains everything you need to know about views.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 2,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData02.mp4',
                    'approved' => '1',
                ],
            );

            //03
            DB::table('videos')->insert(
                [
                    "id" => 4,
                    'title' => 'Laravel 8.0 Tutorial From Scratch - e03 - Passing Data to Views',
                    'description' =>  'This video about passing data to views in laravel 8.0, Many types of data will be passed.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 2,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData03.mp4',
                    'approved' => '1',
                ],
            );

            //04
            DB::table('videos')->insert(
                [
                    "id" => 5,
                    'title' => 'Laravel 8.0 Advanced e01 Repository Pattern',
                    'description' =>  'This video about repository pattern in laravel 8.0.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 3,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData04.mp4',
                    'approved' => '1',
                ],
            );

            //05
            DB::table('videos')->insert(
                [
                    "id" => 6,
                    'title' => 'Laravel 8.0 Advanced e02 Soft Deletes',
                    'description' =>  'This video about soft deletes in laravel 8.0.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 3,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData05.mp4',
                    'approved' => '1',
                ],
            );

            //06
            DB::table('videos')->insert(
                [
                    "id" => 7,
                    'title' => 'Laravel 8.0 Advanced e03 Notifications',
                    'description' =>  'This video about notifications in laravel 8.0.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 3,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData06.mp4',
                    'approved' => '1',
                ],
            );

            //07
            DB::table('videos')->insert(
                [
                    "id" => 8,
                    'title' => 'Laravel 8.0 Building A Website - e01 - Installing New Empty Project',
                    'description' =>  'This video about installing new empty project in laravel 8.0.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 4,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData07.mp4',
                    'approved' => '1',
                ],
            );

            //08
            DB::table('videos')->insert(
                [
                    "id" => 9,
                    'title' => 'Laravel 8.0 Building A Website - e02 - Creating Database',
                    'description' =>  'This video about creating database in Laravel 8.0.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 4,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData08.mp4',
                    'approved' => '1',
                ],
            );

            //09
            DB::table('videos')->insert(
                [
                    "id" => 10,
                    'title' => 'Laravel 8.0 Building A Website - e03 - Making New Pages',
                    'description' =>  'This video about building a website in Laravel 8.0.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 4,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData09.mp4',
                    'approved' => '1',
                ],
            );

            //10
            DB::table('videos')->insert(
                [
                    "id" => 11,
                    'title' => 'PHP Basics e01 - Introduction to PHP Programming',
                    'description' =>  'This video is an introduction to PHP programming.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 5,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData10.mp4',
                    'approved' => '1',
                ],
            );

            //11
            DB::table('videos')->insert(
                [
                    "id" => 12,
                    'title' => 'PHP Basics e02 - Installing A Local Server For PHP',
                    'description' =>  'This video abaout installing a local server for PHP.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 5,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData11.mp4',
                    'approved' => '1',
                ],
            );

            //12
            DB::table('videos')->insert(
                [
                    "id" => 13,
                    'title' => 'PHP Basics e03 - Output In Browser Using PHP',
                    'description' =>  'This video about installing a local server for PHP.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 5,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData12.mp4',
                    'approved' => '1',
                ],
            );

            //13
            DB::table('videos')->insert(
                [
                    "id" => 14,
                    'title' => 'PHP Advanced e01 - How to Create a PHP Gallery',
                    'description' =>  'This video about how to create a PHP gallery.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 6,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData13.mp4',
                    'approved' => '1',
                ],
            );

            //14
            DB::table('videos')->insert(
                [
                    "id" => 15,
                    'title' => 'PHP Advanced e02 - Functions Using Regular Expressions',
                    'description' =>  'This video about functions using regular expressions.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 6,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData14.mp4',
                    'approved' => '1',
                ],
            );

            //15
            DB::table('videos')->insert(
                [
                    "id" => 16,
                    'title' => 'PHP Advanced e03 - Search Patterns Using Regular Expressions',
                    'description' =>  'This video about search patterns using regular expressions.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 6,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData15.mp4',
                    'approved' => '1',
                ],
            );

            //16
            DB::table('videos')->insert(
                [
                    "id" => 17,
                    'title' => 'PHP Implements And OOP e01 - Magic Methods GET-SET',
                    'description' =>  'This video about the magic methods GET-SET.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 7,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData16.mp4',
                    'approved' => '1',
                ],
            );

            //17
            DB::table('videos')->insert(
                [
                    "id" => 18,
                    'title' => 'PHP Implements And OOP e02 - Inheritance',
                    'description' =>  'This video about inheritance in PHP.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 7,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData17.mp4',
                    'approved' => '1',
                ],
            );

            //18
            DB::table('videos')->insert(
                [
                    "id" => 19,
                    'title' => 'PHP Implements And OOP e03 - Connecting to a Database',
                    'description' =>  'This video about connecting to a database.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 7,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData18.mp4',
                    'approved' => '1',
                ],
            );

            //19
            DB::table('videos')->insert(
                [
                    "id" => 20,
                    'title' => 'HTML Basics e01 - HTML Tags',
                    'description' =>  'This video about HTML tags.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 8,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData19.mp4',
                    'approved' => '1',
                ],
            );

            //20
            DB::table('videos')->insert(
                [
                    "id" => 21,
                    'title' => 'HTML Basics e02 - Attributes',
                    'description' =>  'This video about HTML attributes.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 8,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData20.mp4',
                    'approved' => '1',
                ],
            );

            //21
            DB::table('videos')->insert(
                [
                    "id" => 22,
                    'title' => 'HTML Basics e03 - Attributes part 2',
                    'description' =>  'This video about HTML attributes.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 8,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData21.mp4',
                    'approved' => '1',
                ],
            );

            //22
            DB::table('videos')->insert(
                [
                    "id" => 23,
                    'title' => 'HTML Advanced e01 - Reading Files',
                    'description' =>  'This video about reading files.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 9,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData22.mp4',
                    'approved' => '1',
                ],
            );

            //23
            DB::table('videos')->insert(
                [
                    "id" => 24,
                    'title' => 'HTML Advanced e02 - Selecting Files',
                    'description' =>  'This video about selecting files in HTML.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 9,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData23.mp4',
                    'approved' => '1',
                ],
            );

            //24
            DB::table('videos')->insert(
                [
                    "id" => 25,
                    'title' => 'HTML Advanced e03 - Tables',
                    'description' =>  'This video about HTML tables.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 9,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData24.mp4',
                    'approved' => '1',
                ],
            );

            //25
            DB::table('videos')->insert(
                [
                    "id" => 26,
                    'title' => 'HTML Implements e01 - Creating Simple page',
                    'description' =>  'This video about creating simple page in HTML.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 10,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData25.mp4',
                    'approved' => '1',
                ],
            );

            //26
            DB::table('videos')->insert(
                [
                    "id" => 27,
                    'title' => 'HTML Implements e02 - Creating Multiple Pages',
                    'description' =>  'This video about creating multiple pages in HTML.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 10,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData26.mp4',
                    'approved' => '1',
                ],
            );

            //27
            DB::table('videos')->insert(
                [
                    "id" => 28,
                    'title' => 'HTML Implements e03 - Actual Examples',
                    'description' =>  'This video about actual examples in HTML.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 10,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData27.mp4',
                    'approved' => '1',
                ],
            );

            //28
            DB::table('videos')->insert(
                [
                    "id" => 29,
                    'title' => 'CSS Basics e01 - Colors And Fonts',
                    'description' =>  'This video about CSS colors and fonts.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 11,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData28.mp4',
                    'approved' => '1',
                ],
            );

            //29
            DB::table('videos')->insert(
                [
                    "id" => 30,
                    'title' => 'CSS Basics e02 - Size And Borders',
                    'description' =>  'This video about CSS size and borders.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 11,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData29.mp4',
                    'approved' => '1',
                ],
            );

            //30
            DB::table('videos')->insert(
                [
                    "id" => 31,
                    'title' => 'CSS Basics e03 - Links',
                    'description' =>  'This video about links in CSS.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 11,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData30.mp4',
                    'approved' => '1',
                ],
            );

            //31
            DB::table('videos')->insert(
                [
                    "id" => 32,
                    'title' => 'CSS Advanced e01 - Center Text',
                    'description' =>  'This video about how to center a text in CSS.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 12,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData31.mp4',
                    'approved' => '1',
                ],
            );

            //32
            DB::table('videos')->insert(
                [
                    "id" => 33,
                    'title' => 'CSS Advanced e02 - Center Elements',
                    'description' =>  'This video about how to center elements in CSS.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 12,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData32.mp4',
                    'approved' => '1',
                ],
            );

            //33
            DB::table('videos')->insert(
                [
                    "id" => 34,
                    'title' => 'CSS Advanced e03 - Animation',
                    'description' =>  'This video about how to implement animation in CSS.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 12,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData33.mp4',
                    'approved' => '1',
                ],
            );

            //34
            DB::table('videos')->insert(
                [
                    "id" => 35,
                    'title' => 'CSS Implements e01 - Making A Simple Page',
                    'description' =>  'This video about making a simple page in CSS.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 13,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData34.mp4',
                    'approved' => '1',
                ],
            );

            //35
            DB::table('videos')->insert(
                [
                    "id" => 36,
                    'title' => 'CSS Implements e02 - Making A Navbar',
                    'description' =>  'This video about making a navbar in CSS.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 13,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData35.mp4',
                    'approved' => '1',
                ],
            );

            //36
            DB::table('videos')->insert(
                [
                    "id" => 37,
                    'title' => 'CSS Implements e03 - Examples',
                    'description' =>  'This video about some examples in CSS.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 13,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData36.mp4',
                    'approved' => '1',
                ],
            );

            //37
            DB::table('videos')->insert(
                [
                    "id" => 38,
                    'title' => 'React Basics e01 - Installation',
                    'description' =>  'This video about react installation.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 14,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData37.mp4',
                    'approved' => '1',
                ],
            );

            //38
            DB::table('videos')->insert(
                [
                    "id" => 39,
                    'title' => 'React Basics e02 - Components',
                    'description' =>  'This video about react components.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 14,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData38.mp4',
                    'approved' => '1',
                ],
            );

            //39
            DB::table('videos')->insert(
                [
                    "id" => 40,
                    'title' => 'React Basics e03 - Features',
                    'description' =>  'This video about react features.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 14,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData39.mp4',
                    'approved' => '1',
                ],
            );

            //40
            DB::table('videos')->insert(
                [
                    "id" => 41,
                    'title' => 'React Advanced e01 - Redux Application',
                    'description' =>  'This video about redux application.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 15,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData40.mp4',
                    'approved' => '1',
                ],
            );

            //41
            DB::table('videos')->insert(
                [
                    "id" => 42,
                    'title' => 'React Advanced e02 - Loading Images',
                    'description' =>  'This video about loading images in react.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 15,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData41.mp4',
                    'approved' => '1',
                ],
            );

            //42
            DB::table('videos')->insert(
                [
                    "id" => 43,
                    'title' => 'React Advanced e03 - Advanced Hooks',
                    'description' =>  'This video about advanced hooks in react.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 15,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData42.mp4',
                    'approved' => '1',
                ],
            );

            //43
            DB::table('videos')->insert(
                [
                    "id" => 44,
                    'title' => 'React Implements e01 - Building New Website',
                    'description' =>  'This video about building new website in react.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 16,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData43.mp4',
                    'approved' => '1',
                ],
            );

            //44
            DB::table('videos')->insert(
                [
                    "id" => 45,
                    'title' => 'React Implements e02 - Building New Website Part 2',
                    'description' =>  'This video about building new website in react.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 16,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData44.mp4',
                    'approved' => '1',
                ],
            );

            //45
            DB::table('videos')->insert(
                [
                    "id" => 46,
                    'title' => 'React Implements e03 - Installing Dependencies',
                    'description' =>  'This video about installing dependencies in react.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 16,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData45.mp4',
                    'approved' => '1',
                ],
            );

            //46
            DB::table('videos')->insert(
                [
                    "id" => 47,
                    'title' => 'JavaScript Basics e01 - Introduction What is JavaScript',
                    'description' =>  'This video about introduction for javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 17,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData46.mp4',
                    'approved' => '1',
                ],
            );

            //47
            DB::table('videos')->insert(
                [
                    "id" => 48,
                    'title' => 'JavaScript Basics e02 - Strings Methods',
                    'description' =>  'This video about strings methods in javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 17,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData47.mp4',
                    'approved' => '1',
                ],
            );

            //48
            DB::table('videos')->insert(
                [
                    "id" => 49,
                    'title' => 'JavaScript Basics e03 - Variables',
                    'description' =>  'This video about variables in javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 17,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData48.mp4',
                    'approved' => '1',
                ],
            );

            //49
            DB::table('videos')->insert(
                [
                    "id" => 50,
                    'title' => 'JavaScript Advanced e01 - Window Methods Stop Close Focus',
                    'description' =>  'This video about window methods: stop, close, focus in javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 18,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData49.mp4',
                    'approved' => '1',
                ],
            );

            //50
            DB::table('videos')->insert(
                [
                    "id" => 51,
                    'title' => 'JavaScript Advanced e02 - Location Methods Reload Replace Assign',
                    'description' =>  'This video about location methods: reload, replace, assign in javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 18,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData50.mp4',
                    'approved' => '1',
                ],
            );

            //51
            DB::table('videos')->insert(
                [
                    "id" => 52,
                    'title' => 'JavaScript Advanced e03 - Window Navigator Properties',
                    'description' =>  'This video about window navigator properties in javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 18,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData51.mp4',
                    'approved' => '1',
                ],
            );

            //52
            DB::table('videos')->insert(
                [
                    "id" => 53,
                    'title' => 'JavaScript Implements e01 - Make Redirect Function With Parameter',
                    'description' =>  'This video about making redirect function with parameter in javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 19,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData52.mp4',
                    'approved' => '1',
                ],
            );

            //53
            DB::table('videos')->insert(
                [
                    "id" => 54,
                    'title' => 'JavaScript Implements e02 - Generate Random Serial Number',
                    'description' =>  'This video about generating random serial number in javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 19,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData53.mp4',
                    'approved' => '1',
                ],
            );

            //54
            DB::table('videos')->insert(
                [
                    "id" => 55,
                    'title' => 'JavaScript Implements e03 - Scroll To Top Button',
                    'description' =>  'This video about scroll to top button in javascript.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 19,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData54.mp4',
                    'approved' => '1',
                ],
            );

            //55
            DB::table('videos')->insert(
                [
                    "id" => 56,
                    'title' => 'MySQL Basics e01 - Intro What is MySQL',
                    'description' =>  'This video about introduction to MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 20,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData55.mp4',
                    'approved' => '1',
                ],
            );

            //56
            DB::table('videos')->insert(
                [
                    "id" => 57,
                    'title' => 'MySQL Basics e02 - Constraints',
                    'description' =>  'This video about constraints in MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 20,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData56.mp4',
                    'approved' => '1',
                ],
            );

            //57
            DB::table('videos')->insert(
                [
                    "id" => 58,
                    'title' => 'MySQL Basics e03 - Comparison Functions',
                    'description' =>  'This video about comparison functions in MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 20,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData57.mp4',
                    'approved' => '1',
                ],
            );

            //58
            DB::table('videos')->insert(
                [
                    "id" => 59,
                    'title' => 'MySQL Advanced e01 - Logical Operators',
                    'description' =>  'This video about logical operators in MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 21,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData58.mp4',
                    'approved' => '1',
                ],
            );

            //59
            DB::table('videos')->insert(
                [
                    "id" => 60,
                    'title' => 'MySQL Advanced e02 - Control Flow Functions',
                    'description' =>  'This video about control flow functions in MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 21,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData59.mp4',
                    'approved' => '1',
                ],
            );

            //60
            DB::table('videos')->insert(
                [
                    "id" => 61,
                    'title' => 'MySQL Advanced e03 - String Functions',
                    'description' =>  'This video about string functions in MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 21,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData60.mp4',
                    'approved' => '1',
                ],
            );

            //61
            DB::table('videos')->insert(
                [
                    "id" => 62,
                    'title' => 'MySQL Implements e01 - Make Some Queries',
                    'description' =>  'This video about making some queries in MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 22,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData61.mp4',
                    'approved' => '1',
                ],
            );

            //62
            DB::table('videos')->insert(
                [
                    "id" => 63,
                    'title' => 'MySQL Implements e02 - Make Some Advanced Queries',
                    'description' =>  'This video about making some advanced queries in MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 22,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData62.mp4',
                    'approved' => '1',
                ],
            );

            //63
            DB::table('videos')->insert(
                [
                    "id" => 64,
                    'title' => 'MySQL Implements e03 - Examples',
                    'description' =>  'This video about examples in MySQL.',
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'course_id' => 22,
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'video' =>  'videoOfDummyData63.mp4',
                    'approved' => '1',
                ],
            );
        }
    }
}
