// Solutions suggest a solution submission
$(document).ready(function() {
	
	$("#suggestion").submit(function(evt){
		evt.preventDefault();
		$(".popup").fadeIn();
	});
	
	$(".closepop").click(function() {
		$(".popup").fadeOut();
		$(".solution-question1 form").fadeOut();
		$(".solution-question1 h2").delay(500).fadeIn();
	});

});