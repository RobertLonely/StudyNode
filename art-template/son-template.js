// 引入模板引擎模块
const template = require("art-template");
// 引入路径模块
const path = require("path");
// 拼接绝对路径
let artPath = path.join(__dirname, "views", "son-template.art");
// 拼接模板路径和模板数据
const html = template(artPath, {
  message: "我是首页"
});
console.log(html);
