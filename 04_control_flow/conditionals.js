// Conditionals
// If-Else

// <, >, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true;

const age = 17;

// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not Eligible");
// }

// Block Scope
// const score = 200;

// if (score > 100) {
//     let power = "Fly";
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

// Shorthand

let balance = 700;

// if (balance > 500) console.log("Test");
// if (balance > 500) console.log("Test"), console.log("Test2");

// IF-ElseIf-Else

// if(balance < 500){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if(balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const isLoggedIn = true;
const debitcard = true;

// if(isLoggedIn && debitcard){
//     console.log("Allow to buy course");
// }
// else{
//     console.log("Not allow to buy course");
// }

const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}else{
    console.log("User not logged in");
}
