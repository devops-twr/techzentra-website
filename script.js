/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (mainNav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


/* ================= CLOSE MENU ================= */

document.querySelectorAll("#mainNav a").forEach(function(link) {

    link.addEventListener("click", function() {

        mainNav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= NAVBAR EFFECT ================= */

window.addEventListener("scroll", function() {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================= SCROLL ANIMATION ================= */

const sections = document.querySelectorAll(
    ".course-card, .service-card, .feature, .contact-card, .about-content"
);

sections.forEach(function(item) {
    item.classList.add("reveal");
});


const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});


sections.forEach(function(item) {

    observer.observe(item);

});


/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".stat strong");

counters.forEach(function(counter) {

    const originalText = counter.innerText;

    let target = parseInt(
        originalText.replace(/\D/g, "")
    );

    if (isNaN(target)) {
        return;
    }

    let suffix = "";

    if (originalText.includes("+")) {
        suffix = "+";
    }

    if (originalText.includes("%")) {
        suffix = "%";
    }

    counter.innerText = "0" + suffix;

    let current = 0;

    const increment = Math.max(
        1,
        Math.ceil(target / 60)
    );

    const timer = setInterval(function() {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.innerText =
            current + suffix;

    }, 25);

});


/* ================= WHATSAPP ================= */

const whatsappButtons =
    document.querySelectorAll(
        ".btn-whatsapp, .whatsapp-float"
    );

whatsappButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log(
            "Opening TechZentra WhatsApp..."
        );

    });

});


/* ================= COURSE CLICK ================= */

document.querySelectorAll(".course-content a")
.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log(
            "Course selected for registration"
        );

    });

});


/* ================= PAGE LOADED ================= */

console.log(
    "TechZentra website loaded successfully."
);
