// Set your release date here (Year, Month - 1, Day, Hour, Minute)
const launchDate = new Date("April 24, 2026 12:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Output the results
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = minutes;

    // If countdown is finished
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2 style='color:var(--gold)'>RELEASED!</h2>";
    }
}, 1000);