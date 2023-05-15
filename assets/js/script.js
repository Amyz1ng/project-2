
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
        const playerChoice = this.getAttribute("data-type");
        const choices = ["rock", "paper", "scissors", "spock", "lizard"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        displayResult(playerChoice, computerChoice, getResult(playerChoice,computerChoice));
        });
    }
});



function getResult(playerChoice, computerChoice){
    let result = document.getElementById("result");

    if (playerChoice === computerChoice) {
        document.getElementById("result").innerText = "Tie"
    }else if(playerChoice == 'rock'){
        if(computerChoice == 'paper' || computerChoice == 'spock'){
            document.getElementById("result").innerText = "ish you got rekt"
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "awe bru you Won"
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock' || computerChoice == 'spock'){
            document.getElementById("result").innerText = "ish you got rekt"
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "awe bru you Won"
        }
    }else if(playerChoice == 'paper'){
        if(computerChoice == 'scissors' || computerChoice == 'lizard'){
            document.getElementById("result").innerText = "Eish you got rekt"
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "Awe bru you Won"
        }
    }else if(playerChoice == 'lizard'){
        if(computerChoice == 'scissors' || computerChoice == 'rock'){
            document.getElementById("result").innerText = "Eish you got rekt"
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "Awe bru you Won"
        }
    }else if(playerChoice == 'spock'){
        if(computerChoice == 'paper' || computerChoice == 'lizard'){
            document.getElementById("result").innerText = "Eish you got rekt"
            incrementComputer();
        } else{
            incrementPlayer();
            document.getElementById("result").innerText = "Awe bru you Won"
        }
    }
  
}            

function incrementPlayer(){
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore
}

function incrementComputer(){
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore
}

function displayResult(playerChoice, computerChoice) {
    let playerImage = `<img class="display-img" src="assets/images/${playerChoice}.png">`
    let computerImage = `<img class="display-img" src="assets/images/${computerChoice}.png">`
0
    document.getElementById("player-choice").innerHTML = playerImage;
    document.getElementById("computer-choice").innerHTML = computerImage;
}