'use strict';
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    post: "./js/post.js",
    util: "./js/util.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: true, // 去除注释
        },
        warnings: false,  
        compress: {
          // warnings: false, // 旧版本该代码在此  
          drop_debugger: true,
          drop_console: true, // 删除所有调式带有console的
          pure_funcs: ['console.log'] // 删除console.log
        },
      },
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        //匹配哪些文件,正则匹配css文件
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
};