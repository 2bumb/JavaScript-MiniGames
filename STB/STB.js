const startButton = document.querySelector(".startbutton");
const clickcounter = document.getElementById("clickcounter");
let spacebarPressed = false; // Flag to track whether spacebar is pressed

// Function to handle mouse click on the button
function mouseClickHandler() {
  // Toggle button text between "Start" and "Retry" when clicked with the mouse
  if (startButton.textContent === "Start") {
    startButton.innerHTML = 'Retry <i class="fas fa-repeat"></i>';

    startButton.style.backgroundColor = "rgb(68, 196, 255)"; // Set background color for Retry
  } else {
    startButton.textContent = "Start";
    startButton.style.backgroundColor = ""; // Remove background color for Start
    clickcounter.innerText = "0";
  }
}

// Function to handle spacebar key press
function spacebarPressHandler(event) {
  if (event.keyCode === 32 && !spacebarPressed) { // Check if the pressed key is spacebar and spacebar is not already pressed
    // Change button text to "Retry" only once
    startButton.innerHTML = 'Retry <i class="fas fa-repeat"></i>';

    startButton.style.backgroundColor = "rgb(68, 196, 255)"; // Set background color for Retry
    spacebarPressed = true; // Set the flag to true to indicate spacebar is pressed
    // Prevent default spacebar behavior (scrolling the page)
    event.preventDefault();
    // Increment click counter
    let currentClickCount = parseInt(clickcounter.innerText.trim());
    clickcounter.innerText = currentClickCount + 1;
  }
}

// Function to handle spacebar key release
function spacebarReleaseHandler(event) {
  if (event.keyCode === 32) { // Check if the released key is spacebar
    spacebarPressed = false; // Reset the flag when spacebar is released
  }
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

 
  homecardAudio.addEventListener('ended', function() {// ('ended', function() is a addEventListener which needs a event and also a function to run
    window.location.href = "/Index.FrontPage/index.html";
  });

   
}

  
  // function startclick() {
 
  //   startButton.style.backgroundColor = "rgb(68, 196, 255)";
 
  //   if (startButton.textContent.trim() === "Start") {
  //     startButton.textContent = "Retry";
  //   } else {
  //     startButton.textContent = "Start";
  //     startButton.style.backgroundColor = "";
  //   }
  // }