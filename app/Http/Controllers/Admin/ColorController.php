<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Color;
use DataTables;
use DB;
use Auth;
use Image;
use Carbon;
use Session;
use App\Http\Helpers;
use Illuminate\Support\Facades\Validator;

class ColorController extends Controller
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
        $title          = "Color";
        $breadcumbs     = "List Color";
        $active         = 'color';
        $subActive      = 'color_list';
        $subTitle       = "List Color";
        $color = Color::orderBy('id','DESC')->get();

        return view('admin.color.list', compact('title','breadcumbs','active','subActive','color','subTitle'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $title      = "Add Color";
        $breadcumbs = "Add Color";
        $active     = 'color';
        $subActive  = 'add_Color';
        return view('admin.color.addedit', compact('title','breadcumbs','active','subActive'));
    }

    public function show(){
        $data = Color::orderBy('id', 'desc')->get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/color/edit/'.$encryptedId);
                    return '<a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['action','status'])
        ->make(true);

    }

    public function addEditColor(Request $request){
        $rules = array(
            'color_name'        => 'required',
            'color_code'      => 'required',
            'status'       => 'required',
        );
        $messages = [
            'color_name.required'        => 'Please Enter Color Name.',
            'color_code.required'        => 'Please Enter Color Code.',
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
                    $input['created_by'] = Auth::user()->id;
                }
                if($request->opt_type=='add'){
                    $input  = $request->except(['_token','opt_type',"id"]);
                    $input['created_by'] = Auth::user()->id;
                }


                if($request->opt_type=='edit'){
                    $id = decrypt($request->id);

                     $input['updated_at']   = date('Y-m-d H:i:s');

                    $update = Color::where('id',$id)->update($input);

                    $message = 'Color updated successfully.';
                }else{

                    Color::create($input);
                    $message = 'Color added successfully.';
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
        $color = Color::find($id);
        $title  = "Edit Color";
        $subTitle  = "Edit Color";
        $active = 'color';
        $subActive  = 'edit_Color';

        $data   = compact('title','subTitle','active','subActive','color');
        return view('admin.color.addedit', $data);

    }

    public function delete(Request $request){
        $encDeleteId = $request->input('deleteId');
        $deleteId = decrypt($encDeleteId);
        try{
            Color::find($deleteId)->delete();
            $message = 'Color deleted successfully!';
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
