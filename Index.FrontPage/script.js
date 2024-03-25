document.getElementById("rpsLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("homecardAudio").play(); // Play audio
    setTimeout(() => window.location.href = this.getAttribute("href"), 500); // Navigate to the linked page after a delay
});
