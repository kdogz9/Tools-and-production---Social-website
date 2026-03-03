/**
 * The target release date converted to a Unix timestamp (milliseconds).
 * @type {number}
 * @constant
 */
const launchDate = new Date("April 24, 2026 12:00:00").getTime();

/**
 * Timer interval that updates the countdown display every second.
 * * This function calculates the remaining time between the current moment 
 * and {@link launchDate}, then updates the innerText of the following DOM elements:
 * - `id="days"`
 * - `id="hours"`
 * - `id="mins"`
 * * @type {ReturnType<typeof setInterval>}
 */
const timer = setInterval(function() {
    /** @type {number} Current timestamp in milliseconds */
    const now = new Date().getTime();

    /** @type {number} Difference between launch and now in milliseconds */
    const distance = launchDate - now;

    // Time calculations
    /** @type {number} Remaining full days */
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    /** @type {number} Remaining hours after days are subtracted */
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    /** @type {number} Remaining minutes after hours are subtracted */
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Output the results to the DOM
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = minutes;

    // If countdown is finished
    if (distance < 0) {
        clearInterval(timer);
        const countdownContainer = document.getElementById("countdown");
        if (countdownContainer) {
            countdownContainer.innerHTML = "<h2 style='color:var(--gold)'>RELEASED!</h2>";
        }
    }
}, 1000);