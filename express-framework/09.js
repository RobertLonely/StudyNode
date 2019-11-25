// 引入express框架
const express = require("express");
// 创建web服务器
const app = express();
app.get("/index", (req, res) => {
  // 以对象形式返回get参数
  res.send(req.query);
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
