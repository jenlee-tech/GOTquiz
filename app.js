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




//establishing global variables
let main = document.getElementById('mainsection');

//template generation functions
firstPage = () => {
  main.style.opacity=0;
  main.innerHTML = "";
  const startString = `
    <div>
       <button type="submit" id="startButton">Start Quiz</button>
    </div>
    `;
  document.getElementById("start").innerHTML = startString;
  document.getElementById("startButton").addEventListener("click", renderQuiz);
}
      
// Question number
questionCounterTemplate = () => {
  return `
  <div>
    Question: $store.questions/5
  </div>
  `;
}

//gets input value from user's selection
let inputValue;
getInputValue = () => {
  let radios = document.getElementsByName('answerkey');
  for (let i=0; i < radios.length; i++) {
    if (radios[i].checked) {
      inputValue = radios[i].value;
      return inputValue;
      }
    };
};

//function gets the value, checks the answer and proceeds to the next question.
checkAnswer = () => {
  getInputValue();
  checkInput();
  store.questionNumber++;
}

//functions checks the answer and provides feedback
checkInput = () => {
    if (inputValue == store.questions[store.questionNumber].correctAnswer) {
      correctAnswer();
      store.score=store.score+20;
    }
    else
      incorrectAnswer();
}


//informs the user they answered correctly
correctAnswer = () => {
    let answeredRightString = `
      <div>
        <h2>Awesome!  You choosed correctly.</h2>
        <h3>The answer is ${store.questions[store.questionNumber].correctAnswer}</h3>
        <button type="submit" id="nextButton">Next Question</button>
      </div>
      `;
  
    main.innerHTML = "";
    main.innerHTML = answeredRightString; 
    document.getElementById("nextButton").addEventListener("click", checkQuestionNumber);
}

//informs the user he/she answered incorrectly
incorrectAnswer = () => {
    let answeredWrongString = 
    `
      <div>
        <h2>Incorrect Answer....</h2>
        <h3>The answer is really ${store.questions[store.questionNumber].correctAnswer}</h3>
        <button type="submit" id="nextButton">Next Question</button>
      </div>
    `;
    main.innerHTML = "";
    main.innerHTML = answeredWrongString; 
    document.getElementById("nextButton").addEventListener("click", checkQuestionNumber);
}

checkQuestionNumber = () => {
  if (store.questionNumber == 5) {
    endQuiz();
  }
  else 
    renderQuiz();
}

endQuiz = () => {
  let endquizMessage = 
    `
      <div id="finalScore">
        You have reached the end of the quiz.  
        Your final score: ${store.score}/100 
      </div>  
      <div>
        <button type="button" id="restartbutton">Restart</button>
      </div>
    
    `
  main.innerHTML = endquizMessage;
  document.getElementById("restartbutton").addEventListener("click", restartQuiz);
}

//Main content of quiz
renderQuiz = () => {
  main.style.opacity=.85;
  store.quizStarted = true;
  document.getElementById("start").innerHTML = "";
  let questionAndanswers = 
    `
    <div id = "status">
        <div id="questionumber">
        Question: ${store.questionNumber+1}/5
        </div>

        <div id="score">
          Current score: ${store.score}/100
        </div>
    </div>

    <div id= "question">
      ${store.questions[store.questionNumber].question}
    </div> 
    
    <div>
      <form id="answerForm">
        <ul class="answer-list">
          ${store.questions[store.questionNumber].answers.map((answerkey, i) => 
            `<li>
              <input type="radio" id="${i}" name="answerkey" value="${answerkey}" required="required" />
              <label for="${i}">${answerkey}</label>
              </li>`).join("")
            }
        </ul>
        <button type="submit" id="checkButton">Submit</button>
        
      </form>
    </div>
    `;
  main.innerHTML=questionAndanswers;
  document.getElementById("answerForm").addEventListener("submit", checkAnswer);
};
  
  

//resets all the settings and takes you back to firstpage
restartQuiz = () => {
  store.questionNumber = 0;
  store.quizStarted = false;
  store.score = 0;
  firstPage();
}

window.onload = firstPage();













