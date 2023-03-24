<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ContactUs;
use DataTables;
use DB;
use Auth;
use Image;
use Carbon;
use Session;
use App\Http\Helpers;
use Illuminate\Support\Facades\Validator;

class ContactUsController extends Controller
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
        $title          = "Contact Us";
        $breadcumbs     = "List Contact Us";
        $active         = 'contactus';
        $subActive      = 'contactus_list';
        $subTitle       = "List Contact Us";
        $contactus = ContactUs::get();

        return view('admin.contactus.list', compact('title','breadcumbs','active','subActive','contactus','subTitle'));
    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $title      = "Add Contact Us";
        $breadcumbs = "Add Contact Us";
        $active     = 'contactus';
        $subActive  = 'add_Contact Us';
        return view('admin.contactus.addedit', compact('title','breadcumbs','active','subActive'));
    }

    public function show(){
        $data = ContactUs::get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function($row) {
                    $encryptedId = encrypt($row->id);
                    $editLink  = url('admin/contactus/edit/'.$encryptedId);
                    return '<a href="'.$editLink.'" class="btn btn-success btn-sm editData"><i class="fas fa-edit"></i> Edit</a>
                    <a href="javascript:void(0)" deleteid="'.$encryptedId.'" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i> Delete</a>';
            })
            ->addColumn('status', function ($row) {
                return ($row->status==1)?'<span class="btn btn-sm btn-success">Active</span>':'<span class="btn btn-sm btn-danger">Inactive</span>';
            })
        ->rawColumns(['action','status'])
        ->make(true);

    }

    public function addEditContactUs(Request $request){
        $rules = array(
            'location'        => 'required',
            'email'      => 'required|email|max:255',
            'company_phone'       => 'required|numeric',
            'support_phone'       => 'numeric',



        );
        $messages = [
            'location.required'=> 'Please Enter Location.',
            'email.required'  => 'Please Enter Email.',
            'company_phone.required'  => 'Please Enter Company Phone No.',
            'support_phone'  => 'Only Number',

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
                //  $input['created_at'] = Auth::user()->id;


                if($request->opt_type=='edit'){
                    $id = decrypt($request->id);

                     $input['updated_at']   = date('Y-m-d H:i:s');

                    // $advertisement = NewArrivals::find($id);
                    // $advertisement->update($input);
                    $update = ContactUs::where('id',$id)->update($input);

                    $message = 'Color updated Successfully.';
                }else{

                    ContactUs::create($input);
                    $message = 'Color Added Successfully.';
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
        $contactus = ContactUs::find($id);
        $title  = "Edit Contact Us";
        $subTitle  = "Edit Contact Us";
        $active = 'contactus';
        $subActive  = 'edit_Contact Us';

        $data   = compact('title','subTitle','active','subActive','contactus');
        return view('admin.contactus.addedit', $data);

    }

    public function delete(Request $request){
        $encDeleteId = $request->input('deleteId');
        $deleteId = decrypt($encDeleteId);
        try{
            ContactUs::find($deleteId)->delete();
            $message = 'Contact deleted successfully!';
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
