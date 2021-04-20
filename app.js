/**
 * Example store structure
 */
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

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)