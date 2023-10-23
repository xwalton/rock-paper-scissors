const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const getPlayerChoice = () => {
    let playerInput = prompt('Choose rock, paper or scissors. Your life depends on it!');
    playerInput = playerInput.toLowerCase();
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        return playerInput;
    } else {
        console.log('Error!');
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        return 'It\'s a tie!';
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'You lose! Paper beats rock.';
        } else {
            playerScore++;
            return 'You win! Rock beats scissors.';
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            return 'You lose! Scissors beats paper.';
        } else {
            playerScore++;
            return 'You win! Paper beats rock.';
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'You lose! Rock beats scissors.';
        } else {
            playerScore++;
            return 'You win! Scissors beats paper.';
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (computerScore > playerScore) {
        console.log('You lose!');
    } else if (playerScore > computerScore) {
        console.log('You win!');
    } else {
        console.log('It\'s a tie!');
    }
}

game();
