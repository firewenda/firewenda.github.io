var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

//压缩css
gulp.task('minifycss', function() {
    return gulp.src('css/*.css')      //压缩的文件
    	.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('dist/css'))   //输出文件夹
});

//执行压缩前，先删除文件夹里的内容
gulp.task('clean', function(cb) {
    del(['dist/css'], cb)
});

//执行命令
gulp.task('build', ['clean', 'minifycss']);

//默认命令
gulp.task('default', ['build']);