
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
        const playerChoice = this.getAttribute("data-type");
        const choices = ["rock", "paper", "scissors", "spock", "lizard"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(computerChoice);
        console.log(playerChoice);
        getResult(playerChoice, computerChoice);
        });
    }
});

function getResult(playerChoice, computerChoice){
    let result = document.getElementById('result');
    if (playerChoice === computerChoice) {
		alert("tie");
    }else if(playerChoice == 'rock'){
        if(computerChoice == 'paper' || computerChoice == 'spock'){
            alert("Computer won");
        } else{
            alert("Player won");
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock' || computerChoice == 'spock'){
            alert("Computer won");
        } else{
            alert("Player won");
        }
    }else if(playerChoice == 'paper'){
        if(computerChoice == 'scissors' || computerChoice == 'lizard'){
            alert("Computer won");
        } else{
            alert("Player won");
        }
    }else if(playerChoice == 'lizard'){
        if(computerChoice == 'scissors' || computerChoice == 'rock'){
            alert("Computer won");
        } else{
            alert("Player won");
        }
    }else if(playerChoice == 'spock'){
        if(computerChoice == 'paper' || computerChoice == 'lizard'){
            alert("Computer won");
        } else{
            alert("Player won");
        }
    }
  
}            

function incrementWinner(){

}

function incrementLoser(){

}
