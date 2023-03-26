<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Session;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('guest')->except('logout');
    // }

    public function adminLogin(){
        if(!empty(Auth::user())){
            if(Auth::user()->user_type == '1'){
               
                return redirect('admin/dashboard');
            }else{
                return redirect('/');
            }
        }else{
            return view('auth.admin.login');
        }   
    }

    public function adminAuthentication(Request $request){
        $remember = $request->input('remember');
        if(!empty($remember)){
            setcookie ("email",$request->email,time()+ (60 * 2));
            setcookie ("password",$request->password,time()+ (60 * 2));
        }else {
                if(isset($_COOKIE["email"])) {
                    setcookie ("email","");
                }
                if(isset($_COOKIE["password"])) {
                    setcookie ("password","");
                }
        }

        $messsages = array(
            'email.required'    => 'Please enter email address.',
            'email.email'       => 'Please enter correct email address.',
            'password.required' => 'Please enter password.',
        );

        $rules = array(
            'email' => 'required|email',
            'password' => 'required',
        );

        $validator = Validator::make($request->all(), $rules,$messsages);

        if ($validator->fails()){
            return redirect()->back()->withInput($request->input())->withErrors($validator);
        }else{
            $data = [
                'email' => $request->email,
                'password' => $request->password,
                //'user_type' => '1'
            ];
            
            if (Auth::attempt($data,$remember)){
                Session::put('role_id',Auth::user()->role_id);
                return redirect('admin/dashboard');
            }else{
                return back()->withInput()->withErrors(['error'=> 'Please enter vaild credential.']);
            }
        }
    }
    public function logout(Request $request) {
        Auth::logout();
        return redirect('/admin-login');
    }
}
