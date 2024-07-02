//! singleton : -> construtor

//! Object literals : 

const mySym=Symbol("key1");

const user = {
    name: "Susanta",
    "status mood": "Good",
    [mySym] :"mykey@1",
    age: 23,
    role: "Developer",
    techstack: "MERN",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

//! Access method : (dot and scqure bracket method)
console.log(user.role);
console.log(user["role"]);
console.log(user["status mood"]);
console.log(user["mySym"]);

//! update method :
user.age=26
user.name="Adam"

//! Object freeze : (can't editable)
// Object.freeze(user);

user.age=100;
console.log(user);

// 
user.grettings=()=>{
    console.log("Hello JS user");
}

console.log(user.grettings());

