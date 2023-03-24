<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\HomeAboutController;
use App\Http\Controllers\Admin\NewArrivalsController;
use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\ColorController;
use App\Http\Controllers\Admin\SizeController;
use App\Http\Controllers\Admin\ContactUsController;








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
Route::get('/about', [HomeController::class, 'about'])->name('about');

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

    ////////////////////////////// Banner Section /////////////////////////
    Route::get('banner', [BannerController::class, 'index'])->name('admin.banner');
    Route::get('banner/all-data', [BannerController::class, 'show'])->name('banner-all-data');
    Route::get('banner/create', [BannerController::class, 'create'])->name('admin.banner.create');
    Route::get('banner/edit/{id}', [BannerController::class, 'edit'])->name('admin.banner.update');
    Route::post('banner-add-edit', [BannerController::class, 'addEditBanner'])->name('admin.addEditBanner');
    Route::post('banner/delete', [BannerController::class, 'delete'])->name('admin.banner-delete');

    /////////////////////////////  Manage Product Section //////////////////////////////////////////
    Route::get('product', [ProductController::class, 'index'])->name('admin.product');
    Route::get('product/all-data', [ProductController::class, 'show'])->name('admin.product-all-data');
    Route::get('product/create', [ProductController::class, 'create'])->name('admin.product.create');
    Route::post('product/store', [ProductController::class, 'store'])->name('admin.product.store');
    Route::get('product/view-details/{id}', [ProductController::class, 'viewDetails'])->name('admin.product.viewDetails');

    Route::get('product/add-varient/{id}', [ProductController::class, 'addVarient'])->name('admin.product.addVarient');


    //////////////////////////////// Home About //////////////////////////////////////////////////
    Route::get('homeabout', [HomeAboutController::class, 'index'])->name('admin.homeabout');
    Route::get('homeabout/all-data', [HomeAboutController::class, 'show'])->name('homeabout-all-data');
    Route::get('homeabout/create', [HomeAboutController::class, 'create'])->name('admin.homeabout.create');
    Route::get('homeabout/edit/{id}', [HomeAboutController::class, 'edit'])->name('admin.homeabout.update');
    Route::post('homeabout-add-edit', [HomeAboutController::class, 'addEditHomeAbout'])->name('admin.addEditHomeAbout');
    Route::post('homeabout/delete', [HomeAboutController::class, 'delete'])->name('admin.homeabout-delete');
    ////////////////////////////////// New Arrivals //////////////////////////////////////////////////
    Route::get('newarrivals', [NewArrivalsController::class, 'index'])->name('admin.newarrivals');
    Route::get('newarrivals/all-data', [NewArrivalsController::class, 'show'])->name('newarrivals-all-data');
    Route::get('newarrivals/create', [NewArrivalsController::class, 'create'])->name('admin.newarrivals.create');
    Route::get('newarrivals/edit/{id}', [NewArrivalsController::class, 'edit'])->name('admin.newarrivals.update');
    Route::post('newarrivals-add-edit', [NewArrivalsController::class, 'addEditNewArrivals'])->name('admin.addEditNewArrivals');
    Route::post('newarrivals/delete', [NewArrivalsController::class, 'delete'])->name('admin.newarrivals-delete');
    ///////////////////////////////// About Page /////////////////////////////////////////////////////
    Route::get('about', [AboutController::class, 'index'])->name('admin.about');
    Route::get('about/all-data', [AboutController::class, 'show'])->name('about-all-data');
    Route::get('about/create', [AboutController::class, 'create'])->name('admin.about.create');
    Route::get('about/edit/{id}', [AboutController::class, 'edit'])->name('admin.about.update');
    Route::post('about/add-edit', [AboutController::class, 'addEditAbout'])->name('admin.addEditAbout');
    Route::post('about/delete', [AboutController::class, 'delete'])->name('admin.about-delete');
    //////////////////////////////// Colour ///////////////////////////////////////////////////////////
    Route::get('color', [ColorController::class, 'index'])->name('admin.color');
    Route::get('color/all-data', [ColorController::class, 'show'])->name('color-all-data');
    Route::get('color/create', [ColorController::class, 'create'])->name('admin.color.create');
    Route::get('color/edit/{id}', [ColorController::class, 'edit'])->name('admin.color.update');
    Route::post('color/add-edit', [ColorController::class, 'addEditColor'])->name('admin.addEditColor');
    Route::post('color/delete', [ColorController::class, 'delete'])->name('admin.color-delete');
    //////////////////////////////// Colour ///////////////////////////////////////////////////////////
    Route::get('size', [SizeController::class, 'index'])->name('admin.size');
    Route::get('size/all-data', [SizeController::class, 'show'])->name('size-all-data');
    Route::get('size/create', [SizeController::class, 'create'])->name('admin.size.create');
    Route::get('size/edit/{id}', [SizeController::class, 'edit'])->name('admin.size.update');
    Route::post('size/add-edit', [SizeController::class, 'addEditSize'])->name('admin.addEditSize');
    Route::post('size/delete', [SizeController::class, 'delete'])->name('admin.size-delete');
    //////////////////////////////// Contact US ///////////////////////////////////////////////////////////
    Route::get('contactus', [ContactUsController::class, 'index'])->name('admin.contactus');
    Route::get('contactus/all-data', [ContactUsController::class, 'show'])->name('contactus-all-data');
    Route::get('contactus/create', [ContactUsController::class, 'create'])->name('admin.contactus.create');
    Route::get('contactus/edit/{id}', [ContactUsController::class, 'edit'])->name('admin.contactus.update');
    Route::post('contactus/add-edit', [ContactUsController::class, 'addEditContactUs'])->name('admin.addEditContactUs');
    Route::post('contactus/delete', [ContactUsController::class, 'delete'])->name('admin.contactus-delete');
});
