/*******		吸顶效果			*******/
$(window).scroll(function(){
	//首页及列表页
	if($(document).scrollTop() > 120) {
		$(".navH").css({
			"display": "block",
			"position": "fixed",
			"top": "0",
			//"left": "0",
			"width": "100%",
			"z-index": "999",

		})
	}else{
		$(".navH").css({"position" : "static"})
	}
})

/*******		顶部二维码		*******/
$(function(){
	$(".qq").hover(function(){
		$(this).children("a").css({"color":"red"});
		$(this).children("img").show();
	},function(){
		$(this).children("img").hide();
		$(this).children("a").css({"color":"black"});
	})
})

/*******		产品页面		*******/




