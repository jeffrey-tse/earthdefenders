// Variables
var questionNum = 0;
var userScore = 0;
var quiz_qs = [
	{
		question: "Which of the following is NOT a greenhouse gas?",
		choices: ["Carbon Dioxide", "Methane", "Nitrous Oxide", "Nitrogen"],
		answer: 3
	},
	{
		question: "Certain types of trees can offset carbon emissions better than others.",
		choices: ["True", "False"],
		answer: 0
	},
	{
		question: "Which of the following is NOT a direct consequence of global warming?",
		choices: ["The rising sea level", "Extreme weathers", "Natural resource exhaustion", "Wildlife extinction"],
		answer: 2
	},
	{
		question: "What is the MAIN cause of global warming?",
		choices: ["Burning fossil fuels", "Deforestation", "Livestock farming", "Use of CFCs"],
		answer: 0
	},
	{
		question: "Which of the following is considered as clean energy?",
		choices: ["Fuel", "Natural Gas", "Hydrogen Fuel", "Coal"],
		answer: 2
	},
	{
		question: "What activity does not produce methane?",
		choices: ["Livestock farming", "Fuel combustion", "Landfill decay", "Use of eco-friendly fuels"],
		answer: 3
	},
	{
		question: "Water vapour is a type of greenhouse gas.",
		choices: ["True", "False"],
		answer: 0
	}, 
	{
		question: "Which of the following statements is NOT true about HIGH global warming potential greenhouse gases?",
		choices: ["They are far more effective at trapping heat than regular greenhouse gases.", "They take up a big portion of the total greenhouse gases emission.", "These gases are very stable and hard to get rid of.", "These gases will remain in the atmosphere for a long time."],
		answer: 1
	},
	{
		question: "When did global warming start?",
		choices: ["The 20th century", "The Industrial Revolution", "WWII", "The 21st century"],
		answer: 1
	},
	{
		question: "Reducing food waste can help to reduce the emission of greenhouse gases.",
		choices: ["True", "False"],
		answer: 0
	}
]

// Functions

// Display Question - takes the questions from quiz_qs and puts it onto the HTML
function displayQ() {
	$("#questnum").text("#" + (questionNum + 1));
	$("#question").text(quiz_qs[questionNum]["question"]);
	$("#choiceimg img").attr("src", "img/quiz_icons/q" + (questionNum + 1) + ".png");
	addChoices(getChoices(questionNum));
	if (questionNum === 9) {
		$("#nextq").css("display", "none");
		$("#finish").css("display", "block");
	}
}

// Get Choices - check question number, get and return number of choices in the question for the quiz to input
function getChoices(qnumber) {
	return quiz_qs[qnumber]["choices"].length;
}

// Add choices to list - takes the number choices and adds the respective choices to the list
function addChoices (numChoices) {
	for (var i = 0; i < numChoices; i++) {
		$("<li>").append("<input id='opt"+ i +"' name='answer' value='"+ i +"' type='radio' />").append(
			$("<label>").attr("for", "opt" + i).text(quiz_qs[questionNum]["choices"][i])
		).appendTo("#quiz ul");
	}
}

// Check Answered - checks if the question is answered and returns true/false
function checkAnswered() {
	if($("input:checked").val() === undefined) {
		return false;
	}
	checkCorrect($("input:checked").val(), quiz_qs[questionNum]["answer"]);
	return true;
}

// Next Question - checks if question is answered, and moves on to the next question
function nextQ() {
	if(checkAnswered() && questionNum < 10) {
		questionNum++;
		$("#quiz ul").empty();
		displayQ();
	} else {
//		alert("Please select an option.");
		$(".popup").css("display", "block");
		$(".closepop").click(function(evt) {
			$(".popup").fadeOut();
		});
	}
}

// Check Correct - checks if the user's answer matches the correct answer, and adds to the user's score
function checkCorrect(userAnswer, corAnswer) {
	if(parseInt(userAnswer) === corAnswer) {
		userScore++;
	}
}

// Score comments - based on score, show certain comments for the user 
function scoreComments() {
	if(userScore === 10) {
		$("#scorecomments").text("WOW, you got a perfect score! You truly have what it takes to be an Earth Defender! You should be proud!");
	} else if (userScore >= 7) {
		$("#scorecomments").text("Great job, you really know your stuff! Congrats, and continue spreading the message on global warming!");
	} else if (userScore >= 4 && userScore < 7) {
		$("#scorecomments").text("You did OK! Feel free to visit our facts page to learn more about global warming.");
	} else if (userScore < 4) {
		$("#scorecomments").text("Uh oh, maybe it's time to brush up on your knowledge on global warming! Have you read our facts page yet?");
	}
}

$(document).ready(function() {
	$("#startquiz").click(function(){
		displayQ();
		$("#quiz").fadeIn();
		$("#openq").css("display", "none");
		$("#startquiz").css("display", "none");
	});
	$("#nextq").click(function() {
		nextQ();
	});
	$("#finish").click(function() {
		if(!checkAnswered()) {
//			alert("Please select an option.");
			$(".popup").css("display", "block");
			$(".closepop").click(function(evt) {
				$(".popup").fadeOut();
			});
		} else {
			$("#finish").css("display", "none");
			$("#quiz").fadeOut();
			$("#scorenum").text(userScore + "/10");
			scoreComments();
			$("#score").delay(500).fadeIn();
			$("#replay").delay(500).fadeIn();
		}
	});
	$("#replay").click(function() {
		$("#score").fadeOut();
		$("#replay").fadeOut();
		questionNum = 0;
		userScore = 0;
		$("#quiz ul").empty();
		displayQ();
		$("#nextq").css("display", "block");
		$("#quiz").delay(500).fadeIn();
	});
});