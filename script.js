// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
  // ===== NAVIGATION MOBILE =====
  const nav = document.querySelector(".main-nav");
  const navToggler = document.querySelector(".nav-toggler");
  const navLinks = document.querySelectorAll(".main-nav a");

  // Toggle du menu mobile
  navToggler?.addEventListener("click", function () {
    nav.classList.toggle("active");

    // Changer l'icône du bouton
    const icon = navToggler.querySelector("i");
    if (nav.classList.contains("active")) {
      icon.className = "fas fa-times";
      navToggler.setAttribute("aria-expanded", "true");
    } else {
      icon.className = "fas fa-bars";
      navToggler.setAttribute("aria-expanded", "false");
    }
  });

  // Fermer le menu mobile lors du clic sur un lien
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        nav.classList.remove("active");
        const icon = navToggler.querySelector("i");
        icon.className = "fas fa-bars";
        navToggler.setAttribute("aria-expanded", "false");
      }
    });
  });

  // ===== SLIDESHOW =====
  const slideshowImages = document.querySelectorAll(
    ".slideshow-images-container img",
  );
  const fadeSlideDots = document.querySelectorAll(".fade-slide-dots .dot");

  let currentFadeIndex = 0;
  let fadeIntervalID;

  // Fonction pour changer de slide
  function changeSlide(targetIndex = null) {
    // Retirer la classe active de l'image et du dot actuels
    slideshowImages[currentFadeIndex]?.classList.remove("active");
    fadeSlideDots[currentFadeIndex]?.classList.remove("active");
    fadeSlideDots[currentFadeIndex]?.setAttribute("aria-disabled", "false");

    // Déterminer le nouvel index
    if (targetIndex !== null) {
      currentFadeIndex = targetIndex;
      // Réinitialiser l'intervalle si l'utilisateur clique manuellement
      clearInterval(fadeIntervalID);
      startSlideshow();
    } else {
      currentFadeIndex = (currentFadeIndex + 1) % slideshowImages.length;
    }

    // Ajouter la classe active à la nouvelle image et au nouveau dot
    slideshowImages[currentFadeIndex]?.classList.add("active");
    fadeSlideDots[currentFadeIndex]?.classList.add("active");
    fadeSlideDots[currentFadeIndex]?.setAttribute("aria-disabled", "true");
  }

  // Gérer les clics sur les dots
  fadeSlideDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      changeSlide(index);
    });
  });

  // Démarrer le slideshow automatique
  function startSlideshow() {
    fadeIntervalID = setInterval(() => {
      changeSlide();
    }, 4000);
  }

  // Initialiser le slideshow si les éléments existent
  if (slideshowImages.length > 0 && fadeSlideDots.length > 0) {
    startSlideshow();
  }

  // Pause du slideshow au survol
  const slideshowContainer = document.querySelector(".about-slideshow");
  if (slideshowContainer) {
    slideshowContainer.addEventListener("mouseenter", () => {
      clearInterval(fadeIntervalID);
    });

    slideshowContainer.addEventListener("mouseleave", () => {
      startSlideshow();
    });
  }

  // ===== SMOOTH SCROLLING =====
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".main-nav").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Mettre à jour l'URL sans recharger la page
        if (history.pushState) {
          history.pushState(null, null, `#${targetId}`);
        }
      }
    });
  });

  // ===== NAVBAR TRANSPARENCY AU SCROLL =====
  let lastScrollTop = 0;

  window.addEventListener(
    "scroll",
    function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Ajouter/retirer une classe selon la position de scroll
      if (scrollTop > 100) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }

      lastScrollTop = scrollTop;
    },
    { passive: true },
  );

  // ===== ANIMATION AU SCROLL (INTERSECTION OBSERVER) =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observer les sections pour les animations
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // ===== AMÉLIORATION DE L'ACCESSIBILITÉ =====

  // Gestion du focus pour le clavier
  document.addEventListener("keydown", function (e) {
    // Échapper pour fermer le menu mobile
    if (e.key === "Escape" && nav?.classList.contains("active")) {
      nav.classList.remove("active");
      const icon = navToggler.querySelector("i");
      icon.className = "fas fa-bars";
      navToggler.setAttribute("aria-expanded", "false");
      navToggler.focus();
    }
  });

  // ===== PERFORMANCE - PRELOAD DES IMAGES =====
  function preloadImages() {
    const imageUrls = [
      "ressources/slide-1.jpg",
      "ressources/slide-2.jpg",
      "ressources/slide-3.jpg",
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }

  // Précharger les images du slideshow
  preloadImages();

  // ===== GESTION DES ERREURS =====
  window.addEventListener("error", function (e) {
    console.warn("Erreur détectée:", e.filename, e.lineno, e.message);
  });

  // ===== OPTIMISATION RESPONSIVE =====
  let resizeTimer;

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // Fermer le menu mobile en cas de redimensionnement
      if (window.innerWidth > 768 && nav?.classList.contains("active")) {
        nav.classList.remove("active");
        const icon = navToggler.querySelector("i");
        icon.className = "fas fa-bars";
        navToggler.setAttribute("aria-expanded", "false");
      }
    }, 250);
  });

  console.log("🎯 Site du Barbier de Paris initialisé avec succès!");
});
