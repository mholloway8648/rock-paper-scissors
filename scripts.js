let textArray = ["rock", "paper", "scissors"];

//Plays a round using the player's input and computer's input//
function playRound() {
    //Gets a random selection from textArray//
function getComputerChoice() {
    let choice = textArray[Math.floor(Math.random() * textArray.length)];
    return choice;
}

let computerSelection = getComputerChoice();
//Gets player input//
let playerSelection = prompt("Choose between rock, paper, or scissors.")
if (playerSelection === "rock") {
    alert("You chose rock!");
} else if (playerSelection === "paper") {
    alert("You chose paper!");
} else if (playerSelection === "scissors") {
    alert("You chose scissors!")
} else {
         alert("Invalid selection");
         prompt("Choose between rock, paper, or scissors.")
}   
    if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            alert("The computer won the round!");
            return computerScore;
        } else {
             playerScore++;
             alert("You won the round!");
             return playerScore;  
        } 
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++
            alert("The computer won the round!")
            return computerScore;
        } else {
            playerScore++;
            alert("You won the round!")
            return playerScore;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerScore++;
            alert("The computer won the round!")
            return computerScore;
        } else {
            playerScore++
            alert("You won the round!")
            playerScore;
        }
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (computerScore > playerScore) {
        alert("The computer wins the game!");
    } else alert("You win the game!");
}




