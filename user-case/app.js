const http = require("http");
// 引入url模块
const url = require("url");
// 引入path模块
const path = require("path");
// 引入模板引擎模块
const template = require("art-template");
// 引入mime模块
const mime = require("mime");
// 引入querystring模块
const querystring = require("querystring");

// 连接数据库
require("./model/index");
// 导入用户的构造函数
const User = require("./model/user");

// 创建服务器
const app = http.createServer();
// 添加响应客户端请求的事件
app.on("request", async (req, res) => {
  // 获取请求地址
  let { pathname, query } = url.parse(req.url, true);

  // 获取请求文件的类型
  let type = mime.getType(pathname);

  // 设置引用模板根路径
  template.defaults.root = path.join(__dirname, "views");
  // 设置模板的默认后缀
  template.defaults.extname = ".html";
  // 判断请求方式
  if (req.method === "GET") {
    if (pathname === "/list" || pathname === "/") {
      // 拼接模板路径和模板数据
      const listPage = template("list", {
        // 查询数据库全部数据
        users: await User.find()
      });
      // 设置响应头
      res.writeHead(200, {
        "content-type": type
      });
      res.end(listPage);
    } else if (pathname === "/add") {
      // 拼接模板路径和模板数据
      const addPage = template("add", {});
      // 设置响应头
      res.writeHead(200, {
        "content-type": type
      });
      res.end(addPage);
    } else if (pathname === "/modify") {
      // 获取用户的id
      let userId = query.id;
      // 拼接模板路径和模板数据
      let modifyPage = template("modify", {
        userInfo: await User.findOne({ _id: userId })
      });
      res.end(modifyPage);
    } else if (pathname === "/delete") {
      // 删除指定用户
      await User.findOneAndDelete({ _id: query.id });
      // 删除用户后重定向到list页面
      res.writeHead(301, {
        Location: "/list"
      });
      // 结束响应
      res.end();
    }
  } else if (req.method === "POST") {
    if (pathname === "/add") {
      // 用于接收提交数据的容器
      let user = "";
      // 接收数据
      req.on("data", doc => {
        user += doc;
      });
      req.on("end", async () => {
        // 将提交过来的参数转换成字符串格式
        let formatData = querystring.parse(user);
        // 将数据插入数据库中
        await User.create(formatData);
        // 重定向到list页面
        res.writeHead(301, {
          Location: "/list"
        });
        // 结束响应
        res.end();
      });
    } else if (pathname === "/modify") {
      // 用于接收提交数据的容器
      let modifyInfo = "";
      // 接收数据
      req.on("data", doc => {
        modifyInfo += doc;
      });
      // 完成数据接收
      req.on("end", async () => {
        // 将提交过来的参数转换成字符串格式
        let formatInfo = querystring.parse(modifyInfo);
        // 将数据更新到数据库中
        await User.updateOne({ _id: query.id }, formatInfo);
        // 重定向到list页面
        res.writeHead(301, {
          Location: "/list"
        });
        // 结束响应
        res.end();
      });
    }
  }
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
