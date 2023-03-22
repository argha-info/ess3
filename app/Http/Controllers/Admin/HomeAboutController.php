<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeAbout;
use DataTables;
use DB;
use Auth;
use Image;
use Carbon;
use Session;
use App\Http\Helpers;
use Illuminate\Support\Facades\Validator;

class homeaboutController extends Controller
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
        // Helpers::isModuleOptAllowed($this->homeaboutId,'3');
        $title          = "Home About";
        $breadcumbs     = "List About";
        $active         = 'homeabout';
        $subActive      = 'homeabout_list';
        $subTitle       = "List Home About";
        $homeabout = HomeAbout::orderBy('id','DESC')->get();

        return view('admin.homeabout.list', compact('title','breadcumbs','active','subActive','homeabout','subTitle'));
    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        $title      = "Add HomeAbout";
        $breadcumbs = "Add HomeAbout";
        $active     = 'homeabout';
        $subActive  = 'add_homeabout';
        return view('admin.homeabout.addedit', compact('title','breadcumbs','active','subActive'));
    }

    public function show(){
        $data = HomeAbout::orderBy('created_at', 'desc')->get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('banner_image', function($row) {
                $advImage = '<img id="secBan1" src="https://via.placeholder.com/80" alt="" width="80">';
                if($row->homeabout !='' && file_exists(public_path('uploads/homeabout/'.$row->homeabout))){
                    $imagePath =  asset('uploads/homeabout/'.$row->homeabout);
                    $advImage = '<img id="secBan1" src="'.$imagePath.'" alt="" width="80">';
                }
                return $advImage;
            })
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/homeabout/edit/'.$encryptedId);
                    return '<a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['banner_image','action','status'])
        ->make(true);

    }

    public function addEditHomeAbout(Request $request){
        $homeabout = $request->file('homeabout');
        $rules = array(
            'title'        => 'required',
            'sub_title'        => 'required',
            'content'      => 'required',
            'status'       => 'required',
            'about_link' => 'required'
        );

        if($request->opt_type =='add' || !empty($homeabout)){
            // $rules['homeabout'] = 'required|image|mimes:jpeg,jpg,bmp,png,gif|dimensions:min_width=1160,min_height=488';
            $rules['homeabout'] = 'required|image|mimes:jpeg,jpg,bmp,png,gif';
        }

        $messages = [
            'title.required'        => 'Please Enter Title.',
            'sub_title.required'        => 'Please Enter SubTitle.',
            'content.required'      => 'Please Enter About Advertisement.',
            'homeabout.required'       => 'Please Upload Banner Image.',
            'homeabout.mimes'          => 'Only allowed jpeg,jpg,png,bmp or gif.',
            // 'homeabout.dimensions'     => 'Image size minimum width 1160px and minimum height 488px',
            'about_link.required' => 'Please Enter Link',
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


                if($request->opt_type=='edit'){
                    $input  = $request->except(['_token','opt_type','old_homeabout', "id"]);
                }
                if($request->opt_type=='add'){
                    $input  = $request->except(['_token','opt_type', "id"]);
                    $input['homeaboutId'] = Helpers::createID('homeabout');
                }

                $input['about_link'] = ($request->about_link!='')?$request->about_link:'';


                $old_homeabout = '';
                if($request->has('old_homeabout')){
                    $old_homeabout = $request->old_homeabout;
                }
                if(!empty($homeabout)){

                    $filename = $homeabout->getClientOriginalName();
                    $newFileName = time(). '_' .str_replace(' ', '_', $filename);
                    $path = public_path('/uploads/homeabout/');
                    $croppedBanner = Image::make($homeabout->getRealPath());
                    $uploadSuccess = $croppedBanner->save($path.'/'.$newFileName,99);

                    if($old_homeabout !='' && file_exists(public_path('uploads/homeabout/'.$old_homeabout))){
                        unlink(public_path('uploads/homeabout/'.$old_homeabout));
                    }
                    $input['homeabout'] = $newFileName;

                }

                if($request->opt_type=='edit'){
                    $id = decrypt($request->id);

                    $input['updated_at']   = date('Y-m-d H:i:s');

                    // $advertisement = HomeAbout::find($id);
                    // $advertisement->update($input);
                    $update = HomeAbout::where('id',$id)->update($input);

                    $message = 'Homepage about  section updated Successfully.';
                }else{

                    HomeAbout::insert($input);
                    $message = 'Homepage about added Successfully.';
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
        // Helpers::isModuleOptAllowed($this->homeaboutId,'2');
        $id    = decrypt($id);
        $homeabout = HomeAbout::find($id);
        $title  = "Edit HomeAbout";
        $subTitle  = "Edit HomeAbout";
        $active = 'homeabout';
        $subActive  = 'edit_homeabout';

        $data   = compact('title','subTitle','active','subActive','homeabout');
        return view('admin.homeabout.addedit', $data);

    }

    public function delete(Request $request){
        $encDeleteId = $request->input('deleteId');
        $deleteId = decrypt($encDeleteId);
        try{
            $homeabout = HomeAbout::Where('id', $deleteId)->select('homeabout')->first();
            $homeabout = $homeabout->homeabout;
            if($homeabout!='' && \File::exists(public_path('uploads/homeabout/'.$homeabout))){
                \File::delete(public_path('uploads/homeabout/'.$homeabout));
            }
            HomeAbout::find($deleteId)->delete();
            $message = 'HomeAbout deleted successfully!';
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
