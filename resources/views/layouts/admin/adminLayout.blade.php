<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@isset($title) {{ $title.' | ' }} @endisset {{ config('app.name') }}</title>
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="{{ asset('admin/plugins/fontawesome-free/css/all.min.css') }}">
  <link rel="stylesheet" href="{{ asset('admin/plugins/css/OverlayScrollbars.min.css') }}">
  <!-- IonIcons -->
  <link rel="stylesheet" href="{{ asset('admin/plugins/ionic/ionicons.min.css') }}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('admin/dist/css/adminlte.min.css') }}">
  <link rel="stylesheet" href="{{ asset('admin/dist/css/custom.css') }}">
  <link rel="stylesheet" href="{{ asset('admin/plugins/icheck-bootstrap/icheck-bootstrap.css') }}">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <link rel="stylesheet" href="{{ asset('common/css/notify.css') }}">
  <!--- Internal Sweet-Alert css-->
  <link href="{{ asset('admin/plugins/sweet-alert/sweetalert.css') }}" rel="stylesheet">
  <!-- fab -->
  <link rel="icon" type="image/png" sizes="96x96" href="{{ url('image/favicon.png') }}">

  <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <!-- fab -->
  @stack('stylesheet')
  <script>
    var globalTokenAdmin = "{{csrf_token()}}";
    var appUrl           = "{{ url('/') }}";
  </script>
</head>

<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
<div class="wrapper">
  <!-- Preloader -->
  {{-- <div id="page-preloader" class="loader d-flex align-items-center justify-content-center animated">
    <span class="">loading</span>
  </div> --}}
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- SEARCH FORM -->


    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
          <i class="far fa-user"></i>
          <span class="badge badge-warning navbar-badge"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header"></span>
          <div class="dropdown-divider"></div>
          <a href="{{ url('/') }}" class="dropdown-item" target="_blank">
            <i class="fa fa-globe mr-2"></i> Visit Site

          </a>
          <div class="dropdown-divider"></div>

          <a href="{{ url('logout') }}" class="dropdown-item" onclick="event.preventDefault();
          document.getElementById('logout-form').submit();">
            <i class="fa fa-power-off"></i> Logout
          </a>
          <form id="logout-form" action="{{ url('logout') }}" method="POST" class="d-none">
            @csrf
          </form>
          <div class="dropdown-divider"></div>
        </div>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  @if(Auth::user()->user_type == '1')
    @include('layouts.admin.leftPanelAdminLayout')
  @else
    @include('layouts.admin.leftPanelLayout')
  @endif

  <!-- Content Wrapper. Contains page content -->
  @yield('adminContent')

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <strong>All Rights Reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 1.0
    </div>
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->



<!-- jQuery -->
<script src="{{ asset('admin/plugins/jquery/jquery.min.js') }}"></script>
<!-- Bootstrap -->
<script src="{{ asset('admin/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- AdminLTE -->
<script src="{{ asset('admin/dist/js/adminlte.js') }}"></script>
<!-- overlayScrollbars -->
<script src="{{ asset('admin/dist/js/jquery.overlayScrollbars.min.js') }}"></script>

<!-- OPTIONAL SCRIPTS -->
<script src="{{ asset('admin/plugins/chart.js/Chart.min.js') }}"></script>
<script src="{{ asset('admin/dist/js/demo.js') }}"></script>
<script src="{{ asset('admin/dist/js/pages/dashboard3.js') }}"></script>

 <!-- jquery validator -->
 <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>
 <script src=" https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/additional-methods.min.js"></script>

 
<!-- Sweet-alert js  -->
<script src="{{ asset('admin/plugins/sweet-alert/sweetalert.min.js') }}"></script>
<script src="{{ asset('admin/plugins/sweet-alert/jquery.sweet-alert.js') }}"></script>
<script src="{{ asset('admin/plugins/sweet-alert/sweetalert.min.js') }}"></script>
<script src="{{ asset('admin/dist/js/sweet-alert.js') }}"></script>

<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script>
  $( function() {
    $( ".datepicker" ).datepicker({
      dateFormat: "dd-mm-yy", 
    });
  } );
  setTimeout(function() {  
    window.onscroll = function() {};
    $('#page-preloader').addClass('slideOutUp');
    setTimeout(function() {
        $('#page-preloader').addClass('hidden');
    }, 700);
  }, 1000);
</script>
@stack('scripts')
</body>
</html>
