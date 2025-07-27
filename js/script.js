/**
 * ELYSIAN ESTATES - SCRIPT PRINCIPAL
 * Gestion des interactions et animations du site
 */

// ===== VARIABLES GLOBALES =====
let isMenuOpen = false;
let scrollTimeout = null;

// ===== INITIALISATION =====
document.addEventListener("DOMContentLoaded", function () {
  initializeMenu();
  initializeScrollEffects();
  initializeSmoothScroll();
  initializeFormValidation();
  initializeAnimations();
  initializeAccessibility();
});

// ===== GESTION DU MENU MOBILE =====
function initializeMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navigation) return;

  // Toggle du menu principal
  menuToggle.addEventListener("click", function () {
    toggleMenu();
  });

  // Fermeture du menu lors du clic sur un lien
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  });

  // Fermeture du menu avec la touche Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) {
      toggleMenu();
    }
  });

  // Fermeture du menu lors du clic en dehors
  navigation.addEventListener("click", function (e) {
    if (e.target === navigation && isMenuOpen) {
      toggleMenu();
    }
  });
}

function toggleMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  const body = document.body;

  isMenuOpen = !isMenuOpen;

  navigation.classList.toggle("nav-open", isMenuOpen);
  menuToggle.classList.toggle("menu-open", isMenuOpen);

  // Prévenir le scroll du body quand le menu est ouvert
  if (isMenuOpen) {
    body.style.overflow = "hidden";
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    body.style.overflow = "";
    menuToggle.setAttribute("aria-expanded", "false");
  }
}

// ===== EFFETS DE SCROLL =====
function initializeScrollEffects() {
  const header = document.getElementById("header");

  if (!header) return;

  let lastScrollY = 0;

  window.addEventListener(
    "scroll",
    function () {
      // Optimisation: throttling avec requestAnimationFrame
      if (scrollTimeout) return;

      scrollTimeout = requestAnimationFrame(function () {
        const currentScrollY = window.scrollY;

        // Effet de transparence du header
        if (currentScrollY > 100) {
          header.classList.add("header-scrolled");
        } else {
          header.classList.remove("header-scrolled");
        }

        // Masquer/afficher le header selon la direction de scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          header.style.transform = "translateY(-100%)";
        } else {
          header.style.transform = "translateY(0)";
        }

        lastScrollY = currentScrollY;
        scrollTimeout = null;
      });
    },
    { passive: true }
  );
}

// ===== SCROLL FLUIDE =====
function initializeSmoothScroll() {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector(".header")?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// ===== VALIDATION DU FORMULAIRE =====
function initializeFormValidation() {
  const contactForm = document.querySelector(".contact-form");

  if (!contactForm) return;

  const inputs = contactForm.querySelectorAll(".form-input, .form-textarea");

  // Validation en temps réel
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    input.addEventListener("input", function () {
      // Supprimer les messages d'erreur lors de la saisie
      clearFieldError(this);
    });
  });

  // Validation à la soumission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      submitForm(this);
    }
  });
}

function validateField(field) {
  const value = field.value.trim();
  const fieldType = field.type;
  const fieldName = field.name;

  // Supprimer les erreurs précédentes
  clearFieldError(field);

  // Validation selon le type de champ
  if (!value) {
    showFieldError(field, "Ce champ est obligatoire");
    return false;
  }

  if (fieldType === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, "Veuillez saisir un email valide");
      return false;
    }
  }

  if (fieldName === "name" && value.length < 2) {
    showFieldError(field, "Le nom doit contenir au moins 2 caractères");
    return false;
  }

  if (fieldName === "message" && value.length < 10) {
    showFieldError(field, "Le message doit contenir au moins 10 caractères");
    return false;
  }

  return true;
}

function showFieldError(field, message) {
  field.classList.add("field-error");

  // Créer le message d'erreur s'il n'existe pas
  let errorElement = field.parentNode.querySelector(".error-message");
  if (!errorElement) {
    errorElement = document.createElement("span");
    errorElement.className = "error-message";
    field.parentNode.appendChild(errorElement);
  }

  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearFieldError(field) {
  field.classList.remove("field-error");

  const errorElement = field.parentNode.querySelector(".error-message");
  if (errorElement) {
    errorElement.style.display = "none";
  }
}

function submitForm(form) {
  const submitButton = form.querySelector(".form-button");
  const originalText = submitButton.querySelector(".button-text").textContent;

  // Animation de chargement
  submitButton.disabled = true;
  submitButton.querySelector(".button-text").textContent = "Envoi en cours...";
  submitButton.querySelector(".button-icon").className =
    "fa-solid fa-spinner fa-spin";

  // Simulation d'envoi (remplacer par votre logique d'envoi réelle)
  setTimeout(() => {
    // Succès de l'envoi
    showSuccessMessage();
    form.reset();

    // Restaurer le bouton
    submitButton.disabled = false;
    submitButton.querySelector(".button-text").textContent = originalText;
    submitButton.querySelector(".button-icon").className =
      "fa-solid fa-paper-plane button-icon";
  }, 2000);
}

function showSuccessMessage() {
  // Créer et afficher un message de succès
  const successDiv = document.createElement("div");
  successDiv.className = "success-message";
  successDiv.innerHTML = `
        <i class="fa-solid fa-check-circle"></i>
        <span>Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.</span>
    `;

  const contactSection = document.querySelector(".contact");
  contactSection.appendChild(successDiv);

  // Animation d'apparition
  setTimeout(() => {
    successDiv.classList.add("show");
  }, 100);

  // Supprimer le message après 5 secondes
  setTimeout(() => {
    successDiv.classList.remove("show");
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.parentNode.removeChild(successDiv);
      }
    }, 300);
  }, 5000);
}

// ===== ANIMATIONS AU SCROLL =====
function initializeAnimations() {
  // Observer pour les animations au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");

        // Animation séquentielle pour les cartes
        if (
          entry.target.classList.contains("offers-grid") ||
          entry.target.classList.contains("testimonials-grid")
        ) {
          animateCards(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observer les éléments à animer
  const elementsToAnimate = document.querySelectorAll(`
        .hero-content,
        .section-title,
        .offers-grid,
        .team-text,
        .testimonials-grid,
        .contact-content
    `);

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

function animateCards(container) {
  const cards = container.querySelectorAll(".offer-card, .testimonial-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in");
    }, index * 200); // Délai de 200ms entre chaque carte
  });
}

// ===== ACCESSIBILITÉ =====
function initializeAccessibility() {
  // Gestion du focus trap dans le menu mobile
  const navigation = document.querySelector(".navigation");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!navigation || !menuToggle) return;

  const focusableElements = navigation.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  navigation.addEventListener("keydown", function (e) {
    if (!isMenuOpen) return;

    if (e.key === "Tab") {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });

  // Attribution des propriétés ARIA
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-controls", "navigation");
  navigation.setAttribute("id", "navigation");
}

// ===== UTILITAIRES =====

// Throttle function pour optimiser les performances
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Debounce function pour optimiser les performances
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Fonction pour vérifier si un élément est visible
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ===== GESTION DES ERREURS =====
window.addEventListener("error", function (e) {
  console.error("Erreur JavaScript:", e.error);
  // Ici vous pourriez envoyer l'erreur à un service de monitoring
});

// ===== PERFORMANCES =====
// Préchargement des images importantes
function preloadImages() {
  const imageUrls = ["./img/frame.jpg", "./img/team.jpg"];

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Lancer le préchargement après le chargement de la page
window.addEventListener("load", preloadImages);

// ===== ANALYTICS ET TRACKING =====
function trackEvent(category, action, label) {
  // Intégration avec Google Analytics ou autre
  if (typeof gtag !== "undefined") {
    gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}

// Tracking des interactions importantes
document.addEventListener("click", function (e) {
  const target = e.target.closest("a, button");
  if (!target) return;

  if (target.classList.contains("hero-cta")) {
    trackEvent("Engagement", "click", "Hero CTA");
  } else if (target.classList.contains("offer-button")) {
    trackEvent("Engagement", "click", "Offer Button");
  } else if (target.classList.contains("form-button")) {
    trackEvent("Contact", "form_submit", "Contact Form");
  }
});

// ===== CONSOLE LOG STYLISÉ =====
console.log(
  "%c🏢 Elysian Estates",
  "font-size: 20px; font-weight: bold; color: #d4af37; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
);
console.log(
  "%cSite développé avec excellence et raffinement ✨",
  "font-size: 14px; color: #999; font-style: italic;"
);
