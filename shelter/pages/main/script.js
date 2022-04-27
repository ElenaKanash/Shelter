// burger start

const wrapper = document.querySelector('.header__wrapper'),
      overlay = document.querySelector('.nav-overley'),
      burgerBtn = document.querySelector('.burger'),
      body = document.querySelector('.body'),
      menu = document.querySelector('.nav'),
      menuLinks = [...document.querySelectorAll('.nav__link')],
      logoMain = document.querySelector('.logo__link_main');


logoMain.classList.add('disabled'); //блокирование перехода по ссылке по клику на лого на главной странице
//menuLinks[2].classList.toggle('disabled');
//menuLinks[3].classList.toggle('disabled');
//document.body.style.overflow = "visible";

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
 // document.body.style.overflow = "hidden"; //запретить скролл при открытии меню
 body.classList.toggle('noscroll');
}

// burger end-----------------------------------------------------


// modal window

const petsData = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

const cards = document.querySelectorAll('.card'),
      modal = document.querySelector('.modal'),
      modalOverlay = document.querySelector('.modal__overlay'),
      modalWindow = document.querySelector ('.modal__window')
      modalCloseBtn = document.querySelector('.modal__close'),
      closeBtn = document.querySelector('.close'),
      console.log(closeBtn)
      console.log(modalCloseBtn)
      modalCloseIcone = document.querySelector('.modal__close-icone'),
      modalCard = document.querySelector('.modal__card'),
      app = document.querySelector('.app');


app.addEventListener('click', (e) => {
  console.log(e.target)
  body.classList.add('noscroll');
  modalOverlay.classList.add('active');
    modalWindow.classList.add('active');
    modalCard.classList.add('active');
    document.body.style.overflow = "hidden";

})

cards.forEach(el => {
  el.addEventListener('click', (e) => {
    document.body.style.overflow = "hidden";
   // body.classList.add('noscroll');
    modalOverlay.classList.add('active');
    modalWindow.classList.add('active');
    modalCard.classList.add('active');


    createModalCard()

    let dataCard = e.currentTarget.dataset.id; //получили дата-атрибут карточки с питомцем
    console.log(dataCard)

    document.querySelector(`[data-name="${dataCard}"]`).classList.add('active');
    console.log(document.querySelector(`[data-name="${dataCard}"]`))
  }
)
});

modalOverlay.addEventListener('click',closeModal);
modalCloseBtn.addEventListener('click',closeModal);
modalCloseIcone.addEventListener('click',closeModal);

function closeModal(e) {
  if (e.target == e.currentTarget){
    modalOverlay.classList.remove('active');
    modalWindow.classList.remove('active');
   // body.classList.remove('noscroll');
    document.body.style.overflow = "visible";
  }
}

function createModalCard() {
//modalCard.innerHTML = '';




}


