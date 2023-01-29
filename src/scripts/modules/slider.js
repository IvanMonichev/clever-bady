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

  modules: [Navigation]
})
