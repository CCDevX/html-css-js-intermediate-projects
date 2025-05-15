import "./about.scss";

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
