$(function(){
	$('.xx-smallbiao a').hover(function(){
			$(this).addClass('xx-ajamp')
		},function(){
			$(this).removeClass('xx-ajamp')
		})
	$('.top').click(function(){
		$('body,html').animate({
			scrollTop:0
		})
	})
	$(".xx-web p").click(function(){
		$(".box-list").slideToggle();
	})
})

