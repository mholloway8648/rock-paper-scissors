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
        result = tie;
        alert("It's a tie!");
        return result;
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result = computerWin;
            alert("The computer won!");
            return result;
        } else {
             result = playerWin;
             alert("You won!");
             return result;  
        } 
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = computerWin;
            alert("The computer won!")
            return result;
        } else {
            result = playerWin;
            alert("You won!")
            return result;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            result = computerWin;
            alert("The computer won!")
            return result;
        } else {
            result = playerWin;
            alert("You won!")
            return result;
        }
    }
}

let tie;
let playerWin;
let computerWin;

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (computerWin > playerWin) {
        console.log("The computer wins!");
    } else console.log("The player Wins!");
}




