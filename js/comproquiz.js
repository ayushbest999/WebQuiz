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
		question: "1) C programming :<br> Match the following:<br>a. calloc( )  ------- i. Frees previously allocated space.<br>b. free( ) ----------- ii. Modifies previously allocated space.<br>c. malloc( ) ------- iii. Allocates spacefor array.<br>d. realloc( ) ------- iv. Allocates requested size ofspace.",
		answers: {
			a: 'a-iii, b-i, c –iv, d -ii',
			b: 'a-iii, b-ii, c –i, d -iv',
			c: 'a-iii, b-iv, c –i, d -ii',
            d: 'a-iv, b-ii, c –iii, d -i'
		},
		correctAnswer: 'a'
	},
    
    {
		question: '2)C programming :<br>Trace the output.<br><br>void main()<br>{<br>int i=2,j=2;<br>while(i+1?--i:j++)<br>printf("%d",i);<br>}',
		answers: {
			a: '1',
			b: '2',
			c: 'ERROR',
            d: 'none of the above'
		},
		correctAnswer: 'a'
	},
    
    {
		question: '3) C programming :<br> Trace the output<br>int main()<br>{<br>int a=12,b=39;<br>printf ("%d",a&b);<br>return 0;<br>}',
		answers: {
			a: '468',
			b: '0',
			c: '4',
            d: 'None of the above'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "4)   C programming : <br>If you want to store dissimilar data together, then which type you will use?",
		answers: {
			a: 'array',
			b: 'structure',
			c: 'stack',
            d: 'None of the above'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "5)  C programming :<br> Suppose that x is a one dimensional array, then choose the correct answer regarding array.",
		answers: {
			a: '*(x + n) is same as &x[n]',
			b: '*&x[n] is same as x + n',
			c: '*(x + n) is same as x[n] +1',
            d: '*(x + n) is same as *x[n]'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "6)  C programming :<br> State true of false.<br><br>It is possible to pass a structure variable to a function either by value or by address.",
		answers: {
			a: 'True',
			b: 'False'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "7) C++:<br> A collection of generic class and function is called as",
		answers: {
			a: 'Standard Template Library (STL)',
			b: 'Header file',
			c: 'Function template',
            d: 'None of the above'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "8)  C++:<br> Which of the following is\are true about virtual function?",
		answers: {
			a: 'Function call is resolved at run-time',
			b: 'It is member function of a class.',
			c: 'Generally has a different functionality in the derived class',
            d: 'All of the above.'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "9) C++:<br> The Standard Template Library (STL) consists of three main components. What are those components?",
		answers: {
			a: 'ADT, Structure,class.',
			b: 'Containers, Algorithms, and statements.',
			c: 'Containers, Algorithms, and Iterators.',
            d: 'None of the above.'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "10)  C++:<br> What is RTTI?",
		answers: {
			a: 'Run-Time Type Identification (RTTI) is a technique that is used to know the type of any object at run time.',
			b: 'RTTI is a technique that is used to know the type of any object at compile time.',
			c: 'RTTI reserve memory of function at run time.',
            d: 'None of the above.'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "11) C++:<br> Trace the output<br><br>void execute (int x, int y = 200)<br>{<br>Int temp = x + y;<br><br>x +=temp;<br>if (y!= 200)<br>cout << temp << ”  ” << x << ”  ” << y << ”  ” << endl;<br>}<br>void main ( )<br>{<br>int a = 50, b = 20;<br>execute (b);<br>cout << a << ”  ” << b << ”  ” << endl;<br>execute (a, b);<br>}",
		answers: {
			a: '2202050<br>50 20',
			b: '50 20<br>70 120 20',
			c: '20 200',
            d: 'None of the above.'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "12)  C++:<br> Which of the following is\are correct statements about inline function and macros.",
		answers: {
			a: 'Inline functions are parsed by the compiler but Macros are expanded by the C++ preprocessor.',
			b: ' Inline functions follow strict parameter type checking.',
			c: 'Macros do not follow parameter type checking.',
            d: 'All of the above.'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "13) Which linear structure has a provision of Last-In-First-Out (LIFO) mechanism for its elements?",
		answers: {
			a: 'Stack',
			b: 'Queue',
			c: 'Both a & b',
            d: 'None of the above'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "14)How are the elements with the same priority get processed according to the Priority Queue mechanism??",
		answers: {
			a: ' Before the processing of other elements with lower priority',
			b: 'After the processing of other elements with highest priority',
			c: 'On the basis of First-Come-First Served priority',
            d: 'None of the Above'
		},
		correctAnswer: 'c'
	},
	{
		question: "15) Where the elements are stored in accordance to the representation of Queue by a Linked Structure?",
		answers: {
			a: 'mesh',
			b: 'node',
			c: 'both a & b',
            d: ' none of the above'
		},
		correctAnswer: 'b'
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