let time = 25 * 60;
let timerInterval;
let isRunning = false;

function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer").textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (time > 0) {
                time--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                alert("Tempo acabou!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    time = 25 * 60;
    updateTimerDisplay();
}

function setTimer(minutes) {
    clearInterval(timerInterval);
    isRunning = false;
    time = minutes * 60;
    updateTimerDisplay();
}

updateTimerDisplay();
