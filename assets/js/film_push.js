 function selectAll(){
	 if ($('#client-all').find("#SelectAll").prop("checked")) { 
        $('#client-all').find(".che-check").prop("checked", true);		
		$('#client-all').find(".clientshow").addClass("onactive");
		$('#client-all').find('#SelectAll').parent().addClass('active');
    } else {  
        $('#client-all').find(".che-check").prop("checked", false); 
		if($('#client-all').find(".clientshow").hasClass("onactive")){
		$('#client-all').find(".clientshow").removeClass("onactive");}
		if($('#client-all').find('#SelectAll').parent().hasClass("active")){
		$('#client-all').find('#SelectAll').parent().removeClass("active");}
    } 
	var number = $('#client-all').find(":checked[class='che-check']").length; 
	$('#client-all').find('.push-button').find('.number').html(number)
 }
 function setSelectAll(dom){   
    if (!$(dom).find('.che-check').prop('checked')) { 
	    $(dom).find('label.bginputchek').find('input').prop("checked", true); 
	    $("#SelectAll").prop("checked", false); 
		$(dom).addClass("onactive");
    }else{
		$(dom).find('label.bginputchek').find('input').prop("checked", false);
		if($(dom).hasClass("onactive")){
		$(dom).removeClass("onactive");}
    }  
    var chsub =  $('#client-all').find("input[type='checkbox'][class='che-check']").length;	
    var checkedsub =  $('#client-all').find(":checked[class='che-check']").length;
	$('#client-all').find('.push-button').find('.number').html(checkedsub)
    if (checkedsub == chsub) { 	
        $('#client-all').find('#SelectAll').prop("checked", true);
		$('#client-all').find('#SelectAll').parent().addClass('active')
    } else{
		$('#client-all').find('#SelectAll').prop("checked", false);
		if($('#client-all').find('#SelectAll').parent().hasClass("active")){
		$('#client-all').find('#SelectAll').parent().removeClass("active");}
	}  
}
//发行商
 function selectAlla(){
	 if ($('#client-issuer').find("#SelectAll").prop("checked")) { 
        $('#client-issuer').find(".che-check").prop("checked", true);		
		$('#client-issuer').find(".clientshow").addClass("onactive");
		$('#client-issuer').find('#SelectAll').parent().addClass('active')
    } else {  
        $('#client-issuer').find(".che-check").prop("checked", false); 
		if($('#client-issuer').find(".clientshow").hasClass("onactive")){
		$('#client-issuer').find(".clientshow").removeClass("onactive");}
		if($('#client-issuer').find('#SelectAll').parent().hasClass("active")){
		$('#client-issuer').find('#SelectAll').parent().removeClass("active");}
    } 
	var number = $('#client-issuer').find(":checked[class='che-check']").length; 
	$('#client-issuer').find('.push-button').find('.number').html(number)
 }
 function setSelectAlla(dom){   
    if (!$(dom).find('.che-check').prop('checked')) { 
	    $(dom).find('label.bginputchek').find('input').prop("checked", true); 
	    $('#client-issuer').find("#SelectAll").prop("checked", false); 
		$(dom).addClass("onactive");
    }else{
		$(dom).find('label.bginputchek').find('input').prop("checked", false);
		if($(dom).hasClass("onactive")){
		$(dom).removeClass("onactive");}
    }  
    var chsub =  $('#client-issuer').find("input[type='checkbox'][class='che-check']").length;	
    var checkedsub =  $('#client-issuer').find(":checked[class='che-check']").length;
	$('#client-issuer').find('.push-button').find('.number').html(checkedsub)
    if (checkedsub == chsub) { 	
        $('#client-issuer').find('#SelectAll').prop("checked", true);
		$('#client-issuer').find('#SelectAll').parent().addClass('active')
    } else{
		$('#client-issuer').find('#SelectAll').prop("checked", false);
		if($('#client-issuer').find('#SelectAll').parent().hasClass("active")){
		$('#client-issuer').find('#SelectAll').parent().removeClass("active");}
	}  
}
//电影节
 function selectAllb(){
	 if ($('#client-ff').find("#SelectAll").prop("checked")) { 
        $('#client-ff').find(".che-check").prop("checked", true);		
		$('#client-ff').find(".clientshow").addClass("onactive");
		$('#client-ff').find('#SelectAll').parent().addClass('active')
    } else {  
        $('#client-ff').find(".che-check").prop("checked", false); 
		if($('#client-ff').find(".clientshow").hasClass("onactive")){
		$('#client-ff').find(".clientshow").removeClass("onactive");}
		if($('#client-ff').find('#SelectAll').parent().hasClass("active")){
		$('#client-ff').find('#SelectAll').parent().removeClass("active");}
    } 
	var number = $('#client-ff').find(":checked[class='che-check']").length; 
	$('#client-ff').find('.push-button').find('.number').html(number)
 }
 function setSelectAllb(dom){   
    if (!$(dom).find('.che-check').prop('checked')) { 
	    $(dom).find('label.bginputchek').find('input').prop("checked", true); 
	    $('#client-ff').find("#SelectAll").prop("checked", false); 
		$(dom).addClass("onactive");
    }else{
		$(dom).find('label.bginputchek').find('input').prop("checked", false);
		if($(dom).hasClass("onactive")){
		$(dom).removeClass("onactive");}
    }  
    var chsub =  $('#client-ff').find("input[type='checkbox'][class='che-check']").length;	
    var checkedsub =  $('#client-ff').find(":checked[class='che-check']").length;
	$('#client-ff').find('.push-button').find('.number').html(checkedsub)
    if (checkedsub == chsub) { 	
        $('#client-ff').find('#SelectAll').prop("checked", true);
		$('#client-ff').find('#SelectAll').parent().addClass('active')
    } else{
		$('#client-ff').find('#SelectAll').prop("checked", false);
		if($('#client-ff').find('#SelectAll').parent().hasClass("active")){
		$('#client-ff').find('#SelectAll').parent().removeClass("active");}
	}  
}