<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NewArrivals;
use DataTables;
use DB;
use Auth;
use Image;
use Carbon;
use Session;
use App\Http\Helpers;
use Illuminate\Support\Facades\Validator;

class NewArrivalsController extends Controller
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
        $title          = "New Arrivals";
        $breadcumbs     = "List New Arrivals";
        $active         = 'newarrivals';
        $subActive      = 'newarrivals_list';
        $subTitle       = "List New Arrivals";
        $newarrivals = NewArrivals::orderBy('id','DESC')->get();

        return view('admin.newarrivals.list', compact('title','breadcumbs','active','subActive','newarrivals','subTitle'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        // Helpers::isModuleOptAllowed($this->newarrivalsId,'4');
        $title      = "Add New Arrivals";
        $breadcumbs = "Add New Arrivals";
        $active     = 'New Arrivals';
        $subActive  = 'add_NewArrivals';
        return view('admin.newarrivals.addedit', compact('title','breadcumbs','active','subActive'));
    }

    public function show(){
        $data = NewArrivals::orderBy('created_at', 'desc')->get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('banner_image', function($row) {
                $advImage = '<img id="secBan1" src="https://via.placeholder.com/80" alt="" width="80">';
                if($row->newarrivals !='' && file_exists(public_path('uploads/newarrivals/'.$row->newarrivals))){
                    $imagePath =  asset('uploads/newarrivals/'.$row->newarrivals);
                    $advImage = '<img id="secBan1" src="'.$imagePath.'" alt="" width="80">';
                }
                return $advImage;
            })
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/newarrivals/edit/'.$encryptedId);
                    return '<a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['banner_image','action','status'])
        ->make(true);

    }

    public function addEditNewArrivals(Request $request){
        $newarrivals = $request->file('newarrivals');
        $rules = array(
            'title'        => 'required',
            // 'sub_title'        => 'required',
            'content'      => 'required',
            'status'       => 'required',
            'newarrivals_link' => 'required'
        );

        if($request->opt_type =='add' || !empty($newarrivals)){
            // $rules['homeabout'] = 'required|image|mimes:jpeg,jpg,bmp,png,gif|dimensions:min_width=1160,min_height=488';
            $rules['newarrivals'] = 'required|image|mimes:jpeg,jpg,bmp,png,gif';
        }

        $messages = [
            'title.required'        => 'Please Enter Title.',
            // 'sub_title.required'        => 'Please Enter SubTitle.',
            'content.required'      => 'Please Enter About Advertisement.',
            'newarrivals.required'       => 'Please Upload Banner Image.',
            'newarrivals.mimes'          => 'Only allowed jpeg,jpg,png,bmp or gif.',
            // 'homeabout.dimensions'     => 'Image size minimum width 1160px and minimum height 488px',
            'newarrivals_link.required' => 'Please Enter Link',
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
                    $input  = $request->except(['_token','opt_type','old_newarrivals',"id"]);
                }
                if($request->opt_type=='add'){
                    $input  = $request->except(['_token','opt_type', "id"]);
                    $input['newarrivalsId'] = Helpers::createID('newarrivalsId');
                }

                $input['newarrivals_link'] = ($request->newarrivals_link!='')?$request->newarrivals_link:'';

                //$input  = $request->except(['_token','opt_type']);


                $old_newarrivals = '';
                if($request->has('old_newarrivals')){
                    $old_newarrivals = $request->old_newarrivals;
                }
                if(!empty($newarrivals)){

                    $filename = $newarrivals->getClientOriginalName();
                    $newFileName = time(). '_' .str_replace(' ', '_', $filename);
                    $path = public_path('/uploads/newarrivals/');
                    $croppedBanner = Image::make($newarrivals->getRealPath());
                    $uploadSuccess = $croppedBanner->save($path.'/'.$newFileName,99);

                    if($old_newarrivals !='' && file_exists(public_path('uploads/newarrivals/'.$old_newarrivals))){
                        unlink(public_path('uploads/newarrivals/'.$old_newarrivals));
                    }
                    $input['newarrivals'] = $newFileName;

                }

                if($request->opt_type=='edit'){
                    $id = decrypt($request->id);

                    $input['updated_at']   = date('Y-m-d H:i:s');

                    // $advertisement = NewArrivals::find($id);
                    // $advertisement->update($input);
                    $update = NewArrivals::where('id',$id)->update($input);

                    $message = 'NewArrivals section updated Successfully.';
                }else{

                    NewArrivals::insert($input);
                    $message = 'NewArrivals Added Successfully.';
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
        $newarrivals = NewArrivals::find($id);
        $title  = "Edit NewArrivals";
        $subTitle  = "Edit NewArrivals";
        $active = 'newarrivals';
        $subActive  = 'edit_NewArrivals';

        $data   = compact('title','subTitle','active','subActive','newarrivals');
        return view('admin.newarrivals.addedit', $data);

    }

    public function delete(Request $request){
        $encDeleteId = $request->input('deleteId');
        $deleteId = decrypt($encDeleteId);
        try{
            $newarrivals = NewArrivals::Where('id', $deleteId)->select('newarrivals')->first();
            $newarrivals = $newarrivals->newarrivals;
            if($newarrivals!='' && \File::exists(public_path('uploads/newarrivals/'.$newarrivals))){
                \File::delete(public_path('uploads/newarrivals/'.$newarrivals));
            }
            NewArrivals::find($deleteId)->delete();
            $message = 'NewArrivals deleted successfully!';
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
