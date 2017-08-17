'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'))
})

gulp.task('sass_watch', function () {
  gulp.watch('./src/scss/style.scss', ['sass'])
})
gulp.task('default', ['sass_watch'])
