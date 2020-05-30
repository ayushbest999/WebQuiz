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
		question: "1)What happens to atomic size as we move down the group-",
		answers: {
			a: 'The atomic radius increases as the energy level increases',
			b: 'The atomic radius decreases due to increase in the number of protons',
			c: ' Electron affinity increases',
            d: 'Ionization energy  increases'
		},
		correctAnswer: 'a'
	},
	{
		question: "2)What is the process of combining an organic acid with an alcohol to form an ester and water called-",
		answers: {
			a: 'Hydrolysis',
			b: 'Neutralisation',
			c: 'Esterification',
            d: 'Acylation'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "3) Lanthanide contraction is-",
		answers: {
			a: 'The phenomenon of decrease in size due to increase in atomic number as we move across the period',
			b: 'The gradual decrease in atomic and ionic size of lantanoids with an increase in atomic number due to poor shielding',
			c: 'The decrease in electron affinity as we move down the group',
            d: 'The decrease in ionization potential as we move down the group'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "4) Carboxylic acids and hydrazoic acid react in the presence  of sulphuric acid to give amines. This reaction is known as-",
		answers: {
			a: 'Sandmeyer reaction',
			b: 'Diels – alder reaction',
			c: 'Schmidt reaction',
            d: 'Michael reaction'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "5) Hell- volhard – zelinsky reaction is given by only-",
		answers: {
			a: 'Aromatic rings having activating group',
			b: 'Aliphatic acids having alpha- hydrogen',
			c: 'Polyhydroxyl phenols',
            d: 'Quaternary salts'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "6) lead tetra-acetate is",
		answers: {
			a: 'oxidising agent',
			b: 'methylating agent',
			c: 'acetoxylating agent',
            d: 'all of the above'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "7)claisen rearrangement is-",
		answers: {
			a: 'involves the shift of a group from oxygen to carbon',
			b: 'involves the conversion of ketoximes to amides',
			c: 'cyclic ketones are converted to lactones',
            d: 'is acid catalysed conversion of diols to ketones'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "8) The zeigler natta catalyst is",
		answers: {
			a: 'Mixture of triethylaluminium and titanium tetrachloride',
			b: 'Sodium borohydride',
			c: 'Aluminium isopropide',
            d: 'Anhydrous aluminium chloride'
		},
		correctAnswer: 'a'
	},
    
    {
		question: "9) Which information is not conveyed by a balanced chemical equation?",
		answers: {
			a: 'Physical states of reactants and products',
			b: 'Symbols and formulae of all the substances involved in a particular reaction',
			c: 'Number of atoms/molecules of the reactants and products formed',
            d: 'Whether a particular reaction is actually feasible or not'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "10) Chemically rust is",
		answers: {
			a: 'hydrated ferrous oxide',
			b: 'only ferric oxide',
			c: ' hydrated ferric oxide',
            d: 'none of these'
		},
		correctAnswer: 'c'
	},
    
    {
		question: "11) Which of the following gases can be used for storage of fresh sampel of an oil for a long time?",
		answers: {
			a: 'Carbon dioxide or oxygen',
			b: 'Nitrogen or helium',
			c: 'Helium or oxygen',
            d: 'Nitrogen or oxygen'
		},
		correctAnswer: 'b'
	},
    
    {
		question: "12) The reaction in which two compound exchange their ions to form two new compounds is called",
		answers: {
			a: 'displacement reaction',
			b: 'combination reaction',
			c: 'double displacement reaction',
            d: ' redox reaction'
		},
		correctAnswer: 'c'
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
		question: "14)  Rancidity can be prevented by",
		answers: {
			a: 'adding antioxidants',
			b: 'storing food away from light',
			c: 'keeping food in refrigerator',
            d: 'all of these'
		},
		correctAnswer: 'd'
	},
    
    {
		question: "15) In which of the following, heat energy will be evolved?",
		answers: {
			a: 'Electrolysis of water',
			b: 'Dissolution of NH4Cl in water',
			c: 'Burning of L.P.G',
            d: 'Decomposition of AgBr in the presence of sunlight'
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
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join(' ') + '</div>'+'<br>'
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
			+ '<div class="answers">' + answers.join(' <br>  ') + '</div>' + '<br>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}




//showQuestions(myQuestions, quizContainer);




function showResults(questions, quizContainer, resultsContainer){
	console.log(questions);
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
    console.log(resultsContainer);
}





//submitButton.onclick = function(){
//	showResults(questions, quizContainer, resultsContainer);






var quizContainer = document.getElementById('main-content');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);