const welcomeContainer = document.getElementById("welcome-container");
const gameInterface = document.getElementById("game-interface");

const startButton = document.getElementById("start-button");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const restartButton = document.getElementById("restart-button");

const humanScore = document.getElementById("human-score");
const computerScore = document.getElementById("computer-score");
const result = document.getElementById("round-result");
const winner = document.getElementById("final-result");
const round = document.getElementById("round");

let roundNo = 0;
let humanWins = 0;
let computerWins = 0;
const choices = ['Rock', 'Paper', 'Scissors'];

startButton.addEventListener("click", function() {
    welcomeContainer.style.display = "none";
    gameInterface.style.display = "block";
});

rockButton.addEventListener('click', function() { playGame('Rock'); });
paperButton.addEventListener('click', function() { playGame('Paper'); });
scissorsButton.addEventListener('click', function() { playGame('Scissors'); });

function playGame(humanSelected) {
    if (roundNo < 5) {
        const computerSelected = choices[Math.floor(Math.random() * choices.length)];
        let resultText = `You chose ${humanSelected}. Computer chose ${computerSelected}. `;
        roundNo++;

        if (humanSelected === computerSelected) {
            resultText += "It's a draw!";
        } else if (
            (humanSelected === 'Rock' && computerSelected === 'Scissors') ||
            (humanSelected === 'Paper' && computerSelected === 'Rock') ||
            (humanSelected === 'Scissors' && computerSelected === 'Paper')
        ) {
            resultText += "You win!";
            humanWins++;
        } else {
            resultText += "Computer wins!";
            computerWins++;
        }

        result.textContent = resultText;
        round.textContent = `Round No: ${roundNo}/5`;
        humanScore.textContent = humanWins;
        computerScore.textContent = computerWins;

        if (roundNo === 5) {
            displayFinalResults();
        }
    }
}

function displayFinalResults() {
    winner.classList.add('show');

    if (humanWins > computerWins) {
        winner.textContent = "Congratulations! You are the overall winner!";
    } else if (computerWins > humanWins) {
        winner.textContent = "Computer wins the game! Better luck next time!";
    } else {
        winner.textContent = "It's a tie! No one wins the game.";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    restartButton.style.display = "block";
}

restartButton.addEventListener("click", function() {
    roundNo = 0;
    humanWins = 0;
    computerWins = 0;
    result.textContent = "";
    humanScore.textContent = humanWins;
    computerScore.textContent = computerWins;
    round.textContent = `Round No: ${roundNo}/5`;
    winner.classList.remove('show');
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    gameInterface.style.display = "none";
    welcomeContainer.style.display = "block";
    restartButton.style.display = "none";
});
