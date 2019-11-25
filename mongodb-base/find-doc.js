const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`
    数据库连接成功-----------------------------------------------
    `);
  })
  .catch(err => {
    console.log(err, "数据库连接失败");
  });

// 创建集合规则，返回一个构建函数
const authorsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String]
});

//创建文档
const Authors = mongoose.model("Authors", authorsSchema);

// 查询用户集合中的所有文档--------------------------------------------
// Authors.find()
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

// findOne方法返回一条文档 默认返回当前集合中的第一条文档----------------
// Authors.findOne({ age: 10 })
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

// 查询用户集合中年龄字段大于10并且小于50的文档-------------------------
// Authors.find({ age: { $gt: 10, $lt: 50 } })
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

// 查询用户集合中hobbies字段值包含eat的文档----------------------------
// Authors.find({ hobbies: { $in: "eat" } })
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

// 选择要查询的字段---------------------------------------------------
// Authors.find()
//   .select("name")
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

// 根据年龄字段进行升序排列--------------------------------------------
// Authors.find()
//   .sort("age")
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

// 查询文档跳过前5条结果 限制显示2条结果--------------------------------
Authors.find()
  .skip(5)
  .limit(2)
  .then(doc => console.log(doc))
  .catch(err => console.log(err));
