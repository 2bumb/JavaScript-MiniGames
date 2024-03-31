

//This code displays the clients number of guess using the button and if the user submits an answer without inputing an answer, there will be a message saying "Please enter a guess"

//We are targetting guess Input which is a id inside of a form,  we delcaring guess, so we can manipulate changes in the number input
function submitGuess() {
    let guessInput = document.getElementById("guessInput"); //targets the number input in html 
    let guess = parseInt(guessInput.value); //targets the number value and stores number data //parseInt means we are converting our input which is a string by default into a number/integer 

    if (isNaN(guess) || guess < 1 || guess > 100) { //if "if (isNaN(guess)"we are checking if soemthing is not a number ex:hello is a string so it will be true || is means or.  guess < 1 || guess > 100) mean the guess must be less than 1 or greater than 100
        guessInput.setCustomValidity("Please enter a number between 1 and 100.");
        guessInput.reportValidity();
    } else {
        // Your logic for submitting the guess
        console.log("Submitted guess:", guess);
        
        // Add the guess to the list of previous guesses
        var previousGuesses = document.getElementById("previousguest");
        var currentGuesses = previousGuesses.innerText;
        if (currentGuesses) {
            previousGuesses.innerText = currentGuesses + ", " + guess;
        } else {
            previousGuesses.innerText ="Previous Guesses:" + " " + guess;
        }
        
        // Clear the input field after submitting the guess
        guessInput.value = "";
    }
}






//when the number 21 is hovered, the audio with the id "meme21audio" wil be played
function play21hover(){
   document.querySelector('.tilted-left').addEventListener('mouseover', function() {
    document.getElementById('meme21Audio').play();
});
}
play21hover();
