const wrapper = document.querySelector('.header__wrapper'),
      overlay = document.querySelector('.nav-overley'),
      burgerBtn = document.querySelector('.burger'),
      menu = document.querySelector('.nav'),
      menuLinks = [...document.querySelectorAll('.nav__link')],
      logoMain = document.querySelector('.logo__link_main');


logoMain.classList.add('disabled'); //блок перехода по ссылке по клику на лого на главной странице
//menuLinks[2].classList.toggle('disabled');
//menuLinks[3].classList.toggle('disabled');
document.body.style.overflow = "visible";

burgerBtn.addEventListener('click', toggleMenu);//открываем иеню по клику на кнопку

menuLinks.forEach(el =>
  el.addEventListener('click', toggleMenu));//закрываем меню по клику на ссылку

  menuLinks.forEach(el =>
    el.addEventListener('click', () => {
      document.body.style.overflow = "visible"
    })); //разрешаем скролл при клике на ссылку

overlay.addEventListener('click', toggleMenu); //открываем блок с затемнением

function  toggleMenu() {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  wrapper.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  document.body.style.overflow = "hidden"; //запретить скролл при открытии меню
}






