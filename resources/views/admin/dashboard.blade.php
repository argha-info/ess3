@extends('layouts.admin.adminLayout')

@section('adminContent')
<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
       <div class="row">
         

        <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small card -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>{{ $totalEnquery ?? '0' }}</h3>
                <p>Enquery</p>
              </div>
              <div class="icon">
                <i class="fa fa-question"></i>
              </div>
              <a href="{{ url('admin/enquiry') }}" class="small-box-footer"> More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-6">
            <div class="small-box bg-purple">
              <div class="inner">
                <h3>{{ $totalTestimonial?? '0' }}</h3>
                <p>Testimonials</p>
              </div>
              <div class="icon">
                <i class="fa fa-briefcase"></i>
              </div>
              <a href="{{ url('admin/testimonial') }}" class="small-box-footer"> More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-6">
            <!-- small card -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ $totalRunningProjects ?? '0' }}</h3>
                <p>Running Project</p>
              </div>
              <div class="icon">
                <i class="fa fa-graduation-cap"></i>
              </div>
              <a href="{{ url('admin/running-projects') }}" class="small-box-footer"> More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-6">
            <!-- small card -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>{{ $totalCompleteProjects ?? '0' }}</h3>
                <p>Complete Projects</p>
              </div>
              <div class="icon">
                <i class="fa fa-graduation-cap"></i>
              </div>
              <a href="{{ url('admin/past-projects') }}" class="small-box-footer"> More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-6">
            <div class="small-box bg-purple">
              <div class="inner">
                <h3>{{ $totalPages ?? '0' }}</h3>
                <p>Pages</p>
              </div>
              <div class="icon">
                <i class="fa fa-file"></i>
              </div>
              <a href="{{ url('admin/pages') }}" class="small-box-footer"> More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          {{-- <div class="col-lg-4 col-6">
            <!-- small card -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ $totalNews ?? '0' }}</h3>
                <p>News</p>
              </div>
              <div class="icon">
                <i class="fa far fa-newspaper"></i>
              </div>
              <a href="{{ url('admin/blog/news') }}" class="small-box-footer"> More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div> --}}


        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  @endsection