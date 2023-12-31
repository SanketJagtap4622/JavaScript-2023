// map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNums = myNumbers.map( (num) => {
//     return num + 10;
// } )

// console.log(myNums);

// Using forEach
// const myNums = [];

// myNumbers.forEach( (num) => {
//     myNums.push(num + 10);
// } )

// console.log(myNums);

// chaining
const myNums = myNumbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num > 40 );
console.log(myNums);

