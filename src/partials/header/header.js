import "./header.scss";

const toggleMobileMenu = () => {
  const nav = document.querySelector("nav");
  nav?.classList.toggle("open");
};

const initHeader = () => {
  const burger = document.querySelector(".hamburger-menu"); // Sélection de l'icône hamburger

  if (!burger) return;

  // Pour éviter de dupliquer l'écouteur
  burger.removeEventListener("click", toggleMobileMenu);
  burger.addEventListener("click", toggleMobileMenu);
};

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", initHeader);

// Observer DOM pour re-initialiser si des éléments sont injectés
const observer = new MutationObserver(() => {
  initHeader();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
