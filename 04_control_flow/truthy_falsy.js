const isLoggedIn = " ";

// if(isLoggedIn){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values

// true, 1, "0", "false", " ", [], {}, function(){}

const arr = [];

// if(arr.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {};

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// console.log(false == 0);
// console.log(false == "");
// console.log(0 == "");

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 20 ?? 10;
// val1 = undefined ?? 15 ?? 10;

// console.log(val1);


// Terniary Operator

// condition ? true: false;

const teaPrice = 100;

teaPrice <= 80 ? console.log("Less than 80"): console.log("More than 80");;
