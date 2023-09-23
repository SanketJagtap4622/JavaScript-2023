// Constructor => Sigleton
// Object.create

// Literals => Multiple instances

let mySym = Symbol("key1");
const user = {
    name: "Sanket",
    "full name": "Sanket Jagtap",
    [mySym]: "MyKey1",
    age: 20,
    location: "Mumbai",
    email: "sanket123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
};

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

user.location = "Navi Mumbai";
// Object.freeze(user);
user.location = "Pune";
// console.log(user);

user.greeting = function(){
    console.log("Hello User");
}

user.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());