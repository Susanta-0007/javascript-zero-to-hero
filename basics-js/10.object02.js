// singleton :
const tinderUSer = new Object();

tinderUSer.id = "12345";
tinderUSer.name = "Susanta Gorai";
tinderUSer.loogedIn = false;

console.log(tinderUSer);

const regularUser = {
    email: "susanta.js@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Susanta",
            lastName: "Gorai",
        }
    }
}

console.log(regularUser.fullName.userFullName);

//! Merge two Objects :

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

/*
!N.B : not merge two obj . 
 const obj3={obj1,obj2}
 console.log(obj3);

*/

//! Object.assign()
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

//! Using spread operator :
const newObj = { ...obj1, ...obj2 };
console.log(newObj);


console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));