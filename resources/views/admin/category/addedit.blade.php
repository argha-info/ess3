@extends('layouts.admin.adminLayout')

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
                        <form class="" id="formCategory" action="" enctype='multipart/form-data' method="Post">
                            @csrf
                            <input type="hidden" value="{{isset($category) ? encrypt($category->id) : 0}}" name="id">
                            <input type="hidden" value="{{isset($category) ? 'edit' : 'add'}}" name="opt_type">
                            <div class="card-header">
                                <h3 class="card-title">{{ $title ?? '' }}</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="title">Category Name <strong style="color:red">*</strong></label>
                                            <input type="text" name="category_name" class="form-control" id="category_name"
                                                placeholder="Enter category name"
                                                value="{{old('category_name', isset($category) ? $category->category_name : '')}}"
                                                required>
                                        </div>
                                        <div class="form-group">
                                            <label for="content">Description <strong style="color:red">*</strong></label>
                                            <textarea name="category_description" class="form-control" rows="4"
                                                placeholder="Enter category description" id="category_description"
                                                required>{{old('category_description', isset($category) ? $category->category_description : '')}}</textarea>
                                        </div>
                                        
                                       
                                        <div class="form-group">
                                            <label for="drpStatus">Status <strong style="color:red">*</strong></label>
                                            <select class="form-control" name="status" id="status" required>
                                                <option value="">Select Status</option>
                                                <option value="1"
                                                    {{old('status', (isset($category) && $category->status == 1) ? 'selected' : '')}}>
                                                    Active</option>
                                                <option value="0"
                                                    {{old('status', (isset($category) && $category->status == 0) ? 'selected' : '')}}>
                                                    Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="adminBoxImgUpload">
                                            <div class="form-group m-b-5">
                                                <label>Category Image <small class="text-muted">(optional)</small></label>
                                            </div>

                                            @if(isset($category) && $category->image !='' &&
                                            file_exists(public_path('uploads/category/'.$category->image)))
                                            <input type="hidden" name="image" class="form-control"
                                                value="{{ $category->image ?? '' }}">
                                            <div class="logoContArea">
                                                <img id="secBan1"
                                                    src="{{ asset('uploads/category/'.$category->image) }}"
                                                    alt="" width="150">
                                            </div>
                                            @else
                                            <div class="logoContArea"><img id="secBan1" alt="" width="120" /></div>
                                            @endif
                                            <div class="form-group m-b-5 mt-1 text-center">
                                                <p class="mentionedImgSize">Please Upload Category Image.
                                                </p>
                                                <input type="file" name="image" class="logUpInput d-none"
                                                    id="banner"
                                                    placeholder="Upload image"
                                                    onchange="document.getElementById('secBan1').src = window.URL.createObjectURL(this.files[0])">
                                                <label for="banner" class="btn btn-info"><i
                                                        class="fa fa-upload"></i>&nbsp;Upload</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="card-footer text-center">
                                    <button class="btn ripple btn-primary btnDataSave" type="submit">@if(isset($category)) Update Category @else Add Category
                                        @endif</button>
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
@push('stylesheet')
<link rel="stylesheet" href="{{ asset('common/css/custom.css') }}">
@endpush

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