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
$(function(){

	var str ='';
	$.ajax("json/details.json")
	
	.then(function(res){
		for(var i = 0;i < 36;i++){
			str += `<div class="product">
						<div class="product_img">
							<a href="#" style="z-index:3"><img src=${res[i].imgBig1}/></a>
							<a href="#" style="z-index:2"><img src=${res[i].imgBig2}/></a>
							<a href="#" style="z-index:1"><img src=${res[i].imgBig3}/></a>
						</div>
						<div class="product_pop">
							<div class="product_pop_con">
								<div class="product_cen">
									<span class="product_pop_span product_pop_span1" style="z-index:2"><img src=${res[i].imgSmall1}/></span>
									<span class="product_pop_span"><img src=${res[i].imgSmall2}/></span>
									<span class="product_pop_span"><img src=${res[i].imgSmall3}/></span>
								</div>
							</div>
						</div>
						<div class="product_con">
							<p style="display: block; width: 225px;  overflow:  hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow:  ellipsis;">
								<a href="#">MASON GARMENTS</a>
							</p>
							<pstyle="display: block; width: 225px;  overflow:  hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow:  ellipsis;">
								<a href="#">${res[i].name}</a>
							</p>
							<p class="product_p">
								<span class="product_span">${res[i].price}</span>
								<span style="text-decoration:line-through;font-size:12px;">${res[i].prices}</span>
							</p>
						</div>
					</div>`;
		}
		$(".the_list").html(str);
		
		
		$(".product").mouseover(function(){
			$(this).children(1).css({"display":"block"})
		}).mouseout(function(){
			$(".product_pop").css({"display":"none"})
		})
		
		$(".product_cen span").mouseover(function(){
			var index = $(this).index();
			$(this).css({"border":"1px solid #000"})
			//alert($(this).index())
//			$(".product_img a")
			$(this).parent().parent().parent().prev().children()					
								.eq(index)
								.show()
								.siblings()
								.hide()
								
		}).mouseout(function(){
			$(this).css({"border":"0"})
			$(this).parent().parent().parent().prev().children().index(0)
		})
	})
		
	
	
	
	
	
})
