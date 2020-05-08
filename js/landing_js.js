// Countdown code

var doomsday = new Date("January 01 2050 00:00:00").getTime();
var currentyr = new Date().getFullYear();

function twodigit(num) {
	if(num < 10) {
		return '0' + num;   
	} else {
		return num;
	}
}

function minusleap(year) {
	var numYears = 0;
	for(var i = year; i <= 2050; i++){
		if(i % 4 === 0){
			numYears++;   
		}
	}
	return numYears;
}

var countdown = function() {
	var today = new Date().getTime();
	var timeleft = doomsday - today;
	var years = Math.floor(timeleft / (365 * 24 * 60 * 60 * 1000));
	var days = Math.floor((timeleft % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
	var hours = Math.floor((timeleft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	var minutes = Math.floor((timeleft % (60 * 60 * 1000)) / (60 * 1000));
	var seconds = Math.floor((timeleft % (60 * 1000)) / 1000);
	document.getElementById("years").innerHTML = twodigit(years);
	document.getElementById("days").innerHTML = twodigit(days) - minusleap(currentyr);
	document.getElementById("hours").innerHTML = twodigit(hours);
	document.getElementById("mins").innerHTML = twodigit(minutes);
	document.getElementById("secs").innerHTML = twodigit(seconds);
}

// Slideshow code

var picindex = 0;

function slideshow() {
	var pics = document.getElementsByClassName("caption");
	for(var i = 0; i < pics.length; i++){
		pics[i].style.display = "none";
	}
	picindex++;
	if(pics.length < picindex) {
		picindex = 1;
	}
	pics[picindex - 1].style.display = "block";
	setTimeout(slideshow, 8000);
}

// Hover image code

// Execute commands when document is ready

$(document).ready(function() {
	setInterval(countdown, 1000);
	slideshow();
	$(".landing h2").hide().delay(1000).fadeIn(2000);
	$(".landing h4").hide().delay(1000).fadeIn(2000);	
	$("#scrolldown").hide().delay(3000).slideDown(2000);
	
	$("#dis_textoverlay").css("color", "#000");

	$("#toronto").hover(function() {
		$(".disasters").css( {
			"background-image": "url('img/toronto_islands.jpg')",
			"background-size": "cover",
			"opacity": "0"
		});
		$(".disasters").animate({opacity: "1"}, 1000);
		$("#dis_textoverlay").css("color", "#fff");
	});
	$("#japan").hover(function() {
		$(".disasters").css( {
			"background-image": "url('img/japanese_island.jpg')",
			"background-size": "cover",
			"opacity": "0"
		});
		$(".disasters").animate({opacity: "1"}, 1000);
		$("#dis_textoverlay").css("color", "#fff");
	});
	$("#southafrica").hover(function() {
		$(".disasters").css( {
			"background-image": "url('img/south_africa.jpg')",
			"background-size": "cover",
			"opacity": "0"
		});
		$(".disasters").animate({opacity: "1"}, 1000);
		$("#dis_textoverlay").css("color", "#fff");
	});
});
