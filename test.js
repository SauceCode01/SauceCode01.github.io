$(window).scroll(function (event) {
	var sc = $(window).scrollTop();
	var width = $("body").css("width");
	width = parseInt(width.substr(0, width.length - 2));
	var height = $(".logo").css("height");
	height = parseInt(height.substr(0, height.length - 2));

	// if (width < 500 && sc > 0){
	// 	$(".burgeritem").css("background", "white");
	// 	$(".burgerlogo").css("color", "white");
	// 	$(".burgerlogo").css("font-size", "0");
	// 	$(".mobilenav").css("background", "none");
	// 	$(".navlinks").hover(function(){
	// 		$(this).css("background", "#606060");
	// 		$(this).css("font-size", "5vh");
	// 	}, function() {

	// 		$(this).css("background", "none");
	// 		$(this).css("font-size", "4.5vh");
	// 	});
	// }
	// else if (width < 500)
	// {
	// 	$(".burgeritem").css("background", "black");
	// 	$(".burgerlogo").css("color", "black");
	// 	$(".burgerlogo").css("font-size", "7vw");
	// 	$(".mobilenav").css("background", "white");	
	// }
	if (width > 750){
		if (sc > 0 && !($("header").hasClass("scroll"))){
			$("header").toggleClass("scroll");
		}
		else if (sc == 0){
			$("header").toggleClass("scroll");
		}
	} else {
		if (sc > 0 && !($("header").hasClass("mobilescroll"))){
			$("header").toggleClass("mobilescroll");
		}
		else if (sc == 0){
			$("header").toggleClass("mobilescroll");
		}
	}
});

$(".burger").click(function(){
	$("nav").toggleClass("open");
})



$("#navlogo").click(function(){
	$("header").toggleClass("scroll");
	console.log("hello world");
})