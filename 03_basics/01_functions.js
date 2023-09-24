function sayHello(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayHello();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(10, 20);

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

let ans = addTwoNumbers(4, 5);
// console.log("Result: ", ans);

function loginUserMessage(username = "Sam"){
    // if(username === undefined){
    //     console.log("Please enter a valid username");
    //     return;
    // }

    if(!username){
        console.log("Please enter a valid username");
        return;
    }

    return `${username} just logged in`;
}

// console.log(loginUserMessage("Sanket"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    username: "Sanket",
    email: "sanket@gmail.com"
}

function handleObject(anyObject){
    console.log(`Usename is ${anyObject.username} and email is ${anyObject.email}`);
}

// handleObject(user);
handleObject({
    username: "Sam",
    email: "sam@gmail.com"
})

const myArr = [100, 200, 400, 800];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200, 400, 100, 600]));