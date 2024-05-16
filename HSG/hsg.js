//addeventlistner, when client clicks on the home button, there will be audio playing. Once the audio is over/ended the client will be transformed to the index page/homepage 
// Select the home button element
//I need to understand why There's too much curly brackets 
const homeButton = document.getElementById("homeBtn");

// Add event listener for click event
homeButton.addEventListener("click", function() {
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
});

