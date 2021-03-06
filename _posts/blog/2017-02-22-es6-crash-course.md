---
layout: post
title:  ES6速成教程
description: 最好的学习ES6的方法，是为每一个ES6示例提供一个等价的ES5实现。外面已经有不少介绍ES6的文章，本文将只讲其中一些。
category: blog
tags:
    - es6
---

>作者： Sahat Yalkabov

>译者：pockry

>转载部分内容，原文地址：[sahatyalkabov.com](http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/)

最好的学习ES6的方法，是为每一个ES6示例提供一个等价的ES5实现。外面已经有不少介绍ES6的文章，本文将只讲其中一些。

## Modules(Import)

```js
// ES6
import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';


// ES5
var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
```

使用ES6中的[解构赋值（destructuring assignment）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)，我们能导入模块的子集，这对于像react-router和underscore这样不止输出一个函数的模块尤其有用。

需要注意的是ES6 import的优先级很高，所有的依赖模块都会在模块代码执行之前加载，也就是说，你无法像在CommonJS一样有条件的加载模块。之前我尝试在一个if-else条件里import模块，结果失败了。

想了解import的更多细节，可访问它的[MDN页面](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)。

## Modules(Export)

```js
// ES6
function Add(x) {
  return x + x;
}

export default Add;


// ES5
function Add(x) {
  return x + x;
}

module.exports = Add;
```

## Classes

ES6 class只不过是现有的基于原型继承机制的一层语法糖，了解这个事实之后，`class`关键字对你来说就不再像一个其它语言的概念了。

```js
// ES6
class Box {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    return this.length * this.width;
  }
}

let box = new Box(2, 2);

box.calculateArea(); // 4


// ES5
function Box(length, width) {
  this.length = length;
  this.width = width;
}

Box.prototype.calculateArea = function() {
  return this.length * this.width;
}

var box = new Box(2, 2);

box.calculateArea(); // 4
```

另外，ES6中还可以用`extends`关键字来创建子类。

```js
class MyComponent extends React.Component {
  // Now MyComponent class contains all React component methods
  // such as componentDidMount(), render() and etc.
}
```

## JS `var`与`let`

这两个关键字唯一的区别是，`var`的作用域在最近的函数块中，而`let`的作用域在最近的块语句中——它可以是一个函数、一个for循环，或者一个if语句块。

这里有个很好的[示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)，来自MDN：

```js
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // The scope is inside the if-block
  var b = 1; // The scope is inside the function

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1
```

一般来说，`let`是块作用域，`var`是函数作用域。

## 箭头函数(=> fat arrow)

一个箭头函数表达式与函数表达式相比有更简短的语法，以及从语法上绑定了`this`值。

```js
// ES6
[1, 2, 3].map(n => n * 2); // [2, 4, 6]

// ES5
[1, 2, 3].map(function(n) { return n * 2; }); // [2, 4, 6]
```

除了更短的语法，箭头函数还有什么用途呢？

考虑下面这个示例，它来自于我将这个项目转换为使用ES6之前的代码：

```js
$.ajax({ type: 'POST', url: '/api/characters', data: { name: name, gender: gender } })
  .done(function(data) {
    this.setState({ helpBlock: data.message });
  }.bind(this))
  .fail(function(jqXhr) {
    this.setState({ helpBlock: jqXhr.responseJSON.message });
  }.bind(this))
  .always(function() {
    this.setState({ name: '', gender: '' });
  }.bind(this));
```

上面的每个函数都创建了自己的`this`作用域，不绑定外层`this`的话我们是无法在示例中调用`this.setState`的，因为函数作用域的`this`一般是*undefined*。

当然，它有绕过的方法，比如将`this`赋值给一个变量，比如`var self = this`，然后在闭包里用`self.setState`代替`this.setState`即可。

而使用等价的ES6代码的话，我们没有必要如此麻烦：

```js
$.ajax({ type: 'POST', url: '/api/characters', data: { name: name, gender: gender } })
  .done((data) => {
    this.setState({ helpBlock: data.message });
  })
  .fail((jqXhr) => {
    this.setState({ helpBlock: jqXhr.responseJSON.message });
  })
  .always(() => {
    this.setState({ name: '', gender: '' });
  });
```