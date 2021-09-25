//time and score elements
let timer = 0;
let score = 0;
let timerEl = document.querySelector("#timer");
timerEl.textContent = "Timer: " + timer;
let scoreEl = document.querySelector("#finalScore")




let instructionsDivEl = document.querySelector("#instructions");
let questionsContainerEl = document.querySelector("#instructions");
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


//create timer countdown function to count down by one to be called in SetInterval function
var timerCountdown = function() {
    
    if (timer > 0) {
    
    timerEl.textContent = "Timer: " + timer;
    timer--;
    } else {
    clearInterval(startTimer);
    timerEl.textContent = "Timer: " + timer;
    return;  
    }
    console.log(timer);
    
}

//create timer to count down every second
var startTimer = function() {
    timer = 75;
    setInterval(timerCountdown, 1000);
 
};

//starts timer when the Start Quiz Button is clicked

  
function startQuiz() {
    console.log("the button was clicked");
    
    //start the timer countdown
    startTimer();
   
    //hide instructions div
    instructionsDivEl.setAttribute("class", "hide");
     
}; 

startQuizBtnEl.addEventListener("click", startQuiz);









