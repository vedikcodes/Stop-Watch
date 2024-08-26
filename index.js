// index.js

let timeInterval;
let timerValue = 0;
let running = false;
let lapTimes = [];

function startTimer() {
    if (!running) {
        running = true;
        timeInterval = setInterval(updateTimer, 10);
    }
}

function pauseTimer() {
    if (running) {
        running = false;
        clearInterval(timeInterval);
    }
}

function resetTimer() {
    pauseTimer();
    timerValue = 0;
    updateDisplay();
    lapTimes = []; // Clear lap times on reset
    updateLapList();
}

function updateTimer() {
    timerValue++;
    updateDisplay();
}

function updateDisplay() {
    const hours = Math.floor(timerValue / 360000);
    const minutes = Math.floor((timerValue % 360000) / 6000);
    const seconds = Math.floor((timerValue % 6000) / 100);
    const hundredths = timerValue % 100;

    const formattedTime = 
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') + ":" +
        String(hundredths).padStart(2, '0');

    document.getElementById("timer").textContent = formattedTime;
}

function recordLap() {
    if (running) {
        if (lapTimes.length >= 10) {
            lapTimes.shift(); // Remove the oldest time
        }
        lapTimes.push(document.getElementById("timer").textContent);
        updateLapList();
    }
}

function updateLapList() {
    const lapTableBody = document.getElementById('lapTableBody');
    lapTableBody.innerHTML = lapTimes.map((time, index) => 
        `<tr><td>${index + 1}</td><td>${time}</td></tr>`).join('');
}
