// !Dates

let myDate = new Date();

console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 0, 23);
// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
let myCreatedDate = new Date("2024-01-14");


console.log(myCreatedDate.toLocaleString());

const timeStamp = Date.now();
console.log(timeStamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday : "long"
})
