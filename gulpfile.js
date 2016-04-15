var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

//压缩css
gulp.task('minifycss', function() {
    return gulp.src('css/{default,index}.css') //压缩的文件
        .pipe(rename({
            suffix: '.min'
        })) //rename压缩后的文件名
        .pipe(minifycss()) //执行压缩
        .pipe(gulp.dest('dist/css')); //输出文件夹
});

//压缩js
gulp.task('minifyjs', function() {
    return gulp.src('js/{index,post}.js')
        .pipe(concat('main.js')) //合并所有js到main.js
        .pipe(gulp.dest('dist/js')) //输出main.js到文件夹
        .pipe(rename({
            suffix: '.min'
        })) //rename压缩后的文件名
        .pipe(uglify()) //压缩
        .pipe(gulp.dest('dist/js')); //输出
});

//压缩图片
gulp.task('imagemin', function() {
    gulp.src('images/*/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/images'));
});

//执行压缩前，先删除文件夹里的内容
gulp.task('clean', function(cb) {
    del(['dist/js'], cb);
    del(['dist/css'], cb);
    del(['dist/images'], cb);
});

//执行命令
gulp.task('build', ['clean', 'minifycss', 'minifyjs', 'imagemin']);

//默认命令
gulp.task('default', ['build']);
