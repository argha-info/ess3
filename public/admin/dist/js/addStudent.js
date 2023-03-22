$('#addStudent').validate({
    errorElement: 'span',
    errorClass: 'help-error',
    //ignore: [],
    errorPlacement: function(error, element) {
        $(element).parent().append(error);
    },
    submitHandler: function(form) {
        var formData = new FormData($(form)[0]);
        var isValid = true;
        $(".cusGrayBtn").attr("disabled", true);

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
                $('.sectionLoader').show();
            },
            success: function(data) {
                if(data.success==0){
                    if(typeof(data.error_message) !== "undefined"){
                      $('.errorMessage').append(`<div class="alert alert-danger full float-none">`+ data.error_message +`</div>`);
                        setTimeout(function() {
                            $(".errorMessage").empty();
                        }, 3000);
                    }
               }else{
                   $('.errorMessage').append(`<div class="alert alert-success full float-none">`+ data.success_message +`</div>`);
                    setTimeout(function() {
                        $(".errorMessage").empty();
                        $('#addStudent').trigger("reset");
                        $("#noFile").html('');
                        $("#noFile1").html('');
                        $("#noFile2").html('');
                        location.reload();
                    }, 3000);
               }
                $("html, body").animate({ scrollTop: 0 }, "slow");

            },
            complete: function() {
               $('.sectionLoader').hide();
               $(".cusGrayBtn").attr("disabled", false);
            }
          });
        }
    }
});
function toggler(otherOpt) {
    $("#" + otherOpt).toggle();
}
$('body').on('change', "input[name='cast']", function(){
    if($(this).val() == 'others'){
        $(".other_cast").attr('required', true);
        $("#otherOpt").show()
    }else{
        $(".other_cast").attr('required', false);
        $("#otherOpt").hide()
    }
});

$('body').on('change', "input[name='student_type']", function(){
    var studentType = $(this).val();
    if(studentType == 1){
        $(".bank_passbook").after(`<div class="col-12 minorityDoc">
        <div class="file-upload file-upload4 w-100 fieldBox2">
            <div class="file-select d-flex justify-content-between align-items-center">
                <div class="file-select-name" id="noFile4">Upload Minority Document<sup class="red">*</sup></div>
                <div class="file-select-button" id="fileName4">Browse</div>
                <input type="file" name="minority_doc" id="chooseFile4" required accept="application/pdf, image/*">
            </div>

        </div>
    </div>`);
    }else{
        $(".minorityDoc").remove();
    }
});