@extends('layouts.admin.adminLayout')

@section('adminContent')
<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">{{ $title ?? '' }}</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">{{ $title ?? '' }}</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
        <div class="row">
          <div class="col-lg-12">
            @include('messages.flash_messages')
            <div class="card">
            <div class="card-header">
              <h3 class="card-title">{{ $title ?? '' }}</h3>
              <a href="{{ route('admin.homeabout.create') }}" class="float-right btn btn-info add_role">Add {{ $title ?? '' }}</a>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="" class="table table-bordered table-striped datatable">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>SubTitle</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          </div>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  @push('stylesheet')
  <link rel="stylesheet" href="{{ asset('admin/plugins/datatables-bs4/css/dataTables.bootstrap4.css') }}">
  <link rel="stylesheet" href="{{ asset('common/css/custom.css') }}">
  <link rel="stylesheet" href="{{ asset('common/css/jquery-confirm.min.css') }}">

  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.2/css/buttons.dataTables.min.css">

  @endpush
  @push('scripts')
  <script src="{{ asset('admin/plugins/datatables/jquery.dataTables.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/datatables-bs4/js/dataTables.bootstrap4.js') }}"></script>
  <script src="{{ asset('common/js/jquery-confirm.min.js')}}"></script>
  <script src="{{ asset('common/js/custom.js') }}"></script>

<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.2/js/buttons.html5.min.js"></script>

  <script>
    $(document).ready(function(){
        // datatable
        var table = $('.datatable').DataTable({
            processing: true,
            serverSide: true,
            dom: 'Bfrtip',
            buttons: [
              // {
              //     extend: 'pdf',
              //     footer: true,
              //     exportOptions: {
              //           columns: [1,2,3]
              //     }
              // },
              {
                  extend: 'csv',
                  exportOptions: {
                        columns: [1,2,3]
                  }
                  // footer: false

              },
              {
                  extend: 'excel',
                  exportOptions: {
                        columns: [1,2,3]
                  }
                  // footer: false
              }
            ],
            ajax: "{{ route('homeabout-all-data') }}",
            columns: [
                // {data: 'DT_RowIndex', name: 'DT_RowIndex'},
                {data: 'banner_image', name: 'banner_image'},
                {data: 'title', name: 'title'},
                {data: 'sub_title', name: 'sub_title'},
                {data: 'status', name: 'status'},
                {data: 'action', name: 'action', orderable: true, searchable: true},
            ]
        });
        // end datatable
        $("[rel=tooltip]").tooltip({ placement: 'top'});





        $('body').on('click','.delete',function(){
          var deleteId = $(this).attr('deleteid');
          var that = $(this);
          swal({
                title: "Do You Want to Delete it?",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn btn-danger",
                confirmButtonText: "Yes, Delete it!",
                closeOnConfirm: false
              },
          function(){
            $.ajax({
                type:'POST',
                url: "{{route('admin.homeabout-delete')}}",
                async:false,
                data:  { "deleteId":deleteId,"_token": "{{ csrf_token() }}","type":'banner'},
                dataType: "json",
                success: function(data) {
                    if(data.success == 1){
                      swal(data.success_message);
                        setTimeout(function() {
                          //location.reload();
                          that.parents('tr').remove();
                        }, 2000);
                    }
                    else{

                      }
                  }
            });
          });
        });
    });


  </script>
  @endpush
  @endsection
