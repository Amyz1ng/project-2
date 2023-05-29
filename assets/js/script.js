/*jshint esversion: 6 */
let maxAttempts = 5;

/* Main function of the game*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (maxAttempts > 0) { 
                const playerChoice = this.getAttribute("data-type");
                const choices = ["rock", "paper", "scissors", "spock", "lizard"];
                const computerChoice = choices[Math.floor(Math.random() * choices.length)];
                displayResult(playerChoice, computerChoice, getResult(playerChoice, computerChoice));

                maxAttempts--; 
                if (maxAttempts === 0) {
                    let playerScore = parseInt(document.getElementById("player-score").innerText);
                    let computerScore = parseInt(document.getElementById("computer-score").innerText);

                    if (playerScore > computerScore) {
                        document.getElementById("result").innerText = "Game over. Congrats, you won!";
                    } else if (playerScore < computerScore) {
                        document.getElementById("result").innerText = "Game over. You lost.";
                    } else {
                        document.getElementById("result").innerText = "Game over. It's a tie!";
                    }
                    showPlayAgainButton();
                    
                }
            }
        });
    }

    document.getElementById("play-again").addEventListener("click", function() {
        resetGame();
    });
});


/* Determines the winner between the player and computer choices.*/

function getResult(playerChoice, computerChoice){
    let result = document.getElementById("result");

    if (playerChoice === computerChoice) {
        document.getElementById("result").innerText = "Tie";
    }else if(playerChoice == 'rock'){
        if(computerChoice == 'paper' || computerChoice == 'spock'){
            document.getElementById("result").innerText = "Aww you lost! Try again";
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "You Rock!!";
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock' || computerChoice == 'spock'){
            document.getElementById("result").innerText = "Better luck next time";
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "Alright lets go";
        }
    }else if(playerChoice == 'paper'){
        if(computerChoice == 'scissors' || computerChoice == 'lizard'){
            document.getElementById("result").innerText = "Try Again";
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "Congrats you Won!!!";
        }
    }else if(playerChoice == 'lizard'){
        if(computerChoice == 'scissors' || computerChoice == 'rock'){
            document.getElementById("result").innerText = "Better luck next time";
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "You're the winner";
        }
    }else if(playerChoice == 'spock'){
        if(computerChoice == 'paper' || computerChoice == 'lizard'){
            document.getElementById("result").innerText = "Oh no, you lost. =(";
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "You're the Champ =D";
        }
    }
  
}            
/* Increases player score if the winner*/
function incrementPlayer(){
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

/* Increases computer score if the winner*/
function incrementComputer(){
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}

/*Displays a picture depending on the choices picked between player and computer.*/
function displayResult(playerChoice, computerChoice) {
    let playerImage = `<img class="display-img" src="assets/images/${playerChoice}.png">`;
    let computerImage = `<img class="display-img" src="assets/images/${computerChoice}.png">`;

    document.getElementById("player-choice").innerHTML = playerImage;
    document.getElementById("computer-choice").innerHTML = computerImage;
}

/* Resets the game back to default to allow player to go again*/
function resetGame(){
    document.getElementById("player-score").innerText="0";
    document.getElementById("computer-score").innerText="0";
    document.getElementById("result").innerText="";
    document.getElementById("player-choice").innerHTML="";
    document.getElementById("computer-choice").innerHTML="";
    maxAttempts = 5;
    document.getElementById("play-again").style.display = "none"; 
}

/* Once game ends, play again button will appear*/
function showPlayAgainButton() {
    document.getElementById("play-again").style.display = "block";
   
}



