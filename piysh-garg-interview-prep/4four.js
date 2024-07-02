varibale=10;

(()=>{
    foo=100;
    console.log(varibale);
    var foo=100;
    varibale=20;
    console.log(varibale);
})();

console.log(foo);
console.log(varibale);
var varibale=30;
console.log(varibale);