let count = 0;

function piggyPop() {
    count++;
    document.getElementById('count').innerText = count;
    
    // Add a little console easter egg
    if (count === 10) {
        alert("OINK! You're getting greedy now!");
    }
}

// Simple scroll animation effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 50px';
    } else {
        nav.style.padding = '20px 50px';
    }
});