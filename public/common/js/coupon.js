var generated = [],
  possible  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  function generateCodes(number, length) {
    //$(".coupon_code").val('');
    for ( var i=0; i < number; i++ ) {
      generateCode(length);
    }
    //$(".coupon_code").val(generated);
  }
  function generateCode(length) {
    var text = "";

    for ( var i=0; i < length; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    if ( generated.indexOf(text) == -1 ) {
      generated = text;
    }else {
      generateCode();
    }
  }

  const buttonClick = (className,inputClassName) => {
    $(className).on("click", function(e) {
      $(inputClassName).val('');
      var num =  6,
          len = 6;
      
      possible  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      generateCodes(num, len);
      $(inputClassName).val(generated);
      return false;
    });
  }

  $('.apply_gift').on('click', function(e) {
      var couponCode  = $(".gift_coupon_code").val();

      if(couponCode != ''){
          $('.sectionLoader').show();
          $.ajax({
                method: "POST",
                url: appUrl+'/ajax-apply-coupon',
                data: {"_token":globalToken, couponCode:couponCode}, 
                dataType:"json",
                beforeSend: function() {
                  //$('.sectionLoader').hide();
                },
                complete: function(data) {
                  $('.sectionLoader').hide();
                },
                success: function(data) {
                  if(data.success == 1){
                    location.reload();
                  }else{
                    $(".gift_coupon_code").val('');
                    swal({
                        title: "Error",
                        text: data.message,
                        icon: "warning",
                        //showCancelButton: true,
                        confirmButtonColor: '#cca440',
                        confirmButtonText: 'Ok',
                        //closeOnConfirm: false,
                    });
                  } 
              }
          });
      }else{
        swal({
            title: "Error",
            text: "Please enter gift code",
            icon: "warning",
            //showCancelButton: true,
            confirmButtonColor: '#cca440',
            confirmButtonText: 'Ok',
            //closeOnConfirm: false,
        });
      }
  });