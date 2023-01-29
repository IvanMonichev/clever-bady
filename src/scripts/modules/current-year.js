const getCurrentYear = (selector) => {
  document.querySelector(selector).textContent = new Date().getFullYear();
}

getCurrentYear('.copyright__year');
