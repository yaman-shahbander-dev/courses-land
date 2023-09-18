<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //User::factory(50)->create();
            if(Schema::hasTable('users')){
            $faker = Faker::create();
            //01
            DB::table('users')->insert(
                [
                    'id' => 1,
                    'username' => 'Khaled_Salem',
                    'email' => 'email01@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData01.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData01.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Khaled',
                ],
            );

            //02
            DB::table('users')->insert(
                [
                    'id' => 2,
                    'username' => 'Firas_Khudr',
                    'email' => 'email02@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData02.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData02.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Firas',
                ],
            );

            //03
            DB::table('users')->insert(
                [
                    'id' => 3,
                    'username' => 'Sara_Muhammed',
                    'email' => 'email03@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData03.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData03.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Sara',
                ],
            );

            //04
            DB::table('users')->insert(
                [
                    'id' => 4,
                    'username' => 'Kamal_Alhijazi',
                    'email' => 'email04@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData04.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData04.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Kamal',
                ],
            );

            //05
            DB::table('users')->insert(
                [
                    'id' => 5,
                    'username' => 'Lama_Kareem',
                    'email' => 'email05@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData05.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData05.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Lama',
                ],
            );

            //06
            DB::table('users')->insert(
                [
                    'id' => 6,
                    'username' => 'Hasan_Almasri',
                    'email' => 'email06@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData06.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 2, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Hasan Almasri. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData06.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Hasan',
                ],
            );

            //07
            DB::table('users')->insert(
                [
                    'id' => 7,
                    'username' => 'Ahmad_Jomaa',
                    'email' => 'email07@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData07.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 2, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Ahmad Jomaa. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData07.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Ahmad',
                ],
            );

            //08
            DB::table('users')->insert(
                [
                    'id' => 8,
                    'username' => 'Rana_Malik',
                    'email' => 'email08@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData08.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 2, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Rana Malik. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData08.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Rana',
                ],
            );

            //09
            DB::table('users')->insert(
                [
                    'id' => 9,
                    'username' => 'Jamal_Ali',
                    'email' => 'email09@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData09.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 2, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Jamal Ali. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData09.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Jamal',
                ],
            );

            //10
            DB::table('users')->insert(
                [
                    'id' => 10,
                    'username' => 'Sana_Radoan',
                    'email' => 'email10@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData10.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 2, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Sana Radoan. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData10.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Sana',
                ],
            );

            //11
            DB::table('users')->insert(
                [
                    'id' => 11,
                    'username' => 'Lana_Saleh',
                    'email' => 'email11@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData11.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 3, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData11.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Lana',
                ],
            );

            //12
            DB::table('users')->insert(
                [
                    'id' => 12,
                    'username' => 'Morad_Hajar',
                    'email' => 'email12@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData12.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 3, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData12.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Morad',
                ],
            );

            //13
            DB::table('users')->insert(
                [
                    'id' => 13,
                    'username' => 'Adel_Shahror',
                    'email' => 'email13@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData13.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 3, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData13.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Adel',
                ],
            );

            //14
            DB::table('users')->insert(
                [
                    'id' => 14,
                    'username' => 'Lina_Fattal',
                    'email' => 'email14@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData14.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 3, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData14.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Lina',
                ],
            );

            //15
            DB::table('users')->insert(
                [
                    'id' => 15,
                    'username' => 'Fatima_Wazan',
                    'email' => 'email15@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData15.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 3, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    //'description' => 'desss',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData15.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Fatima',
                ],
            );

            //16
            DB::table('users')->insert(
                [
                    'id' => 16,
                    'username' => 'Yaman_Najjar',
                    'email' => 'email16@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData16.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 4, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Yaman Najjar. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData16.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Yaman',
                ],
            );

            //17
            DB::table('users')->insert(
                [
                    'id' => 17,
                    'username' => 'Nour_Shahin',
                    'email' => 'email17@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData17.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 4, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Nour Shahin. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData17.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Nour',
                ],
            );

            //18
            DB::table('users')->insert(
                [
                    'id' => 18,
                    'username' => 'Mahmoud_Mira',
                    'email' => 'email18@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData18.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 4, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Mahmoud Mira. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData18.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Mahmoud',
                ],
            );

            //19
            DB::table('users')->insert(
                [
                    'id' => 19,
                    'username' => 'Yara_Safwan',
                    'email' => 'email19@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData19.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 4, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Yara Safwan. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData19.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Yara',
                ],
            );

            //20
            DB::table('users')->insert(
                [
                    'id' => 20,
                    'username' => 'Hadeel_Bitar',
                    'email' => 'email20@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData20.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 4, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Hadeel Bitar. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData20.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Hadeel',
                ],
            );

            //21
            DB::table('users')->insert(
                [
                    'id' => 21,
                    'username' => 'Ahmad_Salem',
                    'email' => 'email21@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData21.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Ahmad Salem. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData21.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Ahmad',
                ],
            );

            //22
            DB::table('users')->insert(
                [
                    'id' => 22,
                    'username' => 'Talia_Attar',
                    'email' => 'email22@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData22.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Talia Attar. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData22.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Talia',
                ],
            );

            //23
            DB::table('users')->insert(
                [
                    'id' => 23,
                    'username' => 'Kamel_Kouja',
                    'email' => 'email23@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData23.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Kamel Kouja. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData23.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Kamel',
                ],
            );

            //24
            DB::table('users')->insert(
                [
                    'id' => 24,
                    'username' => 'Noura_Sabry',
                    'email' => 'email24@gmail.com',
                    'secret_key' => $faker->regexify('[a-z0-9]{20}'),
                    'verified' => 1,
                    'picture' => 'userOfDummyData24.jpg',
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                    'type_id' => 1, // 1 'user' , 2 'author' , 3 'admin' , 4 'agent'
                    'description' => 'Hi! I\'m Noura Sabry. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    'active_status' => 1,
                    'avatar' => 'userOfDummyData24.jpg',
                    'dark_mode' => '0',
                    'messenger_color' => '#2180f3',
                    'name' => 'Noura',
                ],
            );

            DB::table('agents_requests')->insert(
                [
                    'user_id' => 21,
                    'description' => 'Hi! I\'m Ahmad Salem. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    //'description' => $faker->sentence( $faker->numberBetween(15, 20)),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                ],
            );

            DB::table('agents_requests')->insert(
                [
                    'user_id' => 22,
                    'description' => 'Hi! I\'m Talia Attar. A teacher and a full-stack web developer, I would like to be an author in your website. Thanks.',
                    //'description' => $faker->sentence( $faker->numberBetween(15, 20)),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                ],
            );

            DB::table('authors_requests')->insert(
                [
                    'user_id' => 23,
                    'description' => 'Hi! I\'m Kamel Kouja. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    //'description' => $faker->sentence( $faker->numberBetween(15, 20)),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                ],
            );

            DB::table('authors_requests')->insert(
                [
                    'user_id' => 24,
                    'description' => 'Hi! I\'m Noura Sabry. I work as jobs advertiser, I would like to be an agent in your website. Thanks.',
                    //'description' => $faker->sentence( $faker->numberBetween(15, 20)),
                    'created_at' => new \DateTime(),
                    'updated_at' => new \DateTime(),
                ],
            );

        }
    }
}
