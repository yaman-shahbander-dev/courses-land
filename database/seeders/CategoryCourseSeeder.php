<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Course;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CategoryCourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        // Populate categories
        $this->call(CategorySeeder::class);
        // Populate courses
        $this->call(CourseSeeder::class);

        // Get all the categories attaching up to 3 random categories to each course
        $categories = Category::all();

        // Populate the pivot table
        Course::all()->each(function ($course) use ($categories) {
            $course->categories()->attach(
                $categories->random(rand(1, 4))->pluck('id')->toArray()
            );
        });*/

        $this->call(CategorySeeder::class);
        $this->call(CourseSeeder::class);
        if(Schema::hasTable('categories_courses')){
            //00
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 1,
                    "category_id" => 1,
                ],
            );

            //01
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 2,
                    "category_id" => 1,
                ],
            );

            //02
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 3,
                    "category_id" => 1,
                ],
            );

            //03
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 4,
                    "category_id" => 1,
                ],
            );

            //04
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 5,
                    "category_id" => 2,
                ],
            );

            //05
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 6,
                    "category_id" => 1,
                ],
            );

            //06
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 6,
                    "category_id" => 2,
                ],
            );

            //07
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 7,
                    "category_id" => 1,
                ],
            );

            //08
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 7,
                    "category_id" => 2,
                ],
            );

            //09
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 8,
                    "category_id" => 3,
                ],
            );

            //10
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 9,
                    "category_id" => 3,
                ],
            );

            //11
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 10,
                    "category_id" => 3,
                ],
            );

            //12
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 11,
                    "category_id" => 4,
                ],
            );

            //13
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 12,
                    "category_id" => 4,
                ],
            );

            //14
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 13,
                    "category_id" => 4,
                ],
            );

            //15
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 14,
                    "category_id" => 5,
                ],
            );

            //16
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 15,
                    "category_id" => 5,
                ],
            );

            //17
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 16,
                    "category_id" => 5,
                ],
            );

            //18
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 17,
                    "category_id" => 6,
                ],
            );

            //19
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 18,
                    "category_id" => 6,
                ],
            );

            //20
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 19,
                    "category_id" => 6,
                ],
            );

            //21
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 20,
                    "category_id" => 7,
                ],
            );

            //22
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 21,
                    "category_id" => 7,
                ],
            );

            //23
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 22,
                    "category_id" => 1,
                ],
            );

            //24
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 22,
                    "category_id" => 2,
                ],
            );

            //25
            DB::table('categories_courses')->insert(
                [
                    "course_id" => 22,
                    "category_id" => 7,
                ],
            );
        }
    }
}
