<?php

namespace App\Repositories;

use App\Interfaces\CategoriesRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Category;
use DB;

class CategoryRepository implements CategoriesRepositoryInterface
{
    public function getFiveCategories() {
        $categories = Category::take(5)->get(['id', 'name']);

        $categories = $categories->map(function($category) {
            $category->count = DB::table('categories_courses')->where('category_id', $category->id)->count();
            return $category;
        });

        return $categories;
    }

    public function getCategories() {
        $categories = Category::all(['id', 'name', 'created_at']);

        $categories = $categories->transform(function($category) {
            $category->numberOfCourses = count($category->courses);
            return $category;
        });

        return $categories->makeHidden('courses');
    }

    public function checkCategoryExistance(Request $request) {

        $categoryID = $request->categoryID;

        $operation = $request->operation;

        $category = Category::find($categoryID);

        if (empty($category)) {
            return response()->json(['error' => 'Category does not exist']);
        } elseif ($operation == 'delete') {
            $category->delete();
            $categories = [];

            if ($request->value == '') {
                $categories = Category::all(['id', 'name', 'created_at']);
                $categories = $categories->transform(function($category) {
                    $category->numberOfCourses = count($category->courses);
                    return $category;
                });
            } else {
                $categories = Category::where('name', 'like', '%' . $request->value . '%')->get(['id', 'name', 'created_at']);
                $categories = $categories->transform(function($category) {
                    $category->numberOfCourses = count($category->courses);
                    return $category;
                });
            }

            return response()->json(['success' => 'Category deleted successfully', 'categories' => $categories]);
        } elseif ($operation == 'edit') {
            return response()->json(['success' => $category]);
        }

        return $category;
    }

    public function UpdateCategoryInforamtion(Request $request) {
        $categoryInfo = $request->all();

        $categoryDB = Category::find($categoryInfo['categoryID']);

        if (empty($categoryDB)) {
            return response()->json(['error' => 'Category does not exist']);
        } else {
            $categoryDB->name = $categoryInfo['name'];

            $categoryDB->save();

            return response()->json(['success' => 'Category updated successfully']);
        }
    }

    public function searchCategory(Request $request) {
        $value = $request->value;

        $categories = Category::where('name', 'like', '%' . $value . '%')->get();

        $categories = $categories->transform(function($category) {
            $category->numberOfCourses = count($category->courses);
            return $category;
        });

        return response()->json(['success' => $categories->makeHidden('courses')]);
    }

    public function createCategory(Request $request) {
        $name = $request->name;
        if (!empty(Category::where('name', $name)->first())) {
            return response()->json(['error' => 'Category already exists!']);
        } else {
            $category = new Category();
            $category->name = $name;
            $category->save();
            return response()->json(['success' => 'Category has been created successfully!']);
        }
    }

    public function getSearchedCategories(Request $request) { // user interface (search)
        $value = $request->value;

        $categories = Category::where('name', 'like', '%' . $value . '%')->get(['id', 'name']);

        $categories = $categories->map(function($category) {
            $category->count = DB::table('categories_courses')->where('category_id', $category->id)->count();
            return $category;
        });

        return $categories;
    }

    public function getCategoryCoursesUserInterface(Request $request) { // user interface
        $categoryID = $request->category;

        $category = Category::find($categoryID);

        $courses = $category->courses; // Get all courses inside this category

        $courses = $courses->makeHidden(['created_at', 'updated_at']); // make some columns hidden

        $courses = $courses->transform(function ($course) {
            $course->getFullPictureURL($course);
            $course->user_id = $course->user->username; // Getting authors' names
            $course->author_image = asset('images/Avatar') . '/' . $course->user->picture;
            $course->category = $course->categories->transform(function ($category) {
                return $category->name;
            });
            return $course->makeHidden(['user', 'categories', 'pivot']);
        });

        return $courses;
    }
}
