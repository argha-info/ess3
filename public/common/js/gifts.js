$(".giftOptions").on("click", function(){
	$(".giftLists li").removeClass('active');
	$(this).closest('li').addClass('active');
	$(".giftAmount").html($(this, 'span').text());
	$(".finalPays").html(`proceed to pay <span>${$(this, 'span').text()}</span>`);
});
$('#gift-form').validate({ 
  errorElement: 'span',
  errorClass: 'help-error',
  //ignore: "",
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    }, 
    gift_message: {
      required: true,
    }, 
  },
  messages: {
    name: {
      required:"Please enter name",
    },
    email: {
        required: 'Please enter your email',
        email: 'Please enter valid email address'
    },
    gift_message: {
      required:"Please enter gift message",
    },
  },
  errorPlacement: function(error, element) {
      $(element).parent().append(error);
  },
  submitHandler: function(form) {
  	  $("#giftModal").modal('show'); 
  }
});

$(function() {
var $form  = $(".require-validation");
$('form.require-validation').bind('submit', function(e) {
  var $form         = $(".require-validation"),
      inputSelector = ['input[type=email]', 'input[type=password]',
                       'input[type=text]', 'input[type=file]',
                       'textarea'].join(', '),
      $inputs       = $form.find('.required').find(inputSelector),
      $errorMessage = $form.find('div.error'),
      valid         = true;
      $errorMessage.addClass('hide');

    $('.has-error').removeClass('has-error');
    $inputs.each(function(i, el) {
    var $input = $(el);
    if ($input.val() === '') {
      $input.addClass('has-error');
      $errorMessage.removeClass('hide');
      e.preventDefault();
    }
  });

if (!$form.data('cc-on-file')) {
    e.preventDefault();
    Stripe.setPublishableKey($form.data('stripe-publishable-key'));
    Stripe.createToken({
      number: $('.card-number').val(),
      cvc: $('.card-cvc').val(),
      exp_month: $('.card-expiry-month').val(),
      exp_year: $('.card-expiry-year').val()
    }, stripeResponseHandler);
  }
});

function stripeResponseHandler(status, response) {
    if (response.error) {
            $('.error')
              .removeClass('hide')
              .find('.alert')
              .text(response.error.message);
    }else{
          // token contains id, last4, and card type
          var token = response['id'];
          var giftAmount = $(".giftLists li.active .giftOptions").html();
          giftAmount = parseFloat(giftAmount.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/)); //parseInt(giftAmount);
          // insert the token into the form so it gets submitted to the server
          $form.find('input[type=text]').empty();
          $form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
          $form.append("<input type='hidden' name='currency' value='$'/>");
          $form.append("<input type='hidden' name='gift_amount' value='" + giftAmount + "'/>");
          $form.append("<input type='hidden' name='user_name' value='" + $("input[name='name']").val() + "'/>");
          $form.append("<input type='hidden' name='user_email' value='" + $("input[name='email']").val() + "'/>");
          $form.append("<input type='hidden' name='gift_message' value='" + $("textarea[name='gift_message']").val() + "'/>");
          $form.get(0).submit();
    }
}
});