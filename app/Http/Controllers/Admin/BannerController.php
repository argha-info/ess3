<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;
use DataTables;
use DB;
use Auth;
use Image;
use Carbon;
use Session;
use App\Http\Helpers;
use Illuminate\Support\Facades\Validator;


class BannerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Helpers::isModuleOptAllowed($this->bannerId,'3');
        $title          = "Banner";
        $breadcumbs     = "List Banner";
        $active         = 'banner';
        $subActive      = 'banner_list';
        $subTitle       = "List Banner";
        $banners = Banner::orderBy('id','DESC')->get();

        return view('admin.banner.list', compact('title','breadcumbs','active','subActive','banners','subTitle'));
    }

    public function show(){
        $data = Banner::orderBy('created_at', 'desc')->get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('banner_image', function($row) {
                $advImage = '<img id="secBan1" src="https://via.placeholder.com/80" alt="" width="80">';
                if($row->banner !='' && file_exists(public_path('uploads/banner/'.$row->banner))){
                    $imagePath =  asset('uploads/banner/'.$row->banner);
                    $advImage = '<img id="secBan1" src="'.$imagePath.'" alt="" width="80">';
                }
                return $advImage;
            })
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/banner/edit/'.$encryptedId);
                    return '<a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['banner_image','action','status'])
        ->make(true);

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        $title      = "Add Banner";
        $breadcumbs = "Add Banner";
        $active     = 'banner';
        $subActive  = 'add_banner';
        return view('admin.banner.addedit', compact('title','breadcumbs','active','subActive'));
    }


    public function addEditBanner(Request $request){
        $banner = $request->file('banner');
        $rules = array(
            'title'        => 'required',
            'sub_title'        => 'required',
            'content'      => 'required',
            'status'       => 'required',
            'banner_link' => 'required'
        );

        if($request->opt_type =='add' || !empty($banner)){
            $rules['banner'] = 'required|image|mimes:jpeg,jpg,bmp,png,gif|dimensions:min_width=1160,min_height=488';
        }

        $messages = [
            'title.required'        => 'Please Enter Title.',
            'sub_title.required'        => 'Please Enter SubTitle.',
            'content.required'      => 'Please Enter About Advertisement.',
            'banner.required'       => 'Please Upload Banner Image.',
            'banner.mimes'          => 'Only allowed jpeg,jpg,png,bmp or gif.',
            'banner.dimensions'     => 'Image size minimum width 1160px and minimum height 488px',
            'banner_link.required' => 'Please Enter Link',
            'status'                => 'Please select status'
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

                $input  = $request->except(['_token','opt_type']);
                if($request->opt_type=='edit'){
                    $input  = $request->except(['_token','opt_type','old_banner']);
                }
                $input['bannerId'] = Helpers::createID('banner');
                $input['banner_link'] = ($request->banner_link!='')?$request->banner_link:'';

                //$input  = $request->except(['_token','opt_type']);


                $old_banner = '';
                if($request->has('old_banner')){
                    $old_banner = $request->old_banner;
                }
                if(!empty($banner)){

                    $filename = $banner->getClientOriginalName();
                    $newFileName = time(). '_' .str_replace(' ', '_', $filename);
                    $path = public_path('/uploads/banner/');
                    $croppedBanner = Image::make($banner->getRealPath())->fit(1160, 488);
                    $uploadSuccess = $croppedBanner->save($path.'/'.$newFileName,99);

                    if($old_banner !='' && file_exists(public_path('uploads/banner/'.$old_banner))){
                        unlink(public_path('uploads/banner/'.$old_banner));
                    }
                    $input['banner'] = $newFileName;

                }

                if($request->opt_type=='edit'){
                    $id = decrypt($request->id);

                    $input['updated_at']   = date('Y-m-d H:i:s');

                    $advertisement = Banner::find($id);
                    $advertisement->update($input);

                    $message = 'Banner updated Successfully.';
                }else{

                    Banner::insert($input);
                    $message = 'Banner Added Successfully.';
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
        $bannerInfo = Banner::find($id);
        $title  = "Edit Banner";
        $subTitle  = "Edit Banner";
        $active = 'banner';
        $subActive  = 'add_banner';

        $data   = compact('title','subTitle','active','subActive','bannerInfo');
        return view('admin.banner.addedit', $data);

    }

    public function delete(Request $request){
        $encDeleteId = $request->input('deleteId');
        $deleteId = decrypt($encDeleteId);
        try{
            $bannerInfo = Banner::Where('id', $deleteId)->select('banner')->first();
            $banner = $bannerInfo->banner;
            if($banner!='' && \File::exists(public_path('uploads/banner/'.$banner))){
                \File::delete(public_path('uploads/banner/'.$banner));
            }
            Banner::find($deleteId)->delete();
            $message = 'Banner deleted successfully!';
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
