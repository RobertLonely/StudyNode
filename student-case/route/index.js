// 引入路由模块
const Router = require("router");

// 启用路由
const router = Router();
// 导入学生信息的构造函数对象
const Student = require("../model/student");
// 导入art-template模块
const template = require("art-template");
// 导入querystring模块
const querystring = require("querystring");

// 请求listPage路由
router.get("/list", async (req, res) => {
  // 拼接模板路径和模板数据
  let listPage = template("list", {
    students: await Student.find()
  });
  res.end(listPage);
});

//请求addPage路由
router.get("/add", async (req, res) => {
  // 拼接模板路径和模板数据
  let addPage = template("index", {});
  res.end(addPage);
});

// 提交addPage路由
router.post("/add", async (req, res) => {
  // 接收提交数据的空容器
  let str = "";
  // 开始接收数据
  req.on("data", doc => (str += doc));
  // 数据接收结束
  req.on("end", () => {
    // 将所接收到的数据转换成字符串后，插入数据库
  await Student.create(querystring.parse(str));
    // 重定向到listPage页面
    res.writeHead(301, {
      Location: "/list"
    });
    // 结束响应
    res.end();
  });
});

// 导出路由对象
module.exports = router;
