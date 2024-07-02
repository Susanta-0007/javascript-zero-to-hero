/* 
    !Closures :
*    A Closures is a function having access to the parent scope .it preserve the data from     
*    outside. A Closures is a inner function that has access to the outer(enclousing) functions's
*    variable .
   !* Every Cloures has three scope :
   !1. Local Scope (own scope / block scope)
   !2. Outer Function Scope (Laxical scope)
   !3. Global Scope (all over the code)

*/


var global_scope = 10;

function outerFn() {
    var outer_scope = 20;
    function innerFn() {
        var inner_scope = 30;
        console.log(`Global Scope : ${global_scope}`);
        console.log(`Outer Scope : ${outer_scope}`);
        console.log(`Inner Scope : ${inner_scope}`);
    }
    innerFn();
}
outerFn();