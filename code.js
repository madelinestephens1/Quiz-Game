function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var choice = 0;
function newProblem() {
	var questions = ["Which fictional city is the home of Batman?", "Babe Ruth is associated with which sport?", "Which crime-fighting cartoon dog has the initals “S.D.” on his collar?", "What is the name of the fairy in Peter Pan?", "What was the Hunchback of Notre Dame’s name?",
 "After all, tomorrow is another day! is the last line from which movie that won the Academy Award for Best Picture in 1939?", "What is the name of the kingdom where the 2013 animated movie Frozen is set?", "Who directed the movie Jaws?", "Who is the author of the “Harry Potter” books?"];
	choice = Math.floor(Math.random() * 9)
	question = questions[choice];


	document.getElementById("problem").innerHTML = question;
}

function checkAnswer(form) {
	console.log(choice);
	var answers = ["Gotham City", "baseball", "Scooby Doo", "Tinkerbell", "Quasimodo", "Gone With the Wind", "Arendelle", "Stephen Speilberg", "J.K. Rowling"];
	var useranswer = document.getElementById("textbox").value;

	if(answers[choice] == useranswer) {
		alert("CORRECT!");
		count++;
		newProblem();
	}
}


// function newProblem() {
// 	var question = "Babe Ruth is associated with which sport?";
// 	var answer = "Baseball.";
//
// 	document.getElementById("problem").innerHTML = question;
// }
// function checkAnswer(form){
//
// }



//showQuestions
// Q. Which fictional city is the home of Batman?
// A. Gotham City.
//
// Q. Babe Ruth is associated with which sport?
// A. Baseball.
//
// Q. Which crime-fighting cartoon dog has the initals “S.D.” on his collar?
// A. Scooby Doo.
//
// Q. What is the name of the fairy in Peter Pan?
// A. Tinkerbell.
//
// Q. What was the Hunchback of Notre Dame’s name?
// A. Quasimodo.
//
// Q. Who directed the movie Jaws?
// A. Steven Spielberg.
//
// Q. Who is the author of the “Harry Potter” books?
// A. J. K. Rowling.
//
// Q. "After all, tomorrow is another day!" is the last line from which movie that won the Academy Award for Best Picture in 1939?
// A.Gone with the Wind.
//
// Q. What is the name of the kingdom where the 2013 animated movie Frozen is set?
// A. Arendelle.
