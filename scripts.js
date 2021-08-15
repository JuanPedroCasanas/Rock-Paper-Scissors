const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const play = document.getElementById("play");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
const computerScore = document.getElementById("computerScore")
const playerScore = document.getElementById("playerScore")

let elements = ["rock", "paper", "scissors"];

let randomElement = randomizeelement();
let computerElement; 
computerElement = randomElement;
let playerElement;


rock.onclick = ()=>playerElement = "rock";
paper.onclick = ()=>playerElement = "paper";
scissors.onclick = ()=>playerElement = "scissors";

play.onclick = game;

reset.onclick = ()=>{
  randomElement = randomizeelement();
  computerElement = randomElement;
  result.innerHTML = "Computer element has been changed";
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
}

function randomizeelement (){
  let randomNumber = Math.floor(Math.random() * elements.length);
  let randomElementArray = elements.slice(randomNumber, (randomNumber+1))
  let randomElement = randomElementArray.toString();
  return randomElement;
}

function round (){
    if (playerElement===undefined || computerElement === undefined){
  } else if ((playerElement===computerElement)){
    result.innerHTML = "Draw, you picked " + playerElement + ". Computer picked " + computerElement;
    randomElement = randomizeelement();
    computerElement = randomElement;
  } else if ((playerElement==="rock" && computerElement==="scissors")|| 
  (playerElement==="paper" && computerElement==="rock")|| 
  (playerElement==="scissors" && computerElement==="paper")){
    result.innerHTML = "You win, you picked " + playerElement + ". Computer picked " + computerElement;
    playerScore.innerHTML = ++playerScore.innerHTML;
    randomElement = randomizeelement();
    computerElement = randomElement;
  }else {
    result.innerHTML = "You lose, you picked " + playerElement + ". Computer picked " + computerElement;
    randomElement = randomizeelement();
    computerElement = randomElement;
    computerScore.innerHTML = ++computerScore.innerHTML;
  }
}

function game(){
  if (playerElement===undefined || computerElement === undefined){
  }else if (computerScore.innerHTML == 5 && playerScore.innerHTML == 5){
    randomElement = randomizeelement();
    computerElement = randomElement;
    result.innerHTML = "Draw, computer element reseted";
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
  }else if(computerScore.innerHTML <= 5 && playerScore.innerHTML <= 5){
    round()
  }else if(computerScore.innerHTML < playerScore.innerHTML){
    randomElement = randomizeelement();
    computerElement = randomElement;
    result.innerHTML = "You won, computer element reseted";
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
  }else{   
  randomElement = randomizeelement();
  computerElement = randomElement;
  result.innerHTML = "You lost, computer element reseted";
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  }
}