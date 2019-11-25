// 引入express框架
const express = require("express");
// 创建web服务器
const app = express();
app.get("/", (req, res, next) => {
  req.say = "哈哈哈";
  next();
});
app.get("/", (req, res, next) => {
  res.send(req.say);
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
