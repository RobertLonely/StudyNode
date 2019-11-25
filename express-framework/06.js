// 引入express框架
const express = require("express");
const fs = require("fs");
// 引入转换内置对象方法为异步函数的promisify方法
const promisify = require("util").promisify;
const readFile = promisify(fs.readFile);
// 创建web服务器
const app = express();
app.get("/", async (req, res, next) => {
  try {
    await readFile("01error.js");
  } catch (err) {
    next(err);
  }
});
// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
