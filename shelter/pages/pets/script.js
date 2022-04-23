const wrapper = document.querySelector('.header__wrapper'),
      overlay = document.querySelector('.nav-overley'),
      burgerBtn = document.querySelector('.burger'),
      menu = document.querySelector('.nav'),
      menuLinks = [...document.querySelectorAll('.nav__link')];
      console.log(menuLinks)


burgerBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(el =>
  el.addEventListener('click', toggleMenu));
  overlay.addEventListener('click', toggleMenu);

function  toggleMenu() {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  wrapper.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  menuLinks[2].classList.toggle('disabled');
  menuLinks[3].classList.toggle('disabled');
  document.body.style.overflow = "hidden";//запретить скролл при открытии меню
}