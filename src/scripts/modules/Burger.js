export default class Burger {
  constructor(burgerSelectors) {
    this._burgerOpeningButtonName = burgerSelectors.burgerOpeningButtonName;
    this._headerNavigationMenuName = burgerSelectors.headerNavigationMenuName;

    this._burgerOpeningButtonElement = document.querySelector(`.${this._burgerOpeningButtonName}`);
    this._headerNavigationMenuElement = document.querySelector(`.${this._headerNavigationMenuName}`);
  }

  _toggleMenu() {
    this._headerNavigationMenuElement.classList.toggle(`${this._headerNavigationMenuName}--is-active`);
    this._burgerOpeningButtonElement.classList.toggle(`${this._burgerOpeningButtonName}--is-active`);
    document.querySelector('.root').classList.toggle('lock');
  }

  setEventListeners() {
    this._burgerOpeningButtonElement.addEventListener('click', () => this._toggleMenu());
  }
}
