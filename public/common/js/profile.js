$(document).on('change', '.userCountry' ,function() {
  var countryId = $(this).val();
  if(countryId !=''){
	 	$.ajax({
            url: ajaxState, 
            type: "POST", 
            dataType: 'json',            
            data: {"_token":globalToken, countryId:countryId},  
            beforeSend : function(){
                //$('.sectionLoader').show();
            },                
            success: function(data) {
               if(data.success == 1){
               	$(".stateDiv").remove();
               	    let html = '';
	                $.each(data.html, function( index, value ) {
					    html += `<option value="`+ value.id +`">`+ value.name +`</option>`;
					});
               	    $(".countryDiv").after(`<div class="col-lg-12 col-sm-12 col-sm-12 col-12">
                                                <div class="form-group stateDiv trans">
                                                    <div class="selectGroup">
                                                        <label for="">State</label>
                                                        <select class="selectOption form-control userState" name="userState">
                                                            `+ html +`
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>`);
               }else{
	               	$.alert({
	                    title: 'Alert!',
	                    content: 'Something went wrong please try after sometime.',
	                });
               }  
            },
            complete: function(){
                //$('.sectionLoader').hide();
            }
        });
  }else{
		$.alert({
            title: 'Alert!',
            content: 'Something went wrong please try after sometime.',
        });
	}
});