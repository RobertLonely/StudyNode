const fs = require("fs");

//1.普通函数定义前加async关键字 普通函数变成异步函数

//2.异步函数默认返回promise对象

//3.在异步函数内部使用return关键字进行结果返回，结果会被包裹的promise对象中，return关键字代替了resolve方法
const p1 = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./first.txt", "utf8", (err, doc) => {
      if (err !== null) {
        reject(err);
      }
      resolve(doc);
    });
  });
};

const p2 = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./second.txt", "utf8", (err, doc) => {
      if (err !== null) {
        reject(err);
      }
      resolve(doc);
    });
  });
};

const p3 = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./finally.txt", "utf8", (err, doc) => {
      if (err !== null) {
        reject(err);
      }
      resolve(doc);
    });
  });
};

//调用异步函数再链式调用then方法获取异步函数执行结果

// p1()
//   .then(result => {
//     console.log(result);
//     return p2();
//   })
//   .then(result => {
//     console.log(result);
//     return p3();
//   })
//   .then(result => {
//     console.log(result);
//   });

// 使用await关键字，可以将异步代码写成同步的形式
async function run() {
  let r1 = await p1();
  let r2 = await p2();
  let r3 = await p3();
  console.log(r1);
  console.log(r2);
  console.log(r3);
}

run();
