/**
 * Le Barbier de Paris - JavaScript Luxueux et Sobre
 * Fonctionnalités minimalistes pour une expérience élégante
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ===== VARIABLES GLOBALES =====
  const nav = document.querySelector(".main-nav");
  const navToggler = document.querySelector(".nav-toggler");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  // ===== NAVIGATION MOBILE =====
  class MobileNavigation {
    constructor() {
      this.isOpen = false;
      this.init();
    }

    init() {
      if (navToggler) {
        navToggler.addEventListener("click", () => this.toggle());
      }

      // Fermer le menu lors du clic sur un lien
      navLinks.forEach((link) => {
        link.addEventListener("click", () => this.close());
      });

      // Fermer le menu avec Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) {
          this.close();
          navToggler.focus();
        }
      });

      // Fermer le menu au redimensionnement
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && this.isOpen) {
          this.close();
        }
      });
    }

    toggle() {
      this.isOpen ? this.close() : this.open();
    }

    open() {
      nav.classList.add("active");
      navToggler.setAttribute("aria-expanded", "true");
      this.animateToggler(true);
      this.isOpen = true;

      // Focus sur le premier lien
      const firstLink = navMenu.querySelector("a");
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 100);
      }
    }

    close() {
      nav.classList.remove("active");
      navToggler.setAttribute("aria-expanded", "false");
      this.animateToggler(false);
      this.isOpen = false;
    }

    animateToggler(isOpen) {
      const lines = navToggler.querySelectorAll(".nav-line");
      if (isOpen) {
        lines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        lines[1].style.opacity = "0";
        lines[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
      } else {
        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
      }
    }
  }

  // ===== SMOOTH SCROLLING =====
  class SmoothScroll {
    constructor() {
      this.init();
    }

    init() {
      const smoothLinks = document.querySelectorAll('a[href^="#"]');

      smoothLinks.forEach((link) => {
        link.addEventListener("click", (e) => this.handleClick(e));
      });
    }

    handleClick(e) {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const navHeight = nav.offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight - 20;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });

      // Mettre à jour l'URL proprement
      this.updateURL(targetId);
    }

    updateURL(targetId) {
      if (history.pushState) {
        history.pushState(null, null, `#${targetId}`);
      }
    }
  }

  // ===== NAVIGATION SCROLL EFFECTS =====
  class NavigationScrollEffects {
    constructor() {
      this.lastScrollTop = 0;
      this.init();
    }

    init() {
      window.addEventListener("scroll", () => this.handleScroll(), {
        passive: true,
      });
    }

    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Effet de transparence
      if (scrollTop > 100) {
        nav.style.backgroundColor = "rgba(250, 250, 250, 0.98)";
        nav.style.backdropFilter = "blur(15px)";
      } else {
        nav.style.backgroundColor = "rgba(250, 250, 250, 0.95)";
        nav.style.backdropFilter = "blur(10px)";
      }

      this.lastScrollTop = scrollTop;
    }
  }

  // ===== ANIMATIONS AU SCROLL =====
  class ScrollAnimations {
    constructor() {
      this.observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      };
      this.init();
    }

    init() {
      if (!("IntersectionObserver" in window)) {
        // Fallback pour les navigateurs plus anciens
        this.fallbackAnimation();
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries),
        this.observerOptions,
      );

      this.observeElements();
    }

    observeElements() {
      const elementsToAnimate = document.querySelectorAll(
        [
          ".section-header",
          ".text-block",
          ".service-category",
          ".team-member",
          ".location-card",
          ".schedule-info",
        ].join(", "),
      );

      elementsToAnimate.forEach((element) => {
        // État initial
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
          "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";

        this.observer.observe(element);
      });
    }

    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          // Une fois animé, on arrête d'observer
          this.observer.unobserve(entry.target);
        }
      });
    }

    fallbackAnimation() {
      // Animation simple pour les navigateurs sans IntersectionObserver
      const elements = document.querySelectorAll(
        [
          ".section-header",
          ".text-block",
          ".service-category",
          ".team-member",
          ".location-card",
          ".schedule-info",
        ].join(", "),
      );

      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 100);
      });
    }
  }

  // ===== GESTION DES ERREURS =====
  class ErrorHandler {
    constructor() {
      this.init();
    }

    init() {
      window.addEventListener("error", (e) => {
        console.warn("Erreur détectée:", {
          message: e.message,
          filename: e.filename,
          line: e.lineno,
          column: e.colno,
        });
      });

      // Gestion des erreurs non capturées dans les Promises
      window.addEventListener("unhandledrejection", (e) => {
        console.warn("Promise rejetée non gérée:", e.reason);
      });
    }
  }

  // ===== OPTIMISATIONS PERFORMANCE =====
  class PerformanceOptimizer {
    constructor() {
      this.resizeTimer = null;
      this.init();
    }

    init() {
      // Debounce du resize
      window.addEventListener("resize", () => {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
          this.handleResize();
        }, 250);
      });

      // Préchargement des images critiques
      this.preloadCriticalImages();
    }

    handleResize() {
      // Actions lors du redimensionnement
      const event = new CustomEvent("optimizedResize");
      window.dispatchEvent(event);
    }

    preloadCriticalImages() {
      const criticalImages = ["ressources/hero-background.jpg"];

      criticalImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }

  // ===== ACCESSIBILITÉ =====
  class AccessibilityEnhancer {
    constructor() {
      this.init();
    }

    init() {
      // Améliorer la navigation au clavier
      this.enhanceKeyboardNavigation();

      // Gérer les mouvements réduits
      this.respectMotionPreferences();
    }

    enhanceKeyboardNavigation() {
      // Ajouter des indicateurs de focus visibles
      document.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          document.body.classList.add("keyboard-navigation");
        }
      });

      document.addEventListener("mousedown", () => {
        document.body.classList.remove("keyboard-navigation");
      });
    }

    respectMotionPreferences() {
      // Respecter les préférences de mouvement réduit
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

      if (prefersReducedMotion.matches) {
        // Désactiver les animations pour les utilisateurs qui préfèrent moins de mouvement
        document.documentElement.style.setProperty("--transition", "0.1s ease");

        // Supprimer l'animation du scroll indicator
        const scrollLine = document.querySelector(".scroll-line");
        if (scrollLine) {
          scrollLine.style.animation = "none";
        }
      }
    }
  }

  // ===== INITIALISATION =====
  function initializeApp() {
    try {
      // Initialiser tous les modules
      new MobileNavigation();
      new SmoothScroll();
      new NavigationScrollEffects();
      new ScrollAnimations();
      new ErrorHandler();
      new PerformanceOptimizer();
      new AccessibilityEnhancer();

      console.log("✨ Le Barbier de Paris - Initialisé avec élégance");
    } catch (error) {
      console.error("Erreur lors de l'initialisation:", error);
    }
  }

  // Démarrer l'application
  initializeApp();

  // ===== CSS POUR L'ACCESSIBILITÉ =====
  // Ajouter les styles pour la navigation clavier
  const accessibilityStyles = `
    .keyboard-navigation *:focus {
      outline: 2px solid var(--color-accent) !important;
      outline-offset: 2px !important;
    }
    
    .keyboard-navigation .nav-menu a:focus::after {
      width: 100%;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = accessibilityStyles;
  document.head.appendChild(styleSheet);
});

// ===== UTILITAIRES GLOBAUX =====
// Fonction utilitaire pour debounce
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
}

// Fonction utilitaire pour throttle
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
