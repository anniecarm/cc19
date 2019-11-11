$(document).ready(function () {
	$(window).scroll(function () {
		var scrollpos = $(window).scrollTop();
		$('.questions').css({
			'height': +(scrollpos) + 'px'

		});
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 1350){
			$(".questions").css({"opacity":"0"})
		}
		else {
			$(".questions").css({"opacity":"0.5"})
		}
	});
});


$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 1700){
			$("body").css({"background-color":"lightblue"})
		}
		else {
			$("body").css({"background-color":"white"})
		}
	});
});


$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 1650){
			$(".underwater").css({"background-color":"lightblue"})
		}
		else {
			$(".underwater").css({"background-color":"white"})
		}
	});
});

