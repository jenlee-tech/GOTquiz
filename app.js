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
  console.log("the start page is working");
  const startString = `
    <div>
      <h2>Entering the World of Westeros</h2>
      <button type="submit" id="startButton">Start Quiz</button>
    </div>
    `;

  
  let main = document.getElementById('mainsection');
  main.innerHTML = startString; 
}
      
    // Question number
    // Question
    // Answers
    // Score


nextQuestion = () => {
  

} 

correctAnswer = () => {

}

endQuiz = () => {

}

//Render functions
renderQuiz = () => {
  console.log("rendering the quiz");
  // let nextString = `
  //   <div>
      
  //     <p>Question 1 </p>
       for (let i = 0; i < store.questions.length; i++) {
        console.log(store.questions[i].question)
      }

  //   <p>Score: 0/5 </p>





  //  </div>
  
  
  
};






window.onload = startQuiz();


//Event Handeler functions - these functions could only work after the DOM has been fully loaded

document.getElementById("startButton").addEventListener("click", renderQuiz);






