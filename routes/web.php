<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DocumentRequestController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use app\Mail\correctionMail;


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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

route::post('/correction_de_note',[ProfileController::class,'correction_de_note']);
route::post('/correction_de_donnees',[ProfileController::class,'correction_de_donnees']);
route::post('/ajout_de_module',[ProfileController::class,'ajout_de_module']);
Route::post('/document', [DocumentRequestController::class, 'store'])->name('document-requests.store');




    // Route::group(['middleware' => 'doc'], function () {
    //     Route::post('/document', [DocumentRequestController::class, 'store'])
    //         ->name('document-requests.store');
    // });
    

require __DIR__.'/auth.php';
