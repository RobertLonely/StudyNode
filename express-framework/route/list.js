// 引入express框架
const express = require("express");
// 创建list路由对象
const list = express.Router();
// 创建list路由对象下的二级路由
list.get("/shop", (req, res) => {
  res.send("欢迎来到商品列表界面");
});
// 导出list对象
module.exports = list;
