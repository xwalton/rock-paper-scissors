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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
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
                return 'You lose! Scissors beats paper.';
            } else {
                return 'You win! Paper beats rock.';
            }
        }
        if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                return 'You lose! Rock beats scissors.';
            } else {
                return 'You win! Scissors beats paper.';
            }
        }
    }
game(){
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    if()
}  
    
    
  