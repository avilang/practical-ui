const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

function scss() {
  return src('lib/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(
      rename(function (path) {
        return {
          dirname: path.dirname,
          basename: 'index',
          extname: path.extname
        };
      })
    )
    .pipe(dest('./dist'));
}

function style() {
  return src('lib/_fonts/icomoon-practical-v1.0/style.css')
    .pipe(cleanCSS({ compatibility: 'ie8', level: 1 }))
    .pipe(
      rename(function () {
        return {
          dirname: 'style',
          basename: 'index',
          extname: '.css'
        };
      })
    )
    .pipe(dest('./dist'));
}

function staticFile() {
  return src('lib/_fonts/icomoon-practical-v1.0/fonts/**/*').pipe(dest('./dist/style/fonts'));
}

exports.default = parallel(style, staticFile, scss);
