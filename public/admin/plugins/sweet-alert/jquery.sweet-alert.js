$(function(e) {
	
	//Basic
	$('#swal-basic').on('click', function () {
		swal('Welcome to Your Admin Page')
	});
	
	//A title with a text under
	$('#swal-title').click(function () {
		swal(
			{
				title: 'Here is  a title!',
				text: 'All are available in the template',
			}
		)
	});
	
	//Success Message
	$('.swal-success').click(function () {
		swal(
			{
				title: 'Well done!',
				text: 'Profile has been shortlisted!',
				type: 'success',
				confirmButtonColor: '#57a94f'
			}
		)
	});
	
	//Warning Message
	$('.swal-warning').click(function () {
		swal({
		  title: "Do You Want  to Delete it?",
		//   text: "Your will not be able to recover this file!",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonClass: "btn btn-danger",
		  confirmButtonText: "Yes, delete it!",
		  closeOnConfirm: false
		},
		function(){
		  swal("Deleted!");
		});
	});
	
	//Parameter
	$('#swal-parameter').click(function () {
		swal({
			text: 'Search for a movie. e.g. "La La Land".',
			content: "input",
			showCancelButton: true,
			confirmButtonClass: "btn-danger",
			confirmButtonText: "Yes",
			cancelButtonText: "No",
			closeOnConfirm: false,
			closeOnCancel: false
		  });
	});
	
	//Custom Image
	$('#swal-image').click(function () {
		swal({
			title: 'Lovely!',
			text: 'your image is uploaded.',
			imageUrl: '../../assets/img/brand/logo.png',
			animation: false
		})
	});
	
	//Auto Close Timer
	$('#swal-timer').click(function () {
		swal({
			title: 'Auto close alert!',
			text: 'I will close in 1 seconds.',
			timer: 1000
		}).then(
			function () {
			},
			// handling the promise rejection
			function (dismiss) {
				if (dismiss === 'timer') {
					console.log('I was closed by the timer')
				}
			}
		)
	});
	
	
	//Ajax with Loader Alert
	$('#swal-ajax').click(function () {
		swal({
		  title: "Ajax request example",
		  text: "Submit to run ajax request",
		  type: "info",
		  showCancelButton: true,
		  closeOnConfirm: false,
		  showLoaderOnConfirm: true
		}, function () {
		  setTimeout(function () {
			swal("Ajax request finished!");
		  }, 2000);
		});
	});
	// unlink msgs
//Parameter
$('.swal-unlink').click(function () {
	swal({
	  title: "Do you want to Unlink the recruiter from this Team ?",
	//   text: "You will not be able to recover this imaginary file!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Yes",
	  cancelButtonText: "No",
	  closeOnConfirm: false,
	  closeOnCancel: false
	},
	function(isConfirm) {
	  if (isConfirm) {
		swal({
			title: "Do you want to assign the requirements to another team member?",
		  //   text: "You will not be able to recover this imaginary file!",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: "btn-danger",
			confirmButtonText: "Yes",
			cancelButtonText: "No",
			closeOnConfirm: false,
			closeOnCancel: false
		  },
		  
	   function(isConfirm) {
		if (isConfirm) {
		
			swal({
				title: "Please select the recruiter",
				content: "input",
				showCancelButton: true,
				confirmButtonClass: "btn-danger",
				confirmButtonText: "Move Requirements",
				cancelButtonText: "Cancel",
				closeOnConfirm: false,
				closeOnCancel: false
			  },
			  function(isConfirm) {

			if (isConfirm) {
				  swal("Successfully!", 'Requirements are Succefully Moved to" + inputValue  + "(New Recruiter)".', "success");
				} else {
					swal("Unlinked", "Ayush (Old Recruiter) has unlinked from the team","error");
				}
			  });
		} else {
		  swal("Unlinked", "Ayushi (Old Recruiter) has unlinked from the team","error");
		}
	  });
	}
	  else {
		swal("Cancelled", "Your Recruiter Name is saved :)", "error");
	  }
	});
});
});



