"use strict"; // прописываем для работы с новым кодом 

let topScroll = document.querySelector(".top-croll"); // получаем елемент в переменную

topScroll.onclick = scrollOnTop; // при нажатии на елемент включаем функцию

function scrollOnTop () { // функция прокуртки на верх
	window.scrollTo({
		top: 0, // позиция до которой прокручиваемся
		behavior: 'smooth', // плавность прокрутки
	});
}

window.addEventListener('scroll', showDiv); // при скроле по екрану срабатывает функция

function showDiv(){ // функция плавного появления елементов на странице

	let thisDiv = document.querySelectorAll('.card-block'); // получаем коллекцию елементов в переменную
	for(var i = 0, length1 = thisDiv.length; i < length1; i++){ // пребираем  и обращаемся к каждому елементу коллекции
		if(thisDiv[i].offsetTop - 450 < window.pageYOffset){ // сравниваем положение елемента относительно окна браузера
			thisDiv[i].classList.add('div-active'); // добавляем класс для появления елемента
		}
		console.log(thisDiv[1].offsetTop);
		console.log(window.pageYOffset);
	}
	let contactImg = document.querySelector('.contact-img'); // получаем  елемент в переменную
	if(contactImg.offsetTop - 450 < window.pageYOffset){ // сравниваем положение елемента относительно окна браузера
		contactImg.classList.add("contact-img-active"); // добавляем класс для появления елемента
	}
	let contactForm = document.querySelector('.forma'); // получаем  елемент в переменную
	if(contactForm.offsetTop - 450 < window.pageYOffset){ // сравниваем положение елемента относительно окна браузера
		contactForm.classList.add("forma-active"); // добавляем класс для появления елемента
	}
	let mapFlex = document.querySelector('.map-flex'); // получаем  елемент в переменную
	if(mapFlex.offsetTop - 450 < window.pageYOffset){ // сравниваем положение елемента относительно окна браузера
		mapFlex.classList.add("map-flex-active"); // добавляем класс для появления елемента
	}
}

	let mainLeft = document.querySelector('.main-slide-left'); // получаем  елемент в переменную
	if(mainLeft.offsetTop - 450 < window.pageYOffset){ // сравниваем положение елемента относительно окна браузера
		mainLeft.classList.add("main-slide-left-active"); // добавляем класс для появления елемента
	}