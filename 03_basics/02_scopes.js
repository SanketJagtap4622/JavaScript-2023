// var c = 300;
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Sanket";

    function two(){
        const website = "Youtube";
        console.log(username);
    }

    // console.log(website); // This will throw an error

    two();
}

// one();

if(true){
    const username = "Sanket";

    if(username === "Sanket"){
        const website = " Youtube";
        // console.log(username + website);
    }
    // console.log(website); // This will throw an error
}

// console.log(username); // This will throw an error

console.log(addOne(8));
function addOne(num){
    return num + 1;
}

// addTwo(9) // This will throw an error
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(9));

