var clipboard = new ClipboardJS('.copy');

clipboard.on('success', function (e) {
    //console.log(e);
});

clipboard.on('error', function (e) {
    //console.log(e);
});

$(document).on("click", ".shareInEmail" ,function(){
  var emailAddr = $(".emailAddr").val();
  var link = $("#share-link-style").val();
  if(link == ''){
  	swal({
        title: "Error",
        text: "Please login to share.",
        icon: "warning",
        //showCancelButton: true,
        confirmButtonColor: '#cca440',
        confirmButtonText: 'Ok',
        //closeOnConfirm: false,
        });
  }else{
  	if(emailAddr == ''){
  	 swal({
        title: "Error",
        text: "Please enter email address",
        icon: "warning",
        //showCancelButton: true,
        confirmButtonColor: '#cca440',
        confirmButtonText: 'Ok',
        //closeOnConfirm: false,
        });
    $( ".emailAddr" ).focus();	

  	}else{
	  	if(!validateEmail(emailAddr)){
	        swal({
	            title: "Error",
	            text: "Please enter valid email address",
	            icon: "warning",
	            confirmButtonColor: '#cca440',
	            confirmButtonText: 'Ok',
	        });
	      $( ".emailAddr" ).focus();
	    }else{
	        $.ajax({
	              method: "POST",
	              url: appUrl+`/ajax-share`,
	              data: { "email": emailAddr,"link":link,
	                      "_token":globalToken,
	                  },
	              dataType:"json",
	              success: function(data) { 
	                if(data.success == 1){
	                  swal({
	                      title: "Success",
	                      text: "Thank you for share!",
	                      icon: "success",
	                      //showCancelButton: true,
	                      confirmButtonColor: '#cca440',
	                      confirmButtonText: 'Ok',
	                      //closeOnConfirm: false,
	                  });
	                  $( ".emailAddr" ).val('');
	                }else{
	                  swal({
	                      title: "Error",
	                      text: data.message,
	                      icon: "info",
	                      confirmButtonColor: '#cca440',
	                      confirmButtonText: 'Ok',
	                  });
	                  $( ".emailAddr" ).val('');
	                }
	            }
	        });
	      }
	  }
  }
  
});