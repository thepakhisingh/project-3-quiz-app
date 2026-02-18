const questions = [
    {
        question: "Which language runs in the browser?",
        answers: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does CSS stand for?",
        answers: ["Central Style Sheet", "Cascading Style Sheets", "Computer Style Sheet", "Creative Style System"],
        correct: 1
    },
    {
        question: "Which is not a programming language?",
        answers: ["HTML", "Python", "Java", "C++"],
        correct: 0
    }
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    nextBtn.style.display = "none";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;

        btn.addEventListener("click", () => {

            // Disable all buttons after selection this important because in my first version the==he score went up if the user clicked multiple times on the correct answer
            const allButtons = answersEl.querySelectorAll("button");
            allButtons.forEach(button => button.disabled = true);

            // Check answer
            if (index === q.correct) {
                score++;
            }

            nextBtn.style.display = "block";
        });

        answersEl.appendChild(btn);
    });
}


nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.textContent = "Quiz Finished!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score}/${questions.length}`;
}

showQuestion();

//follow codewithpakhi for explanation of the code and how it works.
