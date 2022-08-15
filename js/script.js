"use strict"; // прописываем для работы с новым кодом

let topScroll = document.querySelector(".top-croll"); // получаем елемент в переменную

topScroll.onclick = scrollOnTop; // при нажатии на елемент включаем функцию
menuBurger();

function scrollOnTop() {
  // функция прокуртки на верх
  window.scrollTo({
    top: 0, // позиция до которой прокручиваемся
    behavior: "smooth", // плавность прокрутки
  });
}

window.addEventListener("scroll", showDiv); // при скроле по екрану срабатывает функция

function showDiv() {
  // функция плавного появления елементов на странице

  let thisDiv = document.querySelectorAll(".card-block"); // получаем коллекцию елементов в переменную
  for (var i = 0, length1 = thisDiv.length; i < length1; i++) {
    // пребираем  и обращаемся к каждому елементу коллекции
    if (
      thisDiv[i].offsetTop - (window.pageYOffset - window.pageYOffset / 3) >
      window.pageYOffset
    ) {
      // сравниваем положение елемента относительно окна браузера
      thisDiv[i].classList.add("div-active"); // добавляем класс для появления елемента
    }
  }
  let contactImg = document.querySelector(".contact-img"); // получаем  елемент в переменную
  if (contactImg.offsetTop - 450 < window.pageYOffset) {
    // сравниваем положение елемента относительно окна браузера
    contactImg.classList.add("contact-img-active"); // добавляем класс для появления елемента
  }
  let contactForm = document.querySelector(".forma"); // получаем  елемент в переменную
  if (contactForm.offsetTop - 450 < window.pageYOffset) {
    // сравниваем положение елемента относительно окна браузера
    contactForm.classList.add("forma-active"); // добавляем класс для появления елемента
  }
  let mapFlex = document.querySelector(".map-flex"); // получаем  елемент в переменную
  if (mapFlex.offsetTop - 450 < window.pageYOffset) {
    // сравниваем положение елемента относительно окна браузера
    mapFlex.classList.add("map-flex-active"); // добавляем класс для появления елемента
  }
}

let mainLeft = document.querySelector(".main-slide-left"); // получаем  елемент в переменную
if (mainLeft.offsetTop - 450 < window.pageYOffset) {
  // сравниваем положение елемента относительно окна браузера
  mainLeft.classList.add("main-slide-left-active"); // добавляем класс для появления елемента
}

function menuBurger() {
  let burger = document.querySelector(".burger-btn");
  let burgerMenu = document.querySelector(".header-burger-ul");
  let burgerMenuLi = document.querySelectorAll(".header-burger-ul li");
  burger.addEventListener("click", () => {
    console.log("l");
    burgerMenu.classList.toggle("active-burger");
  });
  burgerMenuLi.forEach((e) => {
    e.addEventListener("click", () => {
      burgerMenu.classList.toggle("active-burger");
    });
  });
}
