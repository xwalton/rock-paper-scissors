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
    console.log(randomNumber);
}
Math.floor(Math.random() * (max - min + 1)) + min;
