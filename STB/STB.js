const startButton = document.querySelector(".startbutton");
const playIcon = document.getElementById("playIcon");
const startrefreshdisplay = document.getElementById("startrefreshdisplay");
const clickcounter = document.getElementById("clickcounter");
const messages = ['Start', 'Retry'];
let spacebarPressed = false; // Flag to track whether spacebar is pressed

// Function to handle start button click
function startclick() {
  // Change button background color to baby blue
  startButton.style.backgroundColor = "rgb(68, 196, 255)";
  // Update button text
 
  startrefreshdisplay.innerHTML = '<i class="fa-solid fa-play" style="color: white;"></i> Retry';
}

// Function to handle spacebar keydown event
function spacebarHandler(event) {
  if (event.keyCode === 32 && !spacebarPressed) { // Check if the pressed key is spacebar and spacebar is not already pressed
    // Simulate a click event on the start button
    startButton.click();
    // Prevent default spacebar behavior (scrolling the page)
    event.preventDefault();
    // Increment click counter
    let currentClickCount = parseInt(clickcounter.innerText.trim());
    clickcounter.innerText = currentClickCount + 1;
    spacebarPressed = true; // Set the flag to true to indicate spacebar is pressed
  }
}

// Function to handle spacebar keyup event
function spacebarUpHandler(event) {
  if (event.keyCode === 32) { // Check if the released key is spacebar
    spacebarPressed = false; // Reset the flag when spacebar is released
  }

}

// Add event listener for spacebar keydown event
document.addEventListener('keydown', spacebarHandler);

// Add event listener for spacebar keyup event
document.addEventListener('keyup', spacebarUpHandler);

// Add event listener for start button click
startButton.addEventListener('click', startclick);


//Timer
 const timer = document.getElementById 
 let tiemr = null;
 






 //home button 

function homeclick() { //when homeclick is clicked once the audio is over the user will  be placed to a new href


    var homecardAudio = document.getElementById("homecardAudio");
    
    // Play the audio
    homecardAudio.play();
  
   
    homecardAudio.addEventListener('ended', function() {// ('ended', function() is a addEventListener which needs a event and also a function to run
      window.location.href = "/Index.FrontPage/index.html";
    });
  
     
  }