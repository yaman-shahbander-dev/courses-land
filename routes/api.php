<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\JobsOffersController;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\VideosController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\HistroyController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\AIChatController;

// Authentication Start
// User interface
// Registering a new user to the DB after validation
Route::post('/Register', [AuthenticationController::class, 'Register']);
// Logging in the user if credentials are met
Route::post('/Login', [AuthenticationController::class, 'Login']);
// Checking if username doesn't exist in DB
Route::post('/UniqueUsername', [AuthenticationController::class, 'CheckUsername']);
// Checking if Email doesn't exist in DB
Route::post('/UniqueEmail', [AuthenticationController::class, 'UniqueEmail']);


// Dashboard
// Reusable apis Start
// Getting all authors
Route::get('/getAuthors', [CoursesController::class, 'getAuthors']);
// Getting all categories
Route::get('/getCategories', [CoursesController::class, 'getCategories']);
// Getting all courses
Route::get('/getCoursesSelect', [VideosController::class, 'getCoursesSelect']);
// Approved course, video, article comment, video comment, job offer
Route::get('/approveData', [CoursesController::class, 'approveData'])->name('approveData');
// Reusable apis End


//Getting the number of users in the site
Route::get('/Statistics', [AuthenticationController::class, 'Statistics']);
// Getting the number of active users
Route::get('/getActiveUsers', [AuthenticationController::class, 'getActiveUsers']);
// Increasing the active users number
Route::get('/increaseActiveUsers', [AuthenticationController::class, 'increaseActiveUsers']);
// decreasing the active users number
Route::get('/decreaseActiveUsers', [AuthenticationController::class, 'decreaseActiveUsers']);
// Getting all users
Route::get('/AllUsers', [AuthenticationController::class, 'getAllUsers']);
// Check if user exists and return it if edit or search, or delete it
Route::get('/UserExists', [AuthenticationController::class, 'checkUserExistance']);
// Update user information after editing
Route::put('/UpdateUserInforamtion', [AuthenticationController::class, 'UpdateUserInforamtion']);
// Seach function for users
Route::get('/searchUser', [AuthenticationController::class, 'searchUser']);
// Profile user Data
Route::get('/userProfile', [AuthenticationController::class, 'userProfileData']);
// Update user profile
Route::post('/updateProfile', [AuthenticationController::class, 'updateProfile']);
// Getting username and userpicture for first page in Dashboard
Route::get('/getUserInfo', [AuthenticationController::class, 'getUserInfo']);

// Authors requests
// Getting all authors requests
Route::get('/getAuthorsRequests', [AuthenticationController::class, 'getAuthorsRequests']);
// Check if author request exists and then either delete or approve it.
Route::get('/BecomeAuthorRequestExists', [AuthenticationController::class, 'AuthorRequestExists']);
// Getting all agents requests
Route::get('/getAgentsRequests', [AuthenticationController::class, 'getAgentsRequests']);
// Check if agent request exists and then either delete or approve it.
Route::get('/AgentRequestExists', [AuthenticationController::class, 'AgentRequestExists']);

// Become requests
// Become author or agent request
Route::post('/becomeAuthorAgentRequest', [AuthenticationController::class, 'becomeAuthorAgentRequest']);
// If user has already submitted a request to become either author or agent
Route::get('/hasAlreadyRequested', [AuthenticationController::class, 'hasAlreadyRequested']);
// Authentication End


// courses APIs start
// User interface
//Getting all courses for main page
Route::get('/getCourses', [CoursesController::class, 'getCourses']);
//Getting all courses for courses page
Route::get('/coursesPage', [CoursesController::class, 'getAllCourses']);
//Getting a specific course details
Route::get('/getCourseDetails', [CoursesController::class, 'getCourseDetails']);
//Getting a specific video
Route::get('/getvideo', [CoursesController::class, 'getvideo']);
// Get other courses for user interface(courses widget)
Route::get('/getWidgetCourses', [CoursesController::class, 'getWidgetCourses']);

// Dashboard
//Getting all courses
Route::get('/dashboardGetCourses', [CoursesController::class, 'dashboardGetCourses']);
// Check if course exists and return it if edit, or delete it
Route::get('/CourseExists', [CoursesController::class, 'checkCourseExistance']);
// Update course information after editing
Route::put('/UpdateCourseInforamtion', [CoursesController::class, 'UpdateCourseInforamtion']);
// Seach function for Courses
Route::get('/searchCourse', [CoursesController::class, 'searchCourse']);
// Creating a new course
Route::post('/createCourse', [CoursesController::class, 'createCourse']);
// courses APIs end


// Jobs' offers start
//Getting only four offers for main page
Route::get('/getJobsOffers', [JobsOffersController::class, 'getJobsOffers']);
//Get all offers for jobs offers page
Route::get('jobsPageOffers', [JobsOffersController::class, 'getJobsOffersPage']);
//getting a single job offer's details
Route::get('/getJobOfferDetails', [JobsOffersController::class, 'getJobOfferDetails']);
// Apply to job offer
Route::post('/applyToJobOffer', [JobsOffersController::class, 'applyToJobOffer']);

// Dashboard

// Return offers (if admin return all offers, or return the author's offers)
Route::get('/getJobsOffersDashboard', [JobsOffersController::class, 'getJobsOffersDashboard']);
// Check if job offer exists and return it if edit, or delete it
Route::get('/JobOfferExists', [JobsOffersController::class, 'JobOfferExists']);
// Update offer information after editing
Route::post('/UpdateOfferInforamtion', [JobsOffersController::class, 'UpdateOfferInforamtion']);
// Search function for jobs offers
Route::get('/searchjobOffer', [JobsOffersController::class, 'searchjobOffer']);
// Creating a new job offer
Route::post('/createJobOffer', [JobsOffersController::class, 'createJobOffer']);
// Jobs' offers end

// Articles start
//Getting three random articles from the DB to the main page
Route::get('/mainPageArticles', [ArticlesController::class, 'getThreeRandomArticles']);
//Geeting article's details
Route::get('/getArticleDetails', [ArticlesController::class, 'getArticleDetails']);
//Getting all articles for articles page
Route::get('/getAllArticles', [ArticlesController::class, 'getAllArticles']);
// get author info for the article
Route::get('/getAuthorInformationArticle', [ArticlesController::class, 'getAuthorInformationArticle']);

// Dashboard
// Getting all articles for dashboard(all articles if admin, otherwise get the author's articles)
Route::get('/getArticlesDashboard', [ArticlesController::class, 'getArticlesDashboard']);
// Check if article exists and return it if edit, or delete it
Route::get('/ArticleExists', [ArticlesController::class, 'ArticleExists']);
// Update article information after editing
Route::post('/UpdateArticleInforamtion', [ArticlesController::class, 'UpdateArticleInforamtion']);
// Search function for jobs offers
Route::get('/searchArticle', [ArticlesController::class, 'searchArticle']);
// Creating a new article
Route::post('/createArticle', [ArticlesController::class, 'createArticle']);
// Get user comments on article
Route::get('/getUserCommentArticle', [ArticlesController::class, 'getUserCommentArticle']);
// Delete user comment on article
Route::get('/removeCommentArticle', [ArticlesController::class, 'removeCommentArticle']);
// // search comments for article
Route::get('/searchCommentArticles', [ArticlesController::class, 'searchCommentArticles']);
// Articles end


// Category start
// Getting five categories from DB
Route::get('/getFiveCategories', [CategoriesController::class, 'getFiveCategories']);
// get category courses
Route::get('/getCategoryCoursesUserInterface', [CategoriesController::Class, 'getCategoryCoursesUserInterface']);

// dashboard
// Getting all categories
Route::get('/getCategories', [CategoriesController::class, 'getCategories']);
// Check if category exists and return it if edit, or delete it
Route::get('/CategoryExists', [CategoriesController::class, 'checkCategoryExistance']);
// Update category information after editing
Route::put('/UpdateCategoryInforamtion', [CategoriesController::class, 'UpdateCategoryInforamtion']);
// Seach function for categories
Route::get('/searchCategory', [CategoriesController::class, 'searchCategory']);
// Creating a new Category
Route::post('/createCategory', [CategoriesController::class, 'createCategory']);
//Category end

// Tag start
// Dashboard
// Getting all tags for dashboard
Route::get('/dashboardGetTags', [TagsController::class, 'dashboardAllTags']);
// Check if tag exists and return it if edit, or delete it
Route::get('/TagExists', [TagsController::class, 'checkTagExistance']);
// Update tag information after editing
Route::put('/UpdateTagInforamtion', [TagsController::class, 'UpdateTagInforamtion']);
// Search function for tags
Route::get('/searchTag', [TagsController::class, 'searchTag']);
// Creating a new Tag
Route::post('/createTag', [TagsController::class, 'createTag']);
// Tag end

// Report start
Route::post('/storeUserReport', [ReportsController::class, 'storeUserReport']);
// Dashboard
// return all reports
Route::get('/getReports', [ReportsController::class, 'getReports']);
// Check if report exists and return it if edit, or delete it
Route::get('/reportExists', [ReportsController::class, 'reportExists']);
// Search function for reports
Route::get('/searchReport', [ReportsController::class, 'searchReport']);
// Report end

// Videos start

// Dashboard
// return all videos
Route::get('getVideos', [VideosController::class, 'getAllVideos']);
// Check if video exists and return it if edit, or delete it
Route::get('/VideoExists', [VideosController::class, 'VideoExists']);
// Update video information after editing
Route::put('/UpdateVideoInforamtion', [VideosController::class, 'UpdateVideoInforamtion']);
// Search function for videos
Route::get('/searchVideo', [VideosController::class, 'searchVideo']);
// Creating a new video
Route::post('/uploadVideo', [VideosController::class, 'uploadVideo']);
// Make a comment for a video
Route::post('/makeVideoComment', [VideosController::class, 'makeVideoComment']);
// Get user comments on video
Route::get('/getUserCommentVideo', [VideosController::class, 'getUserCommentVideo']);
// Delete user comment on video
Route::get('/removeCommentVideo', [VideosController::class, 'removeUserCommentVideo']);
// search comments for videos
Route::get('/searchCommentVideos', [VideosController::class, 'searchCommentVideos']);
// Videos end


// Search data (user interface)
// Start of Search data (user interface)
// Getting searched courses
Route::get('/getSearchedCourseData', [CoursesController::class, 'getSearchedCourseData']);
// Getting searched jobs
Route::get('/getSearchedJobsData', [JobsOffersController::class, 'getSearchedJobsData']);
// Getting searched articles
Route::get('/getSearchedArticlesData', [ArticlesController::class, 'getSearchedArticlesData']);
// Getting searched categories
Route::get('/getSearchedCategories', [CategoriesController::class, 'getSearchedCategories']);
// end of Search data (user interface)


// Sending notification using FCM (testing) start
Route::get('/sendNotification', [AuthenticationController::class, 'sendNotification']);

// Dashboard
// Getting all notifications
Route::get('/getAllNotifications', [NotificationsController::class, 'getAllNotifications']);
// Check if notification exists, and if so delete it.
Route::get('/NotificationExists', [NotificationsController::class, 'NotificationExists']);
// Search function for notifications
Route::get('/searchNotification', [NotificationsController::class, 'searchNotification']);
// Creating a new notification
Route::post('/createNotification', [NotificationsController::class, 'createNotification']);
// get notifications for the right side bar
Route::get('sideBarNotifications', [NotificationsController::class, 'sideBarNotifications']);
// Sending notification using FCM (testing) end


// Comments Section
// user interface Section
// Make a comment for an article
Route::get('/makeArticleComment', [CommentController::class, 'makeArticleComment']);

// History section
// user interface section
// store history of view
Route::post('/watchHistoryStore', [HistroyController::class, 'watchHistoryStore']);
// Dashboard
// Get watch history according to the keyword
Route::get('/getWatchHistory', [HistroyController::class, 'getWatchHistory']);

// Favorites Section courses
// user interface section
// check if the course is already in favorite table for the current user
Route::get('/checkCourseFavoriteExistence', [FavoriteController::class, 'checkCourseFavoriteExistence']);
// add to favorite table for the current user
Route::post('/addToFavorite', [FavoriteController::class, 'addToFavorite']);
// remove to favorite table for the current user
Route::post('/removeFromFavorite', [FavoriteController::class, 'removeFromFavorite']);

// Dashboard section courses
// Get user's favorite courses
Route::get('/getUserFavoriteCourses', [FavoriteController::class, 'getUserFavoriteCourses']);
// Search either favorite user's courses or videos
Route::get('/searchFavoriteCourseOrVideo', [FavoriteController::class, 'searchFavoriteCourseOrVideo']);


// Favorites Section videos
// user interface section
// check if the video is already in favorite table for the current user
// check if the course is already in favorite table for the current user
Route::get('/checkvideoFavoriteExistence', [FavoriteController::class, 'checkvideoFavoriteExistence']);
// add video to favorite table for the current user
Route::post('/addVideoToFavorite', [FavoriteController::class, 'addVideoToFavorite']);
// remove video to favorite table for the current user
Route::post('/removeVideoFromFavorite', [FavoriteController::class, 'removeVideoFromFavorite']);
// Statistics (for the main page in user side)
Route::get('/mainPageStatistics', [FavoriteController::class, 'mainPageStatistics']);

// Dashboard section videos
// Get user's favorite videos
Route::get('/getUserFavoriteVideos', [FavoriteController::class, 'getUserFavoriteVideos']);

// AI chat bot
// return all user messages with bot
Route::get('/getUserChatBotMessages', [AIChatController::class, 'getUserChatBotMessages']);
// store user sent message
Route::post('/storeSentMessageToBot', [AIChatController::class, 'storeSentMessageToBot']);

// Dashboard
// web builder for the article checking if it already has a state
Route::get('/content-has-builder-state', [ArticlesController::class, 'checkBuilderState']);
// web builder for the article storing state
Route::post('/store-builder-state-tags', [ArticlesController::class, 'storeStateTags']);
// web builder for the article storing image
Route::post('/upload-builder-image', [ArticlesController::class, 'uploadImage']);

