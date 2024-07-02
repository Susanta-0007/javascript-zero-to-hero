/* 
 ! Primitive Data Type : (Call by value ) 
  * 7 types : [String ,Number, Boolean, null, undefined, Symbol, BigInt] 

 ! Non-primitive Data Type : (Referance )
 * [Array, Objects, functions]
*/

//! Primitive :

const name = "Susanta "
const age=23
const isAdult=true
const ans=null
let email;

const id1=Symbol('123')
const id2=Symbol('123')

console.log(id1==id2);

const bigNumber=2336666n;

//! Non Primitive :

const animals=["Dog","Cat","Cow","Tiger"]

let myobj={
    name : "Susanta",
    role : "Developer",
    techstack : "MERN"
}

const myFunction=function(){
    console.log("Hello from Susanta");
}
