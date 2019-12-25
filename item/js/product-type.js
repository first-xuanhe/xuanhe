
	function getdata(attr,cb){
		$.ajax({
			url:"../data/product.json",
			type:"get",
			success:function (res){
			
				cb&&cb(res[attr])				
			}
		})
	}
	function page(num){
		
		let obj = {
			wrapid:'page', //页面显示分页器容器id
			total:num,//总条数
			pagesize:4,//每页显示10条
			currentPage:1,//当前页
			onPagechange:animateBox,
			btnCount:3
			//btnCount:7 页数过多时，显示省略号的边界页码按钮数量，可省略，且值是大于5的奇数
		}
		pagination.init(obj);
		
	}
	function animateBox(page){
			
		//$('.product-list  ul').stop().animate({left:-(page-1)*86+"vw"})
		$('.product-list  ul').stop().animate({left:-(page-1)*1038+"px"})
	}
	function addData(item){
				$('<li class="product-item" id="'+item.id+'">'+
					'<figure>'+
						'<img src="'+item.imgSrc+'" >'+
					'</figure>'+
					'<figcaption class="product-detail">'+
						'<h3>'+item["product-title"]+'</h3>'+
						'<p class="product-type"><span>'+item["product-type"]+'</span></p>'+
						'<p class="product-detail-text">'+
							'<a href="javascript:;">'+item["product-detail"]+'</a>'+
						'</p>'+
						'<div class="go-product">'+
							'<a href="./product-detail.html">MORE</a><span class="carte-right"></span>'+
								
						'</div>	'+	
							
							
						
					'</figcaption>'+
				'</li>').appendTo(".product-list ul")
				
			}