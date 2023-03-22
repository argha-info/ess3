<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function dashboard(){
        $title = "Dashboard";
        $breadcumbs = "Dashboard";
        $active = 'dashboard';
        $subActive = 'dashboard';
        $users = count(User::Where('role_id', '3')->get());
        // $totalEnquery    = count(Enquiry::Where(['enquiryDeleted'=>'N'])->get());
        // $totalTestimonial    = count(Testimonial::Where(['status'=>'1'])->get());
        // $totalPlacement  = count(Partner::Where(['partnerDeleted'=>'N','logoType'=>'P','status'=>'1'])->get());
        // $totalInternship = count(Partner::Where(['partnerDeleted'=>'N','logoType'=>'I','status'=>'1'])->get());
        // $totalInfrastructure = count(CampusFacility::Where(['facilityDeleted'=>'N','status'=>'1'])->get());
        // $totalcampusEvent = count(Event::Where(['event_type'=>'Campus','eventDeleted'=>'N','status'=>'1'])->get());
        // $totalIndustryConnect = count(Blog::Where(['blogType'=>'Industry Connect','status'=>'Y','blogDeleted'=>'Y'])->get());
        // $totalPages = count(Page::Where(['pageDeleted'=>'N','status'=>'1'])->get());
        //$totalNews = count(Blog::Where(['blogType'=>'News','status'=>'Y','blogDeleted'=>'Y'])->get());
        //return view('admin.dashboard', compact('title','breadcumbs','active','subActive','users','totalEnquery','totalFaculty','totalPlacement','totalInternship','totalInfrastructure','totalcampusEvent','totalIndustryConnect','totalPages','totalNews'));
        return view('admin.dashboard', compact('title','breadcumbs','active','subActive','users'));
    }
}
