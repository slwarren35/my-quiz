//time and score elements
let timer = 75;
let score = 0;
let timerEl = document.querySelector("#timer");
timerEl.textContent = "Timer: " + timer;
let scoreEl = document.querySelector("#finalScore")
let scoreListEl = document.querySelector("#scores-list")




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
const submitScoreButton = document.querySelector("#submitScore");
const goBackButton = document.querySelector("#goBack");
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
            questionsContainerEl.style.display = "none";
            questionsContainerEl.classList.add("hide");
            theEndEl.classList.remove("hide");
            scoreEl.textContent = timer;
        }
    }, 1000);
}

// start quiz with timer and set up questions
function startQuiz() {
    questionsContainerEl.classList.remove("hide");
    instructionsDivEl.classList.add("hide");
    instructionsDivEl.style.display = "none";
    questionsContainerEl.style.display = "block";
    questionCount = 0;
    setTime();
    renderQuestion(questionCount);
}

// function to display questions 
function renderQuestion(index) {
    if (index < myQuestions.length) {
        questionTitle.textContent = myQuestions[index].title;
        buttonOptionA.textContent = myQuestions[index].choices[0];
        buttonOptionB.textContent = myQuestions[index].choices[1];
        buttonOptionC.textContent = myQuestions[index].choices[2];
        buttonOptionD.textContent = myQuestions[index].choices[3];

    }
}

// check answers and move to next question
function answers(event){
    event.preventDefault();

    //appends message to section for display
    feedbackEl.style.display = "block";
    var message = document.createElement("p");
    feedbackEl.appendChild(message);

    //only shows the message for one second 
    setTimeout(function() {
        message.style.display = "none";
    }, 1000);

    // check the answers
    if (myQuestions[questionCount].correctChoice === event.target.value) {
        message.textContent = "Correct!!!";
        
    } else if (myQuestions[questionCount].correctChoice !== event.target.value) {
        timer-=10;
        message.textContent = "Wrong!";
    }

    //now increment question counter so the question index is increased
    if (questionCount < myQuestions.length) {
        questionCount++;
    }

    //call renderQuestion to bring in next question when one of the answer buttons is clicked
    renderQuestion(questionCount);
}


function theEnd(event) {
    event.preventDefault();
    instructionsDivEl.classList.add("hide");
    instructionsDivEl.style.display = "none";
    theEndEl.style.display = "none";
    highScoresEl.style.display = "block";

    let userInput = enterInitials.value.toUpperCase();
    scoreList.push({initials: userInput, score: timer});

    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++){
        var li = document.createElement("li");
        li.textContent = scoreList[i].initials + ":   " + scoreList[i].score;
        scoreListEl.append(li);
    }

    // Add to local storage
    storeScores();
    displayScores();

}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    // gets stored scores from localStorage
    // parsing the JSON string
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    //if scores were retrieved from localStorage, update the scorelist array
    if (storedScoreList !== null) {
        scoreList = storedScoreList;

    }
}

//clear scores
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}

//Event listeners
//Starts time and displays first question when Start Quiz Button is clicked
startQuizBtnEl.addEventListener("click", startQuiz);

answerButtons.forEach(item => {
    item.addEventListener("click", answers);
});

submitScoreButton.addEventListener("click", theEnd);

goBackButton.addEventListener("click", function() {
    highScoresEl.style.display = "none";
    instructionsDivEl.style.display = "block";
    timer = 75;
    timerEl.textContent = "Time: " + timer;
});

clearScoresButton.addEventListener("click", clearScores);

viewScoresButton.addEventListener("click", function() {
    if (highScoresEl.style.display === "none") {
        highScoresEl.style.display = "block";
    } else if (highScoresEl.style.display === "block") {
        highScoresEl.style.display = "none";
    } else {
        return alert("No scores to show.");
    }
    
});









