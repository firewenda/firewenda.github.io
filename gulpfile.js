var gulp = require('gulp'),
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

//压缩css
gulp.task('minifycss', function() {
    return gulp.src('css/marry/*.css')      //需要操作的文件
        .pipe(concat('main.css'))    //合并所有js到main.js
        .pipe(gulp.dest('css/marry/'))       //输出到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(cleanCSS())    //压缩
        .pipe(gulp.dest('css/marry/'));  //输出
});

gulp.task('testLess', function () {
    gulp.src('css/marry/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('css/marry/'));
});

gulp.task('testWatch', function () {
    gulp.watch('css/**/*.less', ['testLess']);
});