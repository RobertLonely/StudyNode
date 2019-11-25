// 引入express框架
const express = require("express");

// 创建web服务器
const app = express();

// 引入home路由对象
const home = require("./route/home");
// 引入list路由对象
const list = require("./route/list");

// 为请求路径匹配路由对象
app.use("/home", home);
app.use("/list", list);
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
