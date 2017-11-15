$(window).scroll(function() {
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
	} else {
//		$(".navOut").hide();
		$(".navH").css({"position" : "static"})
	}
})

	$(".qq").mouseover(function(){
			  $(this).find("img").
	})

