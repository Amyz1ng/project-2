/**
 * Declare constants for Dom elements
 * and possible choices
 */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const message = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);    
    });
}

/**
 * The main game function. Accepts one parameter, which
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
   
    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/image/${choices [computerChoice]}.png`;
    computerImage.alt = choice[computerChoice];
}