document.querySelector('.arrow_top_btn').addEventListener('click', function(event) {
    window.scrollTo(0 , 0);
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
        nextEl: '.slider_arrow_right',
        prevEl: '.slider_arrow_left',
    }
});
