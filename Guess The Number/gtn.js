// Flag to check if the random number has been generated
let randomNumberGenerated = true; //when submit button is clicked and ther clicent puts 1 number between 1-10, js will generate random number the same time when the user picks a number and submits it
let answer; // declaring answer as a undefined data type allows the varaible to be the genrated answer's value and provides flexbility 

//This code displays the clients number of guess using the button and if the user submits an answer without inputing an answer, there will be a message saying "Please enter a guess"

//We are targeting guess Input which is an id inside of a form, we declare guessInput, so we can manipulate changes in the number input
//delve more about how the code operates 
function submitGuess() {
    const minNum = 1;
    const maxNum = 10;
    const warmRange = 1;
    if (randomNumberGenerated) {
        answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; //
        console.log(answer);
        randomNumberGenerated = false;// this turns off or flag the function meaning the code will be generated only one time(this is a good thing because now the client is able to play the game without false, the game will keep generating a random number)
    }

    let guessInput = document.getElementById("guessInput");
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        guessInput.setCustomValidity("Please enter a number between 1 and 10.");
        guessInput.reportValidity();
        document.getElementById('negativeaudio').play();
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
            document.getElementById('winnerAudio').play();
        } else if (Math.abs(guess - answer) <= warmRange) { 
            document.querySelector('.answer').innerText = "TSS!! You're getting warm!"; // if the guess is close to the answer just for a reminder remeber putting the condition near the top will be priortize that's why the message of the code wasnt working correctly 
            document.querySelector('.answer').style.fontSize = "2vmin";
            document.getElementById('TSaudio').play();
        }else if (guess < answer) {
            document.querySelector('.answer').innerText = "BRR!! The number is too low"; //if the user guess is lower than answer, 
            document.querySelector('.answer').style.fontSize = "2vmin";
            document.getElementById('BrrColdaudio').play();
        } else if (guess > answer) {
            document.querySelector('.answer').innerText = "BRR!! The number is too high";
            document.querySelector('.answer').style.fontSize = "2vmin";
            document.getElementById('BrrColdaudio').play();
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





function homeclick() {
    console.log("Home button clicked!");
    var homecardAudio = document.getElementById("homecardAudio");

    // Check if the audio element exists
    if (homecardAudio) {
        console.log("Audio element found:", homecardAudio);
        
        // Play the audio
        homecardAudio.play();
        
        // When the audio ends, navigate to the new page
        homecardAudio.addEventListener('ended', function() {
            console.log("Audio ended, navigating to the new page...");
            window.location.href = "/Index.html/index.html";
        });
    } else {
        console.log("Audio element not found!");
    }
}
//this will reset the game 
// Function to handle button click
function refreshClick() {
    // Add the spin-animation class to the button
    document.getElementById("refreshButton").classList.add("spin-animation");
    
    // Reset the randomNumberGenerated flag
    randomNumberGenerated = true; //the refresh button will now generate a new number
    
    // Clear the previous guesses display
    document.getElementById("previousguest").innerText = "";// the previous guess will disappear and be blank 
    
    // Clear the answer display
    document.querySelector('.answer').innerText = ""; // the hint or winning display will be blank an disappear
    
    // Clear the guess input field
    document.getElementById("guessInput").value = "";// the user input or the searchbar will get rid of the remaining number inside
    
    // Remove the spin-animation class after the animation completes
    setTimeout(function() {
        document.getElementById("refreshButton").classList.remove("spin-animation");
    }, 400); // 1000ms is the duration of your animation
    document.getElementById('refreshAudio').play();
    
}


// function homeclick() {
//     console.log("Home button clicked!");
//     var homecard = document.getElementById("homecardAudio");
            
 
//     homecard.play();
//     window.location.href = "/Index.FrontPage/index.html";
// }




 
// let guessList = ["John","Tim","Joe"];
// let guestName = prompt("what is your name?");


// guessList.includes(guestName);

 
 