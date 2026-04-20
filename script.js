// moram da deklarisem tri varijable za kamen papir makaze
let rockChoice = document.getElementById("rock");
let paperChoice = document.getElementById("paper");
let scissorsChoice = document.getElementById("scissors");
//moram da deklarisem varijable za score za human i cpu
let humanScore = document.getElementById("user-score");
let cpuScore = document.getElementById("cpu-score");
let result = document.getElementById("result");

function changeResult() {
        let human = humanScore.innerHTML;
        let cpu = cpuScore.innerHTML;
     human = 5;
     cpu = 0;
    if(human === 5) {
       return result.innerHTML = "You win! CPU is a loser."
    }  else if(cpu === 5) {
         return result.innerHTML = "You lose! CPU is a winner."
    }
}

changeResult();



// function rockPaperScissors (rockChoice, paperChoice, scissorsChoice) {
//     switch(rockChoice) {
//         case paperChoice:
//         result.innerHTML = "You lose! Paper beats rock!";
//         cpuScore++;
//         break;
//         case rockChoice:
//             result.innerHTML = "It's a tie!";
//         break;
//         case scissorsChoice:
//         result.innerHTML = "You win! Rock beat scissors!";
//         humanScore++;
//     }
//     switch(paperChoice) {
//         case paperChoice
//     }

// }