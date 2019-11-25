// 引入模板引擎模块
const template = require("art-template");
// 引入路径模块
const path = require("path");

//拼接绝对路径
let artPath = path.join(__dirname, "views", "judge-grammar.art");
//将特定模块与特定数据进行拼接
const html = template(artPath, {
  data: {
    age: 2
  }
});
console.log(html);
