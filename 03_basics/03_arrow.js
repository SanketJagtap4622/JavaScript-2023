const user = {
    name: "Sanket",
    email: "sanket123@gmail.com",

    welcomeMsg: function(){
        console.log(`${this.name}, Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg();
// user.name = "Harsh";
// user.welcomeMsg();

// console.log(this);

// function chai(){
//     let username = "Sanket";
//     console.log(this.username);
// }

// chai();

// const chai = function(){
//     let usename = "Sanket";
//     console.log(this.usename);
// }

// chai();

const chai = () => {
    let username = "Harsh";
    console.log(this);
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "sanket"});

console.log(addTwo(5, 8));

