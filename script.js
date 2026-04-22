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

function revertDefault() {
    setTimeout(() => {
        result.innerHTML = "";
        rockChoice.style.backgroundColor = "white";
        paperChoice.style.backgroundColor = "white";
        scissorsChoice.style.backgroundColor = "white";
    }, 1500);
}

function cpuPlayer() {
    let cpuChoice = Math.floor(Math.random() * 3 + 1);
    if (cpuChoice === 1) {
        rockChoice.style.backgroundColor = "rgba(11, 63, 131, 0.87)";
        return "rock";
    } else if (cpuChoice === 2) {
        paperChoice.style.backgroundColor = "rgba(11, 63, 131, 0.87)";
        return "paper";
    } else {
        scissorsChoice.style.backgroundColor = "rgba(11, 63, 131, 0.87)";
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
        result.innerHTML = "It is a tie! No points";
    } else if (cpu === "scissors") {
        result.innerHTML = "You won! Rock beats scissors!";
        updateScore("human"); 
    } else {
        result.innerHTML = "You lose! Paper beats rock!";
        updateScore("cpu"); 
    }
    revertDefault();
});

paperChoice.addEventListener("click", function() {
    let cpu = cpuPlayer();
    if (cpu === "rock") {
        result.innerHTML = "You won! Paper beats rock!";
        updateScore("human");
    } else if (cpu === "scissors") {
        result.innerHTML = "You lose! Scissors cut out the hell of ya!";
        updateScore("cpu");
    } else {
        result.innerHTML = "No points. Paper VS paper.";
    }
    revertDefault();
});

scissorsChoice.addEventListener("click", function() {
    let cpu = cpuPlayer();
    if (cpu === "rock") {
        result.innerHTML = "You lose! Rock destroyed you!";
        updateScore("cpu");
    } else if (cpu === "scissors") {
        result.innerHTML = "It is a tie! No points";
    } else {
        result.innerHTML = "You won. Cutting the paper weeee!";
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

function endGame() {
    if (humanScore === 5) {
        result.innerHTML = "You won this game!";
        disableButtons();
        revertDefault();
    } else if (cpuScore === 5) {
        result.innerHTML = "Computer wins this game!";
        disableButtons();
        revertDefault();
    }
}