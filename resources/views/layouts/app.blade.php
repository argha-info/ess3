<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>ESS3</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="{{asset('front/assets/img/favicon.png')}}" rel="icon">
    <link href="{{asset('front/assets/img/apple-touch-icon.png')}}" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i,900"
        rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{asset('front/assets/css/animate.min.css')}}" rel="stylesheet">
    <link href="{{asset('front/assets/css/aos.css')}}" rel="stylesheet">
    <link href="{{asset('front/assets/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('front/assets/css/bootstrap-icons.css')}}" rel="stylesheet">
    <link href="{{asset('front/assets/css/boxicons.min.css')}}" rel="stylesheet">
    <link href="{{asset('front/assets/css/font-awesome.min.css')}}" rel="stylesheet">
    <link href="{{asset('front/assets/css/glightbox.min.css')}}" rel="stylesheet">
    <link href="{{asset('front/assets/css/swiper-bundle.min.css')}}" rel="stylesheet">
    <link href="{{asset('front/assets/css/slick.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('front/assets/css/jquery.fancybox.min.css')}}">
    <!-- Template Main CSS File -->
    <link href="{{asset('front/assets/css/style.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('front/assets/css/responsive.css')}}">

</head>

<body>

    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center">

            <div class="logo me-auto">
                <a href="{{url('/')}}"><img src="{{asset('front/assets/img/logo.png')}}" alt="" class="img-fluid"></a>
            </div>

            <nav id="navbar" class="navbar">
                <ul>
                    <li><a class="nav-link scrollto active" href="{{url('/')}}">Home</a></li>
                    <li class="dropdown"><a href="#"><span>Category</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="{{route('product-list')}}">Leggings</a></li>
                            <li><a href="{{route('product-list')}}">Jeggings</a></li>
                            <li><a href="{{route('product-list')}}">Plazo</a></li>
                            <li><a href="{{route('product-list')}}">Kurtis</a></li>
                        </ul>
                    </li>
                    <li><a class="nav-link scrollto" href="{{route('product-list')}}">Featured Products</a></li>
                    <li><a class="nav-link scrollto" href="#">Portfolio</a></li>
                    <li><a class="nav-link scrollto" href="#">Articles</a></li>
                    <li><a class="nav-link scrollto" href="{{url('/about')}}">About Us</a></li>
                    <li><a class="nav-link scrollto" href="{{url('/contact')}}">Contact Us</a></li>
                    <li><a href="#search" class="searchIcon"><i class="bi bi-search"></i> </a></li>
                </ul>

                <div id="search">
                    <span class="close">X</span>
                    <form role="search" id="searchform" action="/search" method="get">
                        <input value="" name="q" type="search" placeholder="Search your product" />
                    </form>
                </div>


                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->

        </div>
    </header><!-- End Header -->

    @yield('content')
    <!-- ======= Footer ======= -->
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-info">
                        <h3>About Us</h3>
                        <p>{{$about->content}}</p>


                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Featured Product</a></li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Customer Care</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Faqs</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-info">
                        <h4>Get In Touch</h4>
                        <p><img src="{{ asset('front/assets/img/ic-1.png') }}" alt="Ic">
                        {{$contact->location}}
                        </p>
                        <p><img src="{{ asset('front/assets/img/ic-2.png') }}" alt="Ic"><a
                                href="tel:06291579939">{{$contact->company_phone}}</a></p>
                        <p><img src="{{ asset('front/assets/img/ic-3.png') }}" alt="Ic"><a
                                href="mailto:emailaddress@domain.com"> {{$contact->email}}</a></p>
                        <p><img src="{{ asset('front/assets/img/ic-4.png') }}" alt="Ic"><a
                                href="https://ess3.co.in"> {{$contact->weblink}}</a></p>


                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                <div class="social-links mb-3">
                    <a href="{{$contact->facebook_link}}" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="{{$contact->twitter_link}}" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="{{$contact->instagram_link}}" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="{{$contact->youtube_link}}" class="youtube"><i class="fa fa-youtube"></i></a>
                </div>
                &copy; Copyright 2023 <strong><span>ESS3</span></strong>. All Rights Reserved.
            </div>

        </div>
    </footer><!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>


    <script src="{{asset('front/assets/js/jquery-2.2.0.min.js')}}"></script>
    <!-- Vendor JS Files -->
    <script src="{{asset('front/assets/js/purecounter_vanilla.js')}}"></script>
    <script src="{{asset('front/assets/js/aos.js')}}"></script>
    <script src="{{asset('front/assets/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('front/assets/js/glightbox.min.js')}}"></script>
    <script src="{{asset('front/assets/js/isotope.pkgd.min.js')}}"></script>
    <script src="{{asset('front/assets/js/swiper-bundle.min.js')}}"></script>
    <script src="{{asset('front/assets/js/slick.min.js')}}"></script>
    <!-- Template Main JS File -->
    <script src="{{asset('front/assets/js/main.js')}}"></script>
    <!-- all plugins here -->
    <script src="{{asset('front/assets/js/vendor.js')}}"></script>
    <script src="{{ asset('front/assets/js/appear.min.js') }}"></script>
</body>

</html>
