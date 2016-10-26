$(function(){ 
   $(".films").hover(function() {
		$(this).find(".img_text").fadeIn("3000")
	}, function() {
		$(this).find(".img_text").fadeOut("3000")		
	});
	

   // var width=($(window).width()); 
//	   if ( width <= 771){
//		   $(".mess_cen").parent('mess_box').removeClass("mess_boxbig");
//		   $(".mess_cen").parent('mess_box').find(".ds").hide();
//		   }
   $(".mess_cen").hover(function() {
		$(this).find(".ds").fadeIn("800")	
		},function() {
		$(this).find(".ds").fadeOut("800")						
	 })
	 $('.mess_bot').find('.join').hover(function() {
		$(this).html("添加客户")	
		},function() {
		$(this).html('<a><span></span></a>')				
	 })
	  $('.mess_bot').find('.contact').hover(function() {
		$(this).html("发起对话")	
		},function() {
		$(this).html('<a><span></span></a>')				
	 })
	 $('.mess_bot').find('.send').hover(function() {
		$(this).html("确定发送")	
		},function() {
		$(this).html('<a><span></span></a>')				
	 })	
	 $('.mess_bot').find('.look').hover(function() {
		$(this).html("查看合同")	
		},function() {
		$(this).html('<a><span></span></a>')				
	 })
	  $('.mess_bot').find('.sure').hover(function() {
		$(this).html("接受预约")	
		},function() {
		$(this).html('<a><span></span></a>')				
	 })	
	 $("#help").click(function() {
		$("#bg_help").show();
		$("#help_box").show();		
	 })
	 $("#help_box").find('.close').click(function() {
		$("#bg_help").hide();
		$("#help_box").hide();		
	 })
	 $('.cancle').click(function() {
		$("#bg_help").hide();
		$("#help_box").hide();	
		$("#yanzheng").hide();	
	 })
	 $('#addfriends').click(function() {
		$("#bg_help").hide();
		$("#yanzheng").hide();	
		$("#help_box").hide();	
	 })	 
	 $(".mess_bot").find('.contact').click(function() {
		$("#bg_help").show();
		$("#yanzheng").show();		
	 })	
	 
    $("#btn").trigger("click"); 
    $('#myTab li:eq(1) a').tab('show');
	/*var callbacks_list = $('.demo-callbacks');
		$('.demo-list input').on('ifCreated ifClicked ifChanged ifChecked ifUnchecked ifDisabled ifEnabled ifDestroyed', function(event){
		  callbacks_list.prepend('<span>#' + this.id + ' is ' + event.type.replace('if', '').toLowerCase() + '</span>');
		}).iCheck({
		  radioClass: 'iradio_square-blue',
		  increaseArea: '20%'
	});*/ 	   

	$(".edit").find(".close").click(function(){
		$(this).parents(".edit").hide();
		$(this).parents(".edit").prev('i').removeClass('active');
		}) 
	$(".edit").find(".downward").click(function(){
		$(this).next().next(".user_news").show();
		$(this).hide();
		$(this).next(".upward").css("display","block");		
		}) 
	$(".edit").find(".upward").click(function(){
		$(this).next(".user_news").hide();
		$(this).hide();
		$(this).prev(".downward").show();		
		});
	  var height=($(window).height());
	   if ( height >= 790){
		   $(".hidden_films").show();		   
		   };
		$('#close_box').click(function(){
			$('#box').hide();
			$('#tag_news').hide();
		})
		/*电影节详情*/
		$('.Conname').click(function(){
			$('#bg').show();
			$('#bg-FF').show();
		})
		$('.close-k').click(function(){
			$('#bg').hide();
			$('#bg-FF').hide();
		})
		/*发行商详情*/
		$('.Release').click(function(){
			$('#bg2').show();
			$('#bg-Issuer').show();
		})
		$('.close-k').click(function(){
			$('#bg2').hide();
			$('#bg-Issuer').hide();
		})
		/*添加新客户并推送*/
		$('.create').click(function(){
			$('#ts-bg').show();
			$('#ts-mess1').show();
		})
		$('.close-ts').click(function(){
			$('#ts-bg').hide();
			$('#ts-mess1').hide();
		})
   })
var flag=1;
$('.use_name').find('span').click(function(){
	if(flag==1){
		$(".edit").fadeIn(200);
		$(this).next().addClass('active')
		flag=0;
	}else{
		$(".edit").fadeOut(200);
		$(this).next().removeClass('active')
		flag=1;
	}
});
var flag=1;
$('#unread').click(function(){
	if(flag==1){
		$("#floatChat1").animate({right: '-285px'},600);
		 $("#floatDivBoxs").show(600);
		$("#floatDivBoxs").animate({right: '0'},600);
		$("#rightArrow").animate({right: '279px'},600);
		flag=0;
	}else{
		$("#floatDivBoxs").animate({right: '-285px'},600);
		$("#rightArrow").animate({right: '0'},600);
		flag=1;
	}
});
$('#rightArrow').click(function(){
	if(flag==1){
		$("#floatDivBoxs").animate({right: '-285px'},600);
		$(this).animate({right: '0px'},600);
		flag=0;
	}else{
		$("#floatDivBoxs").animate({right: '0'},600);
		$(this).animate({right: '279pxpx'},600);
		flag=1;
	}
});
var flaga=1;
 $('#floatcart').click(function(){
	if(flaga==1){
		$("#floatDivBoxs").animate({right: '-285px'},600);
		 $("#floatChat1").show(600);
		$("#floatChat1").animate({right: '0'},600);
		$("#Chatreturn").animate({right: '279px'},600);
		$(".ace-nav").find(".contact").addClass("contacted");
		flaga=0;
	}else{
		$("#floatChat1").animate({right: '-285px'},600);
		$("#Chatreturn").animate({right: '0'},600);
		$(".ace-nav").find(".contact").removeClass("contacted");
		flaga=1;
	}
});
var flag=1;
$('#Chatreturn').click(function(){
	if(flag==1){
		$("#floatChat1").animate({right: '-285px'},600);
		$("#Chatreturn").animate({right: '0px'},600);
		$(".ace-nav").find(".contact").removeClass("contacted");
		flag=0;
	}else{
		$("#floatChat1").animate({right: '0'},600);
		$("#Chatreturn").animate({right: '280px'},600);
		flag=1;
	}	
});
