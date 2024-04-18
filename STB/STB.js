


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
            window.location.href = "/STB/STB.html";
        });
    } else {
        console.log("Audio element not found!");
    }
}