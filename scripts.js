let textArray = ["rock", "paper", "scissors"];
//Gets a random selection from textArray//
function getComputerChoice() {
    let choice = textArray[Math.floor(Math.random() * textArray.length)];
    return choice;
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose between rock, paper, or scissors.")

if (playerSelection === "rock") {
    alert("You chose rock!");
} else if (playerSelection === "paper") {
    alert("You chose paper!");
} else if (playerSelection === "scissors") {
    alert("You chose scissors!")
} else alert("Invalid selection");