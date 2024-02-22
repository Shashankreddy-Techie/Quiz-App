const questions = [
    {
        question: "Which is largest animal in world?",
        answer: [
            { text: "Shark", correct: false},
            {text:"Whale",correct:true},
            {text: "Elephant", correct:false}
            {text: "Giraffee", correct:false}
        ]
    },
    {
        question: "What is the biggest ocean",
        answer: [
            { text: "Arabic", correct: false},
            {text:"Indian",correct:false},
            {text: "Atlantic", correct:false}
            {text: "Pacafic", correct:true}
        ]
    },
    {
        question: "Who is Indian GOAT Cricketer ?",
        answer: [
            { text: "RAHUL", correct: false},
            {text:"VIRAT",correct:true},
            {text: "ROHITH", correct:false}
            {text: "DHONI", correct:false}
        ]
    },
    {
        question: "What is abbrevation of CSE",
        answer: [
            { text: "CLUE SCIENCE ENGINEERING", correct: false},
            {text:"COMPUTER SCIENCE ENGINEERING",correct:true},
            {text: "COMPUTER SOCIAL ENGINEERING", correct:false}
            {text: "COMMERCE & SCIENCE EDUCATION", correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
    });
}
startQuiz();
