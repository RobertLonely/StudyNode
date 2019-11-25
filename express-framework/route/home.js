// 引入express框架
const express = require("express");
// 创建home路由对象
const home = express.Router();
// 创建home路由对象下的二级路由
home.get("/person", (req, res) => {
  res.send("欢迎来到用户界面");
});
// 导出home对象
module.exports = home;
