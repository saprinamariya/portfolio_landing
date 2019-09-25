const mobileMenu = document.querySelector('.mobile_menu');

document.querySelector('.burger_menu').addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

document.querySelector('#mobile-menu-close-btn').addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});
