<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ url('/') }}" class="brand-link" target="_blank">
     
      <img  src="{{ asset('front/assets/img/logo.png') }}" alt="{{ $title ?? config('app.name') }}" width="50px"/>
  
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
          <li class="nav-item">
              <a href="{{route('admin.category')}}"
                  class="nav-link <?php if($active == 'category') echo 'active';?>">
                  <i class="nav-icon far fa-image"></i>
                  <p>
                      Category List
                  </p>
              </a>
          </li>
      
       </ul>
     </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>