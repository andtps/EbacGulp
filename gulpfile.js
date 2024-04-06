const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function ComprimiImagem() {
  return gulp
    .src("./images/bird-ga5d9ed257_1920.jpg")
    .pipe(imagemin())
    .pipe(gulp.dest("./ImagesComprimidas"));
}

gulp.task("compress-js", function () {
  return gulp
    .src("./main.js") // Caminho do arquivo JavaScript original
    .pipe(uglify()) // Comprimir o arquivo JavaScript
    .pipe(gulp.dest("./JsComprimido")); // Diretório de saída dos arquivos comprimidos
});

gulp.task("default", gulp.series("compress-js"));

exports.images = ComprimiImagem;
