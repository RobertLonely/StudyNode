// 引入mongoose模块
const mongoose = require("mongoose");
// 创建用户集合规则
let userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 4
  },
  age: {
    type: Number,
    min: 18,
    max: 60
  },
  password: String,
  email: String,
  hobbies: [String]
});
// 创建集合
let User = mongoose.model("User", userSchema);
// 向集合中插入文档
// User.create({
//   name: "小福贵",
//   age: 19,
//   password: "88888888",
//   email: "xfg@qq.com",
//   hobbies: ["烹饪", "吃饭", "做家务"]
// });

module.exports = User;
