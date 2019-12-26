$(function(){
		
	
	var attr=["all","latex","noopsyche","health","non-woven"];
	//初始化数据
	getdata(attr[0],function(res){
		
		var  num=0;//计算多少条数据；
		//清空数据容器
		$(".product-list ul").html("")
		
		$('.page-body-title h1').html(res.title)
		$('.page-body-title').css({"background":'url('+res.bg+') center no-repeat'})
		
		res.list.forEach(function(item){
				num++;
			addData(item)
			
		})
		//$(".product-list").css({width:num/4*86+"vw"})
			// $(".product-list").css({width:num/4*1038+"px"})
			// $(".product-list").css({width:860+"px"})
	//分页器
		page(num);
		
		//详情页
		
		$(".product-list>ul li").on("click","img",function(){
			location.href="../pages/product-detail.html";
		})
		$(".product-list>ul li .go-product").on("click","a",function(){
			console.log(111)
			location.href="../pages/product-detail.html";
		})
	});
	
	
	
	//点击切换数据
	$(".product-btnList").on("click","li",function(){
		var  num=0;//计算多少条数据；
		$('.product-list ul').css({"left":0});
		$(".product-list ul").html("")
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		getdata(attr[index],function(res){
			
			$('.page-body-title h1').html(res.title)
			$('.page-body-title').css({"background":"url("+res.bg+") center no-repeat"})
			res.list.forEach(function (item,index){
				num++;
				
				addData(item)
			})
			
			//$(".product-list").css({width:num/4*86+"vw"})
			$(".product-list").css({width:num/4*1038+"px"})
			//分页器
			page(num);	
				
			//详情页
			$(".product-list>ul li").on("click","img",function(){
				location.href="../pages/product-detail.html";
			})
			
		});
		return false;
	})
	
	
})