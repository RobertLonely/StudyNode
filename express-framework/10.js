// 引入express框架
const express = require("express");
// 创建web服务器
const app = express();
// 引入body-parser模块
const bodyParser = require("body-parser");
// 配置body-parser模块,拦截所有请求
// extended: false 方法内部使用querystring模块处理请求参数的格式
// extended: true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extend: false }));

app.post("/add", (req, res) => {
  // body是第三方包body-parser为req对象添加的属性
  res.send(req.body);
});

// 监听web端口
app.listen(3000);
console.log("服务器启动成功");
