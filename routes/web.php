<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController; 
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;


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

Route::get('/', [HomeController::class, 'index'])->name('home');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('admin-login',[LoginController::class,'adminLogin']);
Route::post('admin-login',[LoginController::class,'adminAuthentication']);

Route::prefix('admin')->middleware('checkadminauth')->group(function(){
    Route::get('home', [AdminController::class, 'dashboard']);
    Route::get('dashboard', [AdminController::class, 'dashboard']);
    
    ////////////////////////////////   Category Section   //////////////////////////////////////
    Route::get('category', [CategoryController::class, 'index'])->name('admin.category');
    Route::get('category/all-data', [CategoryController::class, 'show'])->name('admin.category-all-data');
    Route::get('category/create', [CategoryController::class, 'create'])->name('admin.category.create'); 
    Route::get('category/edit/{id}', [CategoryController::class, 'edit'])->name('admin.category.update'); 
    Route::post('category-add-edit', [CategoryController::class, 'addEditCategory'])->name('admin.addEditCategory');

});