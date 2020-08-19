const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const config = require('../config')

module.exports = function pug2html() {
  return gulp.src('src/pages/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('build/html'))
}

