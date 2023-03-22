//All Validation Rules
//Check Empty Name Function
function checkNameEmpty(inputID)
{
	$(inputID).blur(function(){
 
		if($(this).val() == '')
		{
			$(this).css('border','1px solid red');
			
		}
		else
		{
			$(this).css('border','1px solid green');
			
		}
	});
}

//Validate Email Function
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function checkValidEmail(emailInputID)
{
	$(emailInputID).blur(function(){
		var email = $(emailInputID).val();
		if (validateEmail(email)) 
		{
			$(this).css('border','1px solid green');
			
		} 
		else 
		{
			$(this).css('border','1px solid red');
		}
	});
		
	
}

//Validate Phone Function
function validatePhone(inputtxt) {
	
	//+XX-XXXX-XXXX
	//+XX.XXXX.XXXX
	//+XX XXXX XXXX
			
	var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	if(inputtxt.match(phoneno)) 
	{
		return true;
	}  
	else 
	{  
		return false;
	}
}
function checkvalidPhoneNumber(phoneInputID)
{
	
	$(phoneInputID).blur(function(){
		var phone = $(phoneInputID).val();
		var getPhone = validatePhone(phone);
		if(getPhone)
		{
			$(this).css('border','1px solid green');
		}
		else
		{
			$(this).css('border','1px solid red');
		}
		
	});
}
//Validate Comment Function
function checkAddress(addressID)
{
		$(addressID).blur(function(){
 
		if($(this).val() == '')
		{
			$(this).css('border','1px solid red');
			
		}
		else
		{
			$(this).css('border','1px solid green');
			
		}
	});
}