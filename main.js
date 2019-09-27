const mobileMenu = document.querySelector('.mobile_menu');

document.querySelector('.burger_menu').addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

document.querySelector('#mobile-menu-close-btn').addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
