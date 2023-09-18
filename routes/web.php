<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\AuthenticationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/showUser', function() {
    return User::first();
});


// Route::get('/checkUserAuthenticationExistence', function() {
//     return auth()->user()->dark_mode;
// });

Route::get('{any}', [RedirectController::class, 'RedirectURL'])->where('any', '.*');
