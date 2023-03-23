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
                        <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
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
                        <a href="{{ route('admin.product.addVarient', $encryptedId) }}" class="float-right btn btn-info add_role">Add Varient</a>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">Product Name</label>
                                <p>{{$product->product_name}}</p>
                            </div>
                            <div class="col-md-6">
                                <label for="">Short Description</label>
                                <p>{{$product->short_description}}</p>
                            </div>
                            <div class="col-md-6">
                                <label for="">Product Specification</label>
                                <p>{{$product->product_specification}}</p>
                            </div>
                            <div class="col-md-6">
                                <label for="">Manufacturer Details</label>
                                <p>{{$product->manufacturer_details}}</p>
                            </div>
                            <div class="col-md-6">
                                <label for="">Regular Price</label>
                                <p>{{$product->regular_price}}</p>
                            </div>
                            <div class="col-md-6">
                                <label for="">Discount Price</label>
                                <p>{{$product->discount_price}}</p>
                            </div>
                        </div>
                                
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="" class="table table-bordered datatable" style="width:100%">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Regular Price</th>
                                    <th>Discount Price</th>
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
$(document).ready(function() {
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
                    columns: [1, 2, 3]
                }
                // footer: false

            },
            {
                extend: 'excel',
                exportOptions: {
                    columns: [1, 2, 3]
                }
                // footer: false
            }
        ],
        ajax: "{{ route('admin.product-all-data') }}",
        columns: [
            // {data: 'DT_RowIndex', name: 'DT_RowIndex'},
            {
                data: 'product_name',
                name: 'Product Name'
            },
            {
                data: 'regular_price',
                name: 'Regular Price'
            },   
            {
                data: 'discount_price',
                name: 'Discount Price'
            },   
            {
                data: 'status',
                name: 'tatus'
            },
            {
                data: 'action',
                name: 'action',
                orderable: true,
                searchable: true
            },
        ]
    });
    // end datatable
    $("[rel=tooltip]").tooltip({
        placement: 'top'
    });


    $('body').on('click', '.delete', function() {
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
            function() {
                $.ajax({
                    type: 'POST',
                    url: "",
                    async: false,
                    data: {
                        "deleteId": deleteId,
                        "_token": "{{ csrf_token() }}",
                        "type": 'banner'
                    },
                    dataType: "json",
                    success: function(data) {
                        if (data.success == 1) {
                            swal(data.success_message);
                            setTimeout(function() {
                                //location.reload();
                                that.parents('tr').remove();
                            }, 2000);
                        } else {

                        }
                    }
                });
            });
    });
});
</script>
@endpush
@endsection