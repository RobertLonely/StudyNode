let animal = "dog";
let love = "bone";

//exports是module.exports的别名,一般情况下使用方法相同
exports.animal = animal;
module.exports.love = love;

// 当exports对象和module.exports对象指向的不是同一个对象时 以module.exports为准
module.exports = {
  animal
};
