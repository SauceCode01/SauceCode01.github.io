$(window).scroll(function (event) {
	var sc = $(window).scrollTop();
	var width = $("body").css("width");
	width = parseInt(width.substr(0, width.length - 2));
	var height = $(".logo").css("height");
	height = parseInt(height.substr(0, height.length - 2));

	if (sc > 0 && !($("header").hasClass("scroll"))){
		$("header").toggleClass("scroll");
	}
	else if (sc == 0){
		$("header").toggleClass("scroll");
	}
});

$(".burger").click(function(){
	$("header").toggleClass("open");
})


$("#blogs").click(function(){
	location.href = "./blogs/blogs.html";
})


$("#home").click(function(){
	location.href = "../../../index.html";
})