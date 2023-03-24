<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use App\Models\Category;
use App\Models\Product;
use App\Models\Color;
use App\Models\Size;
use App\Models\ProductCategory;
use App\Models\ProductGallery;
use App\Models\Inventory;
use App\Models\ProductType;
use App\Models\TypeWiseProduct;
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
    /**
     * List of all products
     * @author Argha Jati
     * @param null
     * @return array
     */
    public function index(){
        $title          = "Product";
        $breadcumbs     = "Product List";
        $active         = 'product';
        $subActive      = 'product_list';
        $subTitle       = "Product List";
        return view('admin.product.index', compact('title','breadcumbs','active','subActive','subTitle'));
    }

     /**
     * show of all products
     * @author Argha Jati
     * @param null
     * @return json
     */
    public function show(){
        $data = Product::orderBy('id', 'desc')->get();

        return Datatables::of($data)
            
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $viewDetails  = url('admin/product/view-details/'.$encryptedId);
                    $editLink  = url('admin/product/edit/'.$encryptedId);
                    return '
                    <a href="'.$viewDetails.'" class="btn btn-info btn-sm"><i class="fas fa-pen"></i> View Details</a>
                    <a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
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
        $category = Category::where('status', 1)->get();
        $types = ProductType::where('status', 1)->get();
        return view('admin.product.create', compact('title','breadcumbs','active','subActive', 'category', 'types'));
    }
    public function store(Request $request){
        $data = [];
        $data['product_name'] = $request['product_name'];
        $data['SKU'] = Helpers::createID('product');
        $data['short_description'] = $request['short_description'];
        $data['product_specification'] = $request['product_specification'];
        $data['manufacturer_details'] = $request['manufacturer_details'];
        $data['regular_price'] = $request['regular_price'];
        $data['discount_price'] = $request['discount_price'];
        $data['status'] = $request['status'];

        $create = Product::create($data);

        if($create){
            $productcategory = [];
            $productcategory['product_id'] = $create->id;
            $productcategory['category_id'] = $request['category_id'];
            $addproductcategory = ProductCategory::create($productcategory);

            $producttype = [];
            $producttype['product_type_id'] = $request['category_id'];
            $producttype['product_id'] = $create->id;
            $producttype['status'] = 1;

            $producttype = TypeWiseProduct::create($producttype);

        }
        return redirect(route('admin.product'));


        
    }
    public function viewDetails($id){
        $encryptedId = $id;
        $id = decrypt($id);
        $product = Product::where('id', $id)->first();
        $title          = $product->product_name;
        $breadcumbs     = "Product List";
        $active         = 'product';
        $subActive      = 'product_list';
        $subTitle       = "Product List";
        
        return view('admin.product.details', compact('title','breadcumbs','active','subActive','product','subTitle', 'encryptedId'));
    }
    public function allVarient($id){
        $id = decrypt($id);
        $data = Inventory::where('product_id', $id)->get();

        return Datatables::of($data)
            
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $viewDetails  = url('admin/product/view-details/'.$encryptedId);
                    $editLink  = url('admin/product/edit/'.$encryptedId);
                    return '
                    <a href="'.$viewDetails.'" class="btn btn-info btn-sm"><i class="fas fa-pen"></i> View Details</a>
                    <a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['color_id','size_id', 'action','status'])
        ->make(true);

    }
    
    public function addVarient($id){
        $encryptedId = $id;
        $id = decrypt($id);
        $product = Product::where('id', $id)->first();
        $colors = Color::where('status', 1)->get();
        $sizes = Size::where('status', 1)->get();
        $title          = $product->product_name;
        $breadcumbs     = "Add Product Varient";
        $active         = 'product';
        $subActive      = 'product_list';
        $subTitle       = "Product List";
        
        return view('admin.product.addVarient', compact('title','breadcumbs','active','subActive','product','subTitle', 'encryptedId', 'colors', 'sizes'));
    }
    public function storeVarient(Request $request, $id){
        $productId = decrypt($id);
        $data = [];
        $data['product_id'] = $productId;
        $data['color_id'] = $request['color_id'];
        $data['size_id'] = $request['size_id'];
        $data['regular_price'] = $request['regular_price'];
        $data['discount_price'] = $request['discount_price'];
        $data['quantity'] = $request['quantity'];
        $data['status'] = $request['status'];
        $create = Inventory::create($data);
        if($create){
            $bag = [];
            $bag['product_id'] = $productId;
            $bag['inventory_id'] = $create->id;
            $bag['image'] = null;
            $bag['thumbnail'] = null;
            $bag['display_order'] = null;
            $bag['status'] = 1;
            $gallery = ProductGallery::create($bag);
        }
        return response()->json(true);
    }
}
