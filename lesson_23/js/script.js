// Сучасний (Строгий) режим
"use strict"

// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body

console.log(bodyElement)

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

function createBody(count = 5) {
   const ul = document.createElement(`ul`)

   for (let i = 1; i <= count; i++) {
      const li = document.createElement(`li`)
      li.textContent = `Елемент ${i}`
      ul.insertAdjacentElement('beforeend', li)
   }

   document.body.insertAdjacentElement('afterbegin', ul)
}

// createBody();
createBody(3);

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тексту зелений.

// const bodyElement = document.body

document.body.classList.add('loaded')

if (document.body.classList.contains('loaded')) {
   document.body.style.color = `green`
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на
// "Елемент №(тут порядковий номер елементу починаючи з 1)".

const items = document.querySelectorAll(`.item`)

items.forEach((element, index) => {
   element.classList.add(`active`)
   element.textContent = `Елемент №${index + 1}`
})

//Або

let index = 1
for (const element of items) {
   element.classList.add(`active`)
   element.textContent = `Елемент №${index}`
   index++   // Варіант робочий, але поганий, тому що ви створюєте змінну в глобальній области видимості,
   //  добре якщо вона далі по коду потрібна буде, але якщо ні то краще так не робити.
}

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector(`.button`)

if (button) {
   button.scrollIntoView({
      behavior: `smooth`,
      block: `end`
   })
}

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення атрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector(`.link`)

if (link) {
   if (!link.dataset.value) {
      link.dataset.value = `100`
   }

   const value = Number(link.dataset.value)

   if (isFinite(value) && value < 200) {
      link.style.color = `red`
   }
}
