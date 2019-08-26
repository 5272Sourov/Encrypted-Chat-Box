<?php

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
use App\Events\TestEvent;
use Illuminate\Support\Facades\App;

Route::get('/bridge', function() {
    $pusher = App::make('pusher');

    $pusher->trigger( 'test-channel',
                      'test-event', 
                      array('text' => 'Preparing the Pusher workshop!'));

    $data = array('text' => 'this is a notification');
    $pusher->trigger('notifications', 
                     'new-notification', 
                     ['text' => 'this is a notification']);

    return view('home');
});

Route::get('event', function ()
{
	event(new TestEvent('Broadcasting in Laravel using Pusher!'));

	return view('home');
});

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('notifications', 'NotificationController@getIndex');
Route::post('notifications', 'NotificationController@postNotify');


Route::get('chat','chatConrtoller@chat');

Route::post('send','chatConrtoller@send');