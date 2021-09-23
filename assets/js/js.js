// create a variable to hold the timer count
var timer = 10;

//use querySelector to select elements by their ids
var timerEl = document.querySelector("#timer");
var startQuizBtnEl = document.querySelector("#startQuiz");
var instructionsDivEl = document.querySelector("#instructions");





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

}); 

    


