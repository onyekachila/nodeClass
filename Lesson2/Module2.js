// Working with OS Module

const os = require("os");

var totalMemory = os.totalmem();
var totalFreeMemory = os.freemem();

console.log("The total memroy is " + totalMemory);

console.log(`The total free memroy is ${totalFreeMemory}`);
