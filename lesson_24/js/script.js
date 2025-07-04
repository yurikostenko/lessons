// Сучасний (Строгий) режим
"use strict"

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

document.addEventListener("click", documentAction)

function documentAction(e) {
   const targetElement = e.target.closest('.item')
   if (targetElement) {
      targetElement.classList.toggle('active')
   }
}

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
   document.body.classList.add('loaded');
}

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector('header')
const footer = document.querySelector('footer')

header.addEventListener('mouseenter', () => {
   footer.classList.add('footer--hover')
})

header.addEventListener('mouseleave', () => {
   footer.classList.remove('footer--hover')
})


// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const item = document.querySelector('.item')
let started = false

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
         started = true

         const delay = +item.dataset.delay || 500
         const max = +item.dataset.max || 10
         let count = 1

         item.textContent = count

         const interval = setInterval(() => {
            count++
            item.textContent = count
            if (count >= max) {
               clearInterval(interval)

            }
         }, delay)
      }
   })
}, {
   threshold: 0.3
})

observer.observe(item)

