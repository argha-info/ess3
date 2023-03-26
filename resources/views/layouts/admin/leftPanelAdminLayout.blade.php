<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ url('/') }}" class="brand-link" target="_blank">

        <img src="{{ asset('front/assets/img/logo.png') }}" alt="{{ $title ?? config('app.name') }}" width="50px" />

        <span class="brand-text">ESS3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <!-- Sidebar Menu -->




        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="{{ url('admin/dashboard') }}" class="nav-link @if($active == 'dashboard') active @endif">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                            <!-- <i class="right fas fa-angle-left"></i> -->
                        </p>
                    </a>
                </li>
                <li
                    class="nav-item has-treeview @if($active == 'banner' || $active == 'homeabout'||$active == 'newarrivals') menu-open @endif">
                    <a href="#" class="nav-link">
                        <i class="nav-icon far fa-address-card"></i>
                        <p> Manage Homepage
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">

                        <li class="nav-item">
                            <a href="{{route('admin.banner')}}"
                                class="nav-link @if($subActive == 'banner_list' || $subActive=='add_banner') active @endif">
                                <i class="nav-icon fas fa-th-list"></i>
                                <p> Banner Section</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{route('admin.homeabout')}}"
                                class="nav-link @if($subActive == 'homeabout_list' || $subActive=='add_homeabout' || $subActive=='edit_homeabout') active @endif">
                                <i class="nav-icon fas fa-th-list"></i>
                                <p> Homeabout Section</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{route('admin.newarrivals')}}"
                                class="nav-link @if($subActive == 'newarrivals_list' || $subActive=='add_NewArrivals' || $subActive=='edit_NewArrivals') active @endif">
                                <i class="nav-icon fas fa-th-list"></i>
                                <p> Newarrivals Section</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="{{route('admin.about')}}"
                        class="nav-link @if($subActive == 'about_list' || $subActive == 'add_About'||$subActive == 'edit_About') active @endif">
                        <i class="nav-icon far fa-address-card"></i>

                        <p>
                          Manage Aboutpage
                        </p>
                    </a>

                </li>
                <li class="nav-item">
                    <a href="{{route('admin.contactus')}}"
                        class="nav-link <?php if($active == 'contactus') echo 'active';?>">
                        <i class="nav-icon far fa-image"></i>
                        <p>
                          Manage Contactpage
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('admin.category')}}"
                        class="nav-link <?php if($active == 'category') echo 'active';?>">
                        <i class="nav-icon far fa-image"></i>
                        <p>
                          Manage Category List
                        </p>
                    </a>
                </li>
                <li class="nav-item has-treeview @if($active == 'product') menu-open @endif">
                    <a href="#" class="nav-link">
                        <i class="nav-icon far fa-image"></i>
                        <p>
                            Manage Product List
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">

                        <li class="nav-item">
                            <a href="{{route('admin.product')}}"
                                class="nav-link @if($subActive == 'product_list' || $subActive == 'add_product') active @endif">
                                <i class="nav-icon fas fa-th-list"></i>
                                <p> View Product</p>
                            </a>
                        </li>

                    </ul>
                </li>
                
                <li class="nav-item">
                    <a href="{{route('admin.color')}}" class="nav-link <?php if($active == 'color') echo 'active';?>">
                        <i class="nav-icon far fa-image"></i>
                        <p>
                            Colors
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('admin.size')}}" class="nav-link <?php if($active == 'size') echo 'active';?>">
                        <i class="nav-icon far fa-image"></i>
                        <p>
                            Sizes
                        </p>
                    </a>
                </li>


                </li>

            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>