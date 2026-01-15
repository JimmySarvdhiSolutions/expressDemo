const fs = require('fs').promises;
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);

// })
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);

// })
// const a = fs.readFileSync('file.txt');
// console.log(a.toString());

// fs.writeFile('file.txt', "This is a data", () => {
//     console.log("Written to the file");

// })

// const b = fs.writeFileSync('file.txt', "This is data 2");
// console.log(b)
// console.log("finished reading file");

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