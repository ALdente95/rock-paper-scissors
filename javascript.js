function getRandomChoice() {
    const choices = ["fire", "water", "grass"];
    let comChoice = Math.floor(Math.random(choices));
}

let playerScore = 0;
let comScore = 0;
let roundWinner = '';

function playRound(playerSelect, comSelect){
    if(playerSelect == comChoice) {
        roundWinner = 'tie';
    }
    else if(playerSelect == "fire" && comSelect == "grass" ||
    playerSelect == "water" && comSelect == "fire" ||
    playerSelect == "grass" && comSelect == "water")
    {
        playerScore ++;
        roundWinner = 'player!';
    }
    else{
        comScore ++;
        roundWinner = 'computer!';
    }
    updateScoreboard(roundWinner, playerSelect, comSelect);
}

function gameOver(){
    return playerScore == 3 || comScore == 3; 
}

function whenClick(playerSelect){
    const comSelect = getRandomChoice();

}
const fireBtn = document.getElementsByClassName('fire-button');
const waterBtn = document.getElementsByClassName('water-button');
const grassBtn = document.getElementsByClassName('grass-button');

fireBtn.addEventListener('click', ()=> whenClick('fire'));
waterBtn.addEventListener('click', ()=> whenClick('water'));
grassBtn.addEventListener('click', ()=> whenClick('grass'));


