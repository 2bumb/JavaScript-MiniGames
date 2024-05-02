const startButton = document.querySelector(".startbutton");
const clickcounter = document.getElementById("clickcounter");
const averageDisplay = document.getElementById("averageDisplay");
let spacebarPressed = false; // Flag to track whether spacebar is pressed
let clickCount = 0;
let totalClicks = 0; // Variable to store total clicks
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
    clickCount = 0; // Reset click count
    totalClicks = 0; // Reset total clicks
    averageDisplay.innerText = ""; // Reset average display
    clearInterval(timerInterval); // Stop the timer
    startTimer(11); // Restart the timer
  }
  
  // Update click counter display based on current count
  clickcounter.innerText = clickCount;
}

// Function to handle spacebar key press
function spacebarPressHandler(event) {
  if (event.keyCode === 32 && !spacebarPressed) { // Check if the pressed key is spacebar and spacebar is not already pressed
    // Check if the timer is running and the timer is not 0
    if (timerInterval && parseInt(document.getElementById("timer").innerHTML.split(": ")[1]) > 0) {
      // Increment click counter
      clickcounter.innerText = parseInt(clickcounter.innerText.trim()) + 1;
      totalClicks++; // Increment total clicks
      spacebarAudio.play();
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
    // Update timer display with "Timer: " before the timeLeft value
    document.getElementById("timer").innerHTML = "Timer: " + String(timeLeft); 
    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Stop the timer when timeLeft reaches 0
      calculateAverage(); // Calculate and display average clicks per second
    }
  }
  timerInterval = setInterval(timerOn, 1000);
}

// Function to calculate and display average clicks per second
function calculateAverage() {
  const average = totalClicks / 10; // Divide total clicks by the duration of the timer (11 - 1)
  averageDisplay.innerText = "Average Clicks per Second: " + average.toFixed(2); // Display average clicks per second
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
    window.location.href = "/Index.html/index.html";
  });
}
