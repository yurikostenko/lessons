// Сучасний (Строгий) режим
"use strict"

for (let i = 0; i < 10; i++) {
   console.log(i)
}
//let x = 5;
// console.log(x + '5');

console.log(typeof 'Hello world!');

let a = 10;
let b = '20';
console.log(a * b);

console.log(10 / '2');

let x = 10;
let y = 2;
console.log(x - y);

let num = 3.14159;
console.log(num.toFixed(2));
console.log(typeof num);

// let arr = [1, 2, 3];
// console.log(arr.length);

let arr = '1, 2, 3';
console.log(arr.length);

let sum = 10 + 'Igor';
console.log(sum);
console.log(typeof sum);

let subtract = 10 - 'Igor';
console.log(subtract);
console.log(typeof subtract);

let div = 35 / '-1';
console.log(div);
console.log(typeof div);

let div1 = 35 / 0;
console.log(div1);
console.log(typeof div1);

let multiply = 10 * '10';
console.log(multiply);
console.log(typeof multiply);

let mod = 10 % '10';
console.log(mod);
console.log(typeof mod);