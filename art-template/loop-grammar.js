// 引入模板引擎模块
const template = require("art-template");
// 引入路径模块
const path = require("path");
// 拼接绝对路径
let artPath = path.join(__dirname, "views", "loop-grammar.art");
//拼接模板路径和模板数据
const html = template(artPath, {
  users: [
    {
      name: "张三",
      age: 20,
      sex: "男"
    },
    {
      name: "李四",
      age: 30,
      sex: "男"
    },
    {
      name: "玛丽",
      age: 15,
      sex: "女"
    }
  ]
});
console.log(html);
