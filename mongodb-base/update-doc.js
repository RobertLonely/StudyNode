const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log(`
数据库连接成功---------------------------------
`)
  )
  .catch(err => console.log(err));

//创建集合规则
const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String]
});

//创建集合
const Author = mongoose.model("Author", authorSchema);

// 更新单个文档
// Author.updateOne({ age: 14 }, { age: 15 })
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

// 更新多个文档
Author.updateMany({ age: 23 }, { age: 20 })
  .then(doc => console.log(doc))
  .catch(err => console.log(err));
