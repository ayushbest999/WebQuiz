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
		question: "1)  Which of the following is not a valid variable name declaration?",
		answers: {
			a: 'int __a3;',
			b: 'int __3a;',
			c: 'int __A3;',
            d: 'None of the mentioned'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "2) Why do variable names beginning with the underscore is not encouraged?",
		answers: {
			a: 'It is not standardized',
			b: 'To avoid conflicts since assemblers and loaders use such names',
			c: 'To avoid conflicts since library routines use such names',
            d: 'To avoid conflicts with environment variables of an operating system'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "3) All keywords in C are in ____________",
		answers: {
			a: 'LowerCase letters',
			b: 'UpperCase letters',
			c: 'CamelCase letters',
            d: 'None of the mentioned'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "4) Variable name resolution (number of significant characters for the uniqueness of variable) depends on ___________",
		answers: {
			a: 'Compiler and linker implementations',
			b: 'Assemblers and loaders implementations',
			c: 'C language',
            d: 'None of the mentioned'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "5) Which is correct with respect to the size of the data types?",
		answers: {
			a: 'char > int > float',
			b: 'int > char > float',
			c: 'char < int < double',
            d: 'double > char > int'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "6) What will be the output of the following C code on a 64 bit machine?(Header classes are already included)<br>    union Sti<br>    {<br>        int nu;<br>        char m;<br>    };<br>    int main()<br>    {<br>        union Sti s;<br>        printf('%d', sizeof(s));<br>        return 0;<br>    }<br>",
		answers: {
			a: '8',
			b: '5',
			c: '9',
            d: '4'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "7) Which of the following operators has an associativity from Right to Left?",
		answers: {
			a: '<=',
			b: '<<',
			c: '==',
            d: '+='
		},
		correctAnswer: 'd'
	},
    
    {
		question: "8)  Which operators of the following have same precedence?<br>P. '!=', Q. '+=', R. '<<='",
		answers: {
			a: 'P and Q',
			b: 'Q and R',
			c: 'P and R',
            d: 'P, Q and R'
		},
		correctAnswer: 'b'
	},
    
    {
		question: '9) What will be the output of the following C code?<br><br>    void main()<br>    {<br>       int x = 5;<br>        if (true);<br>            printf("hello");<br>    }<br><br>',
		answers: {
			a: 'It will display hello',
			b: 'It will throw an error',
			c: 'Nothing will be displayed',
            d: 'Compiler dependent'
		},
		correctAnswer: 'b'
	},
    
    {
		question: '10)  The C code ‘for(;;)’ represents an infinite loop. It can be terminated by ___________',
		answers: {
			a: 'break',
			b: 'exit(0)',
			c: 'abort()',
            d: 'terminate'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "11) What will be the correct syntax for running two variable for loop simultaneously?",
		answers: {
			a: 'for (i = 0; i < n; i++)<br>   for (j = 0; j < n; j += 5)',
			b: 'for (i = 0, j = 0; i < n, j < n; i++, j += 5)',
			c: 'for (i = 0; i < n;i++){}<br>   for (j = 0; j < n;j += 5){}',
            d: 'none of the mentioned'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "12) Which of the following cannot be used as LHS of the expression in for (exp1;exp2; exp3)?",
		answers: {
			a: 'variable',
			b: 'function',
			c: 'typedef',
            d: 'macros'
		},
		correctAnswer: 'd'
	},
    
    {
		question: '13) What will be the output of the following C code?<br><br>int main()<br>    {<br>        short i;<br>        for (i = 1; i >= 0; i++)<br>            printf("%d\n", i);<br>     }',
		answers: {
			a: 'The control won’t fall into the for loop',
			b: 'Numbers will be displayed until the signed limit of short and throw a runtime error',
			c: 'Numbers will be displayed until the signed limit of short and program will successfully terminate',
            d: 'This program will get into an infinite loop and keep printing numbers with no errors'
		},
		correctAnswer: 'c'
	},
    
    {
		question: '14) What will be the output of the following C code?<br><br>    void main()<br>    {<br>        double k = 0;<br>        for (k = 0.0; k < 3.0; k++)<br>            printf("Hello");<br>    }<br><br>',
		answers: {
			a: 'Run time error',
			b: 'Hello is printed thrice',
			c: 'Hello is printed twice',
            d: 'Hello is printed infinitely'
		},
		correctAnswer: 'b'
	},
	{
		question: '15) What will be the output of the following C code?<br><br> int main()<br>    {<br>        int i = 0, j = 0;<br>        while (i < 5, j < 10)<br>        {<br>            i++;<br>            j++;<br>        }<br>printf("%d, %d\n", i, j);<br>    }',
		answers: {
			a: '5, 5',
			b: '5, 10',
			c: '10, 10',
            d: 'Syntax Error'
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