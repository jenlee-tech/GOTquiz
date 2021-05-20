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

firstPage = () => {
  console.log("the first page is working");
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
questionCounterTemplate = () => {
  return `
  <div>
    Question: $store.questions/5
  </div>
  `;
}

//score
scoreTemplate = () => {
  return `
    <div>
      Score: $score
    </div>
    `;
}
// //**check answers if it is correct
//   if inputAnswer = ${store.questions[store.questionNumber].correctAnswer}
//   correctAnswer


//get input value
let inputValue;
getInputValue = () => {
  let radios = document.getElementsByName('answerkey');
  for (let i=0; i < radios.length; i++) {
    if (radios[i].checked) {
      inputValue = radios[i].value;
      console.log(inputValue)
      break;
    }
  }
}

//create a function that includes other functions after an user clicks the submit button after clicking the submit button.

checkAnswer = () => {
  getInputValue();
  checkInput();

}

checkInput = () => {
  console.log(inputValue);
        console.log("The current question is  and answer " + store.questions[store.questionNumber].correctAnswer);
        if (inputValue == store.questions[store.questionNumber].correctAnswer) {
          correctAnswer();
          store.score++
                   
        }
        else
          {console.log("this is not correct")}
}

// Question 
Question = () => {
/* let questionString =
    `
    <div>
    // actual question
    </div>
   */ 
    }
// Answers - maps through the array of answers


nextQuestion = () => {
  

} 

correctAnswer = () => {
    console.log("letting the user know they answered correctly");
    let answeredRightString = `
      <div>
        <h2>Awesome!  You choosed correctly.</h2>
        <h3>The answer is ${store.questions[store.questionNumber].correctAnswer}</h3>
        <button type="submit" id="nextButton">Next</button>
      </div>
      `;
  
    let main = document.getElementById('mainsection');
    main.innerHTML = answeredRightString; 
  

}

endQuiz = () => {

}

//Render functions
renderQuiz = () => {
  console.log("rendering the quiz");
  store.quizStarted = true;
  //question
  let questionAndanswers = 
  `
  <div>
    ${store.questions[store.questionNumber].question}
  </div> 
  
  <div>
    <ul class="answer-list">
      ${store.questions[store.questionNumber].answers.map((answerkey, i) => 
        `<li>
          <input type="radio" id="${i}" name="answerkey" value="${answerkey}">
          <label for="${i}">${answerkey}</label>
          </li>`).join("")
        }

        <button type = "button" onclick = "getInputValue();">Submit</button>
    </ul>
  </div>

  

  


`;

let main = document.getElementById('mainsection');
main.innerHTML = questionAndanswers;

};
// //
// return `
//   <div>
//     <ul>
//     {$store.questions[i].answers.forEach(element => 
//       innnerHTML = `<li>element</li>`)
//     }
//     </ul>
//   </div>
// `
// *//
  /*     <p>Question 1 </p>
       for (let i = 0; i < store.questions.length; i++) {
          console.log(store.questions[i].question)
      }

  */

  





  //  </div>
  
  
  







window.onload = firstPage();


//Event Handeler functions - these functions could only work after the DOM has been fully loaded

document.getElementById("startButton").addEventListener("click", renderQuiz);



