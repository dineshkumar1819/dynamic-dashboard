// Live Time Update
function updateTime() {
    document.getElementById("liveTime").innerText = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Random Quote Generator
const quotes = [
    "Believe in yourself!",
    "Keep pushing forward!",
    "Success is no accident.",
    "Dream big and dare to fail."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("randomQuote").innerText = quotes[randomIndex];
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

