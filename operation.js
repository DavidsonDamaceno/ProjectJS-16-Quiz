const botao = document.querySelector(".btnInit");
const inicio = document.getElementById("inicio");
const questoes = document.getElementById("perguntas");
const questionTextElement = document.getElementById("question-text");
const optionsContainerElement = document.getElementById("options-container");
const questionNumberElement = document.getElementById("question-number");
const nextButton = document.getElementById("next-button");
const resultsContainer = document.getElementById("results-container");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-button");

botao.addEventListener("click", () => {
  inicio.classList.toggle("visivel");
  inicio.classList.toggle("invisivel");
  questoes.classList.toggle("quiz");
  showQuestion();
});

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  nextButton.style.display = "none";
  currentQuestion = questions[currentQuestionIndex];
  questionNumberElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${
    questions.length
  }`;
  questionTextElement.innerText = currentQuestion.question;
  optionsContainerElement.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-button");
    optionsContainerElement.appendChild(button);

    button.addEventListener("click", () => {
      console.log(option);
      checkAnswer(option, currentQuestion.answer, button);
    });
  });
}

function checkAnswer(selectedOption, correctAnswer, buttonElement) {
  if (selectedOption === correctAnswer) {
    buttonElement.classList.add("correct");
    score++;
  } else {
    buttonElement.classList.add("incorrect");
  }

  Array.from(optionsContainerElement.children).forEach((button) => {
    button.disabled = true;
    if (button.innerText === correctAnswer) {
      button.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questoes.classList.add("quiz");
    scoreText.innerText = `Você acertou: ${score} de ${questions.length} perguntas!`;
    resultsContainer.classList.remove("invisivel");
  }
});

restartButton.addEventListener("click", () => {
  window.location.reload();
});
