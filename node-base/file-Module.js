// 1.通过模块的名字fs对模块进行引用
const fs = require("fs");

// 2.通过模块内部的writeFile写入文件内容
// 如果文件写入出错,err是一个对象包含错误信息
// 如果文件写入正确,err是null
fs.writeFile("./test.txt", "我是刚刚写入的文本", err => {
  if (err !== null) {
    console.log("文件写入失败：" + err);
    return;
  }
  console.log("文件写入成功");
});

// 3.通过模块内部的readFile读取文件内容
// 如果文件读取出错,err是一个对象包含错误信息
// 如果文件读取正确,err是null
// result是文件读取的结果
fs.readFile("./test.txt", "utf8", (err, result) => {
  if (err !== null) {
    console.log("文件读取失败：" + err);
    return;
  }

  console.log("文件读取成功：" + result);
});
