<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use App\Models\Category;
use DataTables;
use DB;
use Auth;
use Image;
use App\Http\Helpers;
use Carbon;
use Session;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $title          = "Category";
        $breadcumbs     = "Category List";
        $active         = 'category';
        $subActive      = 'category_list';
        $subTitle       = "Category List";
        $category = Category::orderBy('id','DESC')->get();
        return view('admin.category.list', compact('title','breadcumbs','active','subActive','category','subTitle'));
    }

    /**
     * Show the the category list.
     * @author Argha Jati
     * @param null
     * @return array
     */
    public function show(){
        $data = Category::orderBy('created_at', 'desc')->get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('parent', function($row) {

                return 'ok';
            })
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/category/edit/'.$encryptedId);
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
        $title      = "Add Category";
        $breadcumbs = "Add Category";
        $active     = 'category';
        $subActive  = 'add_category';
        return view('admin.category.addedit', compact('title','breadcumbs','active','subActive'));
    }

    public function addEditCategory(Request $request){
        $banner = $request->file('image');
        $rules = array(
            'category_name'        => 'required',
            'category_description'      => 'required',
            'status'       => 'required'
        );

        if($request->opt_type =='add' || !empty($banner)){
            $rules['image'] = 'image|mimes:jpeg,jpg,png,gif';
        }

        $messages = [
            'category_name.required' => 'Please enter category name.',
            'category_description.required'  => 'Please enter description.',
            'image.mimes'           => 'Only allowed jpeg,jpg,png or gif.',
            'status'                 => 'Please select status'
        ];
        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails()) {
            $errors = $validator->errors()->all();

            $error_html='';
            foreach($errors as $er){
                $error_html .='<span>'.$er.'</span></br>';
            }
            $return_data['success'] = 0;
            $return_data['error_message'] = $error_html;

        }else{
            DB::beginTransaction();
            try{
                if($request->opt_type=='edit'){
                    $input  = $request->except(['_token','opt_type','old_banner','id']);
                    $input['created_by'] = Auth::user()->id;
                }
                if($request->opt_type=='add'){
                    $input  = $request->except(['_token','opt_type','old_banner','id']);
                    $input['catid'] = Helpers::createID('category');
                    $input['created_by'] = Auth::user()->id;
                }


                $old_banner = '';
                if($request->has('old_banner')){
                    $old_banner = $request->old_banner;
                }
                if(!empty($banner)){

                    $filename = $banner->getClientOriginalName();
                    $newFileName = time(). '_' .str_replace(' ', '_', $filename);
                    $path = public_path('/uploads/category/');
                    $croppedBanner = Image::make($banner->getRealPath());
                    $uploadSuccess = $croppedBanner->save($path.'/'.$newFileName,99);

                    if($old_banner !='' && file_exists(public_path('uploads/category/'.$old_banner))){
                        unlink(public_path('uploads/category/'.$old_banner));
                    }
                    $input['image'] = $newFileName;

                }

                if($request->opt_type=='edit'){
                    $id = decrypt($request->id);


                    $input['updated_at']  = date('Y-m-d H:i:s');

                    $update = Category::where('id',$id)->update($input);
                    $message = 'Category Updated Successfully.';
                }else{

                    Category::create($input);
                    $message = 'Category Added Successfully.';
                }
                $return_data['success'] = 1;
                $return_data['success_message'] = $message;
                DB::commit();
            }catch ( \Exception $e){
                DB::rollback();
                $return_data['success'] = 0;
                $return_data['error_message'] = $e->Getmessage();
            }
        }
        return response()->json($return_data);
    }
    public function edit($id)
    {
        $id    = decrypt($id);
        $category = Category::find($id);
        $title  = "Edit Category";
        $subTitle  = "Edit Category";
        $active = 'category';
        $subActive  = 'add_category';

        $data   = compact('title','subTitle','active','subActive','category');
        return view('admin.category.addedit', $data);

    }
    public function delete(Request $request){
        $encDeleteId = $request->input('deleteId');
        $deleteId = decrypt($encDeleteId);
        try{
            Category::find($deleteId)->delete();
            $message = 'Category deleted successfully!';
            $return_data['success'] = 1;
            $return_data['success_message'] = $message;
            DB::commit();
        }catch ( \Exception $e){
            DB::rollback();
            $return_data['success'] = 0;
            $return_data['error_message'] = $e->Getmessage();
        }
        return response()->json($return_data);
    }
}
