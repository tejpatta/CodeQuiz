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

function timer(){

}

function displayQuestions(){

}

function end(){

}

function highScores(){
    
}