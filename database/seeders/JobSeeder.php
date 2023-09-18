<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //Job::factory(10)->create();
        // agents [17, 21]
        // agents [16, 20] new

        if(Schema::hasTable('jobs')){
            $faker = Faker::create();
            //00 not approved
            DB::table('jobs')->insert(
                [
                    "id" => 1,
                    'title' => 'Junior Web Developer',
                    'description' =>  'Company: Genius, We are looking for a web developer, Job Requirements: Two years experience, programming languages that you must know: HTML, CSS, PHP, Laravel.',
                    'picture' => 'jobOfDummyData00.jpg',
                    'user_id' => 16, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 0,
                ],
            );

            //01
            DB::table('jobs')->insert(
                [
                    "id" => 2,
                    'title' => 'Senior Web Developer',
                    'description' =>  'Company: Aragon, We are looking for a web developer, Job Requirements: Four years experience, programming languages that you must know: HTML, CSS, PHP, Laravel, MySQL.',
                    'picture' => 'jobOfDummyData01.jpg',
                    'user_id' => 16, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //02
            DB::table('jobs')->insert(
                [
                    "id" => 3,
                    'title' => 'Back-end Web Developer',
                    'description' =>  'Company: AIGooru, We are looking for a back-end developer, Job Requirements: One year experience, programming languages that you must know: HTML, CSS, MySQL, PHP, Laravel.',
                    'picture' => 'jobOfDummyData02.jpg',
                    'user_id' => 16, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //03
            DB::table('jobs')->insert(
                [
                    "id" => 4,
                    'title' => 'Front-end Web Developer',
                    'description' =>  'Company: Sitelex, We are looking for a front-end developer, Job Requirements: Two years experience, programming languages that you must know: HTML, CSS, JavaScript, React.',
                    'picture' => 'jobOfDummyData03.jpg',
                    'user_id' => 17, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //04
            DB::table('jobs')->insert(
                [
                    "id" => 5,
                    'title' => 'Flutter Developer',
                    'description' =>  'Company: Fudex, We are looking for a flutter developer, Job Requirements: Three years of professional experience, Good understanding of OOP and design patterns, Strong knowledge with dart programming language.',
                    'picture' => 'jobOfDummyData04.jpg',
                    'user_id' => 17, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //05
            DB::table('jobs')->insert(
                [
                    "id" => 6,
                    'title' => 'Junior Web Developer',
                    'description' =>  'Company: Starphy, We are looking for a junior web developer, Job Requirements: Two years experience, programming languages that you must know: HTML, CSS, PHP, JavaScript.',
                    'picture' => 'jobOfDummyData05.jpg',
                    'user_id' => 18, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //06
            DB::table('jobs')->insert(
                [
                    "id" => 7,
                    'title' => 'Full-stack Web Developer',
                    'description' =>  'Company: ActivePro, We are looking for a full-stack web developer, Job Requirements: Two years experience, programming languages that you must know: HTML, CSS, PHP, JavaScript, MySQL, Laravel, React.',
                    'picture' => 'jobOfDummyData06.jpg',
                    'user_id' => 18, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //07
            DB::table('jobs')->insert(
                [
                    "id" => 8,
                    'title' => 'Full-stack Web Developer',
                    'description' =>  'Company: Avatir, We are looking for a full-stack web developer, Job Requirements: Two years experience, programming languages that you must know: HTML, CSS, Laravel, React.',
                    'picture' => 'jobOfDummyData07.jpg',
                    'user_id' => 19, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //08
            DB::table('jobs')->insert(
                [
                    "id" => 9,
                    'title' => 'Android Developer',
                    'description' =>  'Company: PALM, We are looking for a Android web developer, Job Requirements: Three years experience, programming languages that you must know: Java, Dart.',
                    'picture' => 'jobOfDummyData08.jpg',
                    'user_id' => 19, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //09
            DB::table('jobs')->insert(
                [
                    "id" => 10,
                    'title' => 'Data Analyst',
                    'description' =>  'Company: Gmind, Job description: You will evaluate user needs versus system Requirements to create solutions that support overall business strategies, and you will develop systems for collecting/organizing/analyzing raw data.',
                    'picture' => 'jobOfDummyData09.jpg',
                    'user_id' => 20, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );

            //10
            DB::table('jobs')->insert(
                [
                    "id" => 11,
                    'title' => 'Machine Learning Team Leader',
                    'description' =>  'Company: UnifiSolution, Job description: one year experience in machine learning and neural networks, knowledge in implementing recognition algorithms.',
                    'picture' => 'jobOfDummyData10.jpg',
                    'user_id' => 20, //must be an agent
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'secret_key' =>  $faker->regexify('[a-z0-9]{20}'),
                    'approved' => 1,
                ],
            );
        }
    }
}
