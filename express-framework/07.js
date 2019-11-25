// 引入express框架
const express = require("express");
// 创建web服务器
const app = express();
// 创建路由对象
const home = express.Router();
// 为请求路径匹配路由对象
app.use("/home", home);
// 创建home路由下的二级路由
home.get("/person", (req, res) => {
  res.send("欢迎来到个人中心");
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
