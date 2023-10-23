function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
    }
}

function playRound() {
    let playerSelection = prompt.toLowerCase("Do you choose rock, paper, or scissors?");
    function playRound() {
        let playerSelection = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
    }
    let playerScore = 0;
    let computerScore = 0;
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                computerScore++;
                playerScore++;
                return "It's a tie!";
            } else if (computerSelection === 'paper') {
                computerScore++;
                return "You lose! Paper beats rock.";
            } else {
                playerScore++;
                return "You win! Rock beats scissors.";
            }
        case 'paper':
            if (computerSelection === 'paper') {
                computerScore++;
                playerScore++;
                return "It's a tie!";
            } else if (computerSelection === 'scissors') {
                computerScore++;
                return "You lose! Scissors beats paper.";
            } else {
                playerScore++;
                return "You win! Paper beats rock.";
            }
        case 'scissors':
            if (computerSelection === 'scissors') {
                computerScore++;
                playerScore++;
                return "It's a tie!";
            } else if (computerSelection === 'rock') {   
                computerScore++;
                return "You lose! Rock beats scissors.";
            }   else {
                playerScore++;
                return "You win! Scissors beats paper.";
            }
        }
    }

function game() {
    playRound();
    console.log(playRound());
    playRound();
    console.log(playRound());
    playRound();
    console.log(playRound());
    playRound();
    console.log(playRound());
    playRound();
    console.log(playRound());
    playRound();
    console.log(playRound());
    if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else if (computerScore < playerScore) {
        console.log("Player wins!");
    } else {
        console.log("It's a tie!");
    }
}