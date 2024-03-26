const minNum = 1;
const maxNum = 100;
// understand how math we're using
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


console.log(answer);
//when the number 21 is hovered, the audio with the id "meme21audio" wil be played
function play21hover(){
   document.querySelector('.tilted-left').addEventListener('mouseover', function() {
    document.getElementById('meme21Audio').play();
});
}
play21hover();
