"use strict";
exports.__esModule = true;
function sayMyName(name) {
  console.log("Hello " + name);
}
sayMyName("Tunde");

var names = "Tola";

console.log(names); // this displays Tola

console.log(global.names); // displays undefined. Meaning it is not aware of it.
