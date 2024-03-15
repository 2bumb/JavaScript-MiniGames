
// declaring the variables 

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");

const computerDisplay = document.getElementById("computerDisplay");

const gameresult = document.getElementById("gameResult");



// keep in mind javascript is cap sensitive

function playgame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  console.log(computerChoice);
};