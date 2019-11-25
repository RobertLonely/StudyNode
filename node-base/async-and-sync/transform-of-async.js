const fs = require("fs");
const { promisify } = require("util");
// 调用promisify方法改造现有异步API 让其返回promise对象
const readFile = promisify(fs.readFile);

run = async () => {
  let p1 = await readFile("./first.txt", "utf8");
  let p2 = await readFile("./second.txt", "utf8");
  let p3 = await readFile("./finally.txt", "utf8");
  console.log(p1);
  console.log(p2);
  console.log(p3);
};

run();
