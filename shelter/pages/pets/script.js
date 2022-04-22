const wrapper = document.querySelector('.header__wrapper'),
      overlay = document.querySelector('.nav-overley'),
      burgerBtn = document.querySelector('.burger'),
      menu = document.querySelector('.nav'),
      menuLinks = [...document.querySelectorAll('.nav__link')];



burgerBtn.addEventListener('click', openMenu);
menuLinks.forEach(el =>
  el.addEventListener ('click', openMenu));

function  openMenu() {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  wrapper.classList.toggle('active');
  burgerBtn.classList.toggle('active');

}