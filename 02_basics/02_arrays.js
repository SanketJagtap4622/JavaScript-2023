const arr = [1, 8, 7, 5, 6];
const arr1 = [4, 8, 6];

// arr.push(arr1);
// console.log(arr);
// console.log(arr[5]);
// console.log(arr[5][2]);

// Concat
const myArr = arr.concat(arr1);
console.log(myArr);

// Spread
const newArr = [...arr, ...arr1];
console.log(newArr);

// Flat
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [6, 7, [4, 5], 9]];
const new_another_array = another_array.flat(Infinity);
console.log(new_another_array);

console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));
console.log(Array.from({name: "Sanket"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));