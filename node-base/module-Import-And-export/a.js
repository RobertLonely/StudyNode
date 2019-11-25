//加载模块b.js
let b = require("./b.js.js");
//加载anotherExports.js
let anotherExports = require("./anotherExport.js.js");

console.log(b.color);
console.log(b.sayHi());

console.log(anotherExports);
