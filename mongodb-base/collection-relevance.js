const mongoose = require("mongoose");

// 连接数据库
mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log(`
数据库连接成功--------------------------------------
`)
  )
  .catch(err => console.log(err, "数据库连接失败"));

// 创建books集合规则
const postSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }
});

// 创建authors集合规则
const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String]
});

//创建books集合
const Post = mongoose.model("Post", postSchema);

//创建authors集合
const Author = mongoose.model("Author", authorSchema);

// 创建book集合的文档
// Post.create({ title: "不能说的秘密", author: "5db832995b410e14808161bc" }).then(
//   doc => console.log(doc)
// );

Post.find()
  .populate("author")
  .then(doc => {
    console.log(doc);
  });
