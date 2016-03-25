---
layout: post
title: 常用代码总结
description: 总结工作中常用小技巧
category: blog
---

## 常用正则表达式

大于等于0的数字，最多允许两位小数
    /^\d+(?:\.\d{1,2})?$/.test(2.12); //true

## 常用JS代码
    var util = {
        /**
         * Function formatMoney 数值转或货币格式
         *  -@param {Number} number 要转换的数值
         *  -@param {Number} places 保留小数点位数
         *  -@param {String} symbol 货币符号
         *  -@param {String} thousand 间隔符
         *  -@param {String} decimal 小数位符号
         * Return {String}
         */
        formatMoney: function(number, places, symbol, thousand, decimal) {
            number = number || 0;
            places = !isNaN(places = Math.abs(places)) ? places : 2;
            symbol = symbol !== undefined ? symbol : "$";
            thousand = thousand || ",";
            decimal = decimal || ".";
            var negative = number < 0 ? "-" : "",
                i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
                j = (j = i.length) > 3 ? j % 3 : 0;
            return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
        },
        // 两个浮点数求和
        accAdd: function(num1, num2) {
            var r1, r2, m;
            try {
                r1 = num1.toString().split('.')[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = num2.toString().split(".")[1].length;
            } catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2));
            // return (num1*m+num2*m)/m;
            return Math.round(num1 * m + num2 * m) / m;
        },

        // 两个浮点数相减
        accSub: function(num1, num2) {
            var r1, r2, m;
            try {
                r1 = num1.toString().split('.')[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = num2.toString().split(".")[1].length;
            } catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2));
            n = (r1 >= r2) ? r1 : r2;
            return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
        },
        // 两个浮点数相除
        accDiv: function(num1, num2) {
            var t1, t2, r1, r2;
            try {
                t1 = num1.toString().split('.')[1].length;
            } catch (e) {
                t1 = 0;
            }
            try {
                t2 = num2.toString().split(".")[1].length;
            } catch (e) {
                t2 = 0;
            }
            r1 = Number(num1.toString().replace(".", ""));
            r2 = Number(num2.toString().replace(".", ""));
            return (r1 / r2) * Math.pow(10, t2 - t1);
        },
        //两个浮点数相乘
        accMul: function(num1, num2) {
            var m = 0,
                s1 = num1.toString(),
                s2 = num2.toString();
            try {
                m += s1.split(".")[1].length;
            } catch (e) {}
            try {
                m += s2.split(".")[1].length;
            } catch (e) {}
            return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
        }
    }

## 常用HTML代码

## 常用CSS代码

文字太多超出部分省略号显示

    .text-ellipsis{
        width: 185px; //设置宽度
        white-space: nowrap; //将文本限制在一行
        overflow: hidden; //溢出部分要隐藏
        text-overflow: ellipsis; //出现省略号
    }