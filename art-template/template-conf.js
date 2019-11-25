// 引入模板引擎模块
const template = require("art-template");
// 引入路径模块
const path = require("path");
// 引入格式化时间模块
var dateFormat = require("dateFormat");

//  向模板中导入变量
template.defaults.imports.dateFormat = dateFormat;
// 设置模板根目录
template.defaults.root = path.join(__dirname, "views");
// 设置模板默认后缀,可设置成任意后缀如：html等
template.defaults.extname = ".art";

// 拼接模板路径和模板数据,由于前面设置了默认根路径和后缀，所以这里的模板路径可以直接写模板名
const html = template("template-conf", {
  date: new Date()
});
console.log(html);
