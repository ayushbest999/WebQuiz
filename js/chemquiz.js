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
		question: "1) The correct order of electronegativity is",
		answers: {
			a: 'Cl > F > O > Br',
			b: 'F > O > Cl > Br',
			c: 'F > Cl > Br > O',
            d: 'O > F > Cl > Br'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "2) For the same value of n, the penetration power of orbital follows the order",
		answers: {
			a: 's = p = d = f',
			b: 'p > s > d > f',
			c: 'f < d < p < s',
            d: 's < p < d < f'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "3) Find the successive elements of the periodic table with ionisation energies, 2372, 520 and 890 kJ per mol respectively",
		answers: {
			a: 'Li, Be, B',
			b: 'H, He, Li',
			c: 'B, C, N',
            d: 'He, Li, Be'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "4)  In the modern periodic table, the number of period of the element is the same as",
		answers: {
			a: 'principal quantum number',
			b: 'atomic number',
			c: 'azimuthal quantum number',
            d: 'atomic mass'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "5) P₄O₁₀ has ______ bridging O atoms",
		answers: {
			a: '4',
			b: '5',
			c: '6',
            d: '2'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "6) Which of the statement is incorrect for XeO₄",
		answers: {
			a: 'four p𝜋-d𝜋 bonds are present',
			b: 'four sp3 – p 𝜎 bonds are present',
			c: 'It has a tetrahedral shape',
            d: 'It has a square planar shape'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "7) Which of the species has a permanent dipole moment?",
		answers: {
			a: 'SF₄',
			b: 'SiF₄',
			c: 'BF₃',
            d: 'XeF₄'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "8)  Which is the correct order of decreasing bond dissociation enthalpy?",
		answers: {
			a: 'F₂ > Cl₂ > Br₂ > I₂',
			b: 'I₂ > Br₂ > Cl₂ > F₂',
			c: 'Cl₂ > Br₂ > F₂ > I₂',
            d: 'Br₂ > I₂ > F₂ > Cl₂'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "9) Which is the correct order of decreasing acidity of lewis acids?",
		answers: {
			a: 'BBr₃ > BCl₃ > BF₃',
			b: 'BF₃ > BCl₃ > BBr₃',
			c: 'BCl₃ > BF₃ > BBr₃',
            d: 'BBr₃ > BF₃ > BCl₃'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "10)  In the presence of KF, AlF3 is soluble in HF. Find the complex formed",
		answers: {
			a: 'K₃[AlF₆]',
			b: 'AlH₃',
			c: 'K[AlF₃H]',
            d: 'K₃[AlF₃H₃]'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "11) Graphite has a structural similarity with",
		answers: {
			a: 'B₂H₆',
			b: 'B₄C',
			c: 'B',
            d: 'BN'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "12) Find the amphoteric oxide",
		answers: {
			a: 'CaO₂',
			b: 'CO₂',
			c: 'SnO₂',
            d: 'SiO₂'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "13) As compared to K, Na has",
		answers: {
			a: 'higher ionization potential',
			b: 'lower melting point',
			c: 'lower electronegativity',
            d: 'larger atomic radius'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "14) Which oxide is amphoteric?",
		answers: {
			a: 'BaO',
			b: 'CaO',
			c: 'BeO',
            d: 'MgO'
		},
		correctAnswer: 'c'
	},
	{
		question: "15) Be shows the diagonal relationship with",
		answers: {
			a: 'Na',
			b: 'Al',
			c: 'Mg',
            d: 'B'
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