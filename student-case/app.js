// 导入http模块
const http = require("http");
// 导入art-template模块
const template = require("art-template");
// 导入path模块
const path = require("path");
// 导入serve-static模块
const serveStatic = require("serve-static");
// 导入格式化时间插件
const dateFormat = require("dateformat");

// 连接数据库
require("./model/connect");
// 导入路由对象
const router = require("./route/index");
// 加载静态资源
const serve = serveStatic(path.join(__dirname, "public"));

// 设置默认模板根目录
template.defaults.root = path.join(__dirname, "views");
// 设置模板默认后缀
template.defaults.extname = ".html";
// 向模板中导入格式化事件插件
template.defaults.imports.dateFormat = dateFormat;

// 创建服务器
const app = http.createServer();
//添加服务器响应事件
app.on("request", (req, res) => {
  router(req, res, () => {});
  serve(req, res, () => {});
});
// 监听服务器端口
app.listen(3000);
console.log("服务器启动成功");
