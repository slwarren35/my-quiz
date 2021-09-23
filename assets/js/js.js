// create a variable to hold the timer count
var timer = 10;
var score = 0;

//use querySelector to select elements by their ids
var timerEl = document.querySelector("#timer");
var startQuizBtnEl = document.querySelector("#startQuiz");
var instructionsDivEl = document.querySelector("#instructions");
var quizQuestion1El = document.querySelector("#quizContainer1");
var quizQuestion2El = document.querySelector("#quizContainer2");
var quizQuestion3El = document.querySelector("#quizContainer3");
var quizQuestion4El = document.querySelector("#quizContainer4");
var quizQuestion5El = document.querySelector("#quizContainer5");
var ChoiceAEl = document.querySelector("#choiceA");
var ChoiceBEl = document.querySelector("#choiceB");
var ChoiceCEl = document.querySelector("#choiceC");
var ChoiceDEl = document.querySelector("#choiceD");
var ChoiceA2El = document.querySelector("#choice2A");
var ChoiceB2El = document.querySelector("#choice2B");
var ChoiceC2El = document.querySelector("#choice2C");
var ChoiceD2El = document.querySelector("#choice2D");
var ChoiceA3El = document.querySelector("#choice3A");
var ChoiceB3El = document.querySelector("#choice3B");
var ChoiceC3El = document.querySelector("#choice3C");
var ChoiceD3El = document.querySelector("#choice3D");
var ChoiceA4El = document.querySelector("#choice4A");
var ChoiceB4El = document.querySelector("#choice4B");
var ChoiceC4El = document.querySelector("#choice4C");
var ChoiceD4El = document.querySelector("#choice4D");
var ChoiceA5El = document.querySelector("#choice5A");
var ChoiceB5El = document.querySelector("#choice5B");
var ChoiceC5El = document.querySelector("#choice5C");
var ChoiceD5El = document.querySelector("#choice5D");



//question object
var quizQuestions = [
    {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts","numbers"],
    answer: "alerts"
    },

    {
    question: "The condition is an if/else statement is enclosed with ________.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
    },

    {
    question: "Arrays in JavaScript can be used to store _______.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
    },

    {
    question: "String values must be enclosed within ______",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is ______.",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
    },

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
    setInterval(timerCountdown, 1000);
};

//starts timer when the Start Quiz Button is clicked
startQuizBtnEl.addEventListener("click", function() {
    console.log("the button was clicked");
    
    //start the timer countdown
    startTimer();
   
    //hide instructions div
    instructionsDivEl.setAttribute("class", "hide");
    quizQuestion1El.classList.remove("hide");

    return question1();
    

}); 

var question1 = function() {
    ChoiceAEl.addEventListener("click", function() {
         console.log("choice A");
         quizQuestion2El.classList.remove("hide");
         quizQuestion1El.setAttribute("class", "hide");
         
    });

    ChoiceBEl.addEventListener("click", function() {
        console.log("choice B");
        quizQuestion2El.classList.remove("hide");
        quizQuestion1El.setAttribute("class", "hide");
   });

    ChoiceCEl.addEventListener("click", function() {
    score += 10;
    quizQuestion2El.classList.remove("hide");
    quizQuestion1El.setAttribute("class", "hide");
    console.log("score = " +score);
});

    ChoiceDEl.addEventListener("click", function() {
    console.log("choice D");
    quizQuestion2El.classList.remove("hide");
    quizQuestion1El.setAttribute("class", "hide");
});
    return question2();

}

var question2 = function() {
    ChoiceA2El.addEventListener("click", function() {
    console.log("choice A2");
    quizQuestion3El.classList.remove("hide");
    quizQuestion2El.setAttribute("class", "hide");
         
    });

    ChoiceB2El.addEventListener("click", function() {
    console.log("choice B2");
    quizQuestion3El.classList.remove("hide");
    quizQuestion2El.setAttribute("class", "hide");
        
   });

    ChoiceC2El.addEventListener("click", function() {
    console.log("choice C2");
    quizQuestion3El.classList.remove("hide");
    quizQuestion2El.setAttribute("class", "hide");
    
   
});

    ChoiceD2El.addEventListener("click", function() {
    console.log("choice D2");
    quizQuestion3El.classList.remove("hide");
    quizQuestion2El.setAttribute("class", "hide");
    
});

    return question3();

}


var question3 = function() {
    ChoiceA3El.addEventListener("click", function() {
    console.log("choice A3");
    quizQuestion4El.classList.remove("hide");
    quizQuestion3El.setAttribute("class", "hide");
         
    });

    ChoiceB3El.addEventListener("click", function() {
    console.log("choice B3");
    quizQuestion4El.classList.remove("hide");
    quizQuestion3El.setAttribute("class", "hide");
        
   });

    ChoiceC3El.addEventListener("click", function() {
    console.log("choice C3");
    quizQuestion4El.classList.remove("hide");
    quizQuestion3El.setAttribute("class", "hide");
    
   
});

    ChoiceD3El.addEventListener("click", function() {
    console.log("choice D3");
    quizQuestion4El.classList.remove("hide");
    quizQuestion3El.setAttribute("class", "hide");
    
});
   return question4();
}
    

var question4 = function() {
    ChoiceA4El.addEventListener("click", function() {
    console.log("choice A4");
    quizQuestion5El.classList.remove("hide");
    quizQuestion4El.setAttribute("class", "hide");
         
    });

    ChoiceB4El.addEventListener("click", function() {
    console.log("choice B4");
    quizQuestion5El.classList.remove("hide");
    quizQuestion4El.setAttribute("class", "hide");
        
   });

    ChoiceC4El.addEventListener("click", function() {
    console.log("choice C4");
    quizQuestion5El.classList.remove("hide");
    quizQuestion4El.setAttribute("class", "hide");
    
   
});

    ChoiceD4El.addEventListener("click", function() {
    console.log("choice D4");
    quizQuestion5El.classList.remove("hide");
    quizQuestion4El.setAttribute("class", "hide");
    
});
    return question5();
}
    
var question5 = function() {
    ChoiceA5El.addEventListener("click", function() {
    console.log("choice A5");
    
         
    });

    ChoiceB5El.addEventListener("click", function() {
    console.log("choice B5");
    
        
   });

    ChoiceC5El.addEventListener("click", function() {
    console.log("choice C5");
    
    
   
});

    ChoiceD5El.addEventListener("click", function() {
    console.log("choice D5");
    
    
});
    return;
}

