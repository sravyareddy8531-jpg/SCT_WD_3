let questions = [
  {
    question: "HTML stands for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language"],
    answer: 0
  },
  {
    question: "CSS is used for?",
    options: ["Styling", "Logic", "Database"],
    answer: 0
  },
  {
    question: "JavaScript is?",
    options: ["Programming Language", "Styling", "Database"],
    answer: 0
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = q.question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    let div = document.createElement("div");
    div.innerText = opt;
    div.classList.add("option");

    div.onclick = () => {
      if (index === q.answer) {
        score++;
      }
      nextQuestion();
    };

    optionsDiv.appendChild(div);
  });
}

function nextQuestion() {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText = "Your Score: " + score;
  }
}

loadQuestion();
