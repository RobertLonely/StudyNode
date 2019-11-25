// 引入express框架
const express = require("express");
// 创建web服务器
const app = express();
app.use(fn(2));
function fn(num) {
  return function(req, res, next) {
    if (num === 1) {
      console.log(num);
    } else {
      console.log(req.url);
    }
    next();
  };
}
app.get("/", (req, res) => {
  res.send("ok");
});
// 监听web端口
app.listen(3000);
console.log("服务器启动成功");
