let userScore = 0;
let comScore = 0;
let reset = false;
const uScore = document.querySelector('#user-score');
const cScore = document.querySelector('#com-score');
const uSelect = document.querySelector('#user-select');
const cSelect = document.querySelector('#com-select');
const result = document.querySelector('#result');
const message = document.querySelector('#round-msg');

const start = document.querySelector('#start');
const restart = document.querySelector('#restart');

uScore.textContent = '0';
cScore.textContent = '0';

function resetGame(e){
    userScore = 0;
    comScore = 0;
    uScore.textContent = '0';
    cScore.textContent = '0';
    uSelect.textContent = '';
    cSelect.textContent = '';
    result.textContent = '';
    message.textContent='';
    reset = true;
    return reset;
    return userScore;
    return comScore;
}

function startGame(e){
    reset = true;
    return reset;
}

function playRound(e){
    const comChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*comChoice.length);

if (userScore === 5){
    result.textContent = "You win !"
}
else if(comScore === 5){
    result.textContent = "You lose !"
}
else if(reset){
    if(e.target.id === "rock"){
        if(comChoice[randomNumber] ==="rock"){
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Tie!";
        }
        else if(comChoice[randomNumber] === "paper"){
            comScore++;
            cScore.textContent = comScore;
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Paper beats rock!";
        }
        else if(comChoice[randomNumber] === "scissors"){
            userScore++;
            uScore.textContent = userScore;
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Rock beats scissors!";
        }
        }
    else if(e.target.id === "paper"){
        if(comChoice[randomNumber] ==="paper"){
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Tie!";
        }
        else if(comChoice[randomNumber] === "scissors"){
            comScore++;
            cScore.textContent = comScore;
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Scissors beats paper!";
        }
        else if(comChoice[randomNumber] === "rock"){
            userScore++;
            uScore.textContent = userScore;
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Paper beats rock!";
        }
        }
    else if(e.target.id === "scissors"){
        if(comChoice[randomNumber] ==="scissors"){
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Tie!";
        }
        else if(comChoice[randomNumber] === "rock"){
            comScore++;
            cScore.textContent = comScore;
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Rock beats scissors!";
        }
        else if(comChoice[randomNumber] === "paper"){
            userScore++;
            uScore.textContent = userScore;
            uSelect.textContent = e.target.id;
            cSelect.textContent = comChoice[randomNumber];
            message.textContent = "Scissors beats paper!";
        }
        }
}
}


const btns = Array.from(document.querySelectorAll('button'));
btns.forEach(button => button.addEventListener('click',playRound));
start.addEventListener('click', startGame);
restart.addEventListener('click', resetGame);
