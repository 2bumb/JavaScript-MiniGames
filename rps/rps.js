// declaring the variables 
const choices = ["✊🏼", "✋🏼", "✌🏼"];
//rock ✊🏼 paper✋🏼 scissors✌🏼
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const gameResult = document.getElementById("gameResult");
const playerScoreResult = document.getElementById("playerScoreResult");
const computerScoreResult = document.getElementById("playerScoreResult");
const winAudio = document.getElementById("winAudio");
const loseAudio = document.getElementById("loseAudio");
const tieAudio = document.getElementById("tieAudio");
const homecardAudio = document.getElementById("home-cardAudio");

//we are using  let the varaibles for playeResult and computerResult because their values will change while const variables will stay constant 
let playerResult = 0;
let computerResult = 0;



// keep in mind javascript is cap sensitive



  //when the player clicks on the button, the computer will choice between rock paper scissors
 
function playgame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)];
   let result  =" winAudio.play();"


if(playerChoice === computerChoice){

    result="Tie!"; tieAudio.play(); ;
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
playerDisplay.textContent = ` ${playerChoice}`;
computerDisplay.textContent = ` ${computerChoice}`;
gameResult.textContent = result;

//
gameResult.classList.remove("greenText", "redText");


switch(result){
  case "YOU WIN!":
    gameResult.classList.add("greenText");
 playerResult++;
 playerScoreResult.textContent = playerResult;
 winAudio.play();
      break;
      
  case "YOU LOSE":
    gameResult.classList.add("redText");
    computerResult++;
    computeScoreResult.textContent = computerResult;
    loseAudio.play();
      break;
}



// refresh function used to refresh the entire game
}
function refreshFunction() {
  playerResult = 0;
  computerResult = 0;
  playerScoreResult.textContent = playerResult;
  computeScoreResult.textContent = computerResult;
  gameResult.textContent = ""; 
  playerDisplay.textContent  = "";
  computerDisplay.textContent  = "";
  resetAudio.play();
}




// refresh button animation 



function startSpinningAndThenRefresh() {
  const refreshIcon = document.getElementById("refresh-icon");

  // Add spinning animation to the refresh icon
  refreshIcon.classList.add("spin-animation");

  // Set a timeout to execute the refresh function after animation
  setTimeout(function() {
      // Call the refresh function after the animation ends
      refreshFunction();
      // Remove spinning animation class
      refreshIcon.classList.remove("spin-animation");
  }, 680);
  resetAudio.play(); // 1000 milliseconds = 1 second
}
function homeclick() {
  var homecardAudio = document.getElementById("homecardAudio");
  homecardAudio.play();
}
