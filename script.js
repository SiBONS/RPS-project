// moram da deklarisem tri varijable za kamen papir makaze
let rockChoice = document.getElementById("rock");
let paperChoice = document.getElementById("paper");
let scissorsChoice = document.getElementById("scissors");
//moram da deklarisem varijable za score za human i cpu

// mora da se odvaja sam element od score-a. Ako se spajaju vrednosti i elementi, nece da radi.
let humanScoreElement = document.getElementById("user-score");
let cpuScoreElement = document.getElementById("cpu-score");

let humanScore = 0;
let cpuScore = 0;

humanScoreElement.innerHTML = humanScore;
cpuScoreElement.innerHTML = cpuScore;

let result = document.getElementById("result");

// this function sets out the display of the result and returns an empty string with a timeout
function revertDefault() {
    setTimeout(() => {
        result.innerHTML = "";
        rockChoice.style.backgroundColor = "white";
        paperChoice.style.backgroundColor = "white";
        scissorsChoice.style.backgroundColor = "white";
    }, 1500);
    }

// paperChoice.addEventListener("click", function() {
//     result.innerHTML = "Paper!";
//     revertDefault();
// })

function cpuPlayer() {
    let cpuChoice = Math.floor(Math.random() * 3 + 1);
    if(cpuChoice === 1) {
    rockChoice.style.backgroundColor = "rgba(11, 63, 131, 0.87)";
    return "rock";
}   else if(cpuChoice === 2) {
    paperChoice.style.backgroundColor = "rgba(11, 63, 131, 0.87)";
    return "paper";
} else {
    scissorsChoice.style.backgroundColor = "rgba(11, 63, 131, 0.87)";
   return "scissors";
}
}

rockChoice.addEventListener("click", function() {
    let cpu = cpuPlayer();
    if(cpu === "rock") {
        result.innerHTML = "It is a tie! No points";
    }else if(cpu === "scissors") {
        result.innerHTML = "You won! Rock beats scissors!";
        humanScoreElement.innerHTML++;
    } else {
        result.innerHTML = "You lose! Paper beats rock!";
        cpuScoreElement.innerHTML++;
    }
    revertDefault();
})

paperChoice.addEventListener("click", function() {
    let cpu = cpuPlayer();
    if(cpu === "rock") {
        result.innerHTML = "You won! Paper beats rock!";
        humanScoreElement.innerHTML++;
    }else if(cpu === "scissors") {
        result.innerHTML = "You lose! Scissors cut out the hell of ya!";
        cpuScoreElement.innerHTML++;
    } else {
        result.innerHTML = "No points. Paper VS paper.";
    }
    revertDefault();
})

scissorsChoice.addEventListener("click", function() {
    let cpu = cpuPlayer();
    if(cpu === "rock") {
        result.innerHTML = "You lose! Rock destroyed you!";
        cpuScoreElement.innerHTML++;
    }else if(cpu === "scissors") {
        result.innerHTML = "It is a tie! No points";
    } else {
        result.innerHTML = "You won. Cuting the paper weeee!";
        humanScoreElement.innerHTML++;
    }
    revertDefault();
})




