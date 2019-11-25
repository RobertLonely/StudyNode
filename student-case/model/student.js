// 导入mongoose模块
const mongoose = require("mongoose");
// 创建集合规则
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 4
  },
  age: {
    type: Number,
    min: 16,
    max: 30
  },
  sex: Number,
  email: String,
  hobbies: [String],
  college: String,
  enterDate: {
    type: Date,
    default: Date.now
  }
});
// 创建集合
const Student = mongoose.model("Student", studentSchema);

// Student.create({
//   name: "小明",
//   age: 17,
//   sex: 1,
//   email: "xm@qq.com",
//   hobbies: ["次饭"],
//   college: "计算机学院"
// });

// 导出学生信息的构造函数对象
module.exports = Student;
