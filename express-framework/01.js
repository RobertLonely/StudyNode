// 导入express框架
const express = require("express");
// 使用框架创建web服务器
const app = express();
app.get("/", (req, res) => {
  res.send("express初体验");
});
app.get("/list", (req, res) => {
  res.send({ name: "李四", age: 12 });
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
