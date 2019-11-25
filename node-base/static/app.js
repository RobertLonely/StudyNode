const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const mime = require("mime");

const app = http.createServer();
app.on("request", (req, res) => {
  // 获取用户的请求路径
  let { pathname } = url.parse(req.url, true);

  //当用户只键入'/'时跳转到默认加载页面(default.html)
  pathname = pathname === "/" ? "/default.html" : pathname;

  //将用户的请求路径转换为实际的服务器硬盘路径
  let realPath = path.join(__dirname, "public" + pathname);

  //获取浏览器所要加载文件的类型
  let type = mime.getType(realPath);

  // 有了真实路径之后，就需要读取文件了
  
  //注意：这个地方不用设置编码格式，因为default.html中已经设置过了，重复设置导致图片等资源加载错误
  fs.readFile(realPath, (err, doc) => {
    // 如果文件读取失败
    if (err !== null) {
      res.writeHead(404, {
        "content-type": "text/html;charset=utf8"
      });
      console.log(err);
      res.end("<h1>文件读取错误</h1>");
      return;
    }

    //如果文件读取成功
    res.writeHead(200, {
      "content-type": type
    });
    console.log("文件读取成功");
    res.end(doc);
  });
});
// 监听端口
app.listen(3000);
console.log("服务器启动成功");
