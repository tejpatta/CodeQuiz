let startBtn = document.getElementById("start");
let time = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let questionScreen = document.getElementById("questions");
let questionTitle = document.getElementById("question-title")
let questionAnswer = document.getElementById("choices")
let correctFx = new Audio("assets/sfx/correct.wav");
let IncorrectFx = new Audio("assets/sfx/incorrect.wav");
let feedbackScreen = document.getElementById("feedback");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let submitBtn = document.getElementById("submit");
let score = 0;
let questionNumber = 0;

startBtn.addEventListener("click", begin)

function begin(event){
    event.stopPropagation()
    time.innerHTML = 20;
    if (startScreen.className === "start" && questionScreen.className === "hide"){
        startScreen.className = "hide";
        questionScreen.className = "start";
        }
    timer() //starts timer
    displayQuestions(); //begins displaying questions
}

// the timer function controls ongoing gameplay, if time drops below 0 the end function is called
function timer(){
    let timerInterval = setInterval(function(){
    time.innerHTML--;
        if (time.innerHTML <= 0){              
            clearInterval(timerInterval)
            end()         
        }
    },1000)
}

function displayQuestions(){

}

function end(){

}

function highScores(){

}