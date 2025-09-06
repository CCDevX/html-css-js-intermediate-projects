const navbarToggleBtn = document.querySelector(".l-main-nav__toggle-button");
const mainNav = document.querySelector(".l-main-nav");

navbarToggleBtn.addEventListener("click", toggleNavigation);

function toggleNavigation() {
  if (mainNav.classList.contains("l-main-nav--active")) {
    navbarToggleBtn.querySelector("img").src = "./assets/logos/hamburger.svg";
  } else {
    navbarToggleBtn.querySelector("img").src = "./assets/logos/close.svg";
  }
  mainNav.classList.toggle("l-main-nav--active");
}

const navLinks = document.querySelectorAll(".l-main-nav__link");

navLinks.forEach((link) => link.addEventListener("click", toggleNavigation));
