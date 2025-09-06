(function() {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = "/* Reset et base */\r\n*, ::before, ::after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n    font-family: 'Inter', sans-serif;\r\n    line-height: 1.6;\r\n    color: #333;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n/* Navigation moderne */\r\nnav {\r\n    position: fixed;\r\n    width: 100%;\r\n    background: rgba(33, 33, 33, 0.95);\r\n    backdrop-filter: blur(15px);\r\n    border-bottom: 1px solid rgba(255,255,255,0.1);\r\n    z-index: 1000;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\nnav.scrolled {\r\n    background: rgba(33, 33, 33, 0.98);\r\n    box-shadow: 0 4px 30px rgba(0,0,0,0.3);\r\n}\r\n\r\n.nav-container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.logo {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    color: #f1f1f1;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.logo i {\r\n    color: #dc143c;\r\n    font-size: 28px;\r\n}\r\n\r\n.liste-nav {\r\n    display: flex;\r\n    list-style: none;\r\n    gap: 40px;\r\n}\r\n\r\n.item-nav a {\r\n    text-decoration: none;\r\n    color: #f1f1f1;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    transition: all 0.3s ease;\r\n    position: relative;\r\n    padding: 10px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.item-nav a i {\r\n    font-size: 14px;\r\n    opacity: 0.8;\r\n}\r\n\r\n.item-nav a::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 2px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    transition: all 0.3s ease;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.item-nav a:hover::after {\r\n    width: 100%;\r\n}\r\n\r\n.item-nav a:hover {\r\n    color: #fff;\r\n    transform: translateY(-2px);\r\n}\r\n\r\n/* Menu mobile */\r\n.logo-menu {\r\n    display: none;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 30px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.logo-menu span {\r\n    width: 100%;\r\n    height: 3px;\r\n    background: #f1f1f1;\r\n    border-radius: 2px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.logo-menu.active span:nth-child(1) {\r\n    transform: rotate(45deg) translate(5px, 5px);\r\n}\r\n\r\n.logo-menu.active span:nth-child(2) {\r\n    opacity: 0;\r\n}\r\n\r\n.logo-menu.active span:nth-child(3) {\r\n    transform: rotate(-45deg) translate(8px, -8px);\r\n}\r\n\r\n/* Section Accueil */\r\n.accueil {\r\n    height: 100vh;\r\n    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),\r\n    url('" + new URL("accueil-pic-lum-down.jpg", document.currentScript && document.currentScript.tagName.toUpperCase() === "SCRIPT" && document.currentScript.src || document.baseURI).href + "');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.hero-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(135deg, rgba(220,20,60,0.3), rgba(0,0,0,0.3));\r\n}\r\n\r\n.hero-content {\r\n    position: relative;\r\n    z-index: 2;\r\n    max-width: 800px;\r\n    padding: 0 20px;\r\n}\r\n\r\n.logo-kyoto {\r\n    width: 120px;\r\n    height: 120px;\r\n    background: rgba(255,255,255,0.1);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto 30px;\r\n    backdrop-filter: blur(10px);\r\n    border: 2px solid rgba(255,255,255,0.2);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.logo-kyoto i {\r\n    font-size: 48px;\r\n    color: #dc143c;\r\n}\r\n\r\n.logo-kyoto:hover {\r\n    transform: scale(1.1);\r\n    background: rgba(255,255,255,0.2);\r\n}\r\n\r\n.hero-title {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: clamp(3rem, 8vw, 6rem);\r\n    font-weight: 700;\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n    text-shadow: 2px 2px 20px rgba(0,0,0,0.5);\r\n    animation: fadeInUp 1s ease-out;\r\n}\r\n\r\n.sous-titre {\r\n    font-size: clamp(1.2rem, 3vw, 1.8rem);\r\n    color: #f1f1f1;\r\n    margin-bottom: 40px;\r\n    text-shadow: 1px 1px 10px rgba(0,0,0,0.5);\r\n    animation: fadeInUp 1s ease-out 0.2s both;\r\n}\r\n\r\n.btn-accueil {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 18px 36px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    color: #fff;\r\n    text-decoration: none;\r\n    border-radius: 50px;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 8px 25px rgba(220,20,60,0.3);\r\n    animation: fadeInUp 1s ease-out 0.4s both;\r\n}\r\n\r\n.btn-accueil:hover {\r\n    transform: translateY(-3px) scale(1.05);\r\n    box-shadow: 0 15px 35px rgba(220,20,60,0.4);\r\n    background: linear-gradient(45deg, #b8112a, #dc143c);\r\n}\r\n\r\n.scroll-indicator {\r\n    position: absolute;\r\n    bottom: 30px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    animation: bounce 2s infinite;\r\n}\r\n\r\n.scroll-arrow {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 2px solid #fff;\r\n    border-top: none;\r\n    border-left: none;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n/* Section asymétrique modernisée */\r\n.section-asymetrique {\r\n    padding: 100px 0;\r\n    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\r\n    position: relative;\r\n}\r\n\r\n.section-header {\r\n    text-align: center;\r\n    margin-bottom: 80px;\r\n}\r\n\r\n.section-asymetrique h2 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: clamp(2.5rem, 5vw, 4rem);\r\n    color: #2c3e50;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.section-subtitle {\r\n    font-size: 1.2rem;\r\n    color: #6c757d;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.experiences-container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.experience-card {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 60px;\r\n    align-items: center;\r\n    margin-bottom: 120px;\r\n    background: #fff;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.experience-card:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 30px 80px rgba(0,0,0,0.15);\r\n}\r\n\r\n.experience-card.bloc-right {\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.experience-card.bloc-right .card-content {\r\n    order: 2;\r\n}\r\n\r\n.experience-card.bloc-right .card-image {\r\n    order: 1;\r\n}\r\n\r\n.card-content {\r\n    padding: 60px 40px;\r\n}\r\n\r\n.card-icon {\r\n    width: 80px;\r\n    height: 80px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.card-icon i {\r\n    font-size: 32px;\r\n    color: #fff;\r\n}\r\n\r\n.card-content h3 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: 2rem;\r\n    color: #2c3e50;\r\n    margin-bottom: 20px;\r\n    line-height: 1.3;\r\n}\r\n\r\n.card-content p {\r\n    font-size: 1.1rem;\r\n    line-height: 1.8;\r\n    color: #6c757d;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.btn-experience {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 15px 30px;\r\n    background: transparent;\r\n    border: 2px solid #dc143c;\r\n    color: #dc143c;\r\n    border-radius: 50px;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.btn-experience:hover {\r\n    background: #dc143c;\r\n    color: #fff;\r\n    transform: translateX(5px);\r\n}\r\n\r\n.card-image {\r\n    position: relative;\r\n    height: 400px;\r\n    overflow: hidden;\r\n}\r\n\r\n.card-image img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.card-image:hover img {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.image-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(45deg, rgba(220,20,60,0.3), rgba(0,0,0,0.2));\r\n    opacity: 0;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.card-image:hover .image-overlay {\r\n    opacity: 1;\r\n}\r\n\r\n/* Section parallax améliorée */\r\n.parallax {\r\n    height: 400px;\r\n    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),\r\n    url('" + new URL("parallax-large-flou.jpg", document.currentScript && document.currentScript.tagName.toUpperCase() === "SCRIPT" && document.currentScript.src || document.baseURI).href + "');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.parallax-content h2 {\r\n    font-size: clamp(3rem, 6vw, 5rem);\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n    text-shadow: 2px 2px 20px rgba(0,0,0,0.7);\r\n}\r\n\r\n.parallax-subtitle {\r\n    font-size: 1.5rem;\r\n    color: #f1f1f1;\r\n    margin-bottom: 30px;\r\n    text-shadow: 1px 1px 10px rgba(0,0,0,0.7);\r\n}\r\n\r\n.parallax-decoration {\r\n    display: flex;\r\n    gap: 30px;\r\n    justify-content: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.parallax-decoration i {\r\n    font-size: 2rem;\r\n    color: #dc143c;\r\n    animation: float 3s ease-in-out infinite;\r\n}\r\n\r\n.parallax-decoration i:nth-child(2) {\r\n    animation-delay: 0.5s;\r\n}\r\n\r\n.parallax-decoration i:nth-child(3) {\r\n    animation-delay: 1s;\r\n}\r\n\r\n/* Section tarifs modernisée */\r\n.section-tarifs {\r\n    padding: 100px 0;\r\n    background: #f8f9fa;\r\n}\r\n\r\n.section-tarifs h3 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: clamp(2.5rem, 5vw, 3.5rem);\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.section-divider {\r\n    width: 100px;\r\n    height: 4px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    border: none;\r\n    border-radius: 2px;\r\n    margin: 40px auto 80px;\r\n}\r\n\r\n.container-tarifs {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 40px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.cartes-tarifs {\r\n    background: #fff;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    box-shadow: 0 15px 40px rgba(0,0,0,0.1);\r\n    transition: all 0.3s ease;\r\n    position: relative;\r\n    width: 350px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.cartes-tarifs:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 25px 60px rgba(0,0,0,0.15);\r\n}\r\n\r\n.cartes-tarifs.featured {\r\n    transform: scale(1.05);\r\n    border: 3px solid #dc143c;\r\n}\r\n\r\n.popular-badge {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    color: #fff;\r\n    padding: 8px 16px;\r\n    border-radius: 20px;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    z-index: 1;\r\n}\r\n\r\n.card-header {\r\n    padding: 40px 30px 30px;\r\n    text-align: center;\r\n    background: linear-gradient(135deg, #f8f9fa, #e9ecef);\r\n}\r\n\r\n.card-header h4 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: 2rem;\r\n    color: #2c3e50;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.price {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    gap: 5px;\r\n}\r\n\r\n.currency {\r\n    font-size: 1.5rem;\r\n    color: #dc143c;\r\n    font-weight: 600;\r\n}\r\n\r\n.amount {\r\n    font-size: 3rem;\r\n    color: #dc143c;\r\n    font-weight: 700;\r\n}\r\n\r\n.period {\r\n    font-size: 1rem;\r\n    color: #6c757d;\r\n}\r\n\r\n.card-features {\r\n    padding: 30px;\r\n}\r\n\r\n.feature {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding: 12px 0;\r\n    border-bottom: 1px solid #e9ecef;\r\n}\r\n\r\n.feature:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.feature i {\r\n    width: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.feature.included i {\r\n    color: #28a745;\r\n}\r\n\r\n.feature.excluded i {\r\n    color: #dc3545;\r\n}\r\n\r\n.feature.excluded span {\r\n    color: #6c757d;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.btn-tarif {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    margin: 30px;\r\n    padding: 15px 30px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    color: #fff;\r\n    text-decoration: none;\r\n    border-radius: 50px;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.btn-tarif:hover {\r\n    background: linear-gradient(45deg, #b8112a, #dc143c);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 10px 30px rgba(220,20,60,0.3);\r\n}\r\n\r\n/* Section contact modernisée */\r\n.section-contact {\r\n    padding: 100px 0;\r\n    background: linear-gradient(135deg, #2c3e50, #34495e);\r\n    color: #fff;\r\n}\r\n\r\n.section-contact h2 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: clamp(2.5rem, 5vw, 3.5rem);\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.section-contact .section-subtitle {\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    color: #bdc3c7;\r\n    margin-bottom: 80px;\r\n}\r\n\r\n.contact-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 80px;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.contact-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n}\r\n\r\n.info-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.info-icon {\r\n    width: 60px;\r\n    height: 60px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.info-icon i {\r\n    font-size: 24px;\r\n    color: #fff;\r\n}\r\n\r\n.info-text h4 {\r\n    font-size: 1.3rem;\r\n    margin-bottom: 5px;\r\n    color: #fff;\r\n}\r\n\r\n.info-text p {\r\n    color: #bdc3c7;\r\n    line-height: 1.6;\r\n}\r\n\r\n.form-bloc {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n}\r\n\r\n.form-row {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 30px;\r\n}\r\n\r\n.form-groupe {\r\n    position: relative;\r\n}\r\n\r\n.form-groupe label {\r\n    display: block;\r\n    font-size: 1rem;\r\n    color: #bdc3c7;\r\n    margin-bottom: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n.form-groupe input,\r\n.form-groupe textarea {\r\n    width: 100%;\r\n    padding: 15px 0;\r\n    background: transparent;\r\n    border: none;\r\n    border-bottom: 2px solid #34495e;\r\n    color: #fff;\r\n    font-size: 1.1rem;\r\n    transition: all 0.3s ease;\r\n    outline: none;\r\n}\r\n\r\n.form-groupe input:focus,\r\n.form-groupe textarea:focus {\r\n    border-bottom-color: #dc143c;\r\n}\r\n\r\n.form-groupe textarea {\r\n    border: 2px solid #34495e;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n    resize: vertical;\r\n    min-height: 120px;\r\n}\r\n\r\n.form-groupe textarea:focus {\r\n    border-color: #dc143c;\r\n}\r\n\r\n.form-line {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 2px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    transition: width 0.3s ease;\r\n}\r\n\r\n.form-groupe input:focus + .form-line {\r\n    width: 100%;\r\n}\r\n\r\n.button-sub {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 12px;\r\n    padding: 18px 40px;\r\n    background: linear-gradient(45deg, #dc143c, #ff6b7a);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 50px;\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    align-self: flex-start;\r\n}\r\n\r\n.button-sub:hover {\r\n    background: linear-gradient(45deg, #b8112a, #dc143c);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 10px 30px rgba(220,20,60,0.3);\r\n}\r\n\r\n/* Footer moderne */\r\nfooter {\r\n    background: #2c3e50;\r\n    color: #fff;\r\n    padding: 40px 0 20px;\r\n}\r\n\r\n.footer-content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.footer-logo {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.footer-logo i {\r\n    color: #dc143c;\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.footer-social {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n\r\n.footer-social a {\r\n    width: 45px;\r\n    height: 45px;\r\n    background: rgba(255,255,255,0.1);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #fff;\r\n    transition: all 0.3s ease;\r\n    text-decoration: none;\r\n}\r\n\r\n.footer-social a:hover {\r\n    background: #dc143c;\r\n    transform: translateY(-3px);\r\n}\r\n\r\n.footer-bottom {\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-top: 1px solid #34495e;\r\n    color: #bdc3c7;\r\n}\r\n\r\n/* Animations */\r\n@keyframes fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {\r\n        transform: translateY(0) translateX(-50%);\r\n    }\r\n    40% {\r\n        transform: translateY(-10px) translateX(-50%);\r\n    }\r\n    60% {\r\n        transform: translateY(-5px) translateX(-50%);\r\n    }\r\n}\r\n\r\n@keyframes float {\r\n    0%, 100% {\r\n        transform: translateY(0);\r\n    }\r\n    50% {\r\n        transform: translateY(-10px);\r\n    }\r\n}\r\n\r\n/* Responsive Design */\r\n\r\n/* Tablettes */\r\n@media screen and (max-width: 1024px) {\r\n    .experience-card {\r\n        grid-template-columns: 1fr;\r\n        gap: 0;\r\n        max-width: 600px;\r\n        margin: 0 auto 80px;\r\n    }\r\n\r\n    .experience-card.bloc-right .card-content,\r\n    .experience-card.bloc-right .card-image {\r\n        order: unset;\r\n    }\r\n\r\n    .card-content {\r\n        padding: 40px 30px;\r\n    }\r\n\r\n    .card-image {\r\n        height: 300px;\r\n    }\r\n\r\n    .contact-content {\r\n        grid-template-columns: 1fr;\r\n        gap: 60px;\r\n    }\r\n\r\n    .container-tarifs {\r\n        gap: 30px;\r\n    }\r\n\r\n    .cartes-tarifs {\r\n        width: 300px;\r\n    }\r\n}\r\n\r\n/* Large écrans - garde 3 cartes en ligne */\r\n@media screen and (max-width: 1200px) {\r\n    .container-tarifs {\r\n        flex-wrap: wrap;\r\n        max-width: 800px;\r\n    }\r\n\r\n    .cartes-tarifs {\r\n        width: 340px;\r\n    }\r\n}\r\n\r\n/* Tablettes portrait et grands mobiles */\r\n@media screen and (max-width: 768px) {\r\n    .nav-container {\r\n        padding: 0 15px;\r\n    }\r\n\r\n    .liste-nav {\r\n        position: fixed;\r\n        top: 80px;\r\n        left: 0;\r\n        right: 0;\r\n        background: rgba(33, 33, 33, 0.98);\r\n        backdrop-filter: blur(15px);\r\n        flex-direction: column;\r\n        gap: 0;\r\n        transform: translateY(-100%);\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: all 0.3s ease;\r\n        max-height: calc(100vh - 80px);\r\n        overflow-y: auto;\r\n    }\r\n\r\n    .liste-nav.active {\r\n        transform: translateY(0);\r\n        opacity: 1;\r\n        visibility: visible;\r\n    }\r\n\r\n    .item-nav {\r\n        padding: 20px;\r\n        border-bottom: 1px solid rgba(255,255,255,0.1);\r\n    }\r\n\r\n    .item-nav a {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .logo-menu {\r\n        display: flex;\r\n    }\r\n\r\n    /* Hero section mobile */\r\n    .accueil {\r\n        height: 100vh;\r\n        padding: 0 15px;\r\n    }\r\n\r\n    .hero-content {\r\n        padding: 0 15px;\r\n    }\r\n\r\n    .logo-kyoto {\r\n        width: 100px;\r\n        height: 100px;\r\n        margin-bottom: 25px;\r\n    }\r\n\r\n    .logo-kyoto i {\r\n        font-size: 36px;\r\n    }\r\n\r\n    /* Sections spacing */\r\n    .section-asymetrique,\r\n    .section-tarifs,\r\n    .section-contact {\r\n        padding: 80px 0;\r\n    }\r\n\r\n    .section-header {\r\n        margin-bottom: 60px;\r\n    }\r\n\r\n    /* Expériences cards mobile */\r\n    .experiences-container {\r\n        padding: 0 15px;\r\n    }\r\n\r\n    .experience-card {\r\n        margin-bottom: 60px;\r\n        box-shadow: 0 10px 30px rgba(0,0,0,0.1);\r\n    }\r\n\r\n    .card-content {\r\n        padding: 30px 25px;\r\n    }\r\n\r\n    .card-content h3 {\r\n        font-size: 1.5rem;\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    .card-content p {\r\n        font-size: 1rem;\r\n        line-height: 1.6;\r\n        margin-bottom: 25px;\r\n    }\r\n\r\n    .card-icon {\r\n        width: 60px;\r\n        height: 60px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .card-icon i {\r\n        font-size: 24px;\r\n    }\r\n\r\n    /* Tarifs mobile */\r\n    .container-tarifs {\r\n        flex-direction: column;\r\n        align-items: center;\r\n        max-width: 350px;\r\n        gap: 25px;\r\n    }\r\n\r\n    .cartes-tarifs {\r\n        width: 100%;\r\n        max-width: 350px;\r\n    }\r\n\r\n    .cartes-tarifs.featured {\r\n        transform: none;\r\n        margin: 10px 0;\r\n    }\r\n\r\n    .card-header {\r\n        padding: 30px 20px 25px;\r\n    }\r\n\r\n    .card-header h4 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .amount {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .card-features {\r\n        padding: 25px 20px;\r\n    }\r\n\r\n    .feature {\r\n        padding: 10px 0;\r\n        font-size: 14px;\r\n    }\r\n\r\n    /* Contact mobile */\r\n    .form-row {\r\n        grid-template-columns: 1fr;\r\n        gap: 20px;\r\n    }\r\n\r\n    .contact-info {\r\n        gap: 30px;\r\n    }\r\n\r\n    .info-item {\r\n        gap: 15px;\r\n    }\r\n\r\n    .info-icon {\r\n        width: 50px;\r\n        height: 50px;\r\n    }\r\n\r\n    .info-icon i {\r\n        font-size: 18px;\r\n    }\r\n\r\n    /* Footer mobile */\r\n    .footer-content {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n        text-align: center;\r\n    }\r\n\r\n    .footer-social {\r\n        gap: 15px;\r\n    }\r\n\r\n    .footer-social a {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n}\r\n\r\n/* Mobiles */\r\n@media screen and (max-width: 480px) {\r\n    .container {\r\n        padding: 0 15px;\r\n    }\r\n\r\n    .nav-container {\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .logo {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .logo i {\r\n        font-size: 20px;\r\n    }\r\n\r\n    /* Hero ultra mobile */\r\n    .accueil {\r\n        height: 100vh;\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .logo-kyoto {\r\n        width: 80px;\r\n        height: 80px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .logo-kyoto i {\r\n        font-size: 28px;\r\n    }\r\n\r\n    .btn-accueil {\r\n        padding: 15px 25px;\r\n        font-size: 16px;\r\n        gap: 8px;\r\n    }\r\n\r\n    /* Sections ultra mobile */\r\n    .section-asymetrique,\r\n    .section-tarifs,\r\n    .section-contact {\r\n        padding: 60px 0;\r\n    }\r\n\r\n    .section-header {\r\n        margin-bottom: 40px;\r\n        padding: 0 10px;\r\n    }\r\n\r\n    /* Cards ultra mobile */\r\n    .experiences-container {\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .experience-card {\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .card-content {\r\n        padding: 25px 20px;\r\n    }\r\n\r\n    .card-content h3 {\r\n        font-size: 1.3rem;\r\n        line-height: 1.3;\r\n    }\r\n\r\n    .card-content p {\r\n        font-size: 0.95rem;\r\n        line-height: 1.5;\r\n    }\r\n\r\n    .btn-experience {\r\n        padding: 12px 20px;\r\n        font-size: 14px;\r\n        gap: 8px;\r\n    }\r\n\r\n    .card-image {\r\n        height: 250px;\r\n    }\r\n\r\n    /* Parallax mobile */\r\n    .parallax {\r\n        height: 250px;\r\n        background-attachment: scroll; /* Fix pour mobile */\r\n    }\r\n\r\n    .parallax-decoration {\r\n        gap: 20px;\r\n    }\r\n\r\n    .parallax-decoration i {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    /* Tarifs ultra mobile */\r\n    .container-tarifs {\r\n        max-width: 100%;\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .cartes-tarifs {\r\n        width: 100%;\r\n        max-width: 320px;\r\n    }\r\n\r\n    .card-header {\r\n        padding: 25px 15px 20px;\r\n    }\r\n\r\n    .card-header h4 {\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    .amount {\r\n        font-size: 2.2rem;\r\n    }\r\n\r\n    .card-features {\r\n        padding: 20px 15px;\r\n    }\r\n\r\n    .feature {\r\n        font-size: 13px;\r\n        gap: 10px;\r\n    }\r\n\r\n    .btn-tarif {\r\n        margin: 20px 15px;\r\n        padding: 12px 25px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    /* Contact ultra mobile */\r\n    .section-contact {\r\n        padding: 50px 0;\r\n    }\r\n\r\n    .contact-content {\r\n        padding: 0 10px;\r\n        gap: 40px;\r\n    }\r\n\r\n    .form-groupe input,\r\n    .form-groupe textarea {\r\n        font-size: 16px; /* Évite le zoom sur iOS */\r\n        padding: 12px 0;\r\n    }\r\n\r\n    .form-groupe textarea {\r\n        min-height: 100px;\r\n        padding: 12px;\r\n    }\r\n\r\n    .button-sub {\r\n        padding: 15px 30px;\r\n        font-size: 16px;\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n\r\n    /* Footer ultra mobile */\r\n    .footer-content {\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .footer-logo {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .footer-social a {\r\n        width: 35px;\r\n        height: 35px;\r\n    }\r\n}\r\n\r\n/* Très petits écrans */\r\n@media screen and (max-width: 320px) {\r\n    .hero-title {\r\n        font-size: 2.5rem !important;\r\n    }\r\n\r\n    .sous-titre {\r\n        font-size: 1rem !important;\r\n    }\r\n\r\n    .section-asymetrique h2 {\r\n        font-size: 2rem !important;\r\n    }\r\n\r\n    .card-content h3 {\r\n        font-size: 1.2rem !important;\r\n    }\r\n\r\n    .cartes-tarifs {\r\n        max-width: 280px;\r\n    }\r\n\r\n    .amount {\r\n        font-size: 2rem !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .nav-container {\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .logo {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .logo i {\r\n        font-size: 22px;\r\n    }\r\n\r\n    .card-content {\r\n        padding: 30px 20px;\r\n    }\r\n\r\n    .card-content h3 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .section-asymetrique,\r\n    .section-tarifs,\r\n    .section-contact {\r\n        padding: 60px 0;\r\n    }\r\n\r\n    .container {\r\n        padding: 0 15px;\r\n    }\r\n}/*$vite$:1*/";
  document.head.appendChild(__vite_style__);
  console.log("🚀 app.js chargé et exécuté !");
  console.log("Type de document:", typeof document);
  console.log("ReadyState:", document.readyState);
  const navbar = document.getElementById("navbar");
  const logoMenu = document.querySelector(".logo-menu");
  const menu = document.querySelector(".liste-nav");
  const allLinks = document.querySelectorAll(".item-nav a");
  const experienceCards = document.querySelectorAll(".experience-card");
  const contactForm = document.getElementById("contactForm");
  document.addEventListener("DOMContentLoaded", function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeFormValidation();
    initializePricingCards();
  });
  function initializeNavigation() {
    logoMenu.addEventListener("click", toggleMobileMenu);
    allLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
    allLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });
    document.addEventListener("click", function(e) {
      if (!menu.contains(e.target) && !logoMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }
  function toggleMobileMenu() {
    menu.classList.toggle("active");
    logoMenu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  function closeMobileMenu() {
    menu.classList.remove("active");
    logoMenu.classList.remove("active");
    document.body.style.overflow = "";
  }
  function handleSmoothScroll(e) {
    const href = e.target.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    }
    closeMobileMenu();
  }
  function initializeScrollEffects() {
    window.addEventListener("scroll", handleScroll);
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    experienceCards.forEach((card) => observer.observe(card));
    const pricingCards = document.querySelectorAll(".cartes-tarifs");
    pricingCards.forEach((card) => observer.observe(card));
  }
  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    const heroSection = document.querySelector(".accueil");
    if (heroSection) {
      const parallaxSpeed = 0.5;
      heroSection.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
    }
    updateActiveNavLink();
  }
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 100;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        allLinks.forEach((link) => {
          link.classList.remove("active");
        });
        const activeLink = document.querySelector(`.item-nav a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }
  function initializeAnimations() {
    const pricingCards = document.querySelectorAll(".cartes-tarifs");
    pricingCards.forEach((card) => {
      card.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-10px) scale(1.02)";
      });
      card.addEventListener("mouseleave", function() {
        if (!this.classList.contains("featured")) {
          this.style.transform = "translateY(0) scale(1)";
        } else {
          this.style.transform = "translateY(0) scale(1.05)";
        }
      });
    });
    const buttons = document.querySelectorAll(".btn-experience, .btn-tarif, .button-sub");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-2px)";
      });
      button.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
      });
    });
    experienceCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
      card.style.transition = "all 0.6s ease-out";
    });
    const pricingCardsForAnimation = document.querySelectorAll(".cartes-tarifs");
    pricingCardsForAnimation.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
      card.style.transition = "all 0.6s ease-out";
    });
  }
  function initializeFormValidation() {
    if (!contactForm) return;
    const inputs = contactForm.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => clearFieldError(input));
    });
    contactForm.addEventListener("submit", handleFormSubmit);
  }
  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute("name");
    let isValid = true;
    let errorMessage = "";
    clearFieldError(field);
    switch (fieldName) {
      case "prenom":
      case "nom":
        if (value.length < 2) {
          isValid = false;
          errorMessage = "Ce champ doit contenir au moins 2 caractères";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = "Veuillez entrer une adresse email valide";
        }
        break;
      case "message":
        if (value.length < 10) {
          isValid = false;
          errorMessage = "Le message doit contenir au moins 10 caractères";
        }
        break;
    }
    if (!isValid) {
      showFieldError(field, errorMessage);
    }
    return isValid;
  }
  function showFieldError(field, message) {
    const formGroupe = field.closest(".form-groupe");
    const existingError = formGroupe.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 0.9rem;
        margin-top: 5px;
        animation: fadeInUp 0.3s ease-out;
    `;
    errorDiv.textContent = message;
    formGroupe.appendChild(errorDiv);
    field.style.borderColor = "#dc3545";
  }
  function clearFieldError(field) {
    const formGroupe = field.closest(".form-groupe");
    const errorMessage = formGroupe.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.remove();
    }
    field.style.borderColor = "";
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll("input[required], textarea[required]");
    let allValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) {
        allValid = false;
      }
    });
    if (allValid) {
      submitForm();
    } else {
      const firstError = contactForm.querySelector(".error-message");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }
  function submitForm() {
    const submitButton = contactForm.querySelector(".button-sub");
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitButton.disabled = true;
    setTimeout(() => {
      showSuccessMessage();
      contactForm.reset();
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }, 2e3);
  }
  function showSuccessMessage() {
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
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
    contactForm.insertBefore(successDiv, contactForm.firstChild);
    setTimeout(() => {
      successDiv.style.animation = "fadeOut 0.5s ease-out forwards";
      setTimeout(() => successDiv.remove(), 500);
    }, 5e3);
  }
  function initializePricingCards() {
    const pricingCards = document.querySelectorAll(".cartes-tarifs");
    pricingCards.forEach((card) => {
      card.addEventListener("click", function() {
        pricingCards.forEach((c) => c.classList.remove("selected"));
        this.classList.add("selected");
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });
  }
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
  const optimizedScrollHandler = debounce(handleScroll, 10);
  window.removeEventListener("scroll", handleScroll);
  window.addEventListener("scroll", optimizedScrollHandler);
  window.addEventListener("error", function(e) {
    console.error("Erreur JavaScript:", e.error);
  });
  function preloadImages() {
    const imageUrls = [
      "ressources/kyoto-temple.jpg",
      "ressources/chateau-kyoto.jpg",
      "ressources/geisha.jpg",
      "ressources/parallax-large-flou.jpg"
    ];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }
  window.addEventListener("load", preloadImages);
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      closeMobileMenu();
    }
    if (e.key === "Tab" && menu.classList.contains("active")) {
      const focusableElements = menu.querySelectorAll("a");
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
  function initializeAccessibility() {
    logoMenu.setAttribute("aria-label", "Toggle navigation menu");
    logoMenu.setAttribute("aria-expanded", "false");
    logoMenu.addEventListener("click", function() {
      const isExpanded = menu.classList.contains("active");
      this.setAttribute("aria-expanded", isExpanded);
    });
  }
  initializeAccessibility();
})();
