export default class ScrollUpButton {
  constructor(buttonSelector) {
    this._buttonUpElement = document.querySelector(buttonSelector);
  }

  _setVisibility() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this._buttonUpElement.classList.add('interface__btn-up--is-show');
    } else {
      this._buttonUpElement.classList.remove('interface__btn-up--is-show');
    }
  }

  _scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  setEventListeners() {
    window.addEventListener('scroll', () => this._setVisibility());
    this._buttonUpElement.addEventListener('click', () => this._scrollUp());
  }
}
