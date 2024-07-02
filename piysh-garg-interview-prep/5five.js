
/*
Var : Global scope
let : local scope 
*/
for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}

for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}