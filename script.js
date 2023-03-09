// Set the time limit for the exam (in minutes)
const timeLimit = 5;

// Get the form element and add an event listener for form submission
const form = document.getElementById("exam-form");
form.addEventListener("submit", submitExam);

// Get the countdown element and set the initial countdown value
const countdownElement = document.getElementById("countdown");
let countdown = timeLimit * 60;

// Start the countdown timer
setInterval(() => {
    countdown--;
    updateCountdown();
    if (countdown === 0) {
        submitExam();
    }
}, 1000);

function updateCountdown() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    countdownElement.innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function submitExam(event) {
    if (event) {
        event.preventDefault
