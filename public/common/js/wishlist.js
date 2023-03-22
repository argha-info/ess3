//Wishlist
function wishList(){
$(document).on("click", ".wishlist", function(){
  var $wish = $(this);
  let recipe = $(this).attr('data-recipe');
  $(".wishlist").prop('disabled', true);
  if(recipe == ''){
      swal({
          title: somethingWrong,
          text: tryAfterSomeTime,
          type: "warning",
          //showCancelButton: true,
          confirmButtonColor: '#cca440',
          confirmButtonText: 'Ok',
          //closeOnConfirm: false,
      });
  }else{
      $.ajax({
            url: appUrl+"/wishlist", 
            type: "POST", 
            //"headers": {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')},
            dataType: 'json',            
            data: {recipe:recipe,"_token":globalToken},  
            beforeSend : function(){
                $(".wishlist").prop('disabled', true);
            },                
            success: function(data) {
               
               if(data.success == 0){
                  if(typeof(data.validation.message) !== "undefined"){
                    swal({
                        title: somethingWrong,
                        text: data.validation.message[0],
                        type: "warning",
                        //showCancelButton: true,
                        confirmButtonColor: '#cca440',
                        confirmButtonText: 'Ok',
                        //closeOnConfirm: false,
                    });
                  }
               }else if(data.success == 1){
                  swal({
                      title: "Wishlist",
                      text: data.message,
                      type: "warning",
                      //showCancelButton: true,
                      confirmButtonColor: '#cca440',
                      confirmButtonText: 'Ok',
                      //closeOnConfirm: false,
                  }); 
                  $wish.removeClass('added').find('i').addClass('fa-heart-o').removeClass('fa-heart');
               }else{
                 swal({
                      title: "Wishlist",
                      text: data.message,
                      type: "success",
                      //showCancelButton: true,
                      confirmButtonColor: '#cca440',
                      confirmButtonText: 'Ok',
                      //closeOnConfirm: false,
                  }); 
                  $wish.addClass('added').find('i').addClass('fa-heart').removeClass('fa-heart-o');
               }
            },
            complete: function(){
                $(".wishlist").prop('disabled', false);
            }
        });
  }
});
}