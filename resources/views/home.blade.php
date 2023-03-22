@extends('layouts.app')
@section('content')

 @if(!empty($bannerList))
   <!-- ======= Hero Section ======= -->
   <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">
            @foreach($bannerList as $banner)

            @if($banner->banner !='' && file_exists(public_path('uploads/banner/'.$banner->banner)))
                @php $imagePath =  asset('uploads/banner/'.$banner->banner); @endphp
            @endif
          <!-- Slide 1 -->
          <div class="carousel-item active" style="background-image: url({{$imagePath}})">
            <div class="carousel-container">
              <div class="carousel-content container">
              <h4 class="animate__animated animate__fadeInDown">{{$banner->sub_title}}</h4>
                <h2 class="animate__animated animate__fadeInDown">{{$banner->title}}</h2>

                <h6 class="animate__animated animate__fadeInUp">{{$banner->content}}</h6>
                <a href="{{$banner->banner_link}}" class="btn-get-started animate__animated animate__fadeInUp scrollto">View More</a>
              </div>
            </div>
          </div>
          @endforeach
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero -->
  @endif
@endsection
