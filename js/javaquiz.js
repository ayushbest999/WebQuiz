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
		question: "1) What is the range of short data type in Java?",
		answers: {
			a: '-128 to 127',
			b: ' -32768 to 32767',
			c: '-2147483648 to 2147483647',
            d: 'None of the mentioned'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "2) An expression involving byte, int, and literal numbers is promoted to which of these?",
		answers: {
			a: 'int',
			b: 'long',
			c: 'byte',
            d: 'float'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "3) Which of these literals can be contained in float data type variable?",
		answers: {
			a: '-1.7e+308',
			b: '-3.4e+038',
			c: '+1.7e+308',
            d: '-3.4e+050'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "4)  Which data type value is returned by all transcendental math functions?",
		answers: {
			a: 'int',
			b: 'float',
			c: 'double',
            d: 'long'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "5) What will be the output of the following Java code?<br><br>class average {<br>        public static void main(String args[])<br>        {<br>            double num[] = {5.5, 10.1, 11, 12.8, 56.9, 2.5};<br>            double result;<br>            result = 0;<br>            for (int i = 0; i < 6; ++i)<br>                &emsp;result = result + num[i];<br>	    System.out.print(result/6);<br>        }<br>    }<br><br>",
		answers: {
			a: '16.34',
			b: '16.566666644',
			c: '16.46666666666667',
            d: '16.46666666666666'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "6) What is the order of variables in Enum?",
		answers: {
			a: 'Ascending order',
			b: 'Descending order',
			c: 'Random order',
            d: 'Depends on the order() method'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "7) Can we create an instance of Enum outside of Enum itself?",
		answers: {
			a: 'True',
			b: 'False'
			
		},
		correctAnswer: 'b'
	},
    
    {
		question: "8)  What will be the output of the following Java code?<br><br>enum Season <br>    {<br>&emsp;&emsp;       WINTER, SPRING, SUMMER, FALL<br>    };<br>    System.out.println( Season.WINTER.ordinal() );",
		answers: {
			a: '0',
			b: '1',
			c: '2',
            d: '3'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "9) If we try to add Enum constants to a TreeSet, what sorting order will it use?",
		answers: {
			a: 'Sorted in the order of declaration of Enums',
			b: 'Sorted in alphabetical order of Enums',
			c: 'Sorted based on order() method',
            d: 'Sorted in descending order of names of Enums'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "10)  Which of the following is not OOPS concept in Java?",
		answers: {
			a: 'Inheritance',
			b: 'Encapsulation',
			c: 'Polymorphism',
            d: 'Compilation'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "11) When does method overloading is determined?",
		answers: {
			a: 'At run time',
			b: 'At compile time',
			c: 'At coding time',
            d: 'At execution time'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "12) When Overloading does not occur?",
		answers: {
			a: 'More than one method with same name but different method signature and different number or type of parameters',
			b: 'More than one method with same name, same signature but different number of signature',
			c: 'More than one method with same name, same signature, same number of parameters but different type',
            d: 'More than one method with same name, same number of parameters and type but different signature'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "13) What is it called if an object has its own lifecycle and there is no owner?",
		answers: {
			a: 'Aggregation',
			b: 'Composition',
			c: 'Encapsulation',
            d: 'Association'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "14) What is it called where child object gets killed if parent object is killed?",
		answers: {
			a: 'Aggregation',
			b: 'Composition',
			c: 'Encapsulation',
            d: 'Association'
		},
		correctAnswer: 'b'
	},
	{
		question: "15) What is it called where object has its own lifecycle and child object cannot belong to another parent object?",
		answers: {
			a: 'Aggregation',
			b: 'Composition',
			c: 'Encapsulation',
            d: 'Association'
		},
		correctAnswer: 'a'
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