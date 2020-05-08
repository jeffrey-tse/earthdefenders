// Animate background colour of header on scroll

$(window).on("scroll", function(){
	if($(this).scrollTop() > 165) {
		$("header").addClass("headerbg");
	} else {
		$("header").removeClass("headerbg");
	}
});