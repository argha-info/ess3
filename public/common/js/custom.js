$(document).ready(function(){
//Remove flash message
setTimeout(function() {
    $('#successMessage').fadeOut('slow');
    $("#statusMessage").fadeOut('slow');
    $('#errorMessage').fadeOut('slow');
    $("#displayErrorMessage").fadeOut('slow');
}, 5000); // <-- time in milliseconds
});

function readURL(input, imgChange) {
    imgChange.attr('src', "images/noImg.jpg").hide().fadeIn(0);
    imgChange.closest('.dragAndDrop').find('.fileHide').removeClass('active');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imgChange.attr('src', e.target.result).hide().fadeIn(0);

        }
        reader.readAsDataURL(input.files[0]);
        imgChange.closest('.dragAndDrop').find('.fileHide').addClass('active');
    }
}
$('#input-1').change(function () {
    var imgChange = $('#imgUploadSect .imgContainer img');
    readURL(this, imgChange);
    $(this).siblings('.fileUploadLabel').html('<i class="fas fa-sync-alt"></i> Change');
});

function isNumeric (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    var regex = /^[0-9]*\.?[0-9]*$/;
    if ( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

var ckeditor = (fieldName='') => {
    CKEDITOR.replace( fieldName, {
      filebrowserBrowseUrl: appUrl+'/public/ckfinder/ckfinder.html',
      filebrowserImageBrowseUrl: appUrl+'/public/ckfinder/ckfinder.html?type=Images',
      filebrowserFlashBrowseUrl: appUrl+'/public/ckfinder/ckfinder.html?type=Flash',
      filebrowserUploadUrl: appUrl+'/public/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl: appUrl+'/public/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
      filebrowserFlashUploadUrl: appUrl+'/public/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
      //toolbar : 'Advance',
      allowedContent: true,
      extraAllowedContent: 'section article header class nav aside[lang,foo] (someclass)',
  });
}