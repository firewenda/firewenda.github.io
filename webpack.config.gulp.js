'use strict';
/**
 * webpack.config.js
 * @author wenda
 * wenda's blog
 * @version 1.0.0
 */

/**
 * Module dependencies
 * 自动打包
 */
let path = require('path');
let glob = require('glob');
let fs = require("fs");

/* config 基础参数配置文件 */
let config = require('./config');

/* webpack系列 */
let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');

/* 独立依赖的css文件 */
let ExtractTextPlugin = require('extract-text-webpack-plugin');


let DEST = config.dest;

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, './');

let BUILD_PATH = path.resolve(ROOT_PATH, DEST);

/* 获取任务路径 */
let taskSrcF = require('./tasks/options/taskSrc');

/**
 * Function getEntry
 * 得到入口文件
 * @return {Object} filesObj 入口文件对象
 */
function getEntry(args) {

    let taskSrc = taskSrcF(args)

    let filesObj = {};

    let files = glob.sync(taskSrc.js.src, {
        ignore: taskSrc.js.ignore
    });

    //create fileObj
    files.forEach(function(item) {
        let index = item.lastIndexOf('/');
        if (index > -1) {
            let key = item.substring(0, item.length - 3),
                value = [path.resolve(ROOT_PATH, item)];
            filesObj[key] = value;
        }
    });

    return filesObj;
}



function webpackConfig(args) {
    var argv = process.argv.slice(2);

    /* 获取入口文件 */
    let entry = getEntry(args);

    /* 创建配置文件 */
    let wConfig = {
        entry: entry,
        output: {
            path: BUILD_PATH,
            publicPath: "./",
            filename: '[name].js'
        },
        module: {
            loaders: [{
                    test: /\.css/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader?-url"),
                }, {
                    test: /\.hbs$/,
                    loader: "handlebars-loader"
                }, {
                    test: /\.html$/,
                    loader: "html-loader"
                },{
                    test: /\.json$/,
                    loader: 'json'
                }, {
                    test: /\.jsx?$/,
                    loaders: ['babel'],
                }]
        },
        jshint: {
            // esnext: true
        },
        resolve: {
            alias: {
                'jquery': ROOT_PATH + '/js/jquery-2.1.4.min.js',
                '{plugins}': ROOT_PATH + '/plugins',
            },
            // modulesDirectories: [ 'lib', 'modules', 'node_modules'],
            extensions: ['', '.js', '.less', '.gif', '.html', '.png', '.webp', '.jpg']
        },
        externals: {
            // require("jquery") 是引用自外部模块的
            // 对应全局变量 jQuery
            "jquery": "jQuery",
            "$": "jQuery"
        },
        plugins: [
            new ExtractTextPlugin('[name].css'),
        ],
    };


    /**
     * [这里判断下是否是正式环境  argv[0] === 'build']
     * 正式环境开启// devtool: "#source-map",
     */
    if(argv[0] === 'dev') {
        wConfig.devtool = "#source-map";
    }

    return wConfig;
}

module.exports = webpackConfig;