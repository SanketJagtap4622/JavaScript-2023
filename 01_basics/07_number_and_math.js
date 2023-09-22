const score = 100;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const newNum = 28.36547;
console.log(newNum.toPrecision(3));

const h = 1000000;
console.log(h.toLocaleString('en-IN'));


// *******************Maths******************

console.log(Math);
console.log(Math.abs(-400));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));
console.log(Math.min(1, 7, 10, 45));
console.log(Math.max(4, 7, 10, 45));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);