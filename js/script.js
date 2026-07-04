// =======================================
// NOESIS
// Main JavaScript File
// =======================================

// Update copyright year automatically
const year = new Date().getFullYear();

const copyright = document.getElementById("year");

if (copyright) {
    copyright.textContent = year;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Reveal elements while scrolling
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .article").forEach(element => {

    observer.observe(element);

});
