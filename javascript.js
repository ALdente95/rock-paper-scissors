let userScore = 0;
let comScore = 0;

function computerPlay (){
    const comChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*comChoice.length);
    return comChoice[randomNumber];
}

function playRound (playerSelection,computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection){
        return "You tie!";
    }
    else if(playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "scissors" && computerSelection == "rock" ||
    playerSelection == "paper" && computerSelection == "rock"){
        comScore += 1;
        return "You lose!";
    }
    else{
        userScore += 1;
        return "You win!"
    }
}

function playerPlay(){
    let playerInput = prompt("Rock, Paper or Scissors: ").toLowerCase();
    return playerInput;
}
function game(){
    for (let i = 0; i < 5;){
        alert(playRound(playerPlay(),computerPlay()) + "\nYour score: " + userScore + " | Computer score: " + comScore);
        if (userScore ==3){
            i = 5;
            alert("You won the game!");
        }
        else if (comScore ==3){
            i = 5;
            alert("You lost the game!");
        }
        }
}

game();