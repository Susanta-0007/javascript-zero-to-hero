const name="Susanta"
const followers=150

//! Ordinary Method (old) :
// console.log(name+followers);
 
//! String Interpolation (New) :
console.log(`Hello my name is ${name} and i have ${followers} followers`);

/* 
    !Important String Methos:
    * length :  to check the length .
    * toUpperCase() : to convert to uppercase .
    * toLowerCase() : to convert to lowercase .
    * charAt(i) : to the ith cherater .
    * indexOf('ch') : to get the index of cheracter .
    * substring() : to divides the string with (start,end) index .
    * slice() : same as substring but here we use negative index (reverse method) .
    * trime() : to reduces the speces .
    * replace() : to replace 
    * split() : to convert string to array by certain constrains . ('' , ' ') .
*/

const gameName=new String("susanta gorai Developer");

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newStr=gameName.substring(0,4)
console.log(newStr);

const anotherStr=gameName.slice(-8,4)
console.log(anotherStr);

const newStrOne="   hitesh   ";
console.log(newStrOne);
console.log(newStrOne.trim());

const url="https://susanta%20gorai.netlify.app"
console.log(url.replace('%20','-'));

console.log(url.includes('susanta'));

console.log(gameName.split(" "));