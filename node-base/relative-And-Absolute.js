const fs = require("fs");
const path = require("path");

//尽量使用绝对路径,相对路径有时候相对的是命令行工具的当前工作目录
fs.readFile(path.join(__dirname, "./test.txt"), "utf8", (err, doc) => {
  if (err !== null) {
    console.log(err);
    return;
  }
  console.log(doc);
});
