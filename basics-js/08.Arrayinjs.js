//! Arrays :

const arr = [0, 1, 2, 3, 4, 5];
const animals = ["Tiger", "Elephant", "Dog", "Cow"];

const arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr);

//! Array Method :
// Operations at the End : (push,pop)
arr.push(6)
arr.pop()
console.log(arr);

//Operations at the First : (unshieft ,shieft)
arr.unshift(10);
arr.shift();
console.log(arr);

console.log(arr.includes(2));
console.log(arr.indexOf(3));

const newArr = arr.join();
console.log(arr);
console.log(newArr);

// Slice , Splice :

const testArr = [1, 2, 3, 4, 5];
console.log("Original Array -> " + testArr);

const testOne = testArr.slice(1, 3)
console.log(testOne);
console.log("Original Array after 'slice' -> " + testArr);

const testTwo = testArr.splice(1, 3);
console.log();
console.log("Original Array after 'splice' -> " + testArr);

//! Add Two array :

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

//! concataion : 
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

//! speread operator :
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

//! flat : nested array to single array -> flat(depth)
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//!
console.log(Array.isArray("Susanta"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "Susanta" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));