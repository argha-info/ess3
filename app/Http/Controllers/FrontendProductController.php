<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendProductController extends Controller
{
    public function index($id){
        $categoryId = decrypt($id);
        return view('product-list', compact('categoryId'));
    }
}
