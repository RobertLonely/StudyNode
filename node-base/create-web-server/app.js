// 用于创建网站服务器的模块
const http = require("http");
// 用于处理url地址的模块
const url = require("url");
// 1.创建web服务器,app对象就是网站服务器对象
const app = http.createServer();
// 2.当用户发送请求时
app.on("request", (req, res) => {
  // 3.使用req.url获取请求路径,并且使用url.parse()方法解析路径
  let { pathname, query } = url.parse(req.url, true);
  //使用解构出来的对象,可以更加方便的操作url地址
  console.log(pathname);
  //在地址栏中传参时，获取参数的值
  console.log(query.id);

  // 4.设置响应报文(状态码，内容类型)
  res.writeHead(200, {
    "content-type": "text/html;charset=utf8"
  });

  // 5.响应用户的请求
  // if (pathname === "/" || pathname === "/index") {
  //   res.end("<h1>Hi,Girl 现在中文不会乱码了</h1>");
  // } else if (pathname === "/list") {
  //   res.end("<h1>welcome to listPage</h1>");
  // } else {
  //   res.end("<h1>Page does not exist</h1>");
  // }

  if (req.method === "GET") {
    res.end("你正在使用get的方式请求页面");
  } else if (req.method === "POST") {
    res.end("你正在使用post的方式请求页面");
  }
});
// 4.监听用户的请求
app.listen(3000);
console.log("服务器启动成功");
