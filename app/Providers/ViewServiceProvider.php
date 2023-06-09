<?php

namespace App\Providers;

use App\Models\ContactUs;
use App\Models\About;
use App\Models\Category;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('*', function ($view) {
            $view->with('contact', ContactUs::first());
            $view->with('about', About::first());
            $view->with('categories', Category::where('status', 1)->with('products')->get());
        });

    }
}
