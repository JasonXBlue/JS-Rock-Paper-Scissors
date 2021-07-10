let playerScore = 0;
let compScore = 0;
let rounds = 0;

function computerPlay() {
    switch (Math.floor(Math.random() * 3) ) {
        case 0:
            play = "rock";
            break;
        case 1:
            play = "paper";
            break;
        case 2:
            play = "scissors";
            break;
    }
    return play;
}

function playRound(playerSelection, computerSelection) {
   if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper")) {
       let result = ("You Lose! "+ computerSelection + " beats " + playerSelection);
       compScore++;
       rounds++;
       console.log(result);
       return result, compScore;
       
    }
       
    else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) {
        let result = ("You Win! "+ playerSelection + " beats " + computerSelection);
        playerScore++;
        rounds++;
        console.log(result);
        return result, playerScore;
    }
    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors")) {
        let result = ("You Lose! "+ computerSelection + " beats " + playerSelection);
        compScore++;
        rounds++;
        console.log(result);
        return result, compScore;
    }
    else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock")) {
        let result = ("You Win! "+ playerSelection + " beats " + computerSelection);
        playerScore++;
        rounds++;
        console.log(result);
        return result, playerScore;
    }
    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock")) {
        let result = ("You Lose! "+ computerSelection + " beats " + playerSelection);
        compScore++;
        rounds++;
        console.log(result);
        return result, compScore;
    }
    else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper")) {
        let result = ("You Win! "+ playerSelection + " beats " + computerSelection);
        playerScore = playerScore++;
        rounds = rounds++;
        console.log(result);
        return result, playerScore;
    }
    // check game round for tie
    else if (((playerSelection.toLowerCase()) === computerSelection)) {
        let result = ("You Tie "+ playerSelection + " = " + computerSelection);
        console.log(result);
        return result;
}    

}

// function game() {
//     while ((rounds <= 5) && (playerScore >=3) & (compScore >=3)) {
//         let playerSelection = prompt("Enter your choice of Rock, Paper or Scissors: ")
//         let computerSelection = computerPlay();
//         playRound(playerSelection, computerSelection);
        
//     }
// }

function game() {
    do {
        let playerSelection = prompt("Enter your choice of Rock, Paper or Scissors: ")
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        }
        while ( (rounds <= 5) && ((playerScore <3) || (compScore <3)));
        
        
}

function determineWinner() {
    if (playerScore > compScore) {
        winner = "Game Over! You Win! ";
    }
    else {
        winner = "Game Over! You Lose! ";
    }
    return winner;
}

game();
determineWinner();
console.log( winner + " || Player score = " + playerScore + " || Computer score = " + compScore);





