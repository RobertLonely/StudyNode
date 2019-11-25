// 引入express框架
const express = require("express");
// 创建web服务器
const app = express();
// 拦截所有请求
app.use((req, res, next) => {
  console.log("请求走了app.use中间件");
  next();
});
app.use("/list", (req, res, next) => {
  console.log("请求走了app.use / list中间件");
  next();
});
app.get("/", (req, res) => {
  res.send("欢迎来到首页");
});
app.get("/list", (req, res) => {
  res.send("欢迎来到列表页面");
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
