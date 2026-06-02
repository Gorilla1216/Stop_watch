const strtBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
const [hours, minutes, seconds] = document.querySelectorAll("#timer > div");

let time = 0;
let intervalId = null;

strtBtn.addEventListener("click", () => {
    if (intervalId) return; // Prevent multiple intervals

    intervalId = setInterval(() => {
        time++;

        const pastHours = Math.floor(time / 3600);
        const pastMinutes = Math.floor(time / 60) % 60;
        const pastSeconds = time % 60;

        hours.textContent = String(pastHours).padStart(2, "0");
        minutes.textContent = String(pastMinutes).padStart(2, "0");
        seconds.textContent = String(pastSeconds).padStart(2, "0");
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    time = 0;

    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
});