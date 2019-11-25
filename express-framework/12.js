// 引入express框架
const express = require("express");
// 创建web服务器
const app = express();
app.get("/index/:id/:name", (req, res) => {
  // 返回请求的参数
  res.send(req.params);
});
// 监听web端口
app.listen(3000);
console.log("服务器启动成功");
