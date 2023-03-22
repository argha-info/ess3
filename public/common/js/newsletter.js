/*const validateEmail = (userEmail) => {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(userEmail)) {
        return true;
    }
    else {
        return false;
    }
}*/
//https://sweetalert.js.org/guides/
$(".newsletters").on("click", function(){
    var email = $(this).closest('.subscribes').find('.nlMailInp').val();
    if(email == ''){
      swal({
            title: "Subsciption",
            text: "Please enter email address",
            icon: "warning",
            //showCancelButton: true,
            confirmButtonColor: '#cca440',
            confirmButtonText: 'Ok',
            //closeOnConfirm: false,
        });
      //ShowNotificator('alert-danger', 'Please enter email address');
      $( ".nlMailInp" ).focus();
    }else{
      if(!validateEmail(email)){
        swal({
            title: "Subsciption",
            text: "Please enter valid email address",
            icon: "warning",
            //showCancelButton: true,
            confirmButtonColor: '#cca440',
            confirmButtonText: 'Ok',
            //closeOnConfirm: false,
        });
        //ShowNotificator('alert-danger', 'Please enter valid email address');
      $( ".nlMailInp" ).focus();
      }else{
        $.ajax({
              method: "POST",
              url: ajaxNewsletter,
              data: { "email": email,
                      "_token":globalToken,
                  },
              dataType:"json",
              success: function(data) {
                //console.log(data); 
                if(data.success == 1){
                  swal({
                      title: "Subsciption",
                      text: "Thank you for subscription!",
                      icon: "success",
                      //showCancelButton: true,
                      confirmButtonColor: '#cca440',
                      confirmButtonText: 'Ok',
                      //closeOnConfirm: false,
                  });
                  //ShowNotificator('alert-success', 'Thank you for subscription!');
                  $( ".nlMailInp" ).val('');
                }else{
                  swal({
                      title: "Subsciption",
                      text: "You are already in our subsciption list.",
                      icon: "info",
                      //showCancelButton: true,
                      confirmButtonColor: '#cca440',
                      confirmButtonText: 'Ok',
                      //closeOnConfirm: false,
                  });
                  //ShowNotificator('alert-info', 'You are already in our subsciption list.');
                  $( ".nlMailInp" ).val('');
                }
            }
        });
      }
    }
});