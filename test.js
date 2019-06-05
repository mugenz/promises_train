const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

// promisify implements the code bellow

// const readFile = ((path, encoding) => {
//     return new Promise ((resolve, reject) => {
//         fs.readFile(path, encoding, (error, data) => {
//             error ? reject(error) : resolve(data)
//         })
//     })
// })

readFile(__filename, "utf8").then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
});