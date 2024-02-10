let startBtn = document.getElementById("start");
let time = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let questionScreen = document.getElementById("questions");
let questionTitle = document.getElementById("question-title")
let questionAnswer = document.getElementById("choices")
let correctFx = new Audio("assets/sfx/correct.wav");
let incorrectFx = new Audio("assets/sfx/incorrect.wav");
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
    if (feedbackScreen.classList.contains("feedback")){
        feedbackScreen.classList.add("hide")
        questionAnswer.innerHTML = ""; //clear previous choices
    }
    questionTitle.textContent = questions[questionNum].title;
    questions[questionNum].answers.forEach(answer => { 
        let btn = document.createElement("button");
        btn.innerHTML = answer;
        btn.setAttribute("class", "choice button")
        btn.addEventListener("click", () => {chooseAnswer(answer)}) 
        questionAnswer.appendChild(btn);
        });
}

function selectAns(userChoice){
    if(userChoice === questions[questionNumber].correct){
        feedbackScreen.classList.remove("hide");
        feedbackScreen.textContent = "Correct!"; //shows feedback
        correctFx.play();  
        correctFx.currentTime=0; 
        score ++ //add points for each correct answer 
        
        
    }else {
        feedbackScreen.classList.remove("hide");
        feedbackScreen.textContent = "Wrong!" ; //shows feedback
        incorrectFx.play();
        incorrectFx.currentTime=0; 
        if (time.innerHTML > 5){
            time.innerHTML-=10; //minus 10s for each wrong answer
           
        } else {
            time.innerHTML = 0
        }
    }

    questionNum = getRandom(questions.length) //gets index number of next random question
    setTimeout(startQuestions,500) // displays feedback for 0.5s
}

function getRandom(max){
    return Math.floor(Math.random()*max)
}

function end(){
    time.innerHTML = 0
    if(questionScreen.className === "start"){
        questionScreen.className = "hide";
        feedbackScreen.classList.add("hide");
        endScreen.className = "start"
        finalScore.textContent = score
    }
    submitBtn.addEventListener("submit", function(sub){
        sub.preventDefault();
    })
    submitBtn.addEventListener("click", ()=>highScores(score))
}


function highScores(){

}