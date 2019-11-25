// //导入gulp软件包
// const gulp = require("gulp");
// //导入压缩html的软件包
// const htmlMin = require("gulp-htmlmin");
// //导入抽离公共部分的软件包
// const fileinclude = require("gulp-file-include");
// //导入压缩css的软件包
// const csso = require("gulp-csso");
// //导入转化less文件为css文件的文件包
// const less = require("gulp-less");
// //导入转化es6语法为es5语法的软件包
// const babel = require("gulp-babel");
// //导入压缩js的软件包
// const uglify = require("gulp-uglify");

// //一、对html文件进行抽离、压缩

// //1.使用gulp.task()创建任务
// gulp.task("htmlMin", done => {
//   //2.使用gulp.src(),获取要处理的文件
//   gulp
//     .src("./src/*.html")
//     //3.使用fileinclude(),引入公共头部
//     .pipe(fileinclude())
//     //4.使用htmlMin(),对html文件进行压缩
//     .pipe(htmlMin({ collapseWhitespace: true }))
//     //5.使用gulp.dest(),将处理后的文件输出到dist目录
//     .pipe(gulp.dest("./dist"));
//   done();
// });

// // 二、对css文件压缩、转化less文件为css文件

// gulp.task("cssMin", done => {
//   gulp
//     .src(["./src/css/*.css", "./src/css/*.less"])
//     .pipe(less())
//     .pipe(csso())
//     .pipe(gulp.dest("./dist/css/"));
//   done();
// });

// // 三、对js文件进行压缩,转化es6语法为es5语法

// gulp.task("jsMin", done => {
//   gulp
//     .src("./src/js/*.js")
//     .pipe(
//       // 它可以判断当前代码的运行环境，将代码转换为当前运行环境所支持的代码
//       babel({
//         presets: ["@babel/env"]
//       })
//     )
//     .pipe(uglify())
//     .pipe(gulp.dest("./dist/js/"));

//   done();
// });

// // 四、复制图片
// gulp.task("copy", done => {
//   gulp.src("./src/images/*").pipe(gulp.dest("./dist/images/"));

//   gulp.src("./src/lib/*").pipe(gulp.dest("./dist/lib/"));
//   done();
// });

// 4.0版本新增series,parallel
//导入gulp软件包
const { src, dest, series, parallel } = require("gulp");
//导入压缩html的软件包
const htmlMin = require("gulp-htmlmin");
//导入抽离公共部分的软件包
const fileinclude = require("gulp-file-include");
//导入压缩css的软件包
const csso = require("gulp-csso");
//导入转化less文件为css文件的文件包
const less = require("gulp-less");
//导入转化es6语法为es5语法的软件包
const babel = require("gulp-babel");
//导入压缩js的软件包
const uglify = require("gulp-uglify");

//一、对html文件进行抽离、压缩

//1.使用task()创建任务
function html() {
  //2.使用src(),获取要处理的文件
  return (
    src("./src/*.html")
      //3.使用fileinclude(),引入公共头部
      .pipe(fileinclude())
      //4.使用htmlMin(),对html文件进行压缩
      .pipe(htmlMin({ collapseWhitespace: true }))
      //5.使用dest(),将处理后的文件输出到dist目录
      .pipe(dest("./dist"))
  );
}

// 二、对css文件压缩、转化less文件为css文件

function css() {
  return src(["./src/css/*.css", "./src/css/*.less"])
    .pipe(less())
    .pipe(csso())
    .pipe(dest("./dist/css/"));
}

// 三、对js文件进行压缩,转化es6语法为es5语法

function js() {
  return src("./src/js/*.js")
    .pipe(
      // 它可以判断当前代码的运行环境，将代码转换为当前运行环境所支持的代码
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(dest("./dist/js/"));
}

// 四、复制图片
function copy() {
  return src("./src/images/*").pipe(dest("./dist/images/"));
}

// 导出为default的task可以直接运行gulp
exports.default = parallel(html, css, js, copy);
