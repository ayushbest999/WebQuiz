function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	//function showQuestions(questions, quizContainer){
		// code will go here
	//}

	//function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	//}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}



var myQuestions = [
	{
		question: "1) If sinA = 8/17, find cotA.",
		answers: {
			a: '17/15',
			b: '15/8',
			c: '17/8',
            d: '15/17'
		},
		correctAnswer: 'b'
	},
	{
		question: "2) What is the value of tan1*tan2*tan3* .......... *tan89 ?(the values of angles are in degrees)",
		answers: {
			a: '0',
			b: '1',
			c: '∞',
            d: 'none of the above'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "3) sin47cos43 + cos47sin43 = ?",
		answers: {
			a: '0',
			b: '2',
			c: '1',
            d: '-1'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "4) The number of arrangements which can be made using all the letters of the word LAUGH if the vowels are adjacent is:",
		answers: {
			a: '10',
			b: '120',
			c: '24',
            d: '48'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "5) Three numbers are chosen at random without replacement from {1,2,3...8}. the probability that their minimum is 3 given that their maximum is 6, is",
		answers: {
			a: '1/4',
			b: '2/8',
			c: '3/8',
            d: '1/5'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "6) One ticket is selected at random from 50 tickets numbered 00, 01, 02, .......49. then the probability that the sum of the digits on the selected ticket is 8, given that the product of these digits is zero, equals",
		answers: {
			a: '1/14',
			b: '1/7',
			c: '5/14',
            d: '1/50'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "7)Let two numbers have arithmetic mean 9 and geometric mean 4. These numbers are the roots of the quadratic equation-",
		answers: {
			a: 'x^2  + 18x + 16 = 0',
			b: 'x^2 – 16x – 16 = 0',
			c: 'x^2 + 18x – 16 = 0',
            d: 'x^2  - 18x + 16 = 0'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "8) If cosx + sinx = 1 , cosx – sinx = ?",
		answers: {
			a: '1',
			b: '-1',
			c: '0',
            d: 'Both a and b'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "9) If   sinx + cosx = m and secx + cosecx = n, n(m^2 - 1) = ?",
		answers: {
			a: '2m',
			b: '1/m',
			c: 'm+1',
            d: 'm-1'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "10) Sec30/cosec60  = ?",
		answers: {
			a: '1',
			b: '2',
			c: '-1',
            d: '2/√3'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "11) If 2sin2x = √3  then x = ?",
		answers: {
			a: '30',
			b: '60',
			c: '90',
            d: '45'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "12) If A,B,C are the angles of a triangle ABC,  sin(B+C)/2 Is equal to",
		answers: {
			a: 'sin(A/2)',
			b: 'cos(A/2)',
			c: 'cos(B/2)',
            d: 'sin(B/2)'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "13) If sin(x+34) = cos x and  ( x+34 ) is acute then x is equal to (the angles are in degrees)",
		answers: {
			a: '34',
			b: '56',
			c: '28',
            d: '58'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "14) The value of   ) is-(the values of angles are in degrees)",
		answers: {
			a: '0',
			b: '1',
			c: '-1',
            d: '2'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "15) The value of (sin 65)^2 + (sin 25)^2 is(the values of angles are in degrees)",
		answers: {
			a: '1',
			b: '2',
			c: '0',
            d: '1/2'
		},
		correctAnswer: 'c'
	}
];




function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ ' <input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+'&nbsp'+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>' + '<br>'
			+ '<div class="answers">' + answers.join('<br> ') + '</div>'+'<br>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join(' ');
}




//showQuestions(myQuestions, quizContainer);




function showResults(questions, quizContainer, resultsContainer){
	//console.log(questions);
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' are correct ';
    //console.log(resultsContainer);
}





//submitButton.onclick = function(){
//	showResults(questions, quizContainer, resultsContainer);






var quizContainer = document.getElementById('main-content');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);