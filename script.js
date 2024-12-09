// Add event listener to navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("header nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Add event listener to slideshow
const slideshow = document.querySelector(".slideshow");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

prevButton.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlideshow();
});

nextButton.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlideshow();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlideshow();
    });
});

function updateSlideshow() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
    });
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentSlide ? "#337ab7" : "#fff";
    });
}

updateSlideshow();

// Add event listener to cta buttons
const ctaButtons = document.querySelectorAll(".cta-btn");

ctaButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Thank you for joining our community!");
    });
});

// Add event listener to social media icons
const socialMediaIcons = document.querySelectorAll(".social-icon");

socialMediaIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        alert("Thank you for following us on social media!");
    });
});