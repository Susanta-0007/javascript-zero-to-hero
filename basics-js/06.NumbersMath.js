/* 
    ! Number Methods:
    * toString() : convert to String 
    * toFixed() : convert to decimal upto
    * toPrecision() :
    * toLocalString() : 
*/

const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

/* *** Maths *** */

// console.log(Math);

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.max(1, 2, 3, 4)); // 4
console.log(Math.min(1, 2, 3, 4)); // 1
console.log(Math.random()); // 0-1
console.log(Math.floor((Math.random() * 10)) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);