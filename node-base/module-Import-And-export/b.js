let color = "red";
sayHi = () => {
  console.log("Hi");
};
//向外导出模块
exports.color = color;
exports.sayHi = sayHi;
