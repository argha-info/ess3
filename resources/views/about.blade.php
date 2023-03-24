@extends('layouts.app')
@section('content')
    <!-- breadcrumb-area start -->
    <div class="breadcrumb-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="breadcrumb-inner d-flex justify-content-between">
                <h2 class="page-title">About</h2>
                <ul class="page-list">
                  <li><a href="{{url('/')}}">Home</a></li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- breadcrumb-area start -->

          <!-- ======= About Section ======= -->
          <section id="about" class="about mb-2">
              <div class="container" data-aos="fade-up">

                <div class="row">
                  <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    @if($about->about !='' && file_exists(public_path('uploads/about/'.$about->about)))
                    @php $imagePath =  asset('uploads/about/'.$about->about); @endphp
                    @endif
                    <img src="{{$imagePath}}" class="img-fluid" alt="">
                  </div>
                  <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                    <h3>{{$about->title}}</h3>
                    <p>
                        {{$about->content}}
                    </p>
                  </div>
                </div>

              </div>
            </section><!-- End About Section -->


      <!-- delivery area start  -->
      <div class="delivery-area pt-4">
          <div class="container">
              <div class="row no-gutters">
                  <div class="col-lg-4">
                      <div class="single-delivery text-center">
                        <i class='bx bxs-truck' ></i>
                          <h6>FREE SHIPPING, RETURN</h6>
                          <p>Free Shipping On All US Orders</p>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="single-delivery text-center">
                        <i class='bx bx-money-withdraw' ></i>
                          <h6>MONEY BACK GUARANTEE</h6>
                          <p>30 Days Money Back Guarantee</p>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="single-delivery text-center">
                        <i class='bx bx-headphone' ></i>
                          <h6>{{$contact->support_phone}}</h6>
                          <p>24/7 Days Support</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- delivery area end  -->

@endsection
