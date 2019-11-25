// 引入express框架
const express = require("express");
// 引入path模块
const path = require("path");
// 创建web服务器
const app = express();
// 当渲染后缀名为art时，使用express-art-template
app.engine("art", require("express-art-template"));
// 设置模板所在目录文件名及目录所在位置
app.set("views", path.join(__dirname, "./views"));
// 设置默认拼接后缀名
app.set("view engine", "art");
// 设置所有模板均可访问的app.locals对象
app.locals.users = [
  { name: "张三", age: 12 },
  { name: "李四", age: 23 }
];

app.get("/", (req, res) => {
  res.render("index", { message: "我是首页" });
});

app.get("/list", (req, res) => {
  res.render("list", { message: "我是列表页" });
});

// 监听web端口
app.listen(3000);
console.log("服务器启动成功");
