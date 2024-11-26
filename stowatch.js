// script.js
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCount = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('start-stop').textContent = "Start";
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById('start-stop').textContent = "Stop";
  }
  isRunning = !isRunning;
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  displayTime();
}

function displayTime() {
  let formattedHours = (hours < 10) ? `0${hours}` : hours;
  let formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes;
  let formattedSeconds = (seconds < 10) ? `0${seconds}` : seconds;
  document.getElementById('time-display').textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function lap() {
  if (isRunning) {
    lapCount++;
    const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    const lapList = document.getElementById('lap-times');
    const lapItem = document.createElement('p');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);

    // Show the lap times container when a lap is added
    lapList.style.display = 'block';
  }
}

function padZero(time) {
  return time < 10 ? `0${time}` : time;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  lapCount = 0;
  displayTime();
  document.getElementById('start-stop').textContent = "Start";
  document.getElementById('lap-times').innerHTML = '';  // Clear lap times
  document.getElementById('lap-times').style.display = 'none'; // Hide lap times section
}
