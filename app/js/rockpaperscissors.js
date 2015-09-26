////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove;
    if (move){
        playerMove = move;
    }
    else {
        playerMove = getInput();
    }
    console.log(playerMove);
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var computerMove;
    if (move){
        computerMove = move;
    }
    else {
        computerMove = randomPlay();
    };
    console.log(computerMove);
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove == "rock" && computerMove =="rock")||(playerMove == "scissors" && computerMove =="scissors")||(playerMove == "paper" && computerMove =="paper")){
        winner = "tie";
    }
    else if ((playerMove == "rock" && computerMove =="scissors")||(playerMove == "scissors" && computerMove =="paper")||(playerMove == "paper" && computerMove =="rock")){
        winner = "player";
    }
    else if ((computerMove == "rock" && playerMove =="scissors")||(computerMove == "scissors" && playerMove =="paper")||(computerMove == "paper" && playerMove =="rock")){
        winner = "computer";
    }

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    console.log(winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = 0;
    var computerMove = 0;
    var winner = "";
    var seed = "";
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
   while (playerWins !=5 && computerWins !=5 ){
        playerMove = getPlayerMove(seed);
        computerMove = getComputerMove(seed);
        winner = getWinner(playerMove,computerMove);
        if (winner == "computer"){
            computerWins = computerWins + 1;
        }
        else if (winner == "player"){
            playerWins = playerWins + 1;
        }
        else if (winner == "tie"){
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}
