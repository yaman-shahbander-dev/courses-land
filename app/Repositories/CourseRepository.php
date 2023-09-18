<?php

namespace App\Repositories;

use App\Interfaces\CourseRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;
use App\Models\Video;
use App\Models\Category;
use App\Models\Job;
use App\Models\Article;
use App\Models\Comment;
use DB;

class CourseRepository implements CourseRepositoryInterface
{
    public function getCourses()
    {
        // needs to be altered. get a specific number of courses
        $courses = Course::where('approved', 1)->get(); // Get all courses

        $courses = $courses->makeHidden(['created_at', 'updated_at']); // make some columns hidden

        $response = [];

        $courses = $courses->transform(function ($course) {
            $course->getFullPictureURL($course);
            $course->user_id = $course->user->username; // Getting authors' names
            $course->author_image = asset('images/Avatar') . '/' . $course->user->picture;
            $course->category = $course->categories->transform(function ($category) {
                return $category->name;
            });
            return $course->makeHidden(['user', 'categories']);
        }); // change the

        return $courses;
    }

    public function getCourseDetails(Request $request)
    {
        $secretKey = $request->secret; // Course secret key
        $hide = ['secret_key', 'number_of_complete', 'created_at', 'updated_at', 'user', 'user_id']; // Hide columns
        $course = Course::where('secret_key', $secretKey)->first(); // Getting the course
        $course->getFullPictureURL($course); // Getting the full url
        $course->authorName = $course->user->username;
        $course->authorPicture = getAvatarFullURL($course->user->picture);
        $course->authorDescription = $course->user->description;

        // Returning videos of the demanded course
        $videos = Video::where('approved', 1)->where('course_id', $course->id)->get(['id', 'title', 'description', 'secret_key', 'locked', 'video']);

        $course['videos'] = $videos;

        $course->makeHidden($hide); // Hidding some columns

        // needs to add reviews of the course
        return $course;
    }

    public function getvideo(Request $request)
    {
        $video = Video::where('secret_key', $request->video)->first(['id', 'title', 'description', 'video', 'secret_key']);

        $video['video'] = asset('images' . '/' . 'Videos' . '/' . $video->video);

        $video['comments'] = DB::table('comments_videos')
        ->where('video_id', $video->id)
        ->where('approved', 1)
        ->get(['id', 'comment', 'user_id']);

        for ($i = 0; $i < count($video['comments']); $i++) {
            $user = User::find($video['comments'][$i]->user_id);
            $video['comments'][$i]->user_id = $user->username;
            $video['comments'][$i]->user_picture = asset('images/Avatar') . '/' . $user->picture;
        }

        return $video;
    }

    public function getAllCourses()
    {
        // Getting all courses for courses page
        // $courses = Course::paginate(2);
        $courses = Course::where('approved', 1)->get(['id', 'title', 'description', 'picture', 'secret_key', 'user_id']);
        $courses = $courses->map(function ($course) {
            $course->picture = $course->getFullPictureURL($course);
            $course->user_id = $course->user->username;
            $course->author_image = asset('images/Avatar' . '/' . $course->user->picture);
            $course->category = $course->categories->transform(function ($category) {
                return $category->name;
            });
            return $course;
        });


        return $courses->makeHidden(['user', 'categories', 'number_of_complete', 'updated_at']);
    }

    public function dashboardGetCourses(Request $request)
    {
        if ($request->usertypeID == 3) {
            $courses = Course::all(['id', 'title', 'description', 'user_id', 'created_at', 'approved']);
        } elseif ($request->usertypeID == 2) {
            $courses = Course::where('user_id', $request->userID)->get(['id', 'title', 'description', 'user_id', 'created_at', 'approved']);
        }

        $courses = $courses->map(function ($course) {
            $course->user_id = $course->user->username;
            $course->category = $course->categories->count() > 0 ? $course->categories[0]->name : 'No category';
            return $course;
        });

        $courses->makeHidden(['user', 'categories']);

        return response()->json(['courses' => $courses]);
    }

    public function checkCourseExistance(Request $request)
    {
        $courseID = $request->courseID;

        $operation = $request->operation;

        $course = Course::find($courseID);

        $courses = [];

        if (empty($course)) {
            return response()->json(['error' => 'Course does not exist']);
        } elseif ($operation == 'delete') {
            $course->delete();

            if ($request->value == '') {
                if ($request->usertypeID == 3) {
                    $courses = Course::all(['id', 'title', 'description', 'user_id', 'created_at', 'approved']);
                } elseif ($request->usertypeID == 2) {
                    $courses = Course::where('user_id', $request->userID)->get(['id', 'title', 'description', 'user_id', 'created_at', 'approved']);
                }

                $courses = $courses->map(function ($course) {
                    $course->user_id = $course->user->username;
                    $course->category = $course->categories->count() > 0 ? $course->categories[0]->name : 'No category';
                    return $course;
                });

                $courses->makeHidden(['user', 'categories']);
            } else {
                $value = $request->value;

                if ($request->usertypeID == 3) {
                    $courses = Course::where('title', 'like', '%' . $value . '%')
                        ->orWhere('description', 'like', '%' . $value . '%')->get();
                } elseif ($request->usertypeID == 2) {
                    $courses = Course::where('title', 'like', '%' . $value . '%')
                        ->orWhere('description', 'like', '%' . $value . '%')
                        ->where('user_id', $request->userID)
                        ->get();
                }

                $courses = $courses->map(function ($course) {
                    $course->user_id = $course->user->username;
                    $course->category = $course->categories->count() > 0 ? $course->categories[0]->name : 'No category';
                    return $course;
                });
            }

            return response()->json(['success' => 'Course deleted successfully', 'courses' => $courses]);
        } elseif ($operation == 'edit') {
            $course->user_id = $course->user;

            $course->makeHidden(['picture', 'created_at', 'updated_at', 'number_of_complete', 'secret_key', 'type', 'user', 'categories']);

            $course->category = $course->categories->count() > 0 ? $course->categories[0] : 'No category';

            $course->authors = User::where('type_id', 2)->get(['id', 'username']);

            $course->list_categories = Category::all(['id', 'name']);

            return response()->json(['success' => $course]);
        }
    }

    public function UpdateCourseInforamtion(Request $request)
    {
        $courseInfo = $request->all();

        $courseDB = Course::find($courseInfo['courseID']);

        if (empty($courseDB)) {
            return response()->json(['error' => 'Course does not exist']);
        } else {
            $courseDB->title = $courseInfo['title'];

            $courseDB->description = $courseInfo['description'];

            $courseDB->user_id = $courseInfo['author'];

            DB::table('categories_courses')->where('course_id', $courseDB->id)->take(1)
                ->update(['category_id' => $courseInfo['category']]);

            $courseDB->save();

            return response()->json(['success' => 'Course updated successfully']);
        }
    }

    public function searchCourse(Request $request)
    {
        $value = $request->value;
        $courses = [];

        if ($request->usertypeID == 3) {
            $courses = Course::where('title', 'like', '%' . $value . '%')
                ->orWhere('description', 'like', '%' . $value . '%')->get();
        } elseif ($request->usertypeID == 2) {
            $courses = Course::where('user_id', $request->userID)
                ->where('title', 'like', '%' . $value . '%')
                ->where('description', 'like', '%' . $value . '%')
                ->get();
        }


        $courses = $courses->map(function ($course) {
            $course->user_id = $course->user->username;
            $course->category = $course->categories->count() > 0 ? $course->categories[0]->name : 'No category';
            return $course;
        });

        return response()->json(['success' => $courses]);
    }

    public function getAuthors()
    {
        $authors = User::where('type_id', 2)->get(['id', 'username']);

        return $authors;
    }

    public function getCategories()
    {
        $categories = Category::all(['id', 'name']);

        return $categories;
    }

    public function createCourse(Request $request)
    {
        $title       = $request->title;
        $description = $request->description;
        $image       = $request->file('image');
        $author      = $request->author;
        $category    = $request->category;

        $filename = time() . '.' . $image->getClientOriginalExtension();

        $image->move(public_path('images/Courses'), $filename);

        $course = new Course();
        $course->title       = $title;
        $course->description = $description;
        $course->user_id     = $author;
        $course->picture     = $filename;
        $course->approved    = 0;
        $secret_key = bin2hex(random_bytes(10));
        while (!empty(Course::where('secret_key', $secret_key)->first())) {
            $secret_key = bin2hex(random_bytes(10));
        }
        $course->secret_key  = $secret_key;
        $course->number_of_complete = 0;
        $course->save();

        DB::table('categories_courses')->insert([
            'course_id'   => $course->id,
            'category_id' => $category,
            'created_at'  => now(),
            'updated_at'  => now()
        ]);

        return response()->json(['success' => 'Course has been created successfully!']);
    }

    public function getSearchedCourseData(Request $request) {// search course (user interface)
        $value = $request->value;

        $courses = Course::where('approved', 1)->where('title', 'like', '%' . $value . '%')->orWhere('description', 'like', '%' . $value . '%')->get(['id', 'title', 'description', 'picture', 'secret_key', 'user_id']);

        $videos = Video::where('title', 'like', '%' . $value . '%')->orWhere('description', 'like', '%' . $value . '%')->get('course_id');

        $videos = $videos->unique(); // Removes duplicates from videos

        foreach($videos as $video)
            $courses[] = Course::find($video->course_id);

        $courses = $courses->unique(); // Removes duplicates from courses

        $courses = $courses->map(function ($course) {
            $course->picture = $course->getFullPictureURL($course);
            $course->user_id = $course->user->username;
            $course->author_image = asset('images/Avatar' . '/' . $course->user->picture);
            $course->category = $course->categories->transform(function ($category) {
                return $category->name;
            });
            return $course;
        });

        return $courses->makeHidden(['user', 'categories', 'number_of_complete', 'updated_at']);
    }

    public function getWidgetCourses(Request $request) { // user interface (widget courses)
        $secret = $request->secret;

        $course = Course::where('secret_key', $secret)->first();
        $courseCategory = $course->categories[0]->id;
        $courses = Category::find($courseCategory)->courses->except($course->id);

        $courses = $courses->map(function($course) {
            $course->user_id = $course->user->username;
            $course->picture = asset('images/Courses') . '/' . $course->picture;
            return $course;
        });

        return $courses->makeHidden(['pivot', 'user', 'number_of_complete', 'created_at', 'updated_at', 'title']);
    }

    public function approveData(Request $request) {
        $approveID = $request->approveID;
        $approveFor = $request->approveFor;

        if ($approveFor === 'course') {
            Course::where('id', $approveID)->update(['approved' => 1]);
            if ($request->value == '') {
                $courses = Course::all(['id', 'title', 'description', 'user_id', 'created_at', 'approved']);
                $courses = $courses->map(function ($course) {
                    $course->user_id = $course->user->username;
                    $course->category = $course->categories->count() > 0 ? $course->categories[0]->name : 'No category';
                    return $course;
                });
            } else {
                $value = $request->value;

                $courses = Course::where('title', 'like', '%' . $value . '%')
                    ->orWhere('description', 'like', '%' . $value . '%')->get();

                $courses = $courses->map(function ($course) {
                    $course->user_id = $course->user->username;
                    $course->category = $course->categories->count() > 0 ? $course->categories[0]->name : 'No category';
                    return $course;
                });
            }

            return response()->json(['success' => 'approved successfully', 'courses' => $courses]);
        } elseif ($approveFor === 'video') {
            Video::where('id', $approveID)->update(['approved' => 1]);

            if ($request->value == '') {
                $videos = Video::all(['id', 'title', 'description', 'course_id', 'video', 'approved']);
            } else {
                $value = $request->value;
                $videos = Video::where('title', 'like', '%' . $value . '%')
                    ->orwhere('description', 'like', '%' . $value . '%')
                    ->get(['id', 'title', 'description', 'course_id', 'video', 'approved']);
            }
            return response()->json(['success' => 'approved successfully', 'videos' => $videos]);
        } elseif  ($approveFor === 'offer') {
            Job::where('id', $approveID)->update(['approved' => 1]);

            if ($request->value == '') {
                $jobsOffers = Job::all();
                $jobsOffers = collect($jobsOffers)->map(function ($jobsOffer) {
                    $jobsOffer->user_id = $jobsOffer->user->username;
                    return $jobsOffer;
                });
            } else {
                $value = $request->value;
                $jobsOffers = Job::where('title', 'like', '%' . $value . '%')
                    ->orWhere('description', 'like', '%' . $value . '%')
                    ->get();

                $jobsOffers = $jobsOffers->map(function ($offer) {
                    $offer->user_id = $offer->user->username;
                    return $offer;
                });
            }

            return response()->json(['success' => 'approved successfully', 'jobs' => $jobsOffers]);
        } elseif  ($approveFor === 'article') {
            Article::where('id', $approveID)->update(['approved' => 1]);
            if ($request->value == '') {
                $articles = Article::all();
                $articles = $articles->map(function ($article) {
                    $article->user_id = $article->author->username;
                    return $article;
                });
            } else {
                $value = $request->value;
                $articles = Article::where('title', 'like', '%' . $value . '%')
                    ->orWhere('description', 'like', '%' . $value . '%')->get();
                $articles = $articles->map(function ($article) {
                    $article->user_id = $article->author->username;
                    return $article;
                });
            }
            return response()->json(['success' => 'approved successfully', 'articles' => $articles]);
        } elseif  ($approveFor === 'videoComment') {
            DB::table('comments_videos')->where('id', $approveID)->update(['approved' => 1]);

            if ($request->value == '') {
                $comments = DB::table('comments_videos')->get(['id', 'comment', 'user_id', 'video_id', 'approved']);
                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $video = DB::table('videos')->where('id', $comment->video_id)->get('title');
                    $comment->user_id = $user[0]->username;
                    $comment->video_id = $video[0]->title;
                    return $comment;
                });
            } else {
                $value = $request->value;
                $comments = DB::table('comments_videos')
                    ->where('comment', 'like', '%' . $value . '%')
                    ->get(['id', 'comment', 'user_id', 'video_id', 'approved']);

                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $video = DB::table('videos')->where('id', $comment->video_id)->get('title');
                    $comment->user_id = $user[0]->username;
                    $comment->video_id = $video[0]->title;
                    return $comment;
                });
            }

            return response()->json(['success' => 'approved successfully', 'comments' => $comments]);
        } elseif  ($approveFor === 'articleComment') {
            // here
            Comment::where('id', $approveID)->update(['approved' => 1]);

            if ($request->value == '') {
                $comments = Comment::get(['id', 'comment', 'user_id', 'article_id', 'approved']);
                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $article = DB::table('articles')->where('id', $comment->article_id)->get('title');
                    $comment->user_id = $user[0]->username;
                    $comment->article_id = $article[0]->title;
                    return $comment;
                });
            } else {
                $value = $request->value;
                $comments = DB::table('comments')
                    ->where('comment', 'like', '%' . $value . '%')
                    ->get(['id', 'comment', 'user_id', 'article_id', 'approved']);

                $comments = $comments->map(function ($comment) {
                    $user = DB::table('users')->where('id', $comment->user_id)->get('username');
                    $article = DB::table('articles')->where('id', $comment->article_id)->get('title');
                    $comment->user_id = $user[0]->username;
                    $comment->article_id = $article[0]->title;
                    return $comment;
                });
            }

            return response()->json(['success' => 'approved successfully', 'comments' => $comments]);
        }

        return 0;
    }
}
