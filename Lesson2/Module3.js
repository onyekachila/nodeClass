const fs = require("fs");

// Using Synchronise

// const mouse = fs.readdirSync("./");
// const file = fs.readdirSync("../");
// console.log(mouse);
// console.log(file);

// Using Asynchronous Method

const love = fs.readdir("./", function(err, suc) {
  if (err) console.log("Error", err);
  else console.log("Success ", suc);
});

// using fat arrow

// const love2 = fs.readdir("usb", (err, files) => {
//   if (err) console.log(`There was an error ${err}`);
//   else console.log(`Here are your files ${files}`);
// });
