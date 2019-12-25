var attr = ["newsCenter", "industry"];
getDat(attr[0])
console.log($)

//切换新闻中心或行业动态
$(".list").on("click", "li", function() {
	$(".floor-ul-List").css({
		left: 0
	})
	index = $(this).index();
	getDat(attr[index])
	$(this).addClass("active").siblings().removeClass("active");
})

function getDat(attr) {
	$.ajax({
		type: "get",
		url: "../data/news.json",
		async: true,
		success: function(data) {
			console.log(data)
			$(".floor-ul-List").html("");

			//创建页数
			var num = 0;
			for (var i = 0; i < data[attr].length / 6; i++) {
				num++;
				$(".floor-ul-List").css({
					width: num * 1035 + "px"
				})
			/*	
				.3
				3
			*/
				$('<ul class="M-List"></ul').appendTo(".floor-ul-List")
			}

			readyDat(data[attr])

			//分页器
			var obj = {
				wrapid: 'page', //页面显示分页器容器id
				total: data[attr].length, //总条数
				pagesize: 6, //每页显示10条
				currentPage: 1, //当前页
				onPagechange: animateBox,
				btnCount: 3
				//btnCount:7 页数过多时，显示省略号的边界页码按钮数量，可省略，且值是大于5的奇数
			}
			pagination.init(obj);

			function animateBox(page) {
				$(".floor-ul-List").animate({
					left: -(page - 1) * 1035 + "px"
				})
			}

		}
	});
}

function readyDat(data) {
	console.log(data)
	//计算6条数据的计数器
	var ipu = 0
	var sp = 0;
	$.each(data, function(index, item) {
		sp++;
		if (sp > 6) {
			sp = 1;
			ipu++;
		}
		//			$(".M-List").eq(ipu).append(`<li class="list-uLi">
		//		 		<div>
		//		 			<figure><img src="${item.src}"/></figure>
		//			 		<div class="list-uLi-box">
		//			 			<h2>${item.title}</h2>
		//			 			<span>2019-08-22</span>
		//			 			<span class="width-55"></span>
		//			 			<p>智能家居和普通家具究竟有何不同?  近两年全球正在悄悄的燃起一场智能化的革命</p>
		//			 			<a href="#" class="floor-xbox-btn">
		//							MORE
		//						</a>
		//			 		</div>
		//		 		</div>
		//		 	</li>`);

		$(".M-List").eq(ipu).append('<li class="list-uLi">' +
			'<div>' +
			'<figure><a href="details.html"><img src="' + [item.src] + '"/></a></figure>' +
			'<div class="list-uLi-box">' +
			'<h2>' + [item.title] + '</h2>' +
//			'<span>' + [item.time] + '</span>' +
			'<span class="width-55"></span>' +
			'<p>'+[item.text]+'</p>' +
			'<a href="details.html" class="floor-xbox-btn">' + 'MORE' +
			'<span class="carte-right"></span>'+
			'</a>' +
			'</div>' +
			'</div>' +
			'</li>');


	});
}
