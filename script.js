const startBtn = document.querySelector(".iniciar");
const pauseBtn = document.querySelector(".pausar");
const continuetBtn = document.querySelector(".continuar");
const resetBtn = document.querySelector(".resetar");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const millisecondsEl = document.querySelector(".milleseconds");


let interval;
let minutes = 0;
let seconds = 0;
let milleseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
continuetBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetarTime);

function startTime() {
  interval = setInterval(() => {
    if (!isPaused) {
      milleseconds += 10;

      if (milleseconds === 1000) {
        seconds++;
        milleseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilleseconds(milleseconds);
    }
  }, 10);
  startBtn.style.display = 'none'
  pauseBtn.style.display = 'block'
}

function pauseTime() {
  isPaused = true;
  pauseBtn.style.display = 'none'
  continuetBtn.style.display = 'block'
}

function resumeTimer() {
  isPaused = false;

  pauseBtn.style.display = 'block'
  continuetBtn.style.display = 'none'
}

function resetarTime() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milleseconds = 0;

  minutesEl.textContent = '00';
  secondsEl.textContent = '00';
  millisecondsEl.textContent = '00';

  startBtn.style.display = 'block'
  pauseBtn.style.display = 'none'
  continuetBtn.style.display = 'none'
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilleseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}


