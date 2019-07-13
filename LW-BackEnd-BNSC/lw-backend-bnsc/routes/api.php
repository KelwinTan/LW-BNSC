<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    Route::post('/register', 'UserController@Register');
//    return $request->user();
//});

//Route::group([
//    'prefix' => "/user"
//], function (){
//    Route::post('/register', 'UserController@Register');
//});

//Route::group(['middleware' => 'auth:api']);
Route::post('/register', 'UserController@Register');
Route::post('/login', 'UserController@Login');

Route::group(['middleware'=>['user']], function (){
    Route::post('/profile', 'UserController@getAuthenticatedUser');
});