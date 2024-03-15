
// declaring the variables 

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");

const computerDisplay = document.getElementById("computerDisplay");

const gameresult = document.getElementById("gameResult");



// keep in mind javascript is cap sensitive

//This section is used to make the computer pick a random number

function playgame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result =""
  

if(playerChoice===computerChoice){

    result="Draw!"
}
else{
    switch(playerChoice){
        case "rock":
            result (computerChoice ==="scissors")? "YOU WIN!": "YOU LOSE"
            case "paper":
                result = (computerChoice ==="rock")? "YOU WIN!": "YOU LOSE"
                break;
                case "scissors":
                    result = (computerChoice ==="paper")? "YOU WIN!": "YOU LOSE"
                    break;
    }
}

}