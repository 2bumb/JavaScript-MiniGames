// declaring the variables 
const choices = ["✊🏼", "✋🏼", "✌🏼"];
//rock ✊🏼 paper✋🏼 scissors✌🏼
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const gameResult = document.getElementById("gameResult");



// keep in mind javascript is cap sensitive



  //when the player clicks on the button, the computer will choice between rock paper scissors
 
function playgame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)];
   let result =""


if(playerChoice === computerChoice){

    result="Draw!";
}
else{
    switch(playerChoice){
        case "✊🏼":
            result = (computerChoice === "✌🏼") ? "YOU WIN!": "YOU LOSE";
            break;
            case "✋🏼":
                result = (computerChoice === "✊🏼") ? "YOU WIN!": "YOU LOSE";
                break;
                
                case "✌🏼":
                    result = (computerChoice === "✋🏼") ? "YOU WIN!": "YOU LOSE";
                    break;
    }
}

//used to display text 
playerDisplay.textContent = `Player: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
gameResult.textContent = result;



switch(result){
  case "YOU WIN!":
    gameResult.classList.add("greenText");
      // playerScore++;
      // playerScoreDisplay.textContent = playerScore;
      break;
  case "YOU LOSE":
    gameResult.classList.add("redText");
      // computerScore++;
      // computerScoreDisplay.textContent = computerScore;
      break;
}
}