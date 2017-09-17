$(document).ready(function(){
	$(".hamburger span").click(function(){
		$(".sidenav").addClass("sidenav-open");
	});
	$(".sidenav-close").click(function(){
		$(".sidenav").removeClass("sidenav-open");
	});

	// script for contact form
	$(".enquire").click(function(){
		$(".enquire-model").fadeIn();
	});
	$(".enquire-close, .booking-close").click(function(){
		$(".enquire-model").fadeOut();
	});

	// script for booking villa
	$(".booking").click(function(){
		$(".booking-model").fadeIn();
	});
	$(".booking-close").click(function(){
		$(".booking-model").fadeOut();
	});
	$(".booking-model ul li i").click(function(){
		// alert($(this).attr("id"));
		$(this).toggleClass("book-villa");
	});
});