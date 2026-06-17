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

console.log(getHumanChoice());

// const humanScore = ;
// const computerScore = ;

// function playRound()