import { isWebp } from './utils/is-webp.js'
import '../../node_modules/lazysizes/lazysizes.min.js';
import '../../node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.min.js';
import './modules/video.js';
import './modules/slider.js';
import './modules/map.js';
import './modules/current-year.js'
import Burger from './modules/Burger.js';

const headerMenuElements = {
  burgerOpeningButtonName: 'burger',
  headerNavigationMenuName: 'header__box'
}

const burger = new Burger(headerMenuElements);
burger.setEventListeners();

isWebp();
