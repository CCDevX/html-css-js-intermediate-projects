import "./about.scss";
import aboutImg from "../../assets/img/about.jpg";

export async function initAbout() {
  const wrapper = document.querySelector(".image-wrapper");

  if (!wrapper) {
    console.warn(".image-wrapper not found in the DOM");
    return;
  }

  wrapper.innerHTML = `<img src="${aboutImg}" alt="Photo artistique" />`;
}
const toggleAccordion = (event) => {
  const item = event.currentTarget.parentElement;
  item.classList.toggle("active");
};

const initAboutPage = () => {
  const headers = document.querySelectorAll(".accordion-header");

  if (!headers.length) return;

  headers.forEach((header) => {
    header.removeEventListener("click", toggleAccordion);
    header.addEventListener("click", toggleAccordion);
  });
};

initAboutPage();

const observer = new MutationObserver(() => {
  initAboutPage();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
