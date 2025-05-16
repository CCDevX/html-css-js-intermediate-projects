import "./portfolio.scss";

let index = 0;
let track = null;
let next = null;
let prev = null;

const moveToSlide = (newIndex) => {
  if (!track) return;
  track.style.transform = `translateX(-${newIndex * 100}%)`;
  index = newIndex;
};

const initCarousel = () => {
  track = document.querySelector(".carousel-track");
  next = document.querySelector(".next");
  prev = document.querySelector(".prev");

  if (!track || !next || !prev) return;

  next.removeEventListener("click", handleNext);
  prev.removeEventListener("click", handlePrev);

  next.addEventListener("click", handleNext);
  prev.addEventListener("click", handlePrev);
};

const handleNext = () => {
  const maxIndex = track.children.length - 1;
  if (index < maxIndex) {
    moveToSlide(index + 1);
  }
};

const handlePrev = () => {
  if (index > 0) {
    moveToSlide(index - 1);
  }
};

// Initialise au chargement direct
initCarousel();

// Observe les changements du DOM pour les chargements dynamiques
const observer = new MutationObserver(() => {
  initCarousel();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
