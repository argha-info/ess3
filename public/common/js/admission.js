$('#admissionForm').validate({
    errorElement: 'span',
    errorClass: 'help-error',
    ignore: [],
    errorPlacement: function(error, element) {
        $(element).parent().append(error);
    },

    submitHandler: function(form) {
        var formData = new FormData($(form)[0]);
        var isValid = true;

        if(isValid) {
          $.ajax({
            type: "POST",
            cache: false,
            contentType: false,
            processData: false,
            url: form.action,
            dataType: 'json',
            data: formData,
            beforeSend: function() {
                //$('.sectionLoader').show();
            },
            success: function(data) {
             
                if(data.success==0){
                    if(typeof(data.error_message) !== "undefined"){
                      $('.contactError').append(`<div class="alert alert-danger full float-none">`+ data.error_message +`</div>`);
                        setTimeout(function() {
                            $(".contactError").empty();
                        }, 3000);
                    }
                }else if(data.success==2){
                if(typeof(data.error_message) !== "undefined"){
                  $('.contactError').append(`<div class="alert alert-danger full float-none">`+ data.error_message +`</div>`);
                  $('.contactError').append(`<div class="alert alert-danger full float-none">`+ data.balance +`</div>`);
                    setTimeout(function() {
                        $(".contactError").empty();
                    }, 3000);
                }
               }else{
                   $('.contactError').append(`<div class="alert alert-success full float-none">`+ data.success_message +`</div>`);
                    setTimeout(function() {
                        $(".contactError").empty();
                        $('#contactForm').trigger("reset");
                        //window.location.reload();
                    }, 3000);
               }
                //$("html, body").animate({ scrollTop: 0 }, "slow");

            },
            complete: function() {
               //$('.sectionLoader').hide();
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log(textStatus, errorThrown);
            },
          });
        }
    }
});