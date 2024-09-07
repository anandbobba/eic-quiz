const questions = [
    {
      question: "What is the largest economy in the world?",
      options: ["USA", "China", "Germany", "India"],
      correct: 0
    },
    {
      question: "Which country has the highest GDP per capita?",
      options: ["USA", "Qatar", "Luxembourg", "Singapore"],
      correct: 2
    },
    {
      question: "Which organization regulates global trade?",
      options: ["IMF", "World Bank", "WTO", "OECD"],
      correct: 2
    },
    {
      question: "Which currency is used in Japan?",
      options: ["Yuan", "Won", "Yen", "Dollar"],
      correct: 2
    },
    {
      question: "What is the main export of Saudi Arabia?",
      options: ["Oil", "Gold", "Electronics", "Textiles"],
      correct: 0
    },
    {
      question: "Which country is known for the Silicon Valley?",
      options: ["China", "USA", "India", "Germany"],
      correct: 1
    },
    {
      question: "What is the main economic activity in Switzerland?",
      options: ["Agriculture", "Banking", "Mining", "Oil"],
      correct: 1
    },
    {
      question: "Which country has the highest inflation rate?",
      options: ["Venezuela", "Zimbabwe", "Turkey", "Argentina"],
      correct: 0
    },
    {
      question: "What is the IMF's main role?",
      options: ["Global health", "Trade negotiations", "Economic stability", "Military alliances"],
      correct: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startQuizBtn = document.getElementById('startQuizBtn');
  const quizContainer = document.getElementById('quizContainer');
  const questionText = document.getElementById('questionText');
  const optionButtons = document.querySelectorAll('.option-btn');
  const resultPopup = document.getElementById('resultPopup');
  const scoreText = document.getElementById('scoreText');
  const welcomeText = document.getElementById('welcomeText');
  const dialogPopup = document.createElement('div');
  dialogPopup.className = 'dialog-popup';
  document.body.appendChild(dialogPopup);
  const feedbackText = document.getElementById('feedback');
  
  startQuizBtn.addEventListener('click', startQuiz);
  
  function startQuiz() {
    welcomeText.style.display = 'none'; // Hide the welcome quote
    startQuizBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
  }
  
  function showQuestion() {
    dialogPopup.style.display = 'none'; // Hide dialog when showing the next question
    feedbackText.style.display = 'none'; // Hide feedback message
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
      button.disabled = false; // Enable buttons for new question
      button.textContent = `${index + 1}. ${currentQuestion.options[index]}`;
    });
  }
  
  function checkAnswer(selectedOption) {
    optionButtons.forEach(button => button.disabled = true); // Disable buttons after an answer is selected
    const currentQuestion = questions[currentQuestionIndex];
    feedbackText.style.display = 'block'; // Show feedback message
  
    if (selectedOption === currentQuestion.correct) {
      score++;
      showFeedback("Yay!", "yay");
    } else {
      score--;
      showFeedback("Oops!", "oops");
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        feedbackText.style.display = 'none'; // Hide feedback for next question
        showQuestion();
      }, 1000);
    } else {
      setTimeout(endQuiz, 1000);
    }
  }
  
  function showFeedback(message, className) {
    feedbackText.textContent = message;
    feedbackText.className = className;
  }
  
  function endQuiz() {
    quizContainer.style.display = 'none';
    resultPopup.style.display = 'block';
    scoreText.textContent = `Your score: ${score} / 9`;
  }
  