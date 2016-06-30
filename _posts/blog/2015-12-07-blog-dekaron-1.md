---
layout: post
title: Javascript挑战题
description: Javascript挑战题
category: blog
tags:
    - Javascript
---

## 如何产生一个n以内的斐波那契序列？

百度百科定义：斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……<br>
**特别指出：第0项是0，第1项是第一个1。**<br>
这个数列从第2项开始，每一项都等于前两项之和。

利用javascript实现方法：

    function fibonacci(n) {
        var i = 1, j = 1;
        var arr = [i, j];
        var last = 1;

        while (true) {
            last = i + j;
            if(last>n)break;
            i = j;
            j = last;
            arr.push(last);
        }
        console.log(arr.join(','));
    }

    fibonacci(1000);// => 1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987

## 经典阶乘函数

    function factorial(num){
        if(num <= 1){
            return 1;
        }else{
            return num * arguments.callee(num - 1);
        }
    }

    factorial(3); // => 6