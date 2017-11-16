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
//var oConZ = document.getElementById("conZ");
//	oConZ.onmouseover = function(e){
//		var e = e ||event;
//		oConZ.style.display = "block";
//	}
//	oConZ.onmouseout = function(){
//		oConZ.style.display = "none";
//	}

