// Join Earth Defenders form submission
$(document).ready(function() {
	
	$("#joinus").submit(function(evt){
		evt.preventDefault();
		var name = $("input[name*='firstname']").val();
		console.log(name);
		$("#popupfn").text(name);
		$(".popup").fadeIn();
	});
	
	$(".closepop").click(function() {
		$(".popup").fadeOut();
		$("#joinus").fadeOut();
	});

});