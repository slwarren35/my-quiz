//time and score elements
let timer = 75;
let score = 0;
let timerEl = document.querySelector("#timer");
timerEl.textContent = "Timer: " + timer;
let scoreEl = document.querySelector("#finalScore")




let instructionsDivEl = document.querySelector("#instructions");
let questionsContainerEl = document.querySelector("#questionsContainer");
let questionTitle = document.querySelector("#questionTitle");
let questionCount = 0;
const feedbackEl = document.querySelector("#feedback");
const theEndEl = document.querySelector("#theEnd");
let enterInitials = document.querySelector("#initials")
const highScoresEl = document.querySelector("#highScores");
let scoreList = [];
//Buttons
const viewScoresButton = document.querySelector("#viewScores");
const startQuizBtnEl = document.querySelector("#startQuiz");
const buttonOptionA = document.querySelector("#optionA");
const buttonOptionB = document.querySelector("#optionB");
const buttonOptionC = document.querySelector("#optionC");
const buttonOptionD = document.querySelector("#optionD");
const answerButtons = document.querySelectorAll(".btn-answer");
const submitScoreButton = document.querySelector("#submitScores");
const goBackButton = document.querySelector("#goBack")
const clearScoresButton = document.querySelector("#clearScores");



//Questions object
const myQuestions = [
    {
        //question 0
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctChoice: "2"
    },
        
    {
        title: "The condition in an if/else statement is enclosed with _______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctChoice: "2"
    },

    {
        title: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctChoice: "3"
    },

    {
        title: "String values must be enclosed within _____.",
        choices: ["commas", "curly braces", "quotes", "parentheses"],
        correctChoice: "2"
    },

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctChoice: "3"
    }
]




//timer
function setTime() {
    let timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = `Time:${timer}`;

        if (timer === 0 || questionCount === myQuestions.length) {
            clearInterval(timerInterval);
            questionsContainerEl.classList.add("hide")
            theEndEl.classList.remove("hide");
            scoreEl.textContent = timer;
        }
    }, 1000);
}

// start quiz with timer and set up questions
function startQuiz() {
    instructionsDivEl.classList.add("hide");
    questionsContainerEl.classList.remove("hide");
    questionCount = 0;
    setTime();
    //setQuestion(questionCount);
}

startQuizBtnEl.addEventListener("click", startQuiz);









