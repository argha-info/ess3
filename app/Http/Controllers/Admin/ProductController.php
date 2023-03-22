<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductCategory;
use DataTables;
use DB;
use Auth;
use Image;
use App\Http\Helpers;
use Carbon;
use Session;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
        $title          = "Product";
        $breadcumbs     = "Product List";
        $active         = 'product';
        $subActive      = 'product_list';
        $subTitle       = "Product List";
        $category = Product::orderBy('id','DESC')->get();
        return view('admin.product.index', compact('title','breadcumbs','active','subActive','category','subTitle'));
    }
    public function show(){
        $data = Product::orderBy('id', 'desc')->get();

        return Datatables::of($data)
            
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/product/edit/'.$encryptedId);
                    return '<a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['image','action','status'])
        ->make(true);

    }
    public function create(){
        $title      = "Add Product";
        $breadcumbs = "Add Product";
        $active     = 'product';
        $subActive  = 'add_product';
        return view('admin.product.create', compact('title','breadcumbs','active','subActive'));
    }

}
