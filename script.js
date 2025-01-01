document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.querySelector('.game-board');
    const scoreDisplay = document.getElementById('score');
    const timeLeftDisplay = document.getElementById('time-left');
    const startButton = document.getElementById('start-btn');

    let score = 0;
    let timeLeft = 30;
    let gameInterval;

    // Create game holes
    function createHoles() {
        for (let i = 0; i < 9; i++) {
            const hole = document.createElement('div');
            hole.classList.add('hole');
            const mole = document.createElement('div');
            mole.classList.add('mole');
            hole.appendChild(mole);
            gameBoard.appendChild(hole);
        }
    }

    function startGame() {
        score = 0;
        timeLeft = 30;
        scoreDisplay.textContent = score;
        timeLeftDisplay.textContent = timeLeft;
        clearInterval(gameInterval);
        gameInterval = setInterval(playGame, 1000);
    }

    function playGame() {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            alert(`Game Over! Your final score is ${score}`);
        }

        // Randomly display mole
        const holes = document.querySelectorAll('.hole');
        holes.forEach(hole => hole.classList.remove('active'));

        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        randomHole.classList.add('active');

        // Add click listener for mole
        const mole = randomHole.querySelector('.mole');
        mole.onclick = () => {
            if (randomHole.classList.contains('active')) {
                score++;
                scoreDisplay.textContent = score;
                randomHole.classList.remove('active');
            }
        };
    }

    createHoles();
    startButton.addEventListener('click', startGame);
});
