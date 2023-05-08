
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
        const playerChoice = this.getAttribute("data-type");
        const choices = ["rock", "paper", "scissors", "spock", "lizard"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(computerChoice);
        console.log(playerChoice);
        let result = getResult(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, result);
        });
    }
});



function getResult(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
		alert("tie");
    }else if(playerChoice == 'rock'){
        if(computerChoice == 'paper' || computerChoice == 'spock'){
            alert("Computer won");
            incrementComputer();
        } else{
            alert("Player won");
            incrementPlayer();
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock' || computerChoice == 'spock'){
            alert("Computer won");
            incrementComputer();
        } else{
            alert("Player won");
            incrementPlayer();
        }
    }else if(playerChoice == 'paper'){
        if(computerChoice == 'scissors' || computerChoice == 'lizard'){
            alert("Computer won");
            incrementComputer();
        } else{
            alert("Player won");
            incrementPlayer();
        }
    }else if(playerChoice == 'lizard'){
        if(computerChoice == 'scissors' || computerChoice == 'rock'){
            alert("Computer won");
            incrementComputer();
        } else{
            alert("Player won");
            incrementPlayer();
        }
    }else if(playerChoice == 'spock'){
        if(computerChoice == 'paper' || computerChoice == 'lizard'){
            alert("Computer won");
            incrementComputer();
        } else{
            alert("Player won");
            incrementPlayer();
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
    let playerImage = `<img class="display-img" src="${playerChoice}.png">`
    let computerImage = `<img class="display-img" src="${computerChoice}.png">`

    document.getElementById("player-choice").innerHTML = playerImage;
    document.getElementById("computer-choice").innerHTML = computerImage;
}