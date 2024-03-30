// const minNum = 1;
// const maxNum = 100;
// understand how math we're using

// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running;

// while(running){
//         guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//         guess= Number(guess);
// console.log(typeof guess, guess);
//     running=false;


//     guess = Number(guess);
//     if(isNaN(guess)){

        
//     }
// }

// console.log(answer);


//This code displays the clients number of guess using the button 
var userGuesses = [];

function submitGuess() {
    console.log("Submit button clicked");
    var guess = document.getElementById("guessInput").value;
    console.log("Submitted guess:", guess);
   
    // Add the guess to the array of guesses
    userGuesses.push(guess);
    
    // Update the content of the div element with all the guesses
    document.getElementById("previousguest").innerText = "Previous guesses: " + userGuesses.join(", ");
   
    return guess;
}










//when the number 21 is hovered, the audio with the id "meme21audio" wil be played
function play21hover(){
   document.querySelector('.tilted-left').addEventListener('mouseover', function() {
    document.getElementById('meme21Audio').play();
});
}
play21hover();
