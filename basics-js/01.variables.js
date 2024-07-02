// console.log("Chai with Code : Variables ");
//! Variables : -> constant , variable ==>

const accountId="3456959874"; 

let accountEmail="user@gmail.com"
var accoundPassword="12345"
accountCity="Bankura"

// Not allowed : constant value 
// accountId=2;
console.log(accountId);

accountEmail="susu@gmail.com"
accoundPassword="Cooch behar"
accountCity="kolkata"

console.table([accountId,accountEmail,accoundPassword,accountCity])

/* 
  !!! Notes :

  ! Don't write variable name  without - (var,const,let)
  ! Don't use of var -> 
    * Because issue of block-scope and function-scope 
    * block-sope : { // scope }
    * function-scope : ()=>{ //scope }
*/