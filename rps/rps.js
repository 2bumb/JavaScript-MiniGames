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
 
function playgame(playerChoice){ //playgame is from my html when the user clicks on the 3 options r.p.s the computer will also pick a option 
  
  //playerChoice receives the values of the function and stores it when called so  when I need information of the function I call playerChoice
  //calling a function runs the entire code while calling a parameter calls for values in the function 

  //When you call a function, you're instructing the program to execute a block of code. Calling a parameter within a function is more about providing specific values or data to be used within that block of code.

  const computerChoice = choices[Math.floor(Math.random() * 3)]; // choices[] is an array holding values for the computer to pick without choices the computer will picka number between 1 and 3
   
  
  // let result  =" winAudio.play();"// I might not need this code


if(playerChoice === computerChoice){ //if the plyer and computer pick the same answer EX: Rock the game will result to a tiew

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



// LEARN MORE ABOUT HOW ADDEVENTLISTNER WORKS
//Functin is used when client clicks on the home button

function homeclick() {
  var homecardAudio = document.getElementById("homecardAudio");
  
  // Play the audio
  homecardAudio.play();

  // When the audio ends, navigate to the new page
  homecardAudio.addEventListener('ended', function() {
    window.location.href = "/Index.FrontPage/index.html";
  });
}