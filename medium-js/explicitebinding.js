/* 
 !Explicite Binding  : 
 * call() : passed the value individual comma separated .
 * apply() : passed the value with a array-list formet .
 * bind() : created a copy and invocked later .
*/

let name = {
    firstName: "Susanta",
    lastName: "Gorai",
}

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + "from " + hometown + " , " + state);
}



let name2 = {
    firstName: "Amit",
    lastName: "Khurana",
}

// function borrowing : 
printFullName.call(name, "Bankura", "WB")
printFullName.call(name2, "Kolkata", "WB")

printFullName.apply(name2,["Mumbai","Maharasta"])

// bind method 
let printMyName=printFullName.bind(name,"Kolkata","WB")
printMyName();
console.log(printMyName);