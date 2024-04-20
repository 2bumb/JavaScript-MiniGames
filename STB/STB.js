const startrefreshdisplay = document.getElementById("startrefreshdisplay");
const fasolidfaplay = document.getElementByClassName("fasolidfaplay");


function startclick() {
  const startButton = document.querySelector(".startbutton");
  const playIcon = document.getElementById("playIcon");

  // Change button background color to baby blue
  startButton.style.backgroundColor = "rgb(68, 196, 255)";

 ;

  // Update button text
  document.getElementById("startrefreshdisplay").textContent = "32b";
  document.getElementById("startrefreshdisplay").innerHTML = '<i class="fa-solid fa-play" style="color: white;"></i> 32b';
}

 










 //home button 

function homeclick() { //when homeclick is clicked once the audio is over the user will  be placed to a new href


    var homecardAudio = document.getElementById("homecardAudio");
    
    // Play the audio
    homecardAudio.play();
  
   
    homecardAudio.addEventListener('ended', function() {// ('ended', function() is a addEventListener which needs a event and also a function to run
      window.location.href = "/Index.FrontPage/index.html";
    });
  
     
  }