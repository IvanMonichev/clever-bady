export default class Burger {
  constructor(burgerSelectors) {
    this._burgerOpeningButtonName = burgerSelectors.burgerOpeningButtonName;
    this._headerNavigationMenuName = burgerSelectors.headerNavigationMenuName;

    this._burgerOpeningButtonElement = document.querySelector(`.${this._burgerOpeningButtonName}`);
    this._headerNavigationMenuElement = document.querySelector(`.${this._headerNavigationMenuName}`);
    this._rootElement = document.querySelector('.root')
  }

  _toggleMenu() {
    this._headerNavigationMenuElement.classList.toggle(`${this._headerNavigationMenuName}--is-active`);
    this._burgerOpeningButtonElement.classList.toggle(`${this._burgerOpeningButtonName}--is-active`);
    this._rootElement.classList.toggle('lock');
  }

  _closeMenu(evt) {
    if (evt.target.matches('.header__menu-link')) {
      if(this._rootElement.matches('.lock')) {
        this._toggleMenu();
      }
    }

  }

  setEventListeners() {
    this._burgerOpeningButtonElement.addEventListener('click', () => this._toggleMenu());
    this._headerNavigationMenuElement.addEventListener('click', (evt) => this._closeMenu(evt))
  }
}
