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

const authorsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String]
});

const Author = mongoose.model("Author", authorsSchema);

//删除单个文档
// Author.findOneAndDelete({ name: "小明" })
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

//删除多个文档
Author.deleteMany({ age: 10 })
  .then(doc => console.log(doc))
  .catch(err => console.log(err));
