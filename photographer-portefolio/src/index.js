import "./index.scss";
import { initAbout } from "./pages/about/about";
import { initHome } from "./pages/home/home";
import { initPortefolio } from "./pages/portfolio/portfolio";

/**
 * Loads an HTML fragment (partial) into a DOM element and its associated JS module.
 * @param {string} selector - The CSS selector of the element to inject the HTML into.
 * @param {string} name - The name of the partial (used for path resolution).
 */
async function loadPartial(selector, name) {
  const htmlPath = `./partials/${name}/${name}.html`;
  const response = await fetch(htmlPath);
  const html = await response.text();
  document.querySelector(selector).innerHTML = html;
  await loadPartialScript(name); // Dynamically load corresponding JS
}

/**
 * Dynamically imports and initializes the JS module for a given partial.
 * @param {string} partialName - The name of the partial.
 */
const loadPartialScript = async (partialName) => {
  console.log("Loading script for partial:", partialName);
  try {
    const module = await import(`@partials/${partialName}/${partialName}.js`);
    if (typeof module.init === "function") {
      module.init(); // Call init() if available
    }
    return module;
  } catch (error) {
    console.warn(
      `No script found for partial "${partialName}" or failed to load.`,
      error
    );
  }
};

/**
 * Loads and displays a page (HTML + JS) from the @pages directory.
 * @param {string} pageName - The name of the page to load.
 */
async function loadPage(pageName) {
  console.log("Loading page:", pageName);

  // Load HTML content and inject into main area
  try {
    // Load the HTML file for the page
    const htmlPath = `./pages/${pageName}/${pageName}.html`;
    const response = await fetch(htmlPath);
    const html = await response.text();
    document.querySelector("#main-content").innerHTML = html;
  } catch (err) {
    console.error(`Failed to load HTML for page "${pageName}"`, err);
  }

  // Load and initialize the associated JS module
  await loadPageScript(pageName);

  if (pageName === "home") {
    await initHome();
  } else if (pageName === "portfolio") {
    await initPortefolio();
  } else if (pageName === "about") {
    await initAbout();
  }
  // Highlight the active nav link
  setActiveNavLink(pageName);
}

/**
 * Dynamically imports and initializes the JS module for a given page.
 * @param {string} pageName - The name of the page.
 */
const loadPageScript = async (pageName) => {
  console.log("Loading script for page:", pageName);
  try {
    const module = await import(`@pages/${pageName}/${pageName}.js`);
    if (typeof module.init === "function") {
      module.init(); // Call init() if available
    }
    return module;
  } catch (error) {
    console.warn(
      `No script found for page "${pageName}" or failed to load.`,
      error
    );
  }
};

/**
 * Updates the navigation menu to highlight the currently active page link.
 * Adds the "active" class to the <a> element matching the given page name,
 * and removes it from all other navigation links.
 *
 * @param {string} pageName - The name of the currently active page.
 */
function setActiveNavLink(pageName) {
  const navLinks = document.querySelectorAll("nav a[data-page]");
  navLinks.forEach((link) => {
    if (link.dataset.page === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Initial load when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
  await loadPartial("#header", "header");
  await loadPartial("#footer", "footer");
  await loadPage("home");

  // Page navigation handler (using data-page attributes)
  document.body.addEventListener("click", async (e) => {
    const link = e.target.closest("[data-page]");
    if (link) {
      e.preventDefault();
      await loadPage(link.dataset.page);
    }
  });
});
