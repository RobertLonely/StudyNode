const fs = require("fs");

//依次读取文件first、second、finally
fs.readFile("./first.txt", "utf8", (err, doc) => {
  console.log(doc);
  fs.readFile("./second.txt", "utf8", (err, doc) => {
    console.log(doc);
    fs.readFile("./finally.txt", "utf8", (err, doc) => {
      console.log(doc);
    });
  });
});
