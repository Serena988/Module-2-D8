const answers = [];
let questionIndex;
let playerScore = 0;
let start = false;
const currentQuestion = () => questions[questionIndex];

document.getElementById(`start`).style.visibility = `hidden`;
document.getElementById(`central`).style.visibility = `hidden`;

window.addEventListener(`DOMContentLoaded`, () => {
  startGame();
});

const skipRules = () => {
  start = true;
  document.querySelector(`#rules`).remove();
  document.querySelector(`#start`).classList.add(`animate-entrance`);
  document.querySelector(`body`).style.height = `100vh`;
  document.getElementById(`start`).style.visibility = `visible`;
  startGame()
};

const skipRulesBtn = document.getElementById(`skip-rules-btn`);
skipRulesBtn.addEventListener(`click`, skipRules);

// Start quiz
const startGame = () => {
  if (start === true && questionIndex === undefined) {
    const ready = document.createElement(`h1`);
    ready.textContent = `Ready to start?`;
    const startCount = document.getElementById(`start`);
    startCount.appendChild(ready);
    const startBtn = document.createElement(`button`);
    startBtn.textContent = `Yes!`;
    startBtn.setAttribute(`id`, `start-btn`);
    startCount.appendChild(startBtn);

    startBtn.onclick = () => {
      document.getElementById(`start`).remove();
      document.querySelector(`#central`).classList.add(`animate-entrance`);
      startFirstQuestion();
      ready.remove();
    };
  } else {
    getQuestion();
  }
};

// Show more questions
const getQuestion = () => {
  if (questionIndex !== undefined) {
    document.getElementById(`central`).style.visibility = `visible`;
    document.getElementById(`show-questions`).innerHTML =currentQuestion().question;
    startAnswers(); 
  }
};

// Start with 1st question
const startFirstQuestion = () => {
  questionIndex = 0;
  playerScore = 0;
  startGame();
};

// Display answers
const startAnswers = () => {
  next();
  const current = currentQuestion(); 
  const divAnswers = document.getElementById(`answers`);
  divAnswers.textContent = ``;
  const rightAnswer = current.correct_answer;
  const wrongAnswers = current.incorrect_answers;
  const answers = [rightAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);

  for (const answer of answers) {
    const answerBtn = document.createElement(`button`);
    answerBtn.classList.add(`answers-btn`);
    divAnswers.appendChild(answerBtn);
    answerBtn.textContent = answer;
    answerBtn.value = answer;
    answerBtn.addEventListener(`click`, selectAnswer);
  }
};

const next = () => {
  const nextBtn = document.createElement(`button`);
  nextBtn.setAttribute(`id`, `next-btn`);
  nextBtn.textContent = `Next`;
  nextBtn.value = questionIndex;
  const divNext = document.getElementById(`next`);
  divNext.appendChild(nextBtn);

  nextBtn.onclick = () => {
    newQuestion();
    nextBtn.remove();
    actualScore();
    controlAnimation();
  };
};

// Animations for appearing on-screen
const controlAnimation = () => {
  const divCentral = document.querySelector(`#central`);
  divCentral.classList.remove(`animate-entrance`);
  
  setTimeout(() => {
      divCentral.classList.add(`animate-entrance`);
    },0.6
  );
};

const selectAnswer = (event) => {
  const useranswer = event.target.value;
  disableOptions();
  if (useranswer === currentQuestion().correct_answer) {
    playerScore++;
  }
};

// Disable buttons after selected answer
const disableOptions = () => {
  const answersBtn = document.querySelectorAll(`.answers-btn`);
  answersBtn.forEach((element) => {
    element.disabled = true;
    element.classList.add(`disabled`);
  });
};

// Display score
const actualScore = () => {
  document.getElementById(`score`).textContent = playerScore;
};

const newQuestion = () => {
  actualScore();
  questionIndex++;

  // End of the quiz
  if (questions.length <= questionIndex) {
    quizComplete();
    const removeCentral = document.getElementById(`central`);
    removeCentral.style.display = `none`;
  } else {
    getQuestion();
  }
};

const quizComplete = () => {
  const removeOldPoints = document.getElementById(`score`);
  removeOldPoints.style.display = `none`;
  const divCompleted = document.createElement(`div`);
  divCompleted.id = `completed-container`;
  divCompleted.classList.add(`animate-entrance`);
  const main = document.querySelector(`main`);
  main.appendChild(divCompleted);

  const quizCompleted = document.createElement(`h1`);
  quizCompleted.id = `quiz-completed`;
  quizCompleted.textContent = `Quiz Completed!`;
  divCompleted.appendChild(quizCompleted);

  const yourFinalScore = document.createElement(`h2`);
  yourFinalScore.id = `your-score`;
  yourFinalScore.classList.add(`pulse-final-score`);
  divCompleted.appendChild(yourFinalScore);
  yourFinalScore.textContent = `${playerScore} / ${questions.length} points`;

  const resetBtn = document.createElement(`button`);
  resetBtn.setAttribute(`id`, `reset-btn`);
  resetBtn.textContent = `Try again?`;
  divCompleted.appendChild(resetBtn);
  resetBtn.addEventListener(`click`, resetQuiz);
  resetBtn.addEventListener(`click`, controlAnimation);

  controlAnimationPulse();
};

// Animation pulsing for final score
const controlAnimationPulse = () => {
  const pointsFinal = document.querySelector(`h2`);
  pointsFinal.classList.remove(`pulse-final-score`);
  setTimeout(() => {
    pointsFinal.classList.add(`pulse-final-score`);
  }, 1.9);
};

const resetQuiz = (event) => {
  questionIndex = 0;
  playerScore = 0;
  const score = document.getElementById(`score`);
  score.textContent = playerScore;
  document.getElementById(`score`).style.display = `block`;
  document.getElementById(`central`).style.display = `flex`;
  document.getElementById(`completed-container`).remove();
  startGame();
};
