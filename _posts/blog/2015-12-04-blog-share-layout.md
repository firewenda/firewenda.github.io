---
layout: post
title:  【转载】利用HTML和CSS实现常见布局
description:  利用HTML和CSS实现常见的布局
category: blog
tags:
    - HTML
    - CSS
---

>作者：mrshi

>原文地址：<a href="http://segmentfault.com/a/1190000003931851">http://segmentfault.com/a/1190000003931851</a>

## 单列布局
### 水平居中

水平居中的页面布局中最为常见的一种布局形式，多出现于标题，以及内容区域的组织形式，下面介绍四种实现水平居中的方法（注：下面各个实例中实现的是child元素的对齐操作，child元素的父容器是parent元素）

**使用inline-block 和 text-align实现**

    .parent{text-align: center;}
    .child{display: inline-block;}

优点：兼容性好；
不足：需要同时设置子元素和父元素

**使用margin:0 auto来实现**

    .child{width:200px;margin:0 auto;}

优点：兼容性好
缺点: 需要指定宽度

**使用table实现**

    .child{display:table;margin:0 auto;}

优点:只需要对自身进行设置
不足:IE6,7需要调整结构

**使用绝对定位实现**

    .parent{position:relative;}
    /*或者实用margin-left的负值为盒子宽度的一半也可以实现，不过这样就必须知道盒子的宽度，但兼容性好*/
    .child{position:absolute;left:50%;transform:translate(-50%);}

不足：兼容性差,IE9及以上可用

**实用flex布局实现**

    /*第一种方法*/
    .parent{display:flex;justify-content:center;}
    /*第二种方法*/
    .parent{display:flex;}
    .child{margin:0 auto;}

缺点：兼容性差，如果进行大面积的布局可能会影响效率

## 垂直居中

**vertical-align**

>我们都知道，每个人都有不同的嗜好，有的人喜欢吃甜食，有的人喜欢吃辣的东西，有的人不喜欢吃芹菜，有的人不喜欢吃羊肉等等。CSS中的有些元素也是这样，他们有的只对牛奶感兴趣，有的只喜欢吃坚果和果冻，而讨厌牛奶。而vertical-align呢，是个比较挑食的家伙，它只喜欢吃果冻，从小吃果冻长大，没有了果冻，它就会闹脾气，对你不理不睬。我称之为“果冻依赖型元素”，又称之为“inline-block依赖型元素”，也就是说,只有一个元素属于inline或是inline-block（table-cell也可以理解为inline-block水平）水平，其身上的vertical-align属性才会起作用。<a href="http://www.zhangxinxu.com/wordpress/2010/05/%E6%88%91%E5%AF%B9css-vertical-align%E7%9A%84%E4%B8%80%E4%BA%9B%E7%90%86%E8%A7%A3%E4%B8%8E%E8%AE%A4%E8%AF%86%EF%BC%88%E4%B8%80%EF%BC%89/">我对css-vertical-align的一些理解与认识</a>

在使用vertical-align的时候，由于对齐的基线是用行高的基线作为标记，故需要设置line-height或设置display:table-cell;

    /*第一种方法*/
    .parent{display:table-cell;vertical-align:middle;height:20px;}
    /*第二种方法*/
    .parent{display:inline-block;vertical-align:middle;line-height:20px;}

**使用绝对定位**

    .parent{position:relative;}
    .child{positon:absolute;top:50%;transform:translate(0,-50%);}

**实用flex实现**

    .parent{display:flex;align-items:center;}

### 水平垂直全部居中

**利用vertical-align,text-align,inline-block实现**

    .parent{display:table-cell;vertical-align:middle;text-align:center;}
    .child{display:inline-block;}

**利用绝对定位实现**

    .parent{position:relative;}
    .child{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}

**利用flex实现**

    .parent{display:flex;justify-content:center;align-items:center;}

## 其他

想知道详细的全文请查看全文<a href="http://segmentfault.com/a/1190000003931851">http://segmentfault.com/a/1190000003931851</a>