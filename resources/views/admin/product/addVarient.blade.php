@extends('layouts.admin.adminLayout')
@push('stylesheet')
<link rel="stylesheet" href="{{ asset('common/css/custom.css') }}">
@endpush
@section('adminContent')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-2">
                    <div class="card card-info">

                        <!-- /.card-header -->
                        <!-- form start -->
                        @include('messages.flash_messages')
                        <form class="" action="{{ route('admin.product.store') }}" enctype='multipart/form-data'
                            method="POST">
                            @csrf

                            <div class="card-header">
                                <h3 class="card-title">Add varient for - <b>{{$title}}</b></h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="title">Select Color <strong style="color:red">*</strong></label>
                                            <select class="form-control" name="color_id" id="color_id" required>
                                                <option value="">Select Color</option>
                                                @foreach($colors as $color)
                                                    <option value="{{ $color->id }}">{{ $color->color_name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Select Size <strong style="color:red">*</strong></label>
                                            <select class="form-control" name="size_id" id="size_id" multiple required>
                                                <option value="">Select Size</option>
                                                @foreach($sizes as $size)
                                                    <option value="{{ $size->id }}">{{ $size->size_name }}</option>
                                                @endforeach
                                            </select>
                                            <small class="text-muted">(Hold Ctrl key to select multiple)</small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Regular Price <strong style="color:red">*</strong></label>
                                            <input type="text" name="regular_price" class="form-control"
                                                id="regular_price" placeholder="Enter regular price" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Discount Price <strong style="color:red">*</strong></label>
                                            <input type="text" name="discount_price" class="form-control"
                                                id="discount_price" placeholder="Enter discount price" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Quantity <strong style="color:red">*</strong></label>
                                            <input type="text" name="quantity" class="form-control"
                                                id="quantity" placeholder="Enter quantity" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="drpStatus">Status <strong style="color:red">*</strong></label>
                                            <select class="form-control" name="status" id="status" required>
                                                <option value="">Select Status</option>
                                                <option value="1">
                                                    Active</option>
                                                <option value="0">
                                                    Inactive</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>




                            </div>
                            <div class="card-footer text-center">
                                <button class="btn ripple btn-primary btnDataSave" type="submit">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.col-md-6 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->


@push('scripts')
<script src="{{ asset('common/js/custom.js') }}"></script>
<script>
$(function() {
    $("#formCategory").validate({

        submitHandler: function(form) {
            $('#btnDataSave').text('Saving...');
            var frm = $('#formCategory');
            var formData = new FormData(frm[0]);
            //formData.append('file', $('input[type=file]')[0].files[0]);

            $.ajax({
                url: '{{route('admin.addEditCategory')}}',
                type: 'POST',
                dataType: 'json',
                data: formData,
                processData: false,
                contentType: false,
                success: function(data) {
                    if ($.isEmptyObject(data.error_message)) {
                        swal({
                            html: true,
                            title: '<i>Success</i>',
                            text: data.success_message
                        });
                        //swal(data.success_message);
                        setTimeout(function() {
                            window.location = "{{url('admin/category')}}";
                        }, 2000);
                    } else {
                        swal({
                            html: true,
                            title: '<i>Error</i>',
                            text: data.error_message
                        });
                    }
                },
                complete: function(data) {

                }
            });
        }
    });
});
</script>
@endpush
@endsection