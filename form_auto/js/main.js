function verify(){
	//check appointment type
	var verify_flag = true;
	var fellowship = $("#fellowship").prop('checked');
	var RA = $("#RA").prop('checked');

	if(!RA && !fellowship){
		$("#err_appointment").show();
		$("#err_appointment").html("Try something");

		verify_flag = false;
	}else{
		$("#err_appointment").hide();
		$("#err_appointment").html("");
	}



	//check term
	var fall = $("#fall").prop('checked');
	var spring = $("#spring").prop('checked');
	var summer = $("#summer").prop('checked');
	var first = $("#first").prop('checked');

	if(!fall && !spring && !summer && !first){
		$("#err_term").show();
		$("#err_term").html("Try something");

		verify_flag = false;
	}else{
		$("#err_term").hide();
		$("#err_term").html("");
	}

	//check info 

	var name = String($("#name").val());
	var id = String($("#student_id").val());
	if (name.length == 0 || id.length == 0){
		$("#err_info").html("");
		$("#err_info").show();
		$("#err_info").html("Both fields need to be filled");
	}
	else if(id.length != 9 || !$.isNumeric(id) ){
		$("#err_info").html("");

		$("#err_info").show();
		$("#err_info").html("Student ID is invalid");
	}
	else if ( /[^a-z]/i.test(name.replace(/ /g,'')) ){
		//console.log($.trim(name));
		$("#err_info").html("");

		$("#err_info").show();
		$("#err_info").html("Name is invalid");
		
	}else{
		$("#err_info").hide();
		$("#err_info").html("");
	}

	//pay rate
	var masters = $("#masters").prop('checked');
	var phd = $("#phd").prop('checked');
	var non_stand = $("#non_stand").prop('checked');
	var custom_pay = String($("#custom_pay").val());




	if(!masters && !phd && !non_stand){
		$("#err_rate").show();
		$("#err_rate").html("Please Pick one of the following");

		verify_flag = false;
	}else{
		$("#err_rate").hide();
		$("#err_rate").html("");
	}

	//Level of effort
	var level_effort = String($("#effort").val());
	if(parseInt(level_effort)> 100 || parseInt(level_effort) < 0){
		$("#err_effort").show();
		$("#err_effort").html("Level of effort is not valid");

		verify_flag = false;		
	}else{
		$("#err_effort").hide();
		$("#err_effort").html("");
	}


	//check object dates
	
    $("input#exp").each(function(index){
      let curr_val = $(this).val();

      var mydate = new Date(curr_val);
      if (new Date() >  mydate){

      	$("#err_dist").show();
		$("#err_dist").html("Cost object on row " + (index+1) + " is invlaid");
      	verify_flag = false;

      }else{
		$("#err_dist").hide();
		$("#err_dist").html("");

      }
      //console.log(mydate,  new Date() >  mydate);
    });
	

	return verify;
}