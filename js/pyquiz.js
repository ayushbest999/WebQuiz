function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}



var myQuestions = [
	{
		question: "1) Is Python case sensitive when dealing with identifiers?",
		answers: {
			a: 'yes',
			b: 'no',
			c: 'machine dependent',
            d: 'none of the mentioned'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "2) What is the maximum possible length of an identifier?",
		answers: {
			a: '31 characters',
			b: '63 characters',
			c: '79 characters',
            d: 'none of the mentioned'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "3) Which of the following is invalid?",
		answers: {
			a: ' _a = 1',
			b: ' __a = 1',
			c: '__str__ = 1',
            d: 'none of the mentioned'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "4)  Which of the following is not a keyword?",
		answers: {
			a: 'eval',
			b: 'assert',
			c: 'nonlocal',
            d: 'pass'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "5) All keywords in Python are in _________",
		answers: {
			a: 'lower case',
			b: 'UPPER CASE',
			c: 'Capitalized',
            d: 'None of the mentioned'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "6) Which of the following is an invalid statement?",
		answers: {
			a: 'abc = 1,000,000',
			b: 'a b c = 1000 2000 3000',
			c: 'a,b,c = 1000, 2000, 3000',
            d: 'a_b_c = 1,000,000'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "7) Which of the following cannot be a variable?",
		answers: {
			a: '__init__',
			b: 'in',
			c: 'it',
            d: 'on'
		},
		correctAnswer: 'b'
	},
    
    {
		question: '8)  What will be the output of the following Python statement?<br><br>>>>"a"+"bc"',
		answers: {
			a: 'a',
			b: 'bc',
			c: 'bca',
            d: 'abc'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "9) The output of executing string.ascii_letters can also be achieved by:",
		answers: {
			a: 'string.ascii_lowercase_ string.digits',
			b: 'string.ascii_lowercase + string.ascii_upercase',
			c: 'string.letters',
            d: 'string.lowercase_string. upercase'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "10)  What arithmetic operators cannot be used with strings?",
		answers: {
			a: '+',
			b: '*',
			c: '-',
            d: 'All of the mentioned'
		},
		correctAnswer: 'c'
	},
    
    {
		question: '11) What will be the output of the following Python code?<br><br>print (r"\\nhello")',
		answers: {
			a: 'a new line and hello',
			b: '\\nhello',
			c: 'the letter r and then hello',
            d: 'error'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "12) What will be the output of the following Python statement?<br><br>>>>print('new' 'line')",
		answers: {
			a: 'Error',
			b: 'Output equivalent to print ‘new\\nline’',
			c: 'newline',
            d: 'new line'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "13) What will be the output of the following Python statement?<br><br>>>> print('x\97\x98')",
		answers: {
			a: 'Error',
			b: '97<br>&emsp;&emsp;98',
			c: 'x\\97',
            d: '\\x97\\x98'
		},
		correctAnswer: 'c'
	},
    
    {
		question: '14) What will be the output of the following Python code?<br><br>>>>str1="helloworld"<br>>>>str1[::-1]',
		answers: {
			a: 'dlrowolleh',
			b: 'hello',
			c: 'world',
            d: 'helloworld'
		},
		correctAnswer: 'a'
	},
	{
		question: "15) print(0xA + 0xB + 0xC):",
		answers: {
			a: '0xA0xB0xC',
			b: 'Error',
			c: '0x22',
            d: '33'
		},
		correctAnswer: 'd'
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
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>' + '<br>'
			+ '<div class="answers">' + answers.join('<br>') + '</div>' +'<br>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
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