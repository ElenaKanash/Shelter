const wrapper = document.querySelector('.header__wrapper'),
      overlay = document.querySelector('.nav-overley'),
      burgerBtn = document.querySelector('.burger'),
      menu = document.querySelector('.nav'),
      menuLinks = [...document.querySelectorAll('.nav__link')];
      console.log(menuLinks)

//menuLinks[2].classList.toggle('disabled');
//menuLinks[3].classList.toggle('disabled');


burgerBtn.addEventListener('click', toggleMenu); 

menuLinks.forEach(el =>
  el.addEventListener('click', toggleMenu));
  overlay.addEventListener('click', toggleMenu);

  menuLinks.forEach(el =>
    el.addEventListener('click', () => {
      document.body.style.overflow = "visible"
    }));

function  toggleMenu() {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  wrapper.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  document.body.style.overflow = "hidden";//запретить скролл при открытии меню
}