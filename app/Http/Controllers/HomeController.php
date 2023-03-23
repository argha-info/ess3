<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banner;
use App\Models\HomeAbout;
use App\Models\NewArrivals;
use App\Models\About;





class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $bannerList = Banner::where('status', 1)->orderBy('id', 'desc')->get();
        $homeabout  = HomeAbout::orderBy('created_at', 'desc')->get();
        $newarrivals = NewArrivals::orderBy('created_at', 'desc')->get();
        return view('home',compact('bannerList','homeabout','newarrivals'));
    }
     /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function about()
    {
        $about = About::where('status', 1)->orderBy('id','desc')->get();
        return view('about',compact('about'));

    }

}
