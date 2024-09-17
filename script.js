
const rockbtn= document.getElementById("btn1");
const paperbtn=document.getElementById("btn2");
const scissorsbtn=document.getElementById("btn3");
const playerscoredisplay=document.getElementById("player-score-display");
const computerscoredisplay=document.getElementById("computer-score-display");
const playerNumber = document.getElementById("player1");
const computerNumber = document.getElementById("player2")
let playerPick = "";
let playerScore = 0;
let compScore = 0;
let rounds = 0;
let playGame = false;
// loop until 5 rounds





const playRound = function (playerPick){
    while(playGame == false){
        rounds++;
        let randPick = (Math.floor(Math.random() *(3 - 0 + 1)));
        if (randPick == 0){
            randPick = "rock"
        }else if (randPick == 1){
            randPick = "paper"
        }else {
            randPick = "scissors"
        }

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
}};



rockbtn.addEventListener("click", function (){
    console.log("rock");
    playRound("rock");
});
paperbtn.addEventListener("click",function(){
    console.log("paper");
    playRound("paper");
})
scissorsbtn.addEventListener("click", function(){
    console.log("scissors");
    playRound("scissors");
})



















