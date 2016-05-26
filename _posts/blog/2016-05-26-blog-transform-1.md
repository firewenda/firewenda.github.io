---
layout: post
title: css3变形属性transform
description: Transform字面上就是变形，改变的意思。在CSS3中transform主要包括以下几种：旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix。
category: blog
tags:
    - CSS3
    - transform
---

## 定义和用法

transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。

## 一、旋转rotate

rotate(<angle>) ：通过指定的角度参数对原元素指定一个 2D rotation （2D 旋转），需先有transform-origin属性的定义。transform-origin定义的是旋转的基点，其中angle是指旋转角度，如果设 置的值为正数表示顺时针旋转，如果设置的值为负数，则表示逆时针旋转。如：transform:rotate(45deg):

<div class="rotate-div-1">rotate(45deg)</div>
<style>
.rotate-div-1 {
	width: 300px;
	height: 24px;
	margin: 150px auto;
	background-color: #22baa0;
	text-align: center;
	transform: rotate(45deg);
}
</style>

	.rotate-div-1 {
		width: 300px;
		margin: 150px auto;
		background-color: #22baa0;
		text-align: center;
		transform: rotate(45deg);
	}

这里使用了 transform: rotate(45deg) 顺时针旋转了45度。deg是css3中 “ Value and Utils” 模块中定义的角度单位

## 二、移动translate

移动translate我们分为三种情况：translate(x,y)水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）；translateX(x)仅水平方向移动（X轴移动）；translateY(Y)仅垂直方向移动（Y轴移动），具体使用方法如下：

<div class="translate-box">
	<div class="translate-div-1">translate</div>
</div>
<style>
.translate-box{
	width: 150px;
	height: 150px;
	background: #ccc;
	margin: 50px auto;
}
.translate-div-1 {
	width: 100px;
	height: 100px;
	background-color: #22baa0;
	text-align: center;
	transform: translate(20px, 20px);
	line-height: 100px;
}
</style>

	.translate-box{
		width: 150px;
		height: 150px;
		background: #ccc;
		margin: 50px auto;
	}
	.translate-div-1 {
		width: 100px;
		height: 100px;
		line-height: 100px;
		background-color: #22baa0;
		text-align: center;
		transform: translate(20px, 20px);
	}

## 三、缩放scale

缩放scale和移动translate是极其相似，他也具有三种情况：scale(x,y)使元素水平方向和垂直方向同时缩放（也就是X轴和Y轴同时缩放）；scaleX(x)元素仅水平方向缩放（X轴缩放）；scaleY(y)元素仅垂直方向缩放（Y轴缩放），但它们具有相同的缩放中心点和基数，其中 心点就是元素的中心位置，缩放基数为1，如果其值大于1元素就放大，反之其值小于1，元素缩小。下面我们具体来看看具体使用方法：
例如scale(0.5)表示缩小一半，scale(2)表示放大一倍。

<div class="scale-div-1">scale(0.5)</div>

<p class="pic-tips">图（一）</p>

<style>
.scale-div-1 {
	width: 300px;
	margin: 50px auto;
	background-color: #22baa0;
	text-align: center;
	transform: scale(0.5);
}
.scale-div-2 {
	width: 300px;
	margin: 50px auto;
	background-color: #22baa0;
	text-align: center;
	transform: scale(2);
}
</style>

	.scale-div-1 {
		width: 300px;
		margin: 50px auto;
		background-color: #22baa0;
		text-align: center;
		transform: scale(0.5);
	}

<div class="scale-div-2">scale(2)</div>

<p class="pic-tips">图（二）</p>

	.scale-div-2 {
		width: 300px;
		margin: 50px auto;
		background-color: #22baa0;
		text-align: center;
		transform: scale(2);
	}

## 四、扭曲skew

扭曲skew和translate、scale一样同样具有三种情况：skew(x,y)使元素在水平和垂直方向同时扭曲（X轴和Y轴同时按一定的角度值 进行扭曲变形）；skewX(x)仅使元素在水平方向扭曲变形（X轴扭曲变形）；skewY(y)仅使元素在垂直方向扭曲变形（Y轴扭曲变形），具体使用 如下：

<div class="skew-div-1">skew</div>
<style>
.skew-div-1 {
	width: 200px;
	height: 200px;
	margin: 50px auto;
	background-color: #22baa0;
	text-align: center;
	transform: skew(10deg, 10deg);
}
</style>

	.skew-div-1 {
		width: 200px;
		height: 200px;
		margin: 50px auto;
		background-color: #22baa0;
		text-align: center;
		transform: skew(10deg, 10deg);
	}

> 详情查看：<a href="http://www.w3cplus.com/content/css3-transform">http://www.w3cplus.com/content/css3-transform</a>