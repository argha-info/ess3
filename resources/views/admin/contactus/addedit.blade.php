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
                <form class="" id="formContactUs" action="" enctype='multipart/form-data' method="Post">
                @csrf
               <input type="hidden" value="{{isset($contactus) ? encrypt($contactus->id) : 0}}" name="id">
               <input type="hidden" value="{{isset($contactus) ? 'edit' : 'add'}}" name="opt_type">
                <div class="card-header">
                  <h3 class="card-title">{{ $title ?? '' }}</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="title">Location</label>
                          <input type="text" name="location" class="form-control" id="location" placeholder="Enter the location" value="{{old('title', isset($contactus) ? $contactus->location : '')}}" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" class="form-control" id="email" placeholder="Enter email" value="{{old('title', isset($contactus) ? $contactus->email : '')}}" required>
                        </div>
                      <div class="form-group">
                        <label for="phone">Company Phone No</label>
                        <input type="phone" name="company_phone" class="form-control" id="company_phone" placeholder="Enter company phone number" value="{{old('title', isset($contactus) ? $contactus->company_phone : '')}}" required>
                      </div>
                      <div class="form-group">
                        <label for="phone">Support Phone No</label>
                        <input type="phone" name="support_phone" class="form-control" id="support_phone" placeholder="Enter support phone number" value="{{old('title', isset($contactus) ? $contactus->support_phone : '')}}" required>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="text">Weblink</label>
                        <input type="text" name="weblink" class="form-control" id="weblink" placeholder="Enter weblink" value="{{old('title', isset($contactus) ? $contactus->weblink : '')}}" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Facebook Link</label>
                        <input type="text" name="facebook_link" class="form-control" id="facebook_link" placeholder="Enter weblink" value="{{old('title', isset($contactus) ? $contactus->facebook_link : '')}}" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Instagram Link</label>
                        <input type="text" name="instagram_link" class="form-control" id="instagram_link" placeholder="Enter instagram link" value="{{old('title', isset($contactus) ? $contactus->instagram_link : '')}}" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Twitter Link</label>
                        <input type="text" name="twitter_link" class="form-control" id="twitter_link" placeholder="Enter instagram link" value="{{old('title', isset($contactus) ? $contactus->twitter_link : '')}}" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Linkedin Link</label>
                        <input type="text" name="linkedin_link" class="form-control" id="linkedin_link" placeholder="Enter instagram link" value="{{old('title', isset($contactus) ? $contactus->linkedin_link : '')}}" required>
                      </div>
                      <div class="form-group">
                        <label for="text">Youtube Link</label>
                        <input type="text" name="youtube_link" class="form-control" id="youtube_link" placeholder="Enter youtube link" value="{{old('title', isset($contactus) ? $contactus->youtube_link : '')}}" required>
                      </div>
                  </div>
                </div>
                <div class="card-footer text-center">
                  {{-- {!! Form::submit('Update', ['class'=>'cusGrayBtn']) !!} --}}
                  <button class="btn ripple btn-primary btnDataSave" type="submit">@if(isset($contactus)) Update Contact Us @else Add Contact Us @endif</button>
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
      $("#formContactUs").validate({

          submitHandler: function(form) {
              $('#btnDataSave').text('Saving...');
              var frm = $('#formContactUs');
              var formData = new FormData(frm[0]);
              //formData.append('file', $('input[type=file]')[0].files[0]);

              $.ajax({
                  url: '{{route('admin.addEditContactUs')}}',
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
                            window.location = "{{route('admin.contactus')}}";
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
