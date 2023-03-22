$(document).on('click', '.add-meal', function() {
  var mealID= $(this).data('meal');
  if(mealID !=''){
    $.ajax({
        url: appUrl+"/ajax-add-single-meal",
        data: {mealID:mealID, "_token":globalTokenChef, orderId : orderId},
        type: 'post',
        dataType: 'json',
        beforeSend: function() {
          //$(".loadingio-spinner-rolling-ylul0pbdegs").show();
          $('.mealDetails').html('');
      },
        complete: function(data) {
          $(".loadingio-spinner-rolling-ylul0pbdegs").hide();
      },
        success: function(data) {
            if(data.success == 1){
              $(".modal-title").html(data.mealName);
              $('.mealDetails').html(data.html);
              $('#recipeModal').modal('show');
          }
      }
    });
  }
});
var addons = [];
var  extras = '';
$(document).on("click", ".addToMenu", function(){
  addons = [];
  
  //$('input[name="addons[]"]').attr('checked', false);
  var img   = $(this).parent().parent().find('.releted-product-img img').attr("src");
  var title = $(this).parent().parent().find('.titles').text();
  var addnsID = $(this).parent().parent().find('.addonData').data("meal");
  var noOfFood = $(".noOfFood").text();
  noOfFood     = parseInt(noOfFood);
  var selMeal  = parseInt($(".selMeal").text());
  var totMill  = parseInt($(".totMill").text());
  var activeNext = selMeal+1;
  var mealFood = $(".MealFood").length;
  var totalSelectedMeal = mealFood+1;
  var newSelectedMeal = selMeal+1;

 
  $(".selMeal").text(newSelectedMeal);
  if(totalSelectedMeal > totMill){
    selMeal = selMeal +1;
    var removeFood =  selMeal - totMill;
    $(".MealAddText h4").html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><path id="a_1594299673965" d="M7.455 11.473c.877 0 1.869.545 1.869 1.683 0 1.137-.797 1.7-1.814 1.7-1.016 0-1.888-.698-1.858-1.724.03-1.025.926-1.659 1.803-1.659zM9.79 1l-1.172 9.473H6.225L5 1h4.79z"></path><filter id="b_1594299673965" width="105.2%" height="101.8%" x="-2.6%" y="-.9%" filterUnits="objectBoundingBox"><feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.568627451 0 0 0 0 0.129411765 0 0 0 0 0.0901960784 0 0 0 1 0"></feColorMatrix></filter></defs><g><use fill="#CD2C1E" xlink:href="#a_1594299673965"></use><use fill="#000" filter="url(#b_1594299673965)" xlink:href="#a_1594299673965"></use></g></svg>
          Remove <span class="noOfFood">${removeFood}</span> meals to continue.`);
  }else{
    var totFd = noOfFood-1;
    if(totFd == 0){
      $(".MealAddText h4").html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20"><path fill="#07872B" d="M13.445 4.113c0 .533-.242 1.053-.725 1.559l-.075.075-4.225 4.45c-.897.944-1.662 1.673-2.293 2.188-.631.515-1.077.772-1.336.772-.274 0-.613-.129-1.019-.386-.406-.257-.668-.523-.786-.796-.1-.228-.195-.711-.284-1.45a20.136 20.136 0 0 1-.133-2.399c0-.47.196-.904.588-1.302.392-.399.825-.598 1.299-.598.45 0 .72.412.806 1.237l.02.212c.074.633.158 1.075.254 1.326.095.25.225.376.39.376.068 0 .195-.074.382-.222.187-.148.41-.35.67-.605l4.34-4.3a6.34 6.34 0 0 1 .978-.827c.287-.187.531-.28.732-.28.15 0 .257.057.321.17.064.114.096.306.096.575v.225z"></path></svg> All Set!`);
    }else{
      $(".noOfFood").text(totFd);
    }
  }
  if($('input[name="addons[]"]:checked').length >0){
    //alert("clicled");
    $('input[name="addons[]"]:checked').each(function() {
      
      var name    = $(this).data('addon-name');
      var price   = $(this).data('addon-price');
      var addonID = $(this).data('addon');
      addons.push({addonID:addonID,addonName:name,addonPrice:price});
    });
  }
 
  if(addons !=''){
     extras = JSON.stringify(addons);
  }else{
    extras = '';
  }
  $(".MealfoodAdd").after(`<div class="MealFood d-flex align-items-center relative" data-id="${addnsID}">
          <div class="MealFoodImg">
            <img class="img-fluid" src="${img}" alt="">
          </div>
          <div class="MealFoodName">
            <h6>${title}</h6> 
          </div>
          <input type="hidden" name="extras[]" class="extras" value='${extras}' />
          <div class="CloseBtn"><a href="javascript:;" class="removeFood"><i class="fas fa-times"></i></a></div>
        </div>`);
  $(".MealSelect-Box p").hide();
  
  //Activate the Next step

  if(activeNext === totMill){
    $(".DateBtn").removeClass("DisabledSelectEd");
  }else{
    $(".DateBtn").addClass("DisabledSelectEd");
  }
  
});

$(document).on("click", ".removeFood", function(){
  $(this).parent().parent().remove();
  var noOfFood = parseInt($(".totMill").text());
  var newNoOfFood = (noOfFood - 1);
  var mealFood = $(".MealFood").length;
  var selMeal  = parseInt($(".selMeal").text());
  var totMill  = parseInt($(".totMill").text());
  var activeNext = selMeal-1;
  var totalSelectedMeal = mealFood+1;
  $(".selMeal").text(selMeal-1);
  if(activeNext === totMill){
    $(".DateBtn").removeClass("DisabledSelectEd");
  }else{
    $(".DateBtn").addClass("DisabledSelectEd");
  }
  
  totalSelectedMeal = totalSelectedMeal-1;
  if(totalSelectedMeal > totMill){
    var removeFood = totalSelectedMeal-totMill;
    $(".MealAddText h4").html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><path id="a_1594299673965" d="M7.455 11.473c.877 0 1.869.545 1.869 1.683 0 1.137-.797 1.7-1.814 1.7-1.016 0-1.888-.698-1.858-1.724.03-1.025.926-1.659 1.803-1.659zM9.79 1l-1.172 9.473H6.225L5 1h4.79z"></path><filter id="b_1594299673965" width="105.2%" height="101.8%" x="-2.6%" y="-.9%" filterUnits="objectBoundingBox"><feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.568627451 0 0 0 0 0.129411765 0 0 0 0 0.0901960784 0 0 0 1 0"></feColorMatrix></filter></defs><g><use fill="#CD2C1E" xlink:href="#a_1594299673965"></use><use fill="#000" filter="url(#b_1594299673965)" xlink:href="#a_1594299673965"></use></g></svg>
          Remove <span class="noOfFood">${removeFood}</span> meals to continue.`);
  }else{
    if(mealFood === totMill){
      $(".MealAddText h4").html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20"><path fill="#07872B" d="M13.445 4.113c0 .533-.242 1.053-.725 1.559l-.075.075-4.225 4.45c-.897.944-1.662 1.673-2.293 2.188-.631.515-1.077.772-1.336.772-.274 0-.613-.129-1.019-.386-.406-.257-.668-.523-.786-.796-.1-.228-.195-.711-.284-1.45a20.136 20.136 0 0 1-.133-2.399c0-.47.196-.904.588-1.302.392-.399.825-.598 1.299-.598.45 0 .72.412.806 1.237l.02.212c.074.633.158 1.075.254 1.326.095.25.225.376.39.376.068 0 .195-.074.382-.222.187-.148.41-.35.67-.605l4.34-4.3a6.34 6.34 0 0 1 .978-.827c.287-.187.531-.28.732-.28.15 0 .257.057.321.17.064.114.096.306.096.575v.225z"></path></svg> All Set!`);
    }else{
      var removeMeal = totMill - mealFood;
      $(".MealAddText h4").html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><path id="a_1594299673965" d="M7.455 11.473c.877 0 1.869.545 1.869 1.683 0 1.137-.797 1.7-1.814 1.7-1.016 0-1.888-.698-1.858-1.724.03-1.025.926-1.659 1.803-1.659zM9.79 1l-1.172 9.473H6.225L5 1h4.79z"></path><filter id="b_1594299673965" width="105.2%" height="101.8%" x="-2.6%" y="-.9%" filterUnits="objectBoundingBox"><feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.568627451 0 0 0 0 0.129411765 0 0 0 0 0.0901960784 0 0 0 1 0"></feColorMatrix></filter></defs><g><use fill="#CD2C1E" xlink:href="#a_1594299673965"></use><use fill="#000" filter="url(#b_1594299673965)" xlink:href="#a_1594299673965"></use></g></svg>
          Add <span class="noOfFood">${removeMeal}</span> meals to continue.`);
    }
  } 
}).on("click", ".checkoutOption", function(){
  if(!$(this).hasClass('DisabledSelectEd')){
     var cartData= [];
    if($('.MealFood').length >0){
      $('.MealFood').each(function() {
        
        var addonID = $(this).data('id');
        var addonExtra = $(this).find('.extras').val();
        cartData.push({addonID:addonID,addonExtra:addonExtra});
      });
    }

    if(cartData){
      $.ajax({
            method: "POST",
            url: ajaxEditMealCart,
            data: {"_token":globalTokenChef, selecteddata:cartData, orderId:orderId}, 
            dataType:"json",
            success: function(data) {
              if(data.success == 1){
                window.location.href = appUrl+"/meals/edit/checkout";
              }else{
                $.alert({
                    title: 'Alert!',
                    content: data.message,
                });
              } 
          }
      });
    }
   
  }
});

$('#recipeModal').on('hidden.bs.modal', function(e) {
   $('#recipeModal').find('input[type="checkbox"]').attr('checked',false);
   $('.mealDetails').html('');
});