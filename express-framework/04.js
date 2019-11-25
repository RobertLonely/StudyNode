// 引入express框架
const express = require("express");
// 创建web服务器
const app = express();
// 网站维护公告-------------------------------------------------------------
// app.use((req, res, next) => {
//   res.send("网站正在维护中...");
// });
// 路由保护-----------------------------------------------------------------
app.use("/admin", (req, res, next) => {
  let isAdmin = false;
  // 如果用户登录,继续下去
  if (isAdmin) {
    next();
  } else {
    // 如果用户没有登录,直接对客户端做出响应
    res.send("请先登录");
  }
});
app.get("/admin", (req, res) => {
  res.send("欢迎登录管理员页面");
});
// 自定义404页面-------------------------------------------------------------
app.use((req, res, next) => {
  // 为客户端响应404状态码以及提示信息
  res.status(404).send("资源不存在...");
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
