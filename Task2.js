let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let isRunning = false;

const display = document.getElementById("display");
const lapList = document.getElementById("laps");

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  display.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  isRunning = false;
  lapList.innerHTML = '';
}

function recordLap() {
  const li = document.createElement("li");
  li.textContent = display.textContent;
  lapList.appendChild(li);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

updateDisplay();
