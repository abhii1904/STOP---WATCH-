let timer; // To store the interval timer
let seconds = 0, minutes = 0, hours = 0;
let displaySeconds = 0, displayMinutes = 0, displayHours = 0;
let isRunning = false;
let isPaused = false;

function startStop() {
    if (!isRunning) {
        startTimer();
        document.getElementById("startStopButton").textContent = "Stop";
        document.getElementById("pauseResumeButton").disabled = false;
        isRunning = true;
    } else {
        pauseTimer();
        document.getElementById("startStopButton").textContent = "Start";
        isRunning = false;
    }
}

function pauseResume() {
    if (!isPaused) {
        pauseTimer();
        document.getElementById("pauseResumeButton").textContent = "Resume";
    } else {
        resumeTimer();
        document.getElementById("pauseResumeButton").textContent = "Pause";
    }
    isPaused = !isPaused;
}

function reset() {
    stopTimer();
    seconds = 0; minutes = 0; hours = 0;
    displayTime();
    document.getElementById("startStopButton").textContent = "Start";
    document.getElementById("pauseResumeButton").textContent = "Pause";
    document.getElementById("pauseResumeButton").disabled = true;
    isRunning = false;
    isPaused = false;
}

function startTimer() {
    timer = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        displayTime();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resumeTimer() {
    startTimer();
}

function stopTimer() {
    clearInterval(timer);
}

function displayTime() {
    displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    displayHours = hours < 10 ? "0" + hours : hours;

    document.getElementById("display").textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
