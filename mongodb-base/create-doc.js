// 引入mongoose第三方模块 用来操作数据库
const mongoose = require("mongoose");

// 数据库连接,在MongoDB中不需要显式创建数据库如果正在使用的数据库不存在，MongoDB会自动创建。
mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // 连接成功
  .then(() => {
    console.log("数据库连接成功");
  })
  // 连接失败
  .catch(err => {
    console.log(err + "数据库连接失败");
  });
// 创建集合规则
const coursesSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
});

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Courses = mongoose.model("Courses", coursesSchema);

//创建文档的方式二
// Courses.create(
//   {
//     name: "李四的传奇人生",
//     author: "李四",
//     isPublished: true
//   },
//   (err, doc) => {
//     if (err !== null) {
//       console.log(err);
//     }
//     console.log(doc);
//   }
// );

Courses.create({
  name: "王五的传奇人生",
  author: "王五",
  isPublished: true
})
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log(err);
  });
