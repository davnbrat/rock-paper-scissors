// generate random selection from computer. Generate random # and tie that to a variable for 3 options
let randPick = (Math.floor(Math.random() *(3 - 0 + 1)));
if (randPick == 0){
    randPick = "rock"
}else if (randPick == 1){
    randPick = "paper"
}else {
    randPick = "scissors"
}

// ask for input from player (rock,paper,scissors)
// rock beats scissors , paper beats rock, scissors beats paper, if the same its a tie
// log to the console both players selections and the winner
let playerPick = "";
let playerScore = 0;
let compScore = 0;
let rounds = 0;
let playGame = false;
// loop until 5 rounds

while(playGame == false){
    rounds++;
    playerPick = prompt("Please choose rock, paper, or scissors").toLowerCase();
    //check which player wins
    if(playerPick == "rock" && randPick == "scissors"){
        playerScore += 1
        console.log(`The computer chose ${randPick} and you chose ${playerPick}. 
            You win!. The score is now You:${playerScore} - Computer:${compScore}` )
    }else if(playerPick == "paper" && randPick == "rock"){
        playerScore += 1
        console.log(`The computer chose ${randPick} and you chose ${playerPick}. 
            You win!. The score is now You:${playerScore} - Computer:${compScore}` )
    }else if(playerPick == "scissors" && randPick == "paper"){
        playerScore += 1
        console.log(`The computer chose ${randPick} and you chose ${playerPick}. 
            You win!. The score is now You:${playerScore} - Computer:${compScore}` )
    }else if(playerPick === randPick){
        console.log(`The computer chose ${randPick} and you chose ${playerPick}. 
            It's a tie! The score is now You:${playerScore} - Computer:${compScore}` )
    } else{
        compScore += 1
        console.log(`The computer chose ${randPick} and you chose ${playerPick}. 
            It's a tie! The score is now You:${playerScore} - Computer:${compScore}` )
    }
    if(rounds < 5){
        playGame = false;
    } else{
        playGame = true;
        console.log(`Final score : You : ${playerScore} and Computer: ${compScore}`);
    }
    
}




















