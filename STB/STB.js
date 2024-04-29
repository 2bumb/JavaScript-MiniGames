const startButton = document.querySelector(".startbutton");
const clickcounter = document.getElementById("clickcounter");
let spacebarPressed = false; // Flag to track whether spacebar is pressed
let clickCount = 0;
let timerInterval; // Variable to store the timer interval

// Function to handle mouse click on the button
function mouseClickHandler() {
  clickCount++; // Increment the click count on each click

  // Check if the current text is "Start"
  if (startButton.textContent.trim() === "Start") {
    // If the text is "Start", change it to "Retry"
    startButton.innerHTML = 'Retry <i class="fas fa-repeat"></i>';
    startButton.style.backgroundColor = "rgb(68, 196, 255)"; // Set background color for Retry
  } else {
    // If the text is not "Start", change it back to "Start"
    startButton.innerHTML = '<span id="startrefreshdisplay"><i id="playIcon" class="fa-solid fa-play" style="color: #ffffff;"></i> Start</span>';
    startButton.style.backgroundColor = ""; // Remove background color for Start
    clickcounter.innerText = "0";
    clickCount = 0; // Reset click count
    clearInterval(timerInterval); // Stop the timer
    startTimer(11); // Restart the timer
  }
}

// Function to handle spacebar key press
// Function to handle spacebar key press
function spacebarPressHandler(event) {
  if (event.keyCode === 32 && !spacebarPressed) { // Check if the pressed key is spacebar and spacebar is not already pressed
    // Check if the timer is running and the timer is not 0
    if (timerInterval && parseInt(document.getElementById("timer").innerHTML) > 0) {
      // Increment click counter
      let currentClickCount = parseInt(clickcounter.innerText.trim());
      clickcounter.innerText = currentClickCount + 1;
    }
    spacebarPressed = true; // Set the flag to true to indicate spacebar is pressed
    // Change button text to "Retry" only once
    startButton.innerHTML = 'Retry <i class="fas fa-repeat"></i>';
    startButton.style.backgroundColor = "rgb(68, 196, 255)"; // Set background color for Retry
    // Prevent default spacebar behavior (scrolling the page)
    event.preventDefault();
    // Start the timer if it hasn't started already
    if (!timerInterval) {
      startTimer(11);
    }
  }
}


// Function to handle spacebar key release
function spacebarReleaseHandler(event) {
  if (event.keyCode === 32) { // Check if the released key is spacebar
    spacebarPressed = false; // Reset the flag when spacebar is released
  }
}

// Function to start the timer
function startTimer(timeLeft) {
  function timerOn() {
    timeLeft--;
    document.getElementById("timer").innerHTML = String(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Stop the timer when timeLeft reaches 0
    }
  }
  timerInterval = setInterval(timerOn, 1000);
}

// Add event listener for mouse click on the button
startButton.addEventListener('click', mouseClickHandler);

// Add event listener for spacebar key press
document.addEventListener('keydown', spacebarPressHandler);    

// Add event listener for spacebar key release
document.addEventListener('keyup', spacebarReleaseHandler);

function homeclick() { //when homeclick is clicked once the audio is over the user will  be placed to a new href
  var homecardAudio = document.getElementById("homecardAudio");
  // Play the audio
  homecardAudio.play();
  homecardAudio.addEventListener('ended', function() { // ('ended', function() is a addEventListener which needs a event and also a function to run
    window.location.href = "/Index.FrontPage/index.html";
  });
}
   