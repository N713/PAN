import Swiper from 'swiper';

const setSwiper = () => {
    const swiper = new Swiper('.swiper', {
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        width: 230,

        breakpoints: {
            1260: {
                width: 470
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
        }
    });
}

export { setSwiper }
