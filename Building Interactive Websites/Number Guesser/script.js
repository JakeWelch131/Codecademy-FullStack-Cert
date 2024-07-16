let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) {
  let humanTarget = Math.abs(humanGuess - target);
  let computerTarget = Math.abs(computerGuess - target);

  if (humanTarget < computerTarget) {
    return true;
  }
  else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  }
  else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}


