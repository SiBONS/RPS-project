// declaring the variables

let rockChoice = document.getElementById("rock");
let paperChoice = document.getElementById("paper");
let scissorsChoice = document.getElementById("scissors");

let humanScoreElement = document.getElementById("user-score");
let cpuScoreElement = document.getElementById("cpu-score");

let humanScore = 0;
let cpuScore = 0;

humanScoreElement.innerHTML = humanScore;
cpuScoreElement.innerHTML = cpuScore;

let result = document.getElementById("result");

result.innerHTML = "Pick a weapon to start!"


let cpuRock = document.getElementById("cpu-rock")
let cpuPaper = document.getElementById("cpu-paper");
let cpuScissors = document.getElementById("cpu-scissors");

function revertDefault() {
    setTimeout(() => {
        // result.innerHTML = "";
        rockChoice.style.backgroundColor = "";
        paperChoice.style.backgroundColor = "";
        scissorsChoice.style.backgroundColor = "";
        cpuRock.innerHTML = "";
        cpuPaper.innerHTML = "";
        cpuScissors.innerHTML = "";
        
    }, 1000);
}



function cpuPlayer() {
    let cpuChoice = Math.floor(Math.random() * 3 + 1);
    if (cpuChoice === 1) {
        rockChoice.style.backgroundColor = "rgba(91, 97, 105, 0.87)";
        cpuRock.innerHTML = "CPU CHOSE ROCK";
        revertDefault();
        return "rock";
    } else if (cpuChoice === 2) {
        paperChoice.style.backgroundColor = "rgba(91, 97, 105, 0.87)";
        cpuPaper.innerHTML = "CPU chose Paper";
        return "paper";
    } else {
        scissorsChoice.style.backgroundColor = "rgba(91, 97, 105, 0.87)";
         cpuScissors.innerHTML = "CPU CHOSE Scissors";
        return "scissors";
    }
}

function updateScore(winner) {
    if (winner === "human") {
        humanScore++;
        humanScoreElement.innerHTML = humanScore;
    } else if (winner === "cpu") {
        cpuScore++;
        cpuScoreElement.innerHTML = cpuScore;
    }
    endGame();
}

rockChoice.addEventListener("click", function() {
    let cpu = cpuPlayer();
    if (cpu === "rock") {
        result.innerHTML = "🪨 vs 🪨 — Tie!";
        result.style.backgroundColor = "#4c6c77";
    } else if (cpu === "scissors") {
        result.innerHTML = "🪨 beats ✂️ — You win!";
        result.style.backgroundColor = "#427076";
        updateScore("human"); 
    } else {
        result.innerHTML = "📄 beats 🪨 — Computer wins!";
        result.style.backgroundColor = "#565c72";
        updateScore("cpu"); 
    }
    revertDefault();
});

paperChoice.addEventListener("click", function() {
    let cpu = cpuPlayer();
    if (cpu === "rock") {
        result.innerHTML = "📄 beats 🪨 — You win!";
        result.style.backgroundColor = "#427076";
        updateScore("human");
    } else if (cpu === "scissors") {
        result.innerHTML = "✂️ beats 📄 — Computer wins!";
        result.style.backgroundColor = "#565c72";
        updateScore("cpu");
    } else {
        result.innerHTML = "📄 vs 📄 — Tie!";
        result.style.backgroundColor = "#4c6c77";
    }
    revertDefault();
});

scissorsChoice.addEventListener("click", function() {
    let cpu = cpuPlayer();
    if (cpu === "rock") {
        result.innerHTML = "🪨 beats ✂️ — Computer wins!";
        result.style.backgroundColor = "#565c72";
        updateScore("cpu");
    } else if (cpu === "scissors") {
        result.innerHTML = "It is a tie! No points";
        result.innerHTML = "✂️ vs ✂️ — Tie!";
        result.style.backgroundColor = "#4c6c77";
    } else {
       result.innerHTML = "✂️ beats 📄 — You win!";
       result.style.backgroundColor = "#427076";
       updateScore("human");
    }
    revertDefault();
});

function disableButtons() {
        paperChoice.style.pointerEvents = "none";
        rockChoice.style.pointerEvents = "none";
        scissorsChoice.style.pointerEvents = "none";
        paperChoice.style.opacity = "0.5";
        scissorsChoice.style.opacity = "0.5";
        rockChoice.style.opacity = "0.5"
}

let newGame = document.getElementById("new-game");

newGame.addEventListener("click", function() {
    window.location.reload();
})

function displayNewGame() {
    if (humanScore >= 5 || cpuScore >= 5) {
        newGame.style.display = "block";
    }
}

function endGame() {
    if (humanScore === 5) {
        result.innerHTML = "🏆 You win the match!";
        result.style.backgroundColor = "#427076";
        disableButtons();
        revertDefault();
        displayNewGame();
    } else if (cpuScore === 5) {
        result.innerHTML = "💻 Computer wins the match!";
        result.style.backgroundColor = "#565c72";
        disableButtons();
        displayNewGame();
    }
}








