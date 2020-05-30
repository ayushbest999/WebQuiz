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
		question: "1) Which among the following temperature scale is based upon absolute zero?",
		answers: {
			a: 'Celsius',
			b: 'Fahrenheit',
			c: 'Kelvin',
            d: 'Rankine'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "2) Who gave the Theory of Relativity?",
		answers: {
			a: 'Isaac Newton',
			b: 'Archimedes',
			c: 'Albert Einstein',
            d: 'Galileo Galilei'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "3) By how many times are the Electrostatic forces stronger than the Gravitational Forces for a fixed distance?",
		answers: {
			a: '10²',
			b: '10³⁶',
			c: '10¹²',
            d: '2'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "4)  What is the range of Strong Nuclear force?",
		answers: {
			a: 'Infinite',
			b: 'Very short Subnuclear size',
			c: 'Very short Nuclear size',
            d: 'None'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "5) Who among the following is credited for the Corpuscular theory of light?",
		answers: {
			a: 'Isaac Newton',
			b: 'Christen Huygens',
			c: 'Albert Einstein',
            d: 'James Clerk Maxwell'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "6) An Electric generator is based on which of the following scientific principles?",
		answers: {
			a: 'Faraday’s law of Electromagnetic Induction',
			b: 'Super Conductivity',
			c: 'Laws of Thermodynamics',
            d: 'Newton’s Law of Motion'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "7) What is the force of attraction between any two bodies by virtue of their masses is called?",
		answers: {
			a: 'Electromagnetic Force',
			b: 'Gravitational Force',
			c: 'Centripetal Force',
            d: 'Nuclear Force'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "8) Which of these branches of Physics deal with heat and temperature and their relation to energy and work?",
		answers: {
			a: 'Geophysics',
			b: 'Mechanics',
			c: 'Atomic Physics',
            d: 'Thermodynamics'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "9) Which of the following branch of Physics deal with study of Atomic Nuclei?",
		answers: {
			a: 'Nuclear Physics',
			b: 'Bio Physics',
			c: 'Atomic Physics',
            d: 'None of the above'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "10)  What is the time taken by the earth to complete one rotation about its axis with regard to a fixed star?",
		answers: {
			a: 'Sidereal day',
			b: 'Solar day',
			c: 'Shake',
            d: 'Tropical year'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "11) Which of the following is the largest practical unit of mass?",
		answers: {
			a: 'Slug',
			b: 'a.m.u',
			c: 'Hyperkg',
            d: 'C.S.L'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "12) Linear momentum can be described in which of the following units?",
		answers: {
			a: 'kgm²/s²',
			b: 'kg/ms²',
			c: 'kg/ms',
            d: 'kgm/s'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "13) Which of the following is the unit of Solid Angle?",
		answers: {
			a: 'radian',
			b: 'steradian',
			c: 'm²',
            d: 'π'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "14) Which of the following units is NOT used for measuring length?",
		answers: {
			a: 'Astronomical Unit',
			b: 'Light year',
			c: 'Par sec',
            d: 'slug'
		},
		correctAnswer: 'd'
	},
	{
		question: "15) Curie is a unit of which of the following?",
		answers: {
			a: 'Luminescence',
			b: 'Radioactivity',
			c: 'Pressure',
            d: 'Mass'
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