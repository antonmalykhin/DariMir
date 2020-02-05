"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var uglify = require("gulp-uglify");
var del = require("del");

var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp
    .src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    // .pipe(csso())
    // .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css/"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp
    .src("source/img/**/*.{png,jpg}")
    .pipe(
      imagemin([
        imagemin.optipng({
          optimizationLevel: 3
        }),
        imagemin.jpegtran({
          progressive: true
        })
      ])
    )
    .pipe(gulp.dest("source/optimizedImg/"));
});

gulp.task("webp", function () {
  return gulp
    .src("source/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("source/optimizedImg/"));
});

gulp.task("svgOpt", function () {
  return gulp
    .src("source/img/**/*.svg")
    .pipe(
      imagemin([
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest("source/optimizedSVG/"));
});

gulp.task("sprite", function () {
  return gulp
    .src("source/optimizedSVG/*.svg")
    .pipe(
      svgstore({
        inlineSvg: true
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/optimizedImg/"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build/"));
});

gulp.task("uglify", function () {
  return gulp.src("source/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/js/**/*.js", gulp.series("uglify", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));

});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("copy", function () {
  return gulp
    .src(
      [
        "source/fonts/**/*.{woff,woff2}",
        "source/js/**",
        "source/*.ico",
        "source/libs/**",
      ], {
        base: "source"
      }
    )
    .pipe(gulp.dest("build"));
});

gulp.task("copyImg", function () {
  return gulp
    .src([
      "source/optimizedImg/**/*",
      "source/optimizedSVG/**/*"
    ])
    .pipe(gulp.dest("build/img"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("delete", function () {
  return del(["build", "source/optimizedImg", "source/optimizedSVG"]);
});

gulp.task("build", gulp.series("clean", "copy", "copyImg", "css", "uglify", "html"));
gulp.task("start", gulp.series("build", "server"));
