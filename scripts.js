const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const play = document.getElementById("play");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

let elements = ["rock", "paper", "scissors"];
let randomNumber = Math.floor(Math.random() * elements.length);
let randomElementArray = elements.slice(randomNumber, (randomNumber+1))
let randomElement = randomElementArray.toString();
let computerElement; 
computerElement = randomElement;
let playerElement;

rock.onclick = ()=>playerElement = "rock";
paper.onclick = ()=>playerElement = "paper";
scissors.onclick = ()=>playerElement = "scissors";

play.onclick = function game(){
  if ((playerElement===computerElement)){
    result.innerHTML = "Draw";
  } else if ((playerElement==="rock" && computerElement==="scissors")|| 
  (playerElement==="paper" && computerElement==="rock")|| 
  (playerElement==="scissors" && computerElement==="paper")){
    result.innerHTML = "You win";
  }else {
    result.innerHTML = "You lose";
  }
}
reset.onclick = ()=>{randomNumber = Math.floor(Math.random() * elements.length);
  randomElementArray = elements.slice(randomNumber, (randomNumber+1))
  randomElement = randomElementArray.toString();
  computerElement = randomElement;
  result.innerHTML = "Computer element has been changed";
}
  