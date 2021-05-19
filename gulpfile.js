const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

exports.default = () => {
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
};
