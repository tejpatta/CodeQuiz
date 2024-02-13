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
let questionNum = 0;

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
        feedbackScreen.classList.add("hide")
        questionAnswer.innerHTML = ""; //clear previous choices
        questionNum = getRandom(questions.length) //gets index number of next random question
    questionTitle.textContent = questions[questionNum].title;
    questions[questionNum].answers.forEach(answer => { 
        let btn = document.createElement("button");
        btn.innerHTML = answer;
        btn.setAttribute("class", "choice button")
        btn.addEventListener("click", () => {selectAns(answer)}) 
        questionAnswer.appendChild(btn);
        });
}

function selectAns(userChoice){
    if(userChoice === questions[questionNum].correct){
        feedbackScreen.removeClass("hide");
        feedbackScreen.textContent = "Correct!"; //shows feedback
        correctFx.play();  
        correctFx.currentTime=0; 
        score ++ ; //add points for each correct answer 
        
        
    }else {
        feedbackScreen.removeClass("hide");
        feedbackScreen.textContent = "Wrong!" ; //shows feedback
        incorrectFx.play();
        incorrectFx.currentTime=0; 
        if (time.innerHTML > 10){
            time.innerHTML-=10; //minus 10s for each wrong answer
           
        } else {
            time.innerHTML = 0
        }
    }

    setTimeout(displayQuestions,500) // displays feedback for 0.5s
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
      let initials = document.getElementById("initials").value;
    localStorage.setItem(initials, JSON.stringify(score))
    if(endScreen.className = "start"){
        endScreen.className = "hide"
        window.location.href = "highscores.html"
    }

}