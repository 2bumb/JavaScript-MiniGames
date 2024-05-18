const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoretext");
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
createFood();

function gameStart() {
    running = true;
    scoreText.textContent = score;
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
    }
}

function clearBoard() {
    // Draw the background color
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);

    // Draw the grid
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 0.5;

    // Draw vertical grid lines
    for (let x = 0; x <= gameWidth; x += unitSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, gameHeight);
        ctx.stroke();
    }

    // Draw horizontal grid lines
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
    
    // Ensure food does not overlap with the snake
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
    
    console.log(foodX, foodY);
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
        createFood();
        eatAudio.play();
    } else {
        snake.pop();
    }
}

function drawSnake() {
    snake.forEach(snakePart => {
        ctx.fillStyle = snakeColor;
        ctx.strokestyle = snakeBorder;
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    });
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
}
function displayGameOver() {
    ctx.font = "30px 'Press Start 2P'";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    negativeaudio.play();
    running = false;
}

function resetGame() {
    animateReset(); // Trigger the animation
}
// This will  refresh the game, before the  game refresh, the animation of the icon will be played with audio, when those two are over the refresh will activate
function animateReset() {
    const resetIcon = resetBtn.querySelector("i");
    resetIcon.classList.add("spin-animation");

    // Play the refresh audio
    refreshAudio.play();

    // Wait for the animation and audio to finish
    setTimeout(() => {
        // Remove the animation class
        resetIcon.classList.remove("spin-animation");

        // Wait for the audio to finish playing
        setTimeout(() => {
            // Call the reset function after both animation and audio have finished
            doResetGame();
        }, 500); // Adjust the time to match the duration of your audio
    }, 500); // Adjust the time to match the duration of your animation
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
    gameStart();
}


//snake sticks out it's tongue out 
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
    // Draw eyes
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x + unitSize * 0.25, y + unitSize * 0.25, unitSize * 0.1, 0, 2 * Math.PI); // Left eye
    ctx.arc(x + unitSize * 0.75, y + unitSize * 0.25, unitSize * 0.1, 0, 2 * Math.PI); // Right eye
    ctx.fill();

    // Randomly draw tongue
    if (Math.random() < 0.1) { // 10% chance to stick out tongue
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x + unitSize * 0.5, y + unitSize * 0.5);
        switch (true) {
            case yVelocity === -unitSize: // Moving up
                ctx.lineTo(x + unitSize * 0.5, y);
                break;
            case yVelocity === unitSize: // Moving down
                ctx.lineTo(x + unitSize * 0.5, y + unitSize);
                break;
            case xVelocity === -unitSize: // Moving left
                ctx.lineTo(x, y + unitSize * 0.5);
                break;
            case xVelocity === unitSize: // Moving right
                ctx.lineTo(x + unitSize, y + unitSize * 0.5);
                break;
                
        }
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}


//audio plays when clients clicks on the home button
const homeButton = document.getElementById("homeBtn");

homeButton.addEventListener("click", function () {
    console.log("Home button clicked!");
    var homecardAudio = document.getElementById("homecardAudio");

    if (homecardAudio) {
        console.log("Audio element found:", homecardAudio);
        homecardAudio.play();
        homecardAudio.addEventListener('ended', function () {
            console.log("Audio ended, navigating to the new page...");
            window.location.href = "/Index.html/index.html";
        });
    } else {
        console.log("Audio element not found!");
    }
});
