// For loop

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

for (let i = 1; i <= 5; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Outer loop value: ${i}, Inner loop value: ${j}`);   
        // console.log(i + " * " + j + " = " + (i*j));
    }
}

const myArray = [11, 22, 33, 44, 55];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log(`Detected ${index}`);
        break;
    }
    // console.log(`Value of index: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        continue;
    }
    console.log(`Value of index: ${index}`);
}