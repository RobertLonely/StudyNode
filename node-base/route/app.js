// 1.引入系统模块http
// 2.创建网站服务器
// 3.为网站服务器对象添加请求事件
// 4.实现路由功能
// 	1.获取客户端的请求方式
// 	2.获取客户端的请求地址
const http = require("http");
const url = require("url");
const app = http.createServer();
app.on("request", (req, res) => {
  //获取请求方式
  let method = req.method.toLowerCase();
  // 获取请求地址
  let { pathname } = url.parse(req.url);
  console.log(method);
  if (method === "get") {
    if (pathname === "/" || pathname === "/index") {
      res.end("welcome to homePage");
    } else if (pathname === "/list") {
      res.end("welcome to listPage");
    } else {
      res.end("Page dose not exits");
    }
  } else if (method === "post") {
  }
});

app.listen(3000);
console.log("服务器启动成功");
