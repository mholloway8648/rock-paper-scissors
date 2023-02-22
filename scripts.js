let textArray = ["rock", "paper", "scissors"];
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
} else alert("Invalid selection");

//Plays a round using the player's input and computer's input//
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
        alert("It's a tie!");
        return result;
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result = "Computer won!";
            alert("The computer won!");
            return result;
        } else
             result = "Player won";
             alert("The player won!");
             return result;     
    }  
}


