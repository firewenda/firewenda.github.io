'use strict';

/**
 * copy.js
 * @author wenda
 * @version 1.0.0
 */
/**
 * Module dependencies
 * gulp copy task
 */
let path = require('path');
/* gulp系列 */
let gulp = require('gulp');
let copy = require('gulp-copy');
let gulpClean = require('gulp-clean');
let runSequence = require('run-sequence');

/* config 基础参数配置文件 */
let config = require('../config');
let DEST = config.dest;




/**
 * [上线时候的copy任务]
 */
gulp.task('copy', function(callback) {
    runSequence(['copy:js'],
        callback);
});
gulp.task('copy:plugins', function(callback) {
    return gulp.src(['js/plugins/*.{js,css,jpge,jpg,gif,png,ttf,eot,svg,woff,woff2}'])
        .pipe(gulp.dest( DEST + 'js/plugins/'));
});
