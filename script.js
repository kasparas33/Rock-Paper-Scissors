function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3)
    if(compChoice === 0) {
        return "rock"
    } else if(compChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Rock, paper, or scissors?")
    return humanChoice 
} 

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === compChoice) {
        console.log("Draw!")
    }
    else if (humanChoice === "rock" && compChoice === "scissors" ||
        humanChoice === "paper" && compChoice === "rock" ||
        humanChoice === "scissors" && compChoice === "paper"
    ) {
        humanScore++;
        console.log("You win!"); 
    }
    else {
        computerScore++;
        console.log("You lose!");
    }
}

// console.log(humanScore, computerScore);

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);