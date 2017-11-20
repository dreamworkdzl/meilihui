$(function(){
	$(".mf").click(function(){
		location.href="register.html"
	})
	
/*  点击登录   */
		var str = [false,false]
	$(".hy_btn").click(function(){
		if($("#yonghu").val() == "" || $("#passWd").val() == ""){
			alert("输入信息不能为空")
		}else{
			cookie()
		}
		if(str.indexOf(false)!=-1){
			alert("输入信息有误")
			console.log(str)
		}else{
			location.href = "index.html"
		}
	})
	
	
	function cookie(){
		var arr = document.cookie.split('; ');
		for(var i = 0;i<arr.length;i++){
			var val = arr[i].split('=');
			if(val[0].indexOf('user_') == 0){
				var user = eval('('+val[1]+')');
				var $userId = user.phone
				var $userPass = user.password
			}
			
			//判断
			if($userId == $("#yonghu").val()){
				str[0] = true
				if($userPass == $("#passWd").val()){
					str[1] = true
				}else{
					str[1] = false
				}
			}else{
				str[0] = false
			}
		}
	}
})

