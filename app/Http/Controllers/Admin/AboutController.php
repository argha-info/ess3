<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\About;
use DataTables;
use DB;
use Auth;
use Image;
use Carbon;
use Session;
use App\Http\Helpers;
use Illuminate\Support\Facades\Validator;

class AboutController extends Controller
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
        // Helpers::isModuleOptAllowed($this->newarrivalsId,'3');
        $title          = "New About";
        $breadcumbs     = "List About";
        $active         = 'about';
        $subActive      = 'about_list';
        $subTitle       = "List About";
        $about = About::orderBy('id','DESC')->get();

        return view('admin.about.list', compact('title','breadcumbs','active','subActive','about','subTitle'));
    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $title      = "Add About";
        $breadcumbs = "Add About";
        $active     = 'about';
        $subActive  = 'add_About';
        return view('admin.about.addedit', compact('title','breadcumbs','active','subActive'));
    }

    public function show(){
        $data = About::orderBy('created_at', 'desc')->get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('banner_image', function($row) {
                $advImage = '<img id="secBan1" src="https://via.placeholder.com/80" alt="" width="80">';
                if($row->about!='' && file_exists(public_path('uploads/about/'.$row->about))){
                    $imagePath =  asset('uploads/about/'.$row->about);
                    $advImage = '<img id="secBan1" src="'.$imagePath.'" alt="" width="80">';
                }
                return $advImage;
            })
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/about/edit/'.$encryptedId);
                    return '<a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['banner_image','action','status'])
        ->make(true);

    }

    public function addEditAbout(Request $request){
        $about = $request->file('about');
        $rules = array(
            'title'        => 'required',
            'content'      => 'required',
            'status'       => 'required',
        );

        if($request->opt_type =='add' || !empty($about)){
            // $rules['homeabout'] = 'required|image|mimes:jpeg,jpg,bmp,png,gif|dimensions:min_width=1160,min_height=488';
            $rules['about'] = 'required|image|mimes:jpeg,jpg,bmp,png,gif';
        }

        $messages = [
            'title.required'        => 'Please Enter Title.',
            // 'sub_title.required'        => 'Please Enter SubTitle.',
            'content.required'      => 'Please Enter About Advertisement.',
            'about.required'       => 'Please Upload About Image.',
            'about.mimes'          => 'Only allowed jpeg,jpg,png,bmp or gif.',
            // 'homeabout.dimensions'     => 'Image size minimum width 1160px and minimum height 488px',
            // 'newarrivals_link.required' => 'Please Enter Link',
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

                // $input  = $request->except(['_token','opt_type']);
                if($request->opt_type=='edit'){
                    $input  = $request->except(['_token','opt_type','old_about',"id"]);
                }
                if($request->opt_type=='add'){
                    $input  = $request->except(['_token','opt_type', "id"]);
                    $input['aboutusId'] = Helpers::createID('about');
                }
                $input['created_by'] = Auth::user()->id;
                // $input['about_link'] = ($request->newarrivals_link!='')?$request->newarrivals_link:'';

                //$input  = $request->except(['_token','opt_type']);


                $old_about = '';
                if($request->has('old_about')){
                    $old_about = $request->old_about;
                }
                if(!empty($about)){

                    $filename = $about->getClientOriginalName();
                    $newFileName = time(). '_' .str_replace(' ', '_', $filename);
                    $path = public_path('uploads/about/');
                    $croppedBanner = Image::make($about->getRealPath());
                    $uploadSuccess = $croppedBanner->save($path.'/'.$newFileName,99);

                    if($old_about !='' && file_exists(public_path('uploads/about/'.$old_about))){
                        unlink(public_path('uploads/about/'.$old_about));
                    }
                    $input['about'] = $newFileName;

                }

                if($request->opt_type=='edit'){
                    $id = decrypt($request->id);

                    $input['updated_at']   = date('Y-m-d H:i:s');

                    // $advertisement = NewArrivals::find($id);
                    // $advertisement->update($input);
                    $update = About::where('id',$id)->update($input);

                    $message = 'About section updated Successfully.';
                }else{

                    About::insert($input);
                    $message = 'About Added Successfully.';
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
        // Helpers::isModuleOptAllowed($this->newarrivalsId,'2');
        $id    = decrypt($id);
        // $newarrivals= NewArrivals::where('id', $id)->first();
        // dd($id);
        $about = About::find($id);
        $title  = "Edit About";
        $subTitle  = "Edit About";
        $active = 'about';
        $subActive  = 'edit_About';

        $data   = compact('title','subTitle','active','subActive','about');
        return view('admin.about.addedit', $data);

    }

    public function delete(Request $request){
        $encDeleteId = $request->input('deleteId');
        $deleteId = decrypt($encDeleteId);
        try{
            $about = About::Where('id', $deleteId)->select('about')->first();
            $about = $about->about;
            if($about!='' && \File::exists(public_path('uploads/about/'.$about))){
                \File::delete(public_path('uploads/about/'.$about));
            }
            About::find($deleteId)->delete();
            $message = 'About deleted successfully!';
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
