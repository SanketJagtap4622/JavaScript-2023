// Stack(Primitive Datatypes)
// Heap(Non-Primitive Datatypes)

let myName = "Sanket Jagtap";

let anotherName = myName;
anotherName = "Harsh Raskar";
console.log(myName);
console.log(anotherName);

const userOne = {
    userName: "Sanket123",
    password: "12345"
}

const userTwo = userOne;

userTwo.password = "6789";

console.log(userOne.password);
console.log(userTwo.password);