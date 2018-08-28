//Computer generated choice
let playerScore = 0;
let computerScore = 0;
let tiedRounds = 0;
const win = "You won the match! Press the reset button to try again!"
const lose = "You lost the match! Press the reset button to try again!"
const error = "Something went terribly wrong!"

function game(clicked_id) {
  if (playerScore < 5 && computerScore < 5){
    var playerSelection = clicked_id;
    var computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  else if(playerScore == 5){
    document.getElementById("finalScore").innerHTML = win.toString();
  }
  else if(computerScore == 5){
    document.getElementById("finalScore").innerHTML = lose.toString();
  }
  else {
    document.getElementById("finalScore").innerHTML = error.toString();
  }
}

function computerPlay() {
  const possibleOutcomes = ["rock", "paper", "scissors"];
  return possibleOutcomes[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tiedRounds++;
    document.getElementById("tieScore").innerHTML = tiedRounds.toString();
  }
  else if ((playerSelection === "rock") && (computerSelection === "paper") ||
  (playerSelection === "paper") && (computerSelection === "scissors") ||
  (playerSelection === "scissors") && (computerSelection === "rock")){
    computerScore++;
    document.getElementById("loseScore").innerHTML = computerScore.toString();
  }
  else {
    playerScore++;
    document.getElementById("winScore").innerHTML = playerScore.toString();
  }
}
function reset(){
  playerScore = 0;
  computerScore = 0;
  tiedRounds = 0;
  document.getElementById("winScore").innerHTML = playerScore;
  document.getElementById("loseScore").innerHTML = computerScore;
  document.getElementById("tieScore").innerHTML = tiedRounds;
  document.getElementById("finalScore").innerHTML = "";
}
