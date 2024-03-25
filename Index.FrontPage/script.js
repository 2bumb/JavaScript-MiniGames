


// This function creates a sound when user clicks on the cards


document.addEventListener("DOMContentLoaded", function() {
    var rpsLink = document.getElementById("rpsLink");
    var audio = document.getElementById("homecardAudio");
    
    // Adding click event listener to the Rock Paper Scissors link
    rpsLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Play audio
        audio.play();
        
        // When the audio ends, navigate to the linked page
        audio.addEventListener('ended', function() {
            window.location.href = rpsLink.getAttribute("href");
        });
    });
});
