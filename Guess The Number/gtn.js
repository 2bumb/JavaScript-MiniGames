// Flag to check if the random number has been generated
let randomNumberGenerated = false;

//This code displays the clients number of guess using the button and if the user submits an answer without inputing an answer, there will be a message saying "Please enter a guess"

//We are targeting guess Input which is an id inside of a form, we declare guessInput, so we can manipulate changes in the number input
function submitGuess() {
    const minNum = 1;
    const maxNum = 10;
    let answer;

    if (!randomNumberGenerated) { // Highlighted change
        answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // Highlighted change
        console.log(answer); // Highlighted change
        randomNumberGenerated = true; // Set the flag to true after generating the random number // Highlighted change

        // Display the answer in HTML
        document.querySelector('.answer').innerText = "Answer"+" "+answer; // Highlighted change
    }

    let guessInput = document.getElementById("guessInput"); //targets the number input in html 
    let guess = parseInt(guessInput.value); //targets the number value and stores number data //parseInt means we are converting our input which is a string by default into a number/integer 

    if (isNaN(guess) || guess < 1 || guess > 10) { //if "if (isNaN(guess)"we are checking if something is not a number ex: hello is a string so it will be true || is means or.  guess < 1 || guess > 100) mean the guess must be less than 1 or greater than 100
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
function play21click(){
   document.querySelector('.tilted-left').addEventListener('click', function() {
    document.getElementById('meme21Audio').play();
});
}
play21click();
