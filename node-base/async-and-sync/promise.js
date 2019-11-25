const fs = require("fs");

//eg:
// const promise = new Promise((resolve, reject) => {
//   fs.readFile("./first.txt", "utf8", (err, doc) => {
//     if (err !== null) {
//       reject(err);
//       return;
//     }
//     resolve(doc);
//   });
// });

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const p1 = new Promise((resolve, reject) => {
  fs.readFile("./first.txt", "utf8", (err, doc) => {
    if (err !== null) {
      reject(err);
    }
    resolve(doc);
  });
});

const p2 = new Promise((resolve, reject) => {
  fs.readFile("./second.txt", "utf8", (err, doc) => {
    if (err !== null) {
      reject(err);
    }
    resolve(doc);
  });
});

const p3 = new Promise((resolve, reject) => {
  fs.readFile("./finally.txt", "utf8", (err, doc) => {
    if (err !== null) {
      reject(err);
    }
    resolve(doc);
  });
});

//链式编程
p1.then(result => {
  console.log(result);
  return p2;
})
  .then(result => {
    console.log(result);
    return p3;
  })
  .then(result => {
    console.log(result);
  });
