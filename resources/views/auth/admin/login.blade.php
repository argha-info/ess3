@extends('layouts.admin.adminLoginLayout')
@section('adminLoginContent')
<div class="login-box">
  <div class="login_left" style="background: #000;">
  <div class="login-logo" style="padding-top:85px;">
      <a href="{{url('/')}}"><strong><img class="img-fluid" src="{{ asset('uploads/sitesettings/1676913513_logo.png') }}" width="200px"></strong></a>
    </div>
    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, et cumque nihil vero, sunt doloremque</p> -->
    
<style>
  .alert ul{
    padding:0;
  }
  .alert ul li{
    list-style: none;
  }
</style>
</div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <h4>Welcome back !</h4>
      
        <p class="login-box-msg">Sign in to start your session</p>
        @include('messages.flash_messages')
        <form action="/admin-login" method="POST" class='admin-login-form' id='admin-login-form'>
            @csrf
        
            <div class="input-group mb-3">
            <input type="email" name="email" placeholder="Email" class="form-control" value="<?php if(isset($_COOKIE["email"])) { echo $_COOKIE["email"]; }else{ echo old('email'); } ?>" required>
            <div class="input-group-append">
                <div class="input-group-text">
                <span class="fas fa-envelope"></span>
                </div>
            </div>
            </div>
            <div class="input-group mb-3">
            <input type="password" name="password" placeholder="Password" class="form-control" value="<?php if(isset($_COOKIE["password"])) { echo $_COOKIE["password"]; }else{ echo old('password'); } ?>" required>
            <div class="input-group-append">
                <div class="input-group-text">
                <span class="fas fa-lock"></span>
                </div>
            </div>
            </div>
            <div class="row">
            <div class="col-12">
                <div class="icheck-primary">
                <input id="checkbox1" class="styled" type="checkbox" hidden name="remember" <?php if(isset($_COOKIE["email"])) { ?> checked <?php } ?>>
                <label for="checkbox1">
                    Remember Me
                </label>
                </div>
            </div>
            <!-- /.col -->
            
            
            <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
            <!-- /.col -->
            <div class="col-6">
                <a class="btn btn-info" href="{{url('password/reset')}}">Reset Password</a>
            </div>
            <!-- /.col -->
            </div>
        </form>
      <!-- /.social-auth-links -->

      {{--<p class="mb-1">
        <a href="#">I forgot my password</a>
      </p>--}}
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
@endsection




