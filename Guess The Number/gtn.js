

//This code displays the clients number of guess using the button and if the user submits an answer without inputing an answer, there will be a message saying "Please enter a guess"
function submitGuess() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;

    if (!guess) {
        guessInput.setCustomValidity("Please enter a guess.");
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
            previousGuesses.innerText = guess;
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
