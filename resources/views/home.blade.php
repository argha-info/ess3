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
                @php $imagePath = asset('uploads/banner/'.$banner->banner); @endphp
                @endif
                <!-- Slide 1 -->
                <div class="carousel-item active" style="background-image: url({{$imagePath}})">
                    <div class="carousel-container">
                        <div class="carousel-content container">
                            <h4 class="animate__animated animate__fadeInDown">{{$banner->sub_title}}</h4>
                            <h2 class="animate__animated animate__fadeInDown">{{$banner->title}}</h2>

                            <h6 class="animate__animated animate__fadeInUp">{{$banner->content}}</h6>
                            <a href="{{$banner->banner_link}}"
                                class="btn-get-started animate__animated animate__fadeInUp scrollto">View More</a>
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

<main id="main">

    <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="row no-gutters">
                <div class="col-lg-6">
                    @foreach($homeabout as $homeabout)
                    
                    @if($homeabout->homeabout !='' &&
                    file_exists(public_path('uploads/homeabout/'.$homeabout->homeabout)))
                    @php $imagePath = asset('uploads/homeabout/'.$homeabout->homeabout); @endphp
                   
                    <img src="{{$imagePath}}" class="img-fluid" alt="" width="100%">

                </div>

                <div class="col-lg-6 d-flex flex-column justify-content-center about-content">

                    <div class="section-title">
                        <h3>{{$homeabout->sub_title}}</h3>
                        <h2>{{$homeabout->title}}</h2>
                        <p>{{$homeabout->content}}</p>
                    </div>
                    <a href="{{$homeabout->about_link}}" class="abtBtn">About us</a>
                    @endif
                    @endforeach
                </div>
            </div>

        </div>
    </section><!-- End About Us Section -->
    <!-- ======= New Arrival Section ======= -->

    <section class="new-arrival" data-aos="fade-up">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                @foreach($newarrivals as $newarrivals)
                @if ($banner->status ==1)
                <div class="col-lg-6">
                    <div class="arrival-left">
                        <h3>{{$newarrivals->title}}</h3>
                        <p>{{$newarrivals->content}}</p>

                        <a href="{{$newarrivals->newarrivals_link}}" class="explore-btn">EXPLORE MORE</a>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="arrival-right">
                        @if($newarrivals->newarrivals !='' &&
                        file_exists(public_path('uploads/newarrivals/'.$newarrivals->newarrivals)))
                        @php $imagePath = asset('uploads/newarrivals/'.$newarrivals->newarrivals); @endphp
                        @endif
                        <div class="slider arrival-slider">
                            @for($i=0;$i
                            <=4;$i++) <img src="{{$imagePath}}" alt="Img" />
                            @endfor
                            {{-- <img src="{{url('frontend/img/arrival-slider-mg-1.png')}}" alt="Img" />
                            <img src="{{url('frontend/img/arrival-slider-mg-1.png')}}" alt="Img" />
                            <img src="{{url('frontend/img/arrival-slider-mg-1.png')}}" alt="Img" />
                            <img src="{{url('frontend/img/arrival-slider-mg-1.png')}}" alt="Img" /> --}}

                        </div>

                        @endif
                        @endforeach
                    </div>
                </div>

            </div>
        </div>
    </section>




    <!-- ======= Our Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="section-title">
                <h2>Products gallery</h2>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <ul id="portfolio-flters">
                        <li data-filter="*" class="filter-active">All</li>
                        @foreach($categories as $category)
                        <li data-filter=".filter-{{$category->category_name}}">{{$category->category_name}}</li>
                        @endforeach
                        <!-- <li data-filter=".filter-palazzo">Palazzo</li>
                        <li data-filter=".filter-leggins">leggins</li>
                        <li data-filter=".filter-kurti">kurti</li>
                        <li data-filter=".filter-jeggings">jeggings</li>
                        <li data-filter=".filter-capris">capris</li> -->
                    </ul>
                </div>
            </div>

            <div class="row portfolio-container">

                @foreach($categories as $category)
                @foreach($category->products as $product)

                <div class="col-lg-3 col-md-3 portfolio-item filter-{{$category->category_name}}">
                    <div class="portHolder">
                        <div class="portfolio-wrap">
                            <img src="{{asset('front/assets/img/portfolio/palazzo-1.png')}}" class="img-fluid" alt="">
                            <a href="{{asset('front/assets/img/portfolio/palazzo-1.png')}}"
                                data-gallery="portfolioGallery" class="portfolio-lightbox" title="palazzo"><i
                                    class="bi bi-arrows-move"></i></a>
                            <div class="portfolio-info">
                                <h4>{{$category->category_name}}</h4>
                                <p>{{$product->short_description}}</p>

                            </div>

                        </div>
                        <h3><a href="">{{$product->product_name}}</a></h3>

                    </div>
                </div>
                @endforeach
                @endforeach


                

            </div>

            <a href="#" class="viewBtn2">view all</a>
        </div>
    </section><!-- End Our Portfolio Section -->




    @endsection