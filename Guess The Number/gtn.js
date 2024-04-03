// Flag to check if the random number has been generated
let randomNumberGenerated = false;
let answer;

//This code displays the clients number of guess using the button and if the user submits an answer without inputing an answer, there will be a message saying "Please enter a guess"

//We are targeting guess Input which is an id inside of a form, we declare guessInput, so we can manipulate changes in the number input
function submitGuess() {
    const minNum = 1;
    const maxNum = 10;

    if (!randomNumberGenerated) {
        answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        console.log(answer);
        randomNumberGenerated = true;
        document.querySelector('.answer').innerText = "Answer";
    }

    let guessInput = document.getElementById("guessInput");
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        guessInput.setCustomValidity("Please enter a number between 1 and 10.");
        guessInput.reportValidity();
    } else {
        console.log("Submitted guess:", guess);

        var previousGuesses = document.getElementById("previousguest");
        var currentGuesses = previousGuesses.innerText;
        if (currentGuesses) {
            previousGuesses.innerText = currentGuesses + ", " + guess;
        } else {
            previousGuesses.innerText = "Previous Guesses:" + " " + guess;
        }

        guessInput.value = "";

        // Check if the user's guess matches the randomly generated number
        if (guess === answer) {
            document.querySelector('.answer').innerText = "You win!!"; //if user guess is the same as the answer, the player wins!!
            document.querySelector('.answer').style.fontSize = "4.5vmin";
        } else if (guess < answer) {
            document.querySelector('.answer').innerText = "The number is too low"; //if the user guess is lower than answer, 
            document.querySelector('.answer').style.fontSize = "2vmin";
        } else if (guess > answer) {
            document.querySelector('.answer').innerText = "The number is too high";
            document.querySelector('.answer').style.fontSize = "2vmin";
        }
    }        
}




//when the number 21 is hovered, the audio with the id "meme21audio" wil be played
function play21click(){
   document.querySelector('.tilted-left').addEventListener('click', function() {
    document.getElementById('meme21Audio').play();
});
}
play21click();
