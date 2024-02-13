let highscoresDisplay = document.getElementById("highscores");
let clear = document.getElementById("clear");

let prevScores = []

renderScores()

function renderScores(){  
let storedScore = Object.entries(localStorage);
    if (storedScore !== null) {
    prevScores = Object.entries(localStorage);
    } else{
        highscoresDisplay.textContent = "no highscore!"
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
});