---
layout: post
title: 常用代码总结
description: 总结工作中常用小技巧
category: blog
tags:
    - HTML
---

## 常用正则表达式

>[JavaScript正则进阶之路——活学妙用奇淫正则表达式](https://segmentfault.com/a/1190000009590458)

常用正则验证

    /[\w\W]+/; //检测是否有输入，可以输入任何字符，不留空即可通过验证
    /^\d+$/; //数字类型
    /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/; //字符串类型
    /^[0-9]{6}$/; //验证是否为邮政编码
    /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/; //手机号码格式
    /^(\d{3,4}-)?\d{7,8}$/; //固话格式
    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //email格式
    /^(\w+:\/\/)?\w+(\.\w+)+.*$/; //验证字符串是否为网址
    /^[1-9]\d{5}(19||2[0-1])\d{2}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/; //身份证验证


大于等于0的数字，最多允许两位小数

    /^\d+(?:\.\d{1,2})?$/.test(2.12); // => true

将数字以货币千分位分隔

    var f = '10050'.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,'); // => '10,050'

split分割多空格字符串

    var str = '123    abc     111\ndemo';
    str.split(/\s+/); // ==> ["123", "abc", "111", "demo"]

\s匹配任何空白字符，包括空格、制表符、换页符等等。等价于[\f\n\r\t\v]。+匹配前面的子表达式一次或多次。

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
        /**
         * [CtoH 输入内容全角转半角]
         * @param {[type string]} str [输入字符串]
         * Tips: 当为全角*号时，此方法不会转换为半角*号
         */
        CtoH: function(str) {　　
            var result = '';　　
            for (var i = 0; i < str.length; i++) {　　　
                if (str.charCodeAt(i) == 12288) {　　　　
                    result += String.fromCharCode(str.charCodeAt(i) - 12256);　　　　
                    continue;　　　
                }　　　
                if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) result += String.fromCharCode(str.charCodeAt(i) - 65248);　　　
                else result += String.fromCharCode(str.charCodeAt(i));　　
            }
            return result;
        },
        /**
         * [toFixed 解决js toFixed()四舍五不入问题,此方法为Aangularjs解决方案]
         * @param  {[type]} num       [需要转换的数字]
         * @param  {[type]} precision [需要保留的小数位]
         * @return {[type]}           [description]
         * Tips: 当为0.0001或者更小的数字时，会返回NaN
         */
        toFixed: function(num, precision) {
            return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
        },
        /**
         * [getWeekCounts 获得一个月的周数]
         * It working only week starts on sunday
         * Not working if week starts on monday
         * @param  {[type]} year         [四位数年份]
         * @param  {[type]} month_number [月份month_number is in the range 1..12]
         * @return {[type]}              [返回一个月的周数]
         */
        getWeekCounts: function(year, month_number) {
            var firstOfMonth = new Date(year, month_number - 1, 1);
            var lastOfMonth = new Date(year, month_number, 0);
            var used = firstOfMonth.getDay() + lastOfMonth.getDate();
            return Math.ceil( used / 7);
        }
    }

多个浮点数相加

    var sumArr = ["209.49", "52.37", "13.09", "4", "261.86"];
    var sum = sumArr.reduce(util.accAdd); // =>540.81

*注意：reduce 为ES5 Array新方法，ie9以下浏览器不兼容<br>
具体用法参考：<a href="http://www.zhihu.com/question/24927450" target="_blank">如何形象地解释 JavaScript 中 map、foreach、reduce 间的区别？</a>

找到数组中的最大值或者最小值

    var arr = [1, 2, 3, 4, 5, 6];
    console.log(Math.max.apply(Math, arr)); // => 6

## 常用CSS代码

文字太多超出部分省略号显示

    .text-ellipsis{
        max-width: 185px; /*设置宽度*/
        white-space: nowrap; /*将文本限制在一行*/
        overflow: hidden; /*溢出部分要隐藏*/
        text-overflow: ellipsis; /*出现省略号*/
    }

设置 line-height 的最佳方式

    line-height: 2;

确保将 line-height 指定为一个无单位的数值；这样一来，指定了不同 font-size 的子元素将会继承这个数值而不是一个固定的高度。

我们假设页面默认的 font-size 是 12pt ，不过它也会包含了一个 font-size 为 24pt 的头部。如果你将 body 的 line-height 设置为2em 或者 200%，那样在文档中（当然也包括头部）就会得到一个 24pt 的行高（body 的 font-size 的 2 倍）。因而，头部就是单倍行距，而不是双倍！
相反，将 line-height 设置为 2 会告知浏览器保持 font-size/line-height 比例，即便文字的尺寸发生变化。body 的行高将是 24pt，而头部的文字为 24pt，行高也将自动增长为 48pt。

如何修改html中列表项li所显示的圆点的颜色？

    ul {
        list-style: none;
        padding:0;
        margin:0;
    }
    li {
        padding-left: 1em;
        text-indent: -.7em;
    }
    li:before {
        content: "• "; // or "\002022"
        color: red; /* or whatever color you prefer */
    }

## 常用HTML代码

待补充。。。