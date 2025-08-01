# Kyoto Travel Landing Page

Une landing page moderne et responsive pour promouvoir les voyages à Kyoto.

## Démo en ligne

Voir le site : [https://tokyo-travel-landing.netlify.app/](https://tokyo-travel-landing.netlify.app/)

## Fonctionnalités principales

- Design responsive et immersif
- Animations douces au scroll
- Navigation fluide et accessible
- Menu hamburger mobile
- Sections thématiques : accueil, expériences, tarifs, contact
- Formulaire de contact avec validation
- Effets parallax
- Optimisation SEO de base
- Compatible avec tous les navigateurs modernes

## Stack technique

- **HTML5** - Structure sémantique
- **CSS3** - Styles avancés avec animations et media queries
- **JavaScript Vanilla** - Interactions dynamiques
- **Vite** - Build tool et serveur de développement
- **Font Awesome** - Icônes vectorielles
- **Google Fonts** - Typographies Playfair Display et Inter

## Structure du projet

```
kyoto-travel-guide-landing/
├── index.html              # Page principale
├── style.css               # Styles CSS
├── app.js                  # Scripts JavaScript
├── vite.config.js          # Configuration Vite
├── package.json            # Dépendances Node.js
├── package-lock.json       # Lock des dépendances
├── .gitignore              # Fichiers ignorés par Git
└── ressources/             # Assets (images)
    ├── kyoto-temple.jpg
    ├── chateau-kyoto.jpg
    ├── geisha.jpg
    ├── accueil-pic-lum-down.jpg
    └── parallax-large-flou.jpg
```

## Installation et utilisation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Aller dans le dossier
cd kyoto-travel-guide-landing

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:5173
```

### Production

```bash
# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## Sections de la page

### Accueil
- Hero section avec effet parallax
- Call-to-action principal
- Navigation sticky

### Expériences
- Cartes asymétriques avec images
- Animations au scroll
- Boutons d'interaction

### Tarifs
- Trois formules (Classique, Découverte, Exception)
- Cards interactives avec hover effects
- Badge "Populaire" sur l'offre recommandée

### Contact
- Formulaire avec validation en temps réel
- Informations de contact
- Design moderne avec animations

## Fonctionnalités JavaScript

- Menu hamburger responsive
- Smooth scrolling vers les sections
- Validation de formulaire dynamique
- Animations à l'intersection (Intersection Observer)
- Effets parallax optimisés
- Navigation active selon la section visible

## Optimisations

- Images optimisées et lazy loading
- CSS et JS minifiés en production
- Polices web optimisées
- Responsive design mobile-first
- Accessibilité (ARIA labels, navigation clavier)

## Auteur

**CCDevX**
- Portfolio : [Lien vers portfolio]
- LinkedIn : [Lien LinkedIn]
- GitHub : [Lien GitHub]
