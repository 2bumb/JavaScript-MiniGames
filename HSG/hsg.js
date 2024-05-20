const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoretext");
const highScoreText = document.querySelector("#highScoretext");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "green";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {
    running = true;
    scoreText.textContent = score;
    highScoreText.textContent = highScore;
    clearBoard();
    createFood();
    drawFood();
    drawSnake();
    nextTick();
}

function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 100);
    } else {
        displayGameOver();
        negativeaudio.play();
    }
}

function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);

    ctx.strokeStyle = "gray";
    ctx.lineWidth = 0.5;

    for (let x = 0; x <= gameWidth; x += unitSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, gameHeight);
        ctx.stroke();
    }

    for (let y = 0; y <= gameHeight; y += unitSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(gameWidth, y);
        ctx.stroke();
    }
}

function createFood() {
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    
    let foodOnSnake;
    do {
        foodOnSnake = false;
        foodX = randomFood(0, gameWidth - unitSize);
        foodY = randomFood(0, gameHeight - unitSize);

        snake.forEach(part => {
            if (part.x === foodX && part.y === foodY) {
                foodOnSnake = true;
               
            }
        });
    } while (foodOnSnake);
}

function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
    const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
    snake.unshift(head);

    if (snake[0].x === foodX && snake[0].y === foodY) {
        score += 1;
        scoreText.textContent = score;
        eatAudio.play();
        createFood();
    } else {
        snake.pop();
    }
}

function drawSnake() {
    snake.forEach((snakePart, index) => {
        ctx.fillStyle = snakeColor;
        ctx.strokestyle = snakeBorder;
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);

        if (index === 0) { // Draw eyes and tongue on the head
            drawEyesAndTongue(snakePart.x, snakePart.y);
        }
    });
}

function drawEyesAndTongue(x, y) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x + unitSize * 0.25, y + unitSize * 0.25, unitSize * 0.1, 0, 2 * Math.PI);
    ctx.arc(x + unitSize * 0.75, y + unitSize * 0.25, unitSize * 0.1, 0, 2 * Math.PI);
    ctx.fill();

    if (Math.random() < 0.1) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x + unitSize * 0.5, y + unitSize * 0.5);
        switch (true) {
            case yVelocity === -unitSize:
                ctx.lineTo(x + unitSize * 0.5, y);
                break;
            case yVelocity === unitSize:
                ctx.lineTo(x + unitSize * 0.5, y + unitSize);
                break;
            case xVelocity === -unitSize:
                ctx.lineTo(x, y + unitSize * 0.5);
                break;
            case xVelocity === unitSize:
                ctx.lineTo(x + unitSize, y + unitSize * 0.5);
                break;
        }
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

function changeDirection(event) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = yVelocity === -unitSize;
    const goingDown = yVelocity === unitSize;
    const goingRight = xVelocity === unitSize;
    const goingLeft = xVelocity === -unitSize;

    switch (true) {
        case (keyPressed === LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (keyPressed === UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (keyPressed === RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case (keyPressed === DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
}

function checkGameOver() {
    if (snake[0].x < 0 || snake[0].x >= gameWidth || snake[0].y < 0 || snake[0].y >= gameHeight) {
        running = false;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            running = false;
        }
    }

    if (!running) {
        updateHighScore();
    }
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        highScoreText.textContent = highScore;
    }
}
function displayGameOver() {
    ctx.font = "30px 'Press Start 2P'";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);

    // Show the Play Again button
    const playAgainBtn = document.getElementById("PlayAgain");
    playAgainBtn.style.display = "block";
}
 
function resetGame() {
    animateReset(); // Trigger the animation
    hidePlayAgainButton(); // Hide the Play Again button
 

}
 // PLay AGAIN BUTTON
 const playAgainBtn = document.getElementById("PlayAgain");

 playAgainBtn.addEventListener("click", function() {
     hidePlayAgainButton(); // Hide the Play Again button
     gameReset(); // Reset the game without resetting the high score
 });
 
 function hidePlayAgainButton() {
     playAgainBtn.style.display = "none"; // Hide the Play Again button
 }
 
 function gameReset() {
     // Reset the game state or variables here
     // Then start the game again
     // This function should contain the logic to reset the game without resetting the high score
     score = 0; // Reset score
     running = true; // Set running to true
     snake = [ // Reset snake position
         { x: unitSize * 4, y: 0 },
         { x: unitSize * 3, y: 0 },
         { x: unitSize * 2, y: 0 },
         { x: unitSize, y: 0 },
         { x: 0, y: 0 }
     ];
     createFood(); // Create new food
     scoreText.textContent = score; // Update score display
     clearBoard(); // Clear the game board
     drawFood(); // Draw new food
     drawSnake(); // Draw new snake
     nextTick(); // Start the game loop
 }
 
 function checkGameOver() {
     if (snake[0].x < 0 || snake[0].x >= gameWidth || snake[0].y < 0 || snake[0].y >= gameHeight) {
         running = false;
         showPlayAgainButton(); // Show the Play Again button
     }
 
     for (let i = 1; i < snake.length; i++) {
         if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
             running = false;
             showPlayAgainButton(); // Show the Play Again button
         }
     }
 
     if (!running) {
         updateHighScore();
     }
 }
 
 function showPlayAgainButton() {
     playAgainBtn.style.display = "block"; // Show the Play Again button
 }
 

//
function animateReset() {
    const resetIcon = resetBtn.querySelector("i");
    resetIcon.classList.add("spin-animation");

    // Play the refresh audio
    const refreshAudio = document.getElementById("refreshAudio");
    refreshAudio.play();

    setTimeout(() => {
        resetIcon.classList.remove("spin-animation");
        setTimeout(() => {
            doResetGame();
        }, 500);
    }, 500);
}

function doResetGame() {
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 }
    ];
    localStorage.setItem("highScore", 0);
    highScore = 0;
    highScoreText.textContent = highScore;
    gameStart();
}

const homeButton = document.getElementById("homeBtn");

homeButton.addEventListener("click", function () {
    const homecardAudio = document.getElementById("homecardAudio");

    if (homecardAudio) {
        homecardAudio.play();
        homecardAudio.addEventListener('ended', function () {
            window.location.href = "/Index.html/index.html";
        });
    }
});
