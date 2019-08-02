---
layout: post
title:  css揭秘学习总结
description: ''
category: blog
tags:
    - css
---

## 半透明边框

<style type="text/css">
.hsla-wrap{
  width: 100%;
  height: 100px;
  background: linear-gradient(#fb3 33.3%,
  #58a 0, #58a 66.6%, yellowgreen 0);
  background-size: 100% 45px;
  display: flex;
  align-items: center;
}
.hsla-wrap div{
  border: 10px solid hsla(0,0%,100%,.5);
	background: white;
	background-clip: padding-box;
  width: 200px;
  margin: 0 auto;
  text-align: center;
}
</style>
<div class="hsla-wrap">
  <div>box</div>
</div>

## 复杂的背景图案

<style type="text/css">
.background-wrap{
  width: 100%;
  height: 105px;
  background: #eee url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" \
      width="100" height="100" \
      fill-opacity=".25">\
    <rect x="50" width="50" height="50" /> \
    <rect y="50" width="50" height="50" /> \
  </svg>');
  background-size: 30px 30px;
}
</style>
<div class="background-wrap">
</div>

## 伪随机背景

<style type="text/css">
.hsl-wrap{
  width: 100%;
  height: 100px;
  background: hsl(20, 40%, 90%);
  background-image: 
    linear-gradient(90deg, #fb3 11px, transparent 0),
    linear-gradient(90deg, #ab4 23px, transparent 0),
    linear-gradient(90deg, #655 23px, transparent 0);
  background-size: 83px 100%, 61px 100%, 41px 100%;
}
</style>
<div class="hsl-wrap">
</div>

## 连续的图像边框

<style type="text/css">
@keyframes ants { to { background-position: 100% 100% } }
.vintage-wrap{
  width: 100%;
  height: 100px;
  padding: 1em;
	border: 1em solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, 
	              #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 6em 6em;
  animation: ants 12s linear infinite;
}
</style>
<div class="vintage-wrap">
  box
</div>

## 平行四边形

<style type="text/css">
@keyframes blink-smooth { to { color: transparent } }
.button-wrap{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
	position: relative;
	display: inline-block;
	padding: .5em 1em;
	border: 0; margin: .5em;
	background: transparent;
	color: white;
	text-transform: uppercase;
	text-decoration: none;
  z-index: 0;
  animation: .5s blink-smooth 6 alternate;
}

.button::before {
	content: ''; /* To generate the box */
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	z-index: -1;
	background: #58a;
	transform: skew(45deg);
}
</style>
<div class="button-wrap">
  <button class="button">
    Click me
  </button>
</div>

## 菱形图片

<style type="text/css">
.diamond-wrap{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.diamond{
  width: 80px;
  height: 100px;
  background: #58a;
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	transition: 1s;
}
.diamond:hover{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>
<div class="diamond-wrap">
  <div class="diamond">
  </div>
</div>

## 切角效果

### 斜面切角
<style type="text/css">
.bevel-corners-gradients{
  width: 100%;
  height: 100px;
  background: #58a;
	background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
	            linear-gradient(-135deg, transparent 15px, #58a 0) top right,
	            linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
	            linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat;
}
.scoop-corners{
  width: 100%;
  height: 100px;
  background: #58a;
  background: radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
	            radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
	            radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right,
	            radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left;
  background-size: 50% 50%;
	background-repeat: no-repeat;
}
</style>
<div class="bevel-corners-gradients">
</div>

### 弧形切角

<div class="scoop-corners">
</div>

## 折角效果

[折角效果][1]

## 打字动画

<style type="text/css">
@keyframes typing {
	from { width: 0 }
}

@keyframes caret {
	50% { border-right-color: transparent; }
}

.typing {
  font: bold 200% Consolas, Monaco, monospace;
	width: 15ch;
	white-space: nowrap;
	overflow: hidden;
	border-right: .05em solid;
	animation: typing 5s steps(15),
	           caret 1s steps(1) infinite;
}
</style>
<h5 class="typing">CSS is awesome!</h5>

<script type="text/javascript">
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}
$$('.typing').forEach(function(h1) {
  var len = h1.textContent.length, s = h1.style;
  s.width = len + 'ch';
  s.animationTimingFunction = "steps("+len+"),steps(1)";
});
</script>

## 环形动画

<style type="text/css">
@keyframes spin {
	from {
		transform: rotate(0turn)
		           translateY(-175px) translateY(50%)
		           rotate(1turn)
	}
	to {
		transform: rotate(1turn)
		           translateY(-175px) translateY(50%)
		           rotate(0turn);
	}
}
.avatar {
	animation: spin 3s infinite linear;
}
/* Anything below this is just styling */
.avatar {
	display: block;
	width: 50px;
  height: 50px;
  background: #58a;
	margin: calc(50% - 25px) auto 0;
	border-radius: 50%;
	overflow: hidden;
}
.path {
	width: 300px;
  height: 300px;
	padding: 20px;
	margin: 0 auto;
	border-radius: 50%;
	border: 1px solid #fb3;
  position: relative;
}
</style>

<div class="path">
	<div class="avatar"></div>
</div>

[1]: https://codepen.io/leaverou/pen/raGaNR