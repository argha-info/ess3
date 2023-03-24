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
                <form class="" id="formSize" action="" enctype='multipart/form-data' method="Post">
                @csrf
               <input type="hidden" value="{{isset($size) ? encrypt($size->id) : 0}}" name="id">
               <input type="hidden" value="{{isset($size) ? 'edit' : 'add'}}" name="opt_type">
                <div class="card-header">
                  <h3 class="card-title">{{ $title ?? '' }}</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="title">Size Name</label>
                          <input type="text" name="size_name" class="form-control" id="size_name" placeholder="Enter Color Name" value="{{old('title', isset($size) ? $size->size_name : '')}}" required>
                        </div>
                        <div class="form-group">
                          <label for="drpStatus">Status</label>
                          <select class="form-control" name="status" id="status" required>
                            <option value="">Select Status</option>
                            <option value="1" {{old('status', (isset($size) && $size->status == 1) ? 'selected' : '')}}>Active</option>
                            <option value="0" {{old('status', (isset($size) && $size->status == 0) ? 'selected' : '')}}>Inactive</option>
                          </select>
                        </div>
                      </div>
                </div>
                <div class="card-footer text-center">
                  {{-- {!! Form::submit('Update', ['class'=>'cusGrayBtn']) !!} --}}
                  <button class="btn ripple btn-primary btnDataSave" type="submit">@if(isset($size)) Update Size @else Add Size @endif</button>
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
    $(function(){
      $("#formSize").validate({

          submitHandler: function(form) {
              $('#btnDataSave').text('Saving...');
              var frm = $('#formSize');
              var formData = new FormData(frm[0]);
              //formData.append('file', $('input[type=file]')[0].files[0]);

              $.ajax({
                  url: '{{route('admin.addEditSize')}}',
                  type: 'POST',
                  dataType : 'json',
                  data: formData,
                  processData: false,
                  contentType: false,
                  success: function(data) {
                    if ($.isEmptyObject(data.error_message)) {
                          swal({ html:true, title:'<i>Success</i>', text:data.success_message});
                          //swal(data.success_message);
                          setTimeout(function(){
                            window.location = "{{route('admin.size')}}";
                          }, 2000);
                      } else {
                          swal({ html:true, title:'<i>Error</i>', text:data.error_message});
                      }
                  },
                  complete: function (data) {

                  }
              });
          }
        });
    });
  </script>
  @endpush
  @endsection
