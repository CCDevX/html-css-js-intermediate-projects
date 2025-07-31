const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.list-nav');
const allLinks = document.querySelectorAll('.item-nav');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

