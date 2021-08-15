const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const play = document.getElementById("play");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
const computerScore = document.getElementById("computerScore")
const playerScore = document.getElementById("playerScore")

let elements = ["rock", "paper", "scissors"];

let randomElement = randomizeElement();
let computerElement; 
computerElement = randomElement;
let playerElement;


rock.onclick = ()=>playerElement = "rock";
paper.onclick = ()=>playerElement = "paper";
scissors.onclick = ()=>playerElement = "scissors";

play.onclick = playGame;

reset.onclick = ()=>{
  randomElement = randomizeElement();
  computerElement = randomElement;
  result.innerHTML = "Computer element has been changed";
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
}

function randomizeElement (){
  let randomNumber = Math.floor(Math.random() * elements.length);
  let randomElementArray = elements.slice(randomNumber, (randomNumber+1))
  let randomElement = randomElementArray.toString();
  return randomElement;
}

function playRound (){
    if (playerElement===undefined || computerElement === undefined){
  } else if ((playerElement===computerElement)){
    result.innerHTML = "Draw, you picked " + playerElement + ". Computer picked " + computerElement;
    randomElement = randomizeElement();
    computerElement = randomElement;
  } else if ((playerElement==="rock" && computerElement==="scissors")|| 
  (playerElement==="paper" && computerElement==="rock")|| 
  (playerElement==="scissors" && computerElement==="paper")){
    result.innerHTML = "You win, you picked " + playerElement + ". Computer picked " + computerElement;
    playerScore.innerHTML = ++playerScore.innerHTML;
    randomElement = randomizeElement();
    computerElement = randomElement;
  }else {
    result.innerHTML = "You lose, you picked " + playerElement + ". Computer picked " + computerElement;
    randomElement = randomizeElement();
    computerElement = randomElement;
    computerScore.innerHTML = ++computerScore.innerHTML;
  }
}

function playGame(){
  if (playerElement===undefined || computerElement === undefined){
  }else if (computerScore.innerHTML == 5 && playerScore.innerHTML == 5){
    randomElement = randomizeElement();
    computerElement = randomElement;
    result.innerHTML = "Draw, computer element reseted";
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
  }else if((playerScore.innerHTML == 5) && ((playerElement==="rock" && computerElement==="scissors")|| 
    (playerElement==="paper" && computerElement==="rock")|| 
    (playerElement==="scissors" && computerElement==="paper"))) {
      randomElement = randomizeElement();
      computerElement = randomElement;
      result.innerHTML = "You won, computer element reseted";
      playerScore.innerHTML = 0;
      computerScore.innerHTML = 0;
  }else if((computerScore.innerHTML == 5) && ((playerElement==="scissors" && computerElement==="rock")|| 
  (playerElement==="rock" && computerElement==="paper")|| 
  (playerElement==="paper" && computerElement==="scissors"))) {   
  randomElement = randomizeElement();
  computerElement = randomElement;
  result.innerHTML = "You lost, computer element reseted";
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  }else{
    playRound()
  }
}