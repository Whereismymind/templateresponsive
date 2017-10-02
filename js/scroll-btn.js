$(document).ready(function(){
   	$(".btn-down").click(function() {
    	$('html, body').animate({
    	    scrollTop: $(".work").offset().top
    	}, 1000);
		});
		$(".btn-top").click(function() {
    	$('html, body').animate({
    	    scrollTop: $(".subscribe").offset().top
    	}, 1000);
		});
});