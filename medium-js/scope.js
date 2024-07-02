//! Variable Scope : var ,  let , const 
//*                  /       \     /
//*            global scope  block scope


let a=10;
const b=20;
var c=30;

if(true){
    let blockScope=100;
    var varScope=500;
    console.log(a);
}
// console.log(blockScope);
console.log(varScope);

test()