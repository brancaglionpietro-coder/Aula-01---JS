// Seleção de elementos
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startBtn = document.getElementById("startBtn");
const scoreBtn = document.getElementById("scoreBtn");
const menu = document.getElementById("menu");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

// Configurações
const gridSize = 20;

// Estado do jogo
let snake;
let direction;
let food;
let score;
let gameInterval;

// ==========================
// INICIAR JOGO
// ==========================
startBtn.addEventListener("click", () => {
    menu.style.display = "none";
    gameArea.style.display = "flex";
    startGame();
});

scoreBtn.addEventListener("click", () => {
    alert("Sistema de pontuação em breve!");
});

// ==========================
// FUNÇÕES DO JOGO
// ==========================
function startGame() {
    resetGame();
    gameInterval = setInterval(gameLoop, 120);
}

function resetGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    food = generateFood();
    score = 0;
    scoreText.innerText = "Pontuação: 0";
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)),
        y: Math.floor(Math.random() * (canvas.height / gridSize))
    };
}

function gameLoop() {
    update();
    draw();
}

function update() {
    const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };

    // Colisão com parede
    if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= canvas.width / gridSize ||
        head.y >= canvas.height / gridSize
    ) {
        return gameOver();
    }

    // Colisão com o corpo
    for (let part of snake) {
        if (part.x === head.x && part.y === head.y) {
            return gameOver();
        }
    }

    snake.unshift(head);

    // Comer comida
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreText.innerText = "Pontuação: " + score;
        food = generateFood();
    } else {
        snake.pop();
    }
}

function draw() {
    // Fundo
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cobra
    ctx.fillStyle = "#00ff88";
    snake.forEach(part => {
        ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
    });

    // Comida
    ctx.fillStyle = "#ff4444";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

// ==========================
// GAME OVER
// ==========================
function gameOver() {
    clearInterval(gameInterval);
    alert("Game Over! Pontuação: " + score);

    // Volta para o menu
    gameArea.style.display = "none";
    menu.style.display = "flex";
}

// ==========================
// CONTROLES
// ==========================
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});