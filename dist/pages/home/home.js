import "./home.scss";

import hero1 from "../../assets/img/hero-img1.png";
import hero2 from "../../assets/img/hero-img2.png";
import hero3 from "../../assets/img/hero-img3.png";
import hero4 from "../../assets/img/hero-img4.png";

export async function initHome() {
  const container = document.querySelector(".img-container");

  // Attendre que le conteneur soit bien présent dans le DOM
  if (!container) {
    console.warn(".img-container not found in the DOM");
    return;
  }

  container.innerHTML = `
    <img src="${hero1}" alt="Photo urbaine 1" />
    <img src="${hero2}" alt="Photo urbaine 2" />
    <img src="${hero3}" alt="Photo urbaine 3" />
    <img src="${hero4}" alt="Photo urbaine 4" />
  `;
}
