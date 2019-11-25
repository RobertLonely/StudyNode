// 引入express框架
const express = require("express");
const fs = require("fs");
// 创建web服务器
const app = express();
app.get("/", (req, res, next) => {
  // 抛出错误
  // throw new Error("错了，错了，全都错了");

  fs.readFile("01error.js", "utf8", (err, data) => {
    if (err !== null) {
      next(err);
    } else {
      res.send(data);
    }
  });
});
// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
