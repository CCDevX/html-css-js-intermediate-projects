// Variables globales
const navbar = document.getElementById('navbar');
const logoMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');
const allLinks = document.querySelectorAll('.item-nav a');
const experienceCards = document.querySelectorAll('.experience-card');
const contactForm = document.getElementById('contactForm');

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeFormValidation();
    initializePricingCards();
});

// ============ NAVIGATION ============

function initializeNavigation() {
    // Toggle menu mobile
    logoMenu.addEventListener('click', toggleMobileMenu);

    // Fermer le menu au clic sur un lien
    allLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Smooth scrolling pour les ancres
    allLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !logoMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    menu.classList.toggle('active');
    logoMenu.classList.toggle('active');

    // Empêcher le scroll du body quand le menu est ouvert
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    menu.classList.remove('active');
    logoMenu.classList.remove('active');
    document.body.style.overflow = '';
}

function handleSmoothScroll(e) {
    const href = e.target.getAttribute('href');

    if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Hauteur de la navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    closeMobileMenu();
}

// ============ EFFETS DE SCROLL ============

function initializeScrollEffects() {
    // Effet parallax et navbar au scroll
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer pour les animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observer tous les éléments à animer
    experienceCards.forEach(card => observer.observe(card));

    const pricingCards = document.querySelectorAll('.cartes-tarifs');
    pricingCards.forEach(card => observer.observe(card));
}

function handleScroll() {
    const scrollY = window.scrollY;

    // Effet navbar au scroll
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Effet parallax sur la section hero
    const heroSection = document.querySelector('.accueil');
    if (heroSection) {
        const parallaxSpeed = 0.5;
        heroSection.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
    }

    // Mise à jour de la navigation active
    updateActiveNavLink();
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Retirer la classe active de tous les liens
            allLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Ajouter la classe active au lien correspondant
            const activeLink = document.querySelector(`.item-nav a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// ============ ANIMATIONS ============

function initializeAnimations() {
    // Animation des cartes de tarification au hover
    const pricingCards = document.querySelectorAll('.cartes-tarifs');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            } else {
                this.style.transform = 'translateY(0) scale(1.05)';
            }
        });
    });

    // Animation des boutons
    const buttons = document.querySelectorAll('.btn-experience, .btn-tarif, .button-sub');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialiser l'opacity des éléments animés
    experienceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    const pricingCardsForAnimation = document.querySelectorAll('.cartes-tarifs');
    pricingCardsForAnimation.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
    });
}

// ============ VALIDATION DE FORMULAIRE ============

function initializeFormValidation() {
    if (!contactForm) return;

    const inputs = contactForm.querySelectorAll('input, textarea');

    // Validation en temps réel
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });

    // Validation à la soumission
    contactForm.addEventListener('submit', handleFormSubmit);
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let errorMessage = '';

    // Retirer les erreurs précédentes
    clearFieldError(field);

    // Validation selon le type de champ
    switch (fieldName) {
        case 'prenom':
        case 'nom':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Ce champ doit contenir au moins 2 caractères';
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Veuillez entrer une adresse email valide';
            }
            break;

        case 'message':
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Le message doit contenir au moins 10 caractères';
            }
            break;
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function showFieldError(field, message) {
    const formGroupe = field.closest('.form-groupe');

    // Retirer l'erreur existante
    const existingError = formGroupe.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Ajouter la nouvelle erreur
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 0.9rem;
        margin-top: 5px;
        animation: fadeInUp 0.3s ease-out;
    `;
    errorDiv.textContent = message;

    formGroupe.appendChild(errorDiv);
    field.style.borderColor = '#dc3545';
}

function clearFieldError(field) {
    const formGroupe = field.closest('.form-groupe');
    const errorMessage = formGroupe.querySelector('.error-message');

    if (errorMessage) {
        errorMessage.remove();
    }

    field.style.borderColor = '';
}

function handleFormSubmit(e) {
    e.preventDefault();

    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    let allValid = true;

    // Valider tous les champs requis
    inputs.forEach(input => {
        if (!validateField(input)) {
            allValid = false;
        }
    });

    if (allValid) {
        submitForm();
    } else {
        // Scroll vers la première erreur
        const firstError = contactForm.querySelector('.error-message');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

function submitForm() {
    const submitButton = contactForm.querySelector('.button-sub');
    const originalText = submitButton.innerHTML;

    // Animation de chargement
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitButton.disabled = true;

    // Simuler l'envoi (remplacer par votre logique d'envoi)
    setTimeout(() => {
        // Succès
        showSuccessMessage();
        contactForm.reset();

        // Restaurer le bouton
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function showSuccessMessage() {
    // Créer le message de succès
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        background: linear-gradient(45deg, #28a745, #34ce57);
        color: white;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
        text-align: center;
        animation: fadeInUp 0.5s ease-out;
        box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
    `;
    successDiv.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 1.5rem; margin-right: 10px;"></i>
        Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
    `;

    // Insérer le message au début du formulaire
    contactForm.insertBefore(successDiv, contactForm.firstChild);

    // Retirer le message après 5 secondes
    setTimeout(() => {
        successDiv.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => successDiv.remove(), 500);
    }, 5000);
}

// ============ CARTES DE TARIFICATION ============

function initializePricingCards() {
    const pricingCards = document.querySelectorAll('.cartes-tarifs');

    pricingCards.forEach(card => {
        card.addEventListener('click', function() {
            // Retirer la sélection des autres cartes
            pricingCards.forEach(c => c.classList.remove('selected'));

            // Ajouter la sélection à la carte cliquée
            this.classList.add('selected');

            // Ajouter un effet visuel temporaire
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// ============ FONCTIONS UTILITAIRES ============

// Fonction de debounce pour optimiser les performances
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimiser l'événement scroll avec debounce
const optimizedScrollHandler = debounce(handleScroll, 10);
window.removeEventListener('scroll', handleScroll);
window.addEventListener('scroll', optimizedScrollHandler);

// ============ GESTION DES ERREURS ============

window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// ============ PERFORMANCE ============

// Précharger les images importantes
function preloadImages() {
    const imageUrls = [
        'ressources/kyoto-temple.jpg',
        'ressources/chateau-kyoto.jpg',
        'ressources/geisha.jpg',
        'ressources/parallax-large-flou.jpg'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Appeler le préchargement après le chargement de la page
window.addEventListener('load', preloadImages);

// ============ ACCESSIBILITÉ ============

// Navigation au clavier
document.addEventListener('keydown', function(e) {
    // Fermer le menu mobile avec Escape
    if (e.key === 'Escape' && menu.classList.contains('active')) {
        closeMobileMenu();
    }

    // Navigation avec Tab dans le menu mobile
    if (e.key === 'Tab' && menu.classList.contains('active')) {
        const focusableElements = menu.querySelectorAll('a');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Ajouter des labels ARIA pour l'accessibilité
function initializeAccessibility() {
    logoMenu.setAttribute('aria-label', 'Toggle navigation menu');
    logoMenu.setAttribute('aria-expanded', 'false');

    logoMenu.addEventListener('click', function() {
        const isExpanded = menu.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
    });
}

initializeAccessibility();