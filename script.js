const questions = [
    {
      question: "What is the largest economy in the world?",
      options: ["1.USA", "2.China", "3.Germany", "4.India"],
      correct: 0
    },
    {
      question: "Which country has the highest GDP per capita?",
      options: ["1.USA", "2.Qatar", "3.Luxembourg", "4.Singapore"],
      correct: 2
    },
    {
      question: "Which organization regulates global trade?",
      options: ["1.IMF", "2.World Bank", "3.WTO", "4.OECD"],
      correct: 2
    },
    {
      question: "Which currency is used in Japan?",
      options: ["1.Yuan", "2.Won", "3.Yen", "4.Dollar"],
      correct: 2
    },
    {
      question: "What is the main export of Saudi Arabia?",
      options: ["1.Oil", "2.Gold", "3.Electronics", "4.Textiles"],
      correct: 0
    },
    {
      question: "Which country is known for the Silicon Valley?",
      options: ["1.China", "2.USA", "3.India", "4.Germany"],
      correct: 1
    },
    {
      question: "What is the main economic activity in Switzerland?",
      options: ["1.Agriculture", "2.Banking", "3.Mining", "4.Oil"],
      correct: 1
    },
    {
      question: "Which country has the highest inflation rate?",
      options: ["1.Venezuela", "2.Zimbabwe", "3.urkey", "4.Argentina"],
      correct: 0
    },
    {
      question: "What is the IMF's main role?",
      options: ["1.Global health", "2.Trade negotiations", "3.Economic stability", "4.Military alliances"],
      correct: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startQuizBtn = document.getElementById('startQuizBtn');
  const quizContainer = document.getElementById('quizContainer');
  const questionText = document.getElementById('questionText');
  const optionButtons = document.querySelectorAll('.option-btn');
  const feedback = document.getElementById('feedback');
  const resultPopup = document.getElementById('resultPopup');
  const scoreText = document.getElementById('scoreText');
  
  startQuizBtn.addEventListener('click', startQuiz);
  
  function startQuiz() {
    startQuizBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
  }
  
  function showQuestion() {
    feedback.textContent = '';
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
      score++;
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    } else {
      feedback.textContent = 'Oops!';
    }
  }
  
  function endQuiz() {
    quizContainer.style.display = 'none';
    resultPopup.style.display = 'block';
    scoreText.textContent = `Your score: ${score} / 9`;
  }
  