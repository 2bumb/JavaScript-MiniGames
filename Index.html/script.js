//When user clicks on the cards audio will be played for rock paper scissors
document.getElementById("rpsLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("homecardAudio").play(); // Play audio
    setTimeout(() => window.location.href = this.getAttribute("href"), 500); // Navigate to the linked page after a delay
});


//When user clicks on the cards audio will be played for Guess the number
document.getElementById("gtnLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("homecardAudio").play(); // Play audio
    setTimeout(() => window.location.href = this.getAttribute("href"), 500); // Navigate to the linked page after a delay
});



document.getElementById("stbLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("homecardAudio").play(); // Play audio
    setTimeout(() => window.location.href = this.getAttribute("href"), 500); // Navigate to the linked page after a delay
});

