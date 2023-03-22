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
                <form class="" id="formHomeAbout" action="" enctype='multipart/form-data' method="Post">
                @csrf
               <input type="hidden" value="{{isset($homeabout) ? encrypt($homeabout->id) : 0}}" name="id">
               <input type="hidden" value="{{isset($homeabout) ? 'edit' : 'add'}}" name="opt_type">
                <div class="card-header">
                  <h3 class="card-title">{{ $title ?? '' }}</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="title">HomeAbout Title</label>
                          <input type="text" name="title" class="form-control" id="title" placeholder="Enter banner title" value="{{old('title', isset($homeabout) ? $homeabout->title : '')}}" required>
                        </div>
                        <div class="form-group">
                            <label for="title">HomeAbout SubTitle</label>
                            <input type="text" name="sub_title" class="form-control" id="sub_title" placeholder="Enter banner title" value="{{old('sub_title', isset($homeabout) ? $homeabout->sub_title : '')}}" required>
                          </div>
                        <div class="form-group">
                          <label for="content">Content</label>
                          <textarea name="content" class="form-control" rows="4" placeholder="Enter banner content" id="content" required>{{old('content', isset($homeabout) ? $homeabout->content : '')}}</textarea>
                        </div>
                        {{-- <div class="form-group">
                          <label for="banner_link">HomeAbout Link Text</label>
                          <input type="text" name="banner_link_text" class="form-control" id="banner_link_text" placeholder="Enter banner link text" value="{{old('banner_link_text', isset($bannerInfo) ? $bannerInfo->banner_link_text : '')}}" required>
                        </div> --}}
                        <div class="form-group">
                          <label for="banner_link">HomeAbout Link</label>
                          <input type="text" name="about_link" class="form-control" id="banner_link" placeholder="Enter banner link" value="{{old('banner_link', isset($homeabout) ? $homeabout->about_link : '#')}}" required>
                        </div>
                        <div class="form-group">
                          <label for="drpStatus">Status</label>
                          <select class="form-control" name="status" id="status" required>
                            <option value="">Select Status</option>
                            <option value="1" {{old('status', (isset($homeabout) && $homeabout->status == 1) ? 'selected' : '')}}>Active</option>
                            <option value="0" {{old('status', (isset($homeabout) && $homeabout->status == 0) ? 'selected' : '')}}>Inactive</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="adminBoxImgUpload">
                          <div class="form-group m-b-5">
                            <label>HomeAbout</label>
                          </div>

                            @if(isset($homeabout) && $homeabout->homeabout !='' && file_exists(public_path('uploads/homeabout/'.$homeabout->homeabout)))
                            <input type="hidden" name="old_homeabout" class="form-control" value="{{ $homeabout->homeabout ?? '' }}">
                            <div class="logoContArea">
                            <img id="secBan1" src="{{ asset('uploads/homeabout/'.$homeabout->homeabout) }}" alt="" width="" class="img-fluid">
                            </div>
                            @else
                            <div class="logoContArea"><img id="secBan1" alt="" width="120" /></div>
                          @endif
                          <div class="form-group m-b-5 mt-1 text-center">
                            {{-- <p class="mentionedImgSize">Please Upload Image (1160 X 488).</p> --}}
                            <input type="file" name="homeabout" class="logUpInput d-none" {{!isset($homeabout) ? 'required' : ''}} id="banner" placeholder="Upload banner" onchange="document.getElementById('secBan1').src = window.URL.createObjectURL(this.files[0])">
                            <label for="banner" class="btn btn-info"><i class="fa fa-upload"></i>&nbsp;Upload</label>
                          </div>
                        </div>

                    </div>
                </div>
                <div class="card-footer text-center">
                  {{-- {!! Form::submit('Update', ['class'=>'cusGrayBtn']) !!} --}}
                  <button class="btn ripple btn-primary btnDataSave" type="submit">@if(isset($homeabout)) Update HomeAbout @else Add  HomeAbout @endif</button>
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
      $("#formHomeAbout").validate({

          submitHandler: function(form) {
              $('#btnDataSave').text('Saving...');
              var frm = $('#formHomeAbout');
              var formData = new FormData(frm[0]);
              //formData.append('file', $('input[type=file]')[0].files[0]);

              $.ajax({
                  url: '{{route('admin.addEditHomeAbout')}}',
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
                            window.location = "{{url('admin/homeabout')}}";
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
