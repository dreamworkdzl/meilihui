$(function(){
/***	用户名	  ***/	
	var isTrue=[false,false,false,false,false]
	$("#yonghu").blur(function(){
		var res = /^(13|15|18)[0-9]{9}$/;
		if($(this).val() == ""){
			$(".txt_1").html("手机号不能为空")
			$(".txt_1").css({"color":"red"})
			isTrue[0]=false;
		}else{
			if( res.test( $(this).val() ) ){
			$(".txt_1").html("手机号正确")
			$(".txt_1").css({"color":"green"})
			isTrue[0]= true;
			}else{
				$(".txt_1").html("手机号错误")
				$(".txt_1").css({"color":"red"})
				isTrue[0]=false;
			}
		}
		cookie($("#yonghu"))
	})
/***	密码 	  ***/
	$("#passWd").blur(function(){
		var res = /^\w{6,18}$/;
		if( $(this).val() == "" ){
			$(".txt_2").html("密码不能为空")
			$(".txt_2").css({"color":"red"})
			isTrue[1]=false;
		}else{
			if( res.test( $(this).val() ) ){
				$(".txt_2").html("正确")
				$(".txt_2").css({"color":"green"})
				isTrue[1]= true;
			}else{
				$(".txt_2").html("密码填写不正确")
				$(".txt_2").css({"color":"red"})
				isTrue[1]=false;
			}
		}
	})
/***	确认密码 	***/
	$("#passWd2").blur(function(){
		if($(this).val() == ""){
			$(".txt_3").html("密码不能为空")
			$(".txt_3").css({"color":"red"})
			isTrue[2]=false;
		}else{
			if($(this).val() == $("#passWd").val()){
				$(".txt_3").html("两次输入密码一致")
				$(".txt_3").css({"color":"green"})
				isTrue[2]=true;
			}else{
				$(".txt_3").html("密码错误")
				$(".txt_3").css({"color":"red"})
				isTrue[2]=false;
			}
		}
	})
/***	验证码	***/
	function yzm(){
		var arr = [];  //存放验证码
		for(var i = 0; i < 6;i ++){
			var code= getRand(0,9);
			arr.push(code);
		}
		return arr.join("")
	}
		$("#yz").html( yzm() );
		
	$(".dyz").click(function(){//验证码
		$("#yz").html( yzm() )
	})
//	console.log( $("#yz").html() )
		$("#dxyz").html( yzm() )
	$(".dx").click(function(){//短信验证
		$("#dxyz").html( yzm() )
	})
//验证码	
	$("#yzval").blur(function(){
		if( $(this).val() =="" ){
			$(".txt_4").html("验证码不能为空")
			$(".txt_4").css({"color":"red"})
			isTrue[3]=false;
		}else{
			if($(this).val() == $("#yz").html()){
				$(".txt_4").html("正确")
				$(".txt_4").css({"color":"green"})
				isTrue[3]=true;
			}else{
				$(".txt_4").html("验证码不正确")
				$(".txt_4").css({"color":"red"})
				isTrue[3]=false
			}
		}
	})
//短信验证
	$("#dyzval").blur(function(){
		if( $(this).val() =="" ){
			$(".txt_5").html("验证码不能为空")
			$(".txt_5").css({"color":"red"})
			isTrue[4]=false;
		}else{
			if($(this).val() == $("#dxyz").html()){
				$(".txt_5").html("正确")
				$(".txt_5").css({"color":"green"})
				isTrue[4]=true;
			}else{
				$(".txt_5").html("验证码不正确")
				$(".txt_5").css({"color":"red"})
				isTrue[4]=false;
			}
		}
	})

/***	点击注册事件		***/
	let id = new Date().getTime()
	var date = new Date();
	date.setDate(date.getDate()+7);
	//注册
	$(".hy_btn").click(function(){
		if(isTrue.indexOf(false)!=-1){
			alert("输入的信息有误")
		}else{
			location.href="index.html"
			
			
			var userPhone = $("#yonghu").val()
			var userPassword = $("passWd").val()
			var cookieValue = "{id:" + id + ',phone:"' + userPhone + '",password:' + userPassword + "}";
			var cookieKey = "user_" + id;
			document.cookie = cookieKey + '=' + cookieValue + ";expires=" + date + ";path=/";
		}
	})
	function cookie(obj){
		var arr = document.cookie.split('; ');
		for(var i = 0;i<arr.length;i++){
			var val = arr[i].split('=');
			if(val[0].indexOf('user_') == 0){
				var user = eval('('+val[1]+')');
				var $userId = user.phone
				var $userPass = user.password
			}
			if($userId == obj.val()){
				alert("用户名字已存在")
				$(".txt_1").html("用户名已存在")
				$(".txt_1").css({"color":"red"})
				isTrue[0]=false;
			}
		}
	}
})
