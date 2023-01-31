import Swiper, { Navigation } from 'swiper';
import 'swiper/css/bundle';

const slider = new Swiper('.slider', {
  slidesPerView: 4,
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: '.slider__navigation-btn--next',
    prevEl: '.slider__navigation-btn--prev'
  },

  breakpoints: {
    1110: {
      slidesPerView: 4,
    },

    800: {
      slidesPerView: 3,
    },

    577: {
      slidesPerView: 2,
    },

    1: {
      slidesPerView: 1,
      autoplay: true,
    }

  },



  modules: [Navigation]
})
