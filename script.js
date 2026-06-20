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

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// console.log(humanScore, computerScore);

function playGame() {
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
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

if (humanScore > computerScore) {
    console.log("Human wins the game");
}
else if (computerScore > humanScore) {
    console.log("Computer wins the game");
}
else {
    console.log("The game is a draw");
}
}

playGame();
