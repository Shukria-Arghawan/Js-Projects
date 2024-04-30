const questionInput = document.querySelector('.question');
const markInp = document.querySelector('.markInp');
const nextBtn = document.querySelector('.next');
let questionDiv = document.querySelector('.quizQuestion10');
const answerBtns = document.querySelectorAll('.answer');
let currentQuestionIndex = 0;
let mark = 0;
let questionArray = [
    {
        question : "What is the best programming language?",
        answers :[
            {text: 'JavaScript', correct: "true"},
            {text: 'Python', correct: "false"},
            {text: 'Java', correct: "false"},
            {text: 'PHP', correct: "false"},
        ]
    },
    {
    question: "What programming language is most used in Game development?",
    answers :[
        {text: 'JavaScript', correct: "false"},
        {text: 'Python', correct: "false"},
        {text: 'Java', correct: "true"},
        {text: 'PHP', correct: "false"},
    ]
} ,
{
    question: "What programming language is most used in Apple Company?",
    answers :[
        {text: 'JavaScript', correct: "false"},
        {text: 'Swift', correct: "true"},
        {text: 'C++', correct: "false"},
        {text: 'PHP', correct: "false"},
    ]
} ,
{
    question: "What programming language is most used in Microsoft Company?",
    answers :[
        {text: 'Python', correct: "false"},
        {text: 'Swift', correct: "false"},
        {text: 'C++', correct: "true"},
        {text: 'PHP', correct: "false"},
    ]
} ,
];
function ShowQuestions() {
    let currentQuestion = questionArray[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionInput.innerHTML = questionNo + "." + currentQuestion.question;
    answerBtns.forEach((button, index) => {
      button.innerHTML = currentQuestion.answers[index].text;
      button.classList.remove('correctAnswer', 'wrongAnswer'); // Remove color classes
    });
  }
  ShowQuestions();    
  answerBtns.forEach(button => {
    button.addEventListener('click', showCorrectAnswer);
  })


  answerBtns.forEach(button => {
    button.addEventListener('click', showCorrectAnswer);
  })
  
  function showCorrectAnswer(e) {
    let clickedBtn = e.target;
    let currentQuestion = questionArray[currentQuestionIndex];
    let correctAnswer = currentQuestion.answers.find(answer => answer.text === clickedBtn.innerHTML);
  
    if (correctAnswer.correct === "true") {
      clickedBtn.classList.add('correctAnswer');
      mark += 10;
      markInp.value = mark;
    } else {
        clickedBtn.classList.add('wrongAnswer');
        
    }
    answerBtns.forEach(btn => {
      btn.disabled = true;
      clickedBtn.classList.add('answer');
    });
     answerBtns.classList.add('answer');
  };
  
  let quizResult = document.querySelector('.quizResult');
  let resultInput = document.querySelector('.resultInput');
  function stopQuiz() {
   if (currentQuestionIndex >= questionArray.length) {
     questionDiv.style.display = "none";
     quizResult.style.display = "block";
     resultInput.value = mark; // Show the final mark
   } else {
     ShowQuestions();
     answerBtns.forEach(btn => {
       btn.disabled = false;
     });
   }
 }
 
nextBtn.addEventListener('click', () => {

  currentQuestionIndex++;

  if (currentQuestionIndex >= questionArray.length) {
    stopQuiz();
  } else {
    ShowQuestions();
    answerBtns.forEach(btn => {
      btn.disabled = false;
    });
    showCorrectAnswer();
  }
});






