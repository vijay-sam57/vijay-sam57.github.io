function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "ROCK";
  } else if (choice === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function gamePlay(player, computer) {
  player = player.toUpperCase();
  if (player === "PAPER") {
    if (computer === "ROCK") {
      return "You win! Paper beats Rock yo!!" + gameScore("Player");
    } else if (computer === "SCISSORS") {
      return "You lose! Scissors beats Paper yo!!" + gameScore("Computer");
    } else {
      return "It's a Tie!" + gameScore("Tie");
    }
  } else if (player === "ROCK") {
    if (computer === "ROCK") {
      return "It's a Tie!" + gameScore("Tie");
    } else if (computer === "SCISSORS") {
      return "You win! Rock beats Scissors yo!!" + gameScore("Player");
    } else {
      return "You lose! Paper beats Rock yo!!" + gameScore("Computer");
    }
  } else {
    if (computer === "ROCK") {
      return "You lose! Rock beats Scissors yo!!" + gameScore("Computer");
    } else if (computer === "SCISSORS") {
      return "It's a Tie!" + gameScore("Tie");
    } else {
      return "You win! Scissors beats Paper yo!!" + gameScore("Player");
    }
  }
}
let playerScore = 0;
let computerScore = 0;
function gameScore(winner) {
  if (winner === "Player") {
    playerScore += 1;
    return `<br>Playerscore = ${playerScore} Computerscore = ${computerScore}`;
  } else if (winner === "Computer") {
    computerScore += 1;
    return `<br>Playerscore = ${playerScore} Computerscore = ${computerScore}`;
  } else {
    return `<br>Playerscore = ${playerScore} Computerscore = ${computerScore}`;
  }
}

function game(playerSelect, computerSelect) {
  console.log(gamePlay(playerSelect, computerSelect));
}

function gameOver() {
  if (computerScore === 5) {
    return "Computer wins the game. Better luck next time!";
  } else if (playerScore === 5) {
    return "Player wins the game. Alright you the man!";
  }
}

const pl = document.querySelector(".pl-btns");
const cp = document.querySelectorAll(".cp-btns button");
pl.addEventListener("click", (e) => {
  const desp = document.querySelector(".desp");
  let ch = computerPlay();
  cp.forEach((btn) => {
    if (btn.value.toUpperCase() === ch) {
      btn.classList.add("enlarge-ani");
      btn.addEventListener("animationend", () => {
        btn.classList.remove("enlarge-ani");
      });
    }
  });
  const result = document.createElement("h3");
  result.innerHTML = gamePlay(e.target.value, ch);
  const plscore = document.querySelector("#pl-score");
  const cpscore = document.querySelector("#cp-score");
  plscore.textContent = playerScore;
  cpscore.textContent = computerScore;
  desp.textContent = "";
  desp.insertBefore(result, desp.firstChild);
  if (playerScore === 5 || computerScore === 5) {
    const finalResult = document.createElement("h2");
    finalResult.textContent = gameOver();
    desp.textContent = "";
    plscore.textContent = 0;
    cpscore.textContent = 0;
    playerScore = computerScore = 0;
    desp.appendChild(finalResult);
    const playAgain = document.createElement("h2");
    playAgain.textContent = "Click on the player button to play again.";
    desp.appendChild(playAgain);
  }
});
pl.removeEventListener("click");
