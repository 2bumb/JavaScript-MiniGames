

function homeclick() { //when homeclick is clicked once the audio is over the user will  be placed to a new href


    var homecardAudio = document.getElementById("homecardAudio");
    
    // Play the audio
    homecardAudio.play();
  
   
    homecardAudio.addEventListener('ended', function() {// ('ended', function() is a addEventListener which needs a event and also a function to run
      window.location.href = "/Index.FrontPage/index.html";
    });
  
     
  }