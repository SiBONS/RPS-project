// moram da deklarisem tri varijable za kamen papir makaze
let rockChoice = document.getElementById("rock");
let paperChoice = document.getElementById("paper");
let scissorsChoice = document.getElementById("scissors");
//moram da deklarisem varijable za score za human i cpu
let humanScore = document.getElementById("user-score");
let cpuScore = document.getElementById("cpu-score");
let result = document.getElementById("result");

// this function sets out the display of the result and returns an empty string
function revertDefault() {
    setTimeout(() => {
        result.innerHTML = "";}, 1000);
    }

rockChoice.addEventListener("click", function() {
    result.innerHTML = "ROCK!";
});


    


paperChoice.addEventListener("click", function() {
    result.innerHTML = "Paper!";
    revertDefault();
})




function changeResult() {
    result.innerHTML = "The first one to get to 5 points, wins!"
        let human = humanScore.innerHTML = 0;
        let cpu = cpuScore.innerHTML = 0;
    
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