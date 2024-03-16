
// declaring the variables 

const choices = ["✊🏼", "✋🏼", "✌🏼"];
//rock ✊🏼 paper✋🏼 scissors✌🏼


const playerDisplay = document.getElementById("playerDisplay");

const computerDisplay = document.getElementById("computerDisplay");

const gameresult = document.getElementById("gameResult");



// keep in mind javascript is cap sensitive

//This section is used to make the computer pick a random number

function playgame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result =""

  //when the player clicks on the button, the computer will choice between rock paper scissors
  

if(playerChoice === computerChoice){

    result="Draw!"
}
else{
    switch(playerChoice){
        case "✊🏼":
            result = (computerChoice === "✌🏼") ? "YOU WIN!": "YOU LOSE"
            case "✋🏼":
                result = (computerChoice === "✊🏼") ? "YOU WIN!": "YOU LOSE"
                break;
                case "✌🏼":
                    result = (computerChoice === "✋🏼") ? "YOU WIN!": "YOU LOSE"
                    break;



    }
}
playerDisplay.textContent = `Player: ${playerChoice}`
computerDisplay.textContent = `Computer: ${computerChoice}`
gameResult.textContent = result;
}