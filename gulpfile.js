const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const ImageMin = require("gulp-imagemin");

function ComprimiImagem() {
  return gulp
    .src("./images/bird-ga5d9ed257_1920.jpg")
    .pipe(imagemin())
    .pipe(gulp.dest("./ImagesComprimidas"));
}
exports.images = ComprimiImagem;
