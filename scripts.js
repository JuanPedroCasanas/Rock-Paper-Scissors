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
  result.textContent = "Computer element has been changed";
  playerScore.textContent = 0;
  computerScore.textContent = 0;
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
    result.textContent = "Draw, you picked " + playerElement + ". Computer picked " + computerElement;
    randomElement = randomizeElement();
    computerElement = randomElement;
  } else if ((playerElement==="rock" && computerElement==="scissors")|| 
  (playerElement==="paper" && computerElement==="rock")|| 
  (playerElement==="scissors" && computerElement==="paper")){
    result.textContent = "You win, you picked " + playerElement + ". Computer picked " + computerElement;
    playerScore.textContent = ++playerScore.textContent;
    randomElement = randomizeElement();
    computerElement = randomElement;
  }else {
    result.textContent = "You lose, you picked " + playerElement + ". Computer picked " + computerElement;
    randomElement = randomizeElement();
    computerElement = randomElement;
    computerScore.textContent = ++computerScore.textContent;
  }
}

function playGame(){
  if (playerElement===undefined || computerElement === undefined){
  }else if (computerScore.textContent == 5 && playerScore.textContent == 5){
    randomElement = randomizeElement();
    computerElement = randomElement;
    result.textContent = "Draw, computer element reseted";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
  }else if((playerScore.textContent == 5) && ((playerElement==="rock" && computerElement==="scissors")|| 
    (playerElement==="paper" && computerElement==="rock")|| 
    (playerElement==="scissors" && computerElement==="paper"))) {
      randomElement = randomizeElement();
      computerElement = randomElement;
      result.textContent = "You won, computer element reseted";
      playerScore.textContent = 0;
      computerScore.textContent = 0;
  }else if((computerScore.textContent == 5) && ((playerElement==="scissors" && computerElement==="rock")|| 
  (playerElement==="rock" && computerElement==="paper")|| 
  (playerElement==="paper" && computerElement==="scissors"))) {   
  randomElement = randomizeElement();
  computerElement = randomElement;
  result.textContent = "You lost, computer element reseted";
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  }else{
    playRound()
  }
}