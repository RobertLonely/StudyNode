// 引入express框架
const express = require("express");
// 引入path模块
const path = require("path");
// 创建web服务器
const app = express();
// 实现静态资源访问功能
// 添加虚拟上级目录"/static"
app.use("/static", express.static(path.join(__dirname, "./public")));
// 监听web端口
app.listen(3000);
console.log("服务器启动成功");
