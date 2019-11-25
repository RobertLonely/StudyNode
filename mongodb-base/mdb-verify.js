//导入第三方包
const mongoose = require("mongoose");
//连接数据库
mongoose
  .connect("mongodb://localhost/playground", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() =>
    console.log(`
数据库连接成功----------------------------------------
`)
  )
  .catch(err => console.log(err));

//创建集合规则
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    // 必选字段
    required: [true, "请输入书籍名称"],
    // 字符串的最小长度
    minlength: [4, "名称长度不少于四个字符"],
    // 字符串的最大长度
    maxlength: [10, "名称长度不多于十个字符"]
  },
  author: {
    type: String,
    validate: {
      validator: v => {
        // 返回值为布尔值true 验证成功  false 验证失败
        // v要验证的值
        return v && v.length <= 4;
      },
      message: "作者名称不超过四个字符"
    }
  },
  age: {
    type: Number,
    // 数字的最小范围
    min: [18, "下架时间过短"],
    // 数字的最大范围
    max: [50, "上架时间过长"]
  },
  publishDate: {
    type: Date,
    // 默认值
    default: Date.now
  },
  classify: {
    type: String,
    // 去除字符串两边的空格
    trim: true,
    // 枚举 列举出当前字段可以拥有的值
    enum: {
      values: ["html", "css", "js", "node", "jade", "erotica"],
      // 自定义错误信息
      message: "书籍不再收录目标之中"
    }
  }
});

//创建集合
const Book = mongoose.model("Book", bookSchema);

// Book.create({
//   name: "又见一帘幽梦",
//   author: "琼瑶姨姨",
//   age: 20,
//   classify: "jade"
// })
//   .then(() => console.log("文档插入成功"))
//   .catch(err => console.log(err));

Book.create({
  name: "还珠格格123123123",
  author: "亲亲琼瑶123123",
  age: 51,
  classify: "erotic"
})
  .then(() => console.log("文档插入成功"))
  .catch(err => {
    // 获取错误信息对象
    const errors = err.errors;
    // 循环错误信息对象
    for (key in errors) {
      // 将错误信息打印到控制台中
      console.log(key + ":" + errors[key]["message"]);
    }
  });
