const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const splashScreen = document.querySelector(".splash-screen");
const mainContent = document.querySelector("#main-content");

// Function to initialize the main content after splash screen
function initializeWebsite() {
  // Hide splash screen
  splashScreen.classList.add("hidden");
  // Show main content and enable scrolling
  document.body.classList.add("loaded");
}

// Show splash screen initially, then hide after 2.5 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    initializeWebsite();
  }, 2500); // Display for 2.5 seconds
});

menuOpenButton.addEventListener("click", () => {
  // Toggle the class to show the menu
  document.body.classList.toggle("show-menu");
});

// Toggle the class to hide the menu
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close the menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
