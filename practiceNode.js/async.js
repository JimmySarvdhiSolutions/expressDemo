// function myDisplay(something) {
//     console.log(something);

// }

// function myCalculator(a, b, myCallback) {
//     let sum = a + b;
//     myCallback(sum);
// }
myCalculator(5, 5, myDisplay);
//myDisplay is the function which is being passed as an argument to the other function myCalculator which will display sum value.
//Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.

const fs = require('fs').promises;

async function readFiles() {
    try {
        console.log('1. Starting to read files...');
        const data1 = await fs.readFile('file.txt', 'utf8');
        const data2 = await fs.readFile('file2.txt', 'utf8');
        console.log('2. Files read successfully!');
        console.log(data1);
        console.log(data2);
    } catch (error) {
        console.error('Error reading files:', error);
    }
}

readFiles();