const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which family motto states, "Winter is coming"?',
      answers: [
        'Stark',
        'Greyjoy',
        'Tyrell',
        'Lannister'
      ],
      correctAnswer: 'Stark'
    },
    {
      question: 'Which family predominantly has indigo eyes?',
      answers: [
        'Lannister',
        'Stark',
        'Targaryen',
        'Arryn'
      ],
      correctAnswer: 'Targaryen'
    },
    {
      question: 'Which house is known for their wealth in agriculture?',
      answers: [
        'Lannister',
        'Martell',
        'Tyrell',
        'Arryn'
      ],
      correctAnswer: 'Tyrell'
    },
    {
      question: 'What will kill a White Walker?',
      answers: [
        'Dragonglass',
        'Black Iron',
        'Nightshade',
        'Golden Heart Wood'
      ],
      correctAnswer: 'Dragonglass'
    },
    {
    question: 'What does the red door represent in Danys dreams?',
    answers: [
      'Her childhood home in Braavos',
      'The door to her dragons',
      'Her brother - Viserys',
      'Her marriage to Drogo'
    ],
    correctAnswer: 'Her childhood home in Braavos'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

//template generation functions

startQuiz = () => {
  console.log("this is working");
  const startString = `
    <div>
      <h2>Entering the World of Westeros</h2>
      <button id="startButton">Start Quiz</button>
    </div>
    `;

  
  let main = document.getElementById('mainsection');
  main.innerHTML = startString; 
}

nextQuestion = () => {

} 

correctAnswer = () => {

}

endQuiz = () => {

}

//Render functions
renderQuiz = () => {
  console.log("rendering the quiz")
  
}



//Event Handeler functions
//document.getElementById("startButton").addEventListener("click", renderQuiz);


window.onload = startQuiz();




