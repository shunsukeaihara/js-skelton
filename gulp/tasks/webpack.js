// @file webpack.js
var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var conf = require('../config');

gulp.task('webpack', function () {
    gulp.src(conf.entry)
        .pipe(webpack(conf.webpack))
        .pipe(gulpif(conf.js.uglify, uglify(conf.uglify)))
        .pipe(gulp.dest(conf.js.dest));
});
