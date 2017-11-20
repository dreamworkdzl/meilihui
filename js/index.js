/*******		点击注册跳转页面 	   	*******/
$(function(){
	$(".theLi:first").click(function(){
		location.href="register.html"
	})
	
	$("#logZ").click(function(){
		location.href="login.html"
	})
})




/*******		吸顶效果			*******/
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

/*******		今日上新		*******/
	var str ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 0;i < 18;i++){
			str += `<div class="conterPho">
						<div class="conP">
							<div class="conZ">
								<a href="#"><img src=${res[i].img}/></a>
							</div>
						</div>
						<div class="conN">
							<h3><a href="#" style="color: #000;">${res[i].name}</a>
								<span class="span-2">折起</span><span class="span-1">${res[i].price}</span></h3>
						</div>
					</div>`;
		}
	$(".conHz").html(str);
	})
	
/*******		热卖品牌		*******/
	var str1 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 18;i < 27;i++){
			str1 += `<div class="conterPho">
						<div class="conP">
							<div class="conZ">
								<a href="#"><img src=${res[i].img}/></a>
							</div>
						</div>
						<div class="conN">
							<h3><a href="#" style="color: #000;">${res[i].name}</a>
								<span class="span-2">折起</span><span class="span-1">${res[i].price}</span></h3>
						</div>
					</div>`;
		}
	$(".con_remai").html(str1);
	})

/*******		女士活动		*******/
	var str2 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 27;i < 37;i++){
			str2 += `<div class="conterPho">
						<div class="conP">
							<div class="conZ">
								<a href="#"><img src=${res[i].img}/></a>
							</div>
						</div>
						<div class="conN">
							<h3><a href="#" style="color: #000;">${res[i].name}</a>
								<span class="span-2">折起</span><span class="span-1">${res[i].price}</span></h3>
						</div>
					</div>`;
		}
	$(".con_nv").html(str2);
	})

/*******		男士活动		*******/
	var str3 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 37;i < 44;i++){
			str3 += `<div class="conterPho">
						<div class="conP">
							<div class="conZ">
								<a href="#"><img src=${res[i].img}/></a>
							</div>
						</div>
						<div class="conN">
							<h3><a href="#" style="color: #000;">${res[i].name}</a>
								<span class="span-2">折起</span><span class="span-1">${res[i].price}</span></h3>
						</div>
					</div>`;
		}
	$(".con_nan").html(str3);
	})
/*******		美妆活动		*******/
	var str4 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 44;i < 51;i++){
			str4 += `<div class="conterPho">
						<div class="conP">
							<div class="conZ">
								<a href="#"><img src=${res[i].img}/></a>
							</div>
						</div>
						<div class="conN">
							<h3><a href="#" style="color: #000;">${res[i].name}</a>
								<span class="span-2">折起</span><span class="span-1">${res[i].price}</span></h3>
						</div>
					</div>`;
		}
	$(".con_meizh").html(str4);
	})
/*******		家居活动		*******/
	var str5 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 51;i < 55;i++){
			str5 += `<div class="conterPho">
						<div class="conP">
							<div class="conZ">
								<a href="#"><img src=${res[i].img}/></a>
							</div>
						</div>
						<div class="conN">
							<h3><a href="#" style="color: #000;">${res[i].name}</a>
								<span class="span-2">折起</span><span class="span-1">${res[i].price}</span></h3>
						</div>
					</div>`;
		}
	$(".con_jia").html(str5);
	})
/*******		婴童活动		*******/
	var str6 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 55;i < 59;i++){
			str6 += `<div class="conterPho">
						<div class="conP">
							<div class="conZ">
								<a href="#"><img src=${res[i].img}/></a>
							</div>
						</div>
						<div class="conN">
							<h3><a href="#" style="color: #000;">${res[i].name}</a>
								<span class="span-2">折起</span><span class="span-1">${res[i].price}</span></h3>
						</div>
					</div>`;
		}
	$(".con_ying").html(str6);
	})
/*******		海外活动		*******/
	var str7 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 59;i < 63;i++){
			str7 += `<div class="conterPho">
						<div class="conP">
							<div class="conZ">
								<a href="#"><img src=${res[i].img}/></a>
								<p class="conX">
									活动还有3天结束
								</p>
							</div>
							
						</div>
						
						<div class="conN">
							<h3><a href="#" style="color: #000;">${res[i].name}</a>
								<span class="span-2">折起</span><span class="span-1">${res[i].price}</span></h3>
						</div>
					</div>`;
		}
	$(".con_hai").html(str7);
	})

/*******		鼠标滑入		  *******/


$(function(){
	$(".conZ .conX").mouseenter(function(){
		$(this).css("display","block");
		console.log($(this))
		//$(this).show();
	},function(){
		$(this).css({"display":"none"});
		//$(this).hide();
	})
})

/*******		选项卡		  *******/
//				A
var str8 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 63;i < 66;i++){
			str8 += `
				<div class="tag_hezi">
					<div class="tag_img"><a href="#"><img src=${res[i].img}/></a></div>
					<div class="tag_wenzi">
						<p>${res[i].name}</p>
						<p><span>${res[i].price}</span>折起</p>
					</div>
				</div>`;
		}
	$(".tab_con_A").html(str8);
	})
//				B
var str9 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 66;i < 70;i++){
			str9 += `
				<div class="tag_hezi">
					<div class="tag_img"><a href="#"><img src=${res[i].img}/></a></div>
					<div class="tag_wenzi">
						<p>${res[i].name}</p>
						<p><span>${res[i].price}</span>折起</p>
					</div>
				</div>`;
		}
	$(".tab_con_B").html(str9);
	})
//				C	
var str10 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 70;i < 76;i++){
			str10 += `
				<div class="tag_hezi">
					<div class="tag_img"><a href="#"><img src=${res[i].img}/></a></div>
					<div class="tag_wenzi">
						<p>${res[i].name}</p>
						<p><span>${res[i].price}</span>折起</p>
					</div>
				</div>`;
		}
	$(".tab_con_C").html(str10);
	})
//				D	
var str11 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 76;i < 85;i++){
			str11 += `
				<div class="tag_hezi">
					<div class="tag_img"><a href="#"><img src=${res[i].img}/></a></div>
					<div class="tag_wenzi">
						<p>${res[i].name}</p>
						<p><span>${res[i].price}</span>折起</p>
					</div>
				</div>`;
		}
	$(".tab_con_D").html(str11);
	})
//				E
var str12 ='';
	$.ajax("json/index.json")
	
	.then(function(res){
		for(var i = 85;i < 93;i++){
			str12 += `
				<div class="tag_hezi">
					<div class="tag_img"><a href="#"><img src=${res[i].img}/></a></div>
					<div class="tag_wenzi">
						<p>${res[i].name}</p>
						<p><span>${res[i].price}</span>折起</p>
					</div>
				</div>`;
		}
	$(".tab_con_E").html(str12);
	})
	
//选项卡 效果
$(function(){
	$(".tab_top_a span").click(function(){
		$(".tab_top_a span").css({"border-bottom":"0"});
		$(this).css("border-bottom","4px solid #000")
		//console.log($(".tab_con div").eq( $(this).index() ))
		//$(".tab_con div").css("display","none");
		$(".tab_con>div").eq( $(this).index() ).css({"display":"block"}).siblings().css("display","none");		
//		alert( $(this).index() )
	})
})
/*******		banner轮播图		  *******/
var timer= setInterval(autoPlay,3000);
var index = 0;
function autoPlay(){
	index++;
	if(index == 4){
		index = 0;
	}
	$("#banner .banner_ul li").eq(index)
							  .fadeIn(1000)
							  .siblings()
							  .fadeOut(1000);
}


