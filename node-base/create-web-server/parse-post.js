// 用于创建网站服务器的模块
const http = require("http");
// 处理请求参数模块
const querystring = require("querystring");
// app对象就是网站服务器对象
const app = http.createServer();
// 当客户端有请求时触发
app.on("request", (req, res) => {
  // post参数是通过事件的方式接受的
	// data 当请求参数传递的时候出发data事件
	// end 当参数传递完成的时候出发end事件
  let postData = "";
  // 监听参数传输事件
  req.on("data", chunk => (postData += chunk));
  req.on("end", () => {
    console.log(querystring.parse(postData));
  });
  res.end("ok");
});
// 监听端口
app.listen(8000);
console.log("服务器启动成功");
