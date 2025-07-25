import "./portfolio.scss";
import img1 from "../../assets/img/portefolio-img1.png";
import img2 from "../../assets/img/portefolio-img2.png";
import img3 from "../../assets/img/portefolio-img3.png";
import img4 from "../../assets/img/portefolio-img4.png";
import img5 from "../../assets/img/portefolio-img5.png";
import img6 from "../../assets/img/portefolio-img6.png";
import img7 from "../../assets/img/portefolio-img7.png";
import img8 from "../../assets/img/portefolio-img8.png";
import img9 from "../../assets/img/portefolio-img9.png";
import img10 from "../../assets/img/portefolio-img10.png";

let index = 0;
let track = null;
let next = null;
let prev = null;

export async function initPortefolio() {
  const track = document.querySelector(".carousel-track");

  if (!track) {
    console.warn(".carousel-track not found in the DOM");
    return;
  }

  const images = [
    { src: img1, alt: "portefolio-img1" },
    { src: img2, alt: "portefolio-img2" },
    { src: img3, alt: "portefolio-img3" },
    { src: img4, alt: "portefolio-img4" },
    { src: img5, alt: "portefolio-img5" },
    { src: img6, alt: "portefolio-img6" },
    { src: img7, alt: "portefolio-img7" },
    { src: img8, alt: "portefolio-img8" },
    { src: img9, alt: "portefolio-img9" },
    { src: img10, alt: "portefolio-img10" },
  ];

  // Injecte dynamiquement les images dans le carousel
  track.innerHTML = images
    .map((img) => `<img src="${img.src}" alt="${img.alt}" />`)
    .join("");
}

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
