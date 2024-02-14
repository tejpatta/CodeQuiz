let highscoresDisplay = document.getElementById("highscores");
let clear = document.getElementById("clear");
let noScoresDisplay = document.getElementById("no-score");
let prevScores = []

renderScores()

function renderScores(){  
    let storedScore = Object.entries(localStorage)
    if (storedScore.length === 0) {
        prevScores = [];
        noScoresDisplay.textContent = "no highscores!"
    }
    else{
        noScoresDisplay.textContent = ""
        prevScores = storedScore;  

    }
getScores();
}

function getScores(){ 
    highscoresDisplay.innerHTML = "";
    for (var i=0; i<prevScores.length; i++){
        var li = document.createElement("li");
        li.textContent = prevScores[i]
        highscoresDisplay.appendChild(li)
    }
}

clear.addEventListener("click", ()=>{ 
    localStorage.clear();
    
    renderScores();
});