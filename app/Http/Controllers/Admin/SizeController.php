<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Size;
use DataTables;
use DB;
use Auth;
use Image;
use Carbon;
use Session;
use App\Http\Helpers;
use Illuminate\Support\Facades\Validator;

class SizeController extends Controller
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
        $title          = "Size";
        $breadcumbs     = "List Size";
        $active         = 'size';
        $subActive      = 'size_list';
        $subTitle       = "List Size";
        $size = Size::orderBy('id','DESC')->get();

        return view('admin.size.list', compact('title','breadcumbs','active','subActive','size','subTitle'));
    }

        /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $title      = "Add Size";
        $breadcumbs = "Add Size";
        $active     = 'size';
        $subActive  = 'add_Size';
        return view('admin.size.addedit', compact('title','breadcumbs','active','subActive'));
    }

    public function show(){
        $data = Size::orderBy('created_at', 'desc')->get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/size/edit/'.$encryptedId);
                    return '<a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['action','status'])
        ->make(true);

    }
    public function addEditSize(Request $request){
        $rules = array(
            'size_name'        => 'required',
            'status'       => 'required',
        );
        $messages = [
            'size_name.required'        => 'Please Enter Size Name.',
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
                    $input  = $request->except(['_token','opt_type',"id"]);
                }
                if($request->opt_type=='add'){
                    $input  = $request->except(['_token','opt_type',"id"]);
                }
                //  $input['created_at'] =


                if($request->opt_type=='edit'){
                    $id = decrypt($request->id);

                     $input['updated_at']   = date('Y-m-d H:i:s');

                    // $advertisement = NewArrivals::find($id);
                    // $advertisement->update($input);
                    $update = Size::where('id',$id)->update($input);

                    $message = 'Size updated successfully.';
                }else{

                    Size::create($input);
                    $message = 'Size Added Successfully.';
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
        // dd($id);
        $size = Size::find($id);
        $title  = "Edit Size";
        $subTitle  = "Edit Size";
        $active = 'size';
        $subActive  = 'edit_Size';

        $data   = compact('title','subTitle','active','subActive','size');
        return view('admin.size.addedit', $data);

    }

    public function delete(Request $request){
        $encDeleteId = $request->input('deleteId');
        $deleteId = decrypt($encDeleteId);
        try{
            Size::find($deleteId)->delete();
            $message = 'Size deleted successfully!';
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
