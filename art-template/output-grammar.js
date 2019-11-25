//导入模板引擎模块
const template = require("art-template");
//导入路径模块
const path = require("path");
//将特定模块与特定数据进行拼接,且必须使用绝对路径
let artPath = path.join(__dirname, "views", "output-grammar.art");
const html = template(artPath, {
  data: {
    name: "张三",
    age: "20",
    title: "<h1>我h1标题</h1>"
  }
});
console.log(html);
