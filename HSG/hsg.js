const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("scoretext");
const resetBtn = document.querySelector("resetBtn");
const gameWidth = gameBoard.width;
const gameHeight =gameBoard.height;
const boardBackground ="green";
const snakeColor="lightgreen";
const snakeBorder = "black";
const foodColor= "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX=null;
let foodY=null;
let scoere = 0;//maybe null
let snake = 

[{x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}]

    window.addEventListener("keydown", changeDirection);
    resetBtn.addEventListener("click", resetGame);

gameStart();
function gameStart(){};

function nextTick(){};

function clearBoard(){};

function createFood(){
function randomFood(min,max){
    const randNum = Math.round((Math.random() * (max-min) + min))
    return randNum;
}
foodX = randomFood(0, gameWidth-unitSize);
console.log(foodX);

};

function drawFood(){};

function moveSnake(){};

function drawSnake(){};

function changeDirection(){};

function checkGameOver(){};

function displayGameOver(){};

function resetGame(){};




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

