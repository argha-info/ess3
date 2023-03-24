@extends('layouts.app')
@section('content')


<!-- breadcrumb-area start -->
<div class="breadcrumb-area">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="breadcrumb-inner d-flex justify-content-between">
                    <h2 class="page-title">Product</h2>
                    <ul class="page-list">
                        <li><a href="index.html">Home</a></li>
                        <li>Product Listing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- breadcrumb-area start -->

<!-- collection area start  -->
<div class="collection-area mt-5">
    <div class="container">
        <div class="row flex-row-reverse">
            <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="row">
                    <div class="col-lg-8 col-5">
                        <ul class="nav nav-pills shop-tab">
                            <li><a data-toggle="pill" href="#one" class="active"><i class="fa fa-th-large"></i></a></li>
                            <li><a data-toggle="pill" href="#two"><i class="fa fa-bars"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-7">
                        <form action="#">
                            <select class="form-control sort-select">
                                <option>Default sorting</option>
                                <option>Sort by popularity</option>
                                <option>Sort by average rating</option>
                                <option>Sort by latest</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                            </select>
                            <i class='bx bx-chevron-down'></i>
                        </form>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade in show active" id="one">
                        <div class="row">
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_1.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_2.jpg')}}" alt>
                                        <span class="new margin-top-35">New</span>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_3.jpg')}}" alt>
                                        <span class="new">New</span>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_4.jpg')}}" alt>
                                        <span class="out">Sold out</span>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_5.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_6.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                        <span class="sale">Sale! 13%</span>
                                        <div class="product-countdown clockdiv" data-countdown="2021/02/02">
                                        </div>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_7.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_8.jpg')}}" alt>
                                        <span class="new margin-top-35">New</span>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_9.jpg')}}" alt>
                                        <span class="new">New</span>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_10.jpg')}}" alt>
                                        <span class="out">Sold out</span>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_11.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_12.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                        <span class="sale">Sale! 13%</span>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_13.jpg')}}" alt>
                                        <span class="out">Sold out</span>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_14.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_15.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                        <span class="sale">Sale! 13%</span>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_16.jpg')}}" alt>
                                        <span class="out">Sold out</span>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_17.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3 ">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="product-style-03 margin-top-40">
                                    <div class="thumb">
                                        <img src="{{asset('front/assets/img/leggins_img_18.jpg')}}" alt>
                                        <ul class="cart-action">
                                            <li><a href="#"><i class='bx bx-cart'></i></a></li>
                                            <li><a href="#"><i class='bx bx-heart'></i></a></li>
                                        </ul>
                                        <span class="sale">Sale! 13%</span>
                                    </div>
                                    <div class="content text-center">
                                        <span class="brand">Brand: geek</span>
                                        <ul class="justify-content-center margin-bottom-20">
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        </ul>
                                        <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                        <div class="content-price d-flex align-self-center justify-content-center">
                                            <span class="new-price mb-3">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade list-item" id="two">
                        <div class="row product-style-03 margin-top-40">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="thumb mb-3">
                                    <img src="{{asset('front/assets/img/leggins_img_1.jpg')}}" alt>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-12">
                                <div class="content">
                                    <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                    <div class="content-price d-flex align-self-center">
                                        <span class="new-price">$450.00</span>
                                    </div>
                                    <ul class="margin-bottom-10">
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                    </ul>
                                    <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div class="btn-wrapper margin-top-20">
                                        <div class="add-to-cart">
                                            <a href="#"><i class='bx bx-cart'></i> Add to cart</a>
                                        </div>
                                        <div class="add-to-wishlist">
                                            <a href="#"><i class='bx bx-heart'></i> Add to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row product-style-03 margin-top-40">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="thumb mb-3">
                                    <img src="{{asset('front/assets/img/leggins_img_2.jpg')}}" alt>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-12">
                                <div class="content">
                                    <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                    <div class="content-price d-flex align-self-center">
                                        <span class="new-price">$450.00</span>
                                    </div>
                                    <ul class="margin-bottom-10">
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                    </ul>
                                    <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div class="btn-wrapper margin-top-20">
                                        <div class="add-to-cart">
                                            <a href="#"><i class='bx bx-cart'></i>Add to cart</a>
                                        </div>
                                        <div class="add-to-wishlist">
                                            <i class='bx bx-heart'></i> Add to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row product-style-03 margin-top-40">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="thumb mb-3">
                                    <img src="{{asset('front/assets/img/leggins_img_3.jpg')}}" alt>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-12">
                                <div class="content">
                                    <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                    <div class="content-price d-flex align-self-center">
                                        <span class="new-price">$450.00</span>
                                    </div>
                                    <ul class="margin-bottom-10">
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                    </ul>
                                    <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div class="btn-wrapper margin-top-20">
                                        <div class="add-to-cart">
                                            <a href="#"><i class='bx bx-cart'></i> Add to cart</a>
                                        </div>
                                        <div class="add-to-wishlist">
                                            <a href="#"><i class='bx bx-heart'></i> Add to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row product-style-03 margin-top-40">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="thumb mb-3">
                                    <img src="{{asset('front/assets/img/leggins_img_4.jpg')}}" alt>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-12">
                                <div class="content">
                                    <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                    <div class="content-price d-flex align-self-center">
                                        <span class="new-price">$450.00</span>
                                    </div>
                                    <ul class="margin-bottom-10">
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                    </ul>
                                    <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div class="btn-wrapper margin-top-20">
                                        <div class="add-to-cart">
                                            <a href="#"><i class='bx bx-cart'></i> Add to cart</a>
                                        </div>
                                        <div class="add-to-wishlist">
                                            <a href="#"><i class='bx bx-heart'></i>Add to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row product-style-03 margin-top-40">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="thumb mb-3">
                                    <img src="{{asset('front/assets/img/leggins_img_5.jpg')}}" alt>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-12">
                                <div class="content">
                                    <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                    <div class="content-price d-flex align-self-center">
                                        <span class="new-price">$450.00</span>
                                    </div>
                                    <ul class="margin-bottom-10">
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                    </ul>
                                    <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div class="btn-wrapper margin-top-20">
                                        <div class="add-to-cart">
                                            <a href="#"><i class='bx bx-cart'></i> Add to cart</a>
                                        </div>
                                        <div class="add-to-wishlist">
                                            <a href="#"><i class='bx bx-heart'></i>Add to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row product-style-03 margin-top-40">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="thumb mb-3">
                                    <img src="{{asset('front/assets/img/leggins_img_6.jpg')}}" alt>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-12">
                                <div class="content">
                                    <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                    <div class="content-price d-flex align-self-center">
                                        <span class="new-price">$450.00</span>
                                    </div>
                                    <ul class="margin-bottom-10">
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                    </ul>
                                    <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div class="btn-wrapper margin-top-20">
                                        <div class="add-to-cart">
                                            <a href="#"><i class='bx bx-cart'></i> Add to cart</a>
                                        </div>
                                        <div class="add-to-wishlist">
                                            <a href="#"><i class='bx bx-heart'></i>Add to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row product-style-03 margin-top-40">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="thumb">
                                    <img src="{{asset('front/assets/img/leggins_img_7.jpg')}}" alt>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-12">
                                <div class="content">
                                    <h6 class="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                                    <div class="content-price d-flex align-self-center">
                                        <span class="new-price">$450.00</span>
                                    </div>
                                    <ul class="margin-bottom-10">
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                        <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                                    </ul>
                                    <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div class="btn-wrapper margin-top-20">
                                        <div class="add-to-cart">
                                            <a href="#"><i class='bx bx-cart'></i>Add to cart</a>
                                        </div>
                                        <div class="add-to-wishlist">
                                            <a href="#"><i class='bx bx-heart'></i>Add to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between pagination">
                            <h6>Showing 1 to 12 of 19 products</h6>
                            <ul>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 margin-top-20">
                <div class="widget search-widget">
                    <form action="#">
                        <button type="submit"><i class='bx bx-search'></i></button>
                        <input type="text" placeholder="Search brand" name="search">
                    </form>
                </div>
                <div class="widget categories-widget">
                    <div class="accordion-style-2" id="accordionExample1">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <p class="mb-0">
                                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">Categories
                                    </a>
                                </p>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                data-parent="#accordionExample1">
                                <div class="card-body">
                                    <form action="#">
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="customCheck">Leggins [124]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="customCheck2">Jeggings
                                                [293]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="customCheck3">Palazzo [125]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="customCheck4">Kurti [698]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="customCheck5">Joggers
                                                [12456]</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget brand-widget">
                    <div class="accordion-style-2" id="accordionExample2">
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <p class="mb-0">
                                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseTwo"
                                        aria-expanded="true" aria-controls="collapseTwo">Product Brand</a>
                                </p>
                            </div>
                            <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo"
                                data-parent="#accordionExample2">
                                <div class="card-body">
                                    <form action="#">
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck">Brand1 [124]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck2">Brand2 [293]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck3">Brand3 [125]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck4">Brand4 [698]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck5">Brand5
                                                [12456]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck6">Brand6
                                                [2654]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck7">Brand7 [29]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck8">Brand8
                                                [1136]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck9">Brand9
                                                [2987]</label>
                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="pcustomCheck10">Brand10
                                                [536]</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget ptype-widget">
                    <div class="accordion-style-2" id="accordionExample3">
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <p class="mb-0">
                                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseThree"
                                        aria-expanded="true" aria-controls="collapseThree">Product Type</a>
                                </p>
                            </div>
                            <div id="collapseThree" class="collapse show" aria-labelledby="headingThree"
                                data-parent="#accordionExample3">
                                <div class="card-body">
                                    <form action="#">

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="tcustomCheck10">Girls [87]</label>
                                        </div>

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input">
                                            <label class="custom-control-label" for="tcustomCheck12">Women
                                                [1387]</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget price-widget">
                    <div class="accordion-style-2" id="accordionExample4">
                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <p class="mb-0">
                                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseFour"
                                        aria-expanded="true" aria-controls="collapseFour">Filter by price</a>
                                </p>
                            </div>
                            <div id="collapseFour" class="collapse show" aria-labelledby="headingFour"
                                data-parent="#accordionExample4">
                                <div class="price-range">
                                    <div class="price-input">
                                        <div class="field">
                                            <input type="number" class="input-min" value="2500">
                                        </div>
                                        <div class="separator">-</div>
                                        <div class="field">
                                            <input type="number" class="input-max" value="7500">
                                        </div>
                                    </div>
                                    <div class="slider">
                                        <div class="progress"></div>
                                    </div>
                                    <div class="range-input">
                                        <input type="range" class="range-min" min="0" max="10000" value="2500"
                                            step="100">
                                        <input type="range" class="range-max" min="0" max="10000" value="7500"
                                            step="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget color-widget">
                    <div class="accordion-style-2" id="accordionExample5">
                        <div class="card">
                            <div class="card-header" id="headingFive">
                                <p class="mb-0">
                                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseFive"
                                        aria-expanded="true" aria-controls="collapseFive">Color</a>
                                </p>
                            </div>
                            <div id="collapseFive" class="collapse show" aria-labelledby="headingFive"
                                data-parent="#accordionExample5">
                                <ul class="color-list">
                                    <li title="Blue"><a href="#"></a></li>
                                    <li title="Black"><a href="#"></a></li>
                                    <li title="Color"><a href="#"></a></li>
                                    <li title="Color"><a href="#"></a></li>
                                    <li title="Color"><a href="#"></a></li>
                                    <li title="Color"><a href="#"></a></li>
                                    <li title="Color"><a href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget size-widget">
                    <div class="accordion-style-2" id="accordionExample6">
                        <div class="card">
                            <div class="card-header" id="headingSix">
                                <p class="mb-0">
                                    <a href="#" role="button" data-toggle="collapse" data-target="#collapseSix"
                                        aria-expanded="true" aria-controls="collapseSix">Size</a>
                                </p>
                            </div>
                            <div id="collapseSix" class="collapse show" aria-labelledby="headingSix"
                                data-parent="#accordionExample6">
                                <div class="card-body">
                                    <ul class="size-list">
                                        <li><a href="#">38</a></li>
                                        <li><a href="#">39</a></li>
                                        <li><a href="#">40</a></li>
                                        <li><a href="#">41</a></li>
                                        <li><a href="#">42</a></li>
                                        <li><a href="#">43</a></li>
                                        <li><a href="#">S</a></li>
                                        <li><a href="#">M</a></li>
                                        <li><a href="#">X</a></li>
                                        <li><a href="#">XL</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget seller-widget">
                    <h4 class="widget-title">Best sellers</h4>
                    <div class="seller-content">
                        <div class="single-seller-content d-flex">
                            <div class="thumb">
                                <img src="{{asset('front/assets/img/image-1.jpg')}}" alt="">
                            </div>
                            <div class="content">
                                <h6>Men's Crew T-shirt</h6>
                                <span>$35.00</span>
                            </div>
                        </div>
                        <div class="single-seller-content d-flex">
                            <div class="thumb">
                                <img src="{{asset('front/assets/img/image-2.jpg')}}" alt>
                            </div>
                            <div class="content">
                                <h6>Men's V-neck Pima</h6>
                                <span>$35.00</span>
                            </div>
                        </div>
                        <div class="single-seller-content d-flex">
                            <div class="thumb">
                                <img src="{{asset('front/assets/img/image-3.jpg')}}" alt>
                            </div>
                            <div class="content">
                                <h6>Men's Crew T-shirt</h6>
                                <span>$35.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget">
                    <a href="#"><img src="{{asset('front/assets/img/image_1.jpg')}}" alt></a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- collection area end  -->

<!-- delivery area start  -->
<div class="delivery-area pt-4">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-lg-4">
                <div class="single-delivery text-center">
                    <i class='bx bxs-truck'></i>
                    <h6>FREE SHIPPING, RETURN</h6>
                    <p>Free Shipping On All US Orders</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="single-delivery text-center">
                    <i class='bx bx-money-withdraw'></i>
                    <h6>MONEY BACK GUARANTEE</h6>
                    <p>30 Days Money Back Guarantee</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="single-delivery text-center">
                    <i class='bx bx-headphone'></i>
                    <h6>1-800-333-44-55</h6>
                    <p>24/7 Days Support</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- delivery area end  -->

@endsection