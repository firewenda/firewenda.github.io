---
layout: post
title: 项目小技巧总结
category: project
description: 项目小技巧总结
tags:
    - Nodejs
---

## Nodejs

删除node_modules文件夹下所有模块

	npm ls | grep -v 'npm@' | awk '/@/ {print $2}' | awk -F@ '{print $1}' | xargs npm rm

## MacOS X

如果是os10.10以前安装的homebrew，运行brew会提示：

	/usr/local/bin/brew: /usr/local/Library/brew.rb: /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby: bad interpreter: No such file or directory
	/usr/local/bin/brew: line 26: /usr/local/Library/brew.rb: Undefined error: 0

试了很多种方法都没有办法直接升级，直接个性brew.rb文件的版本号会导致无法安装文件，直接git clean也不行，最后在[stackoverflow]上找到解决方案：

此时解决方案为先删除homebrew

	 ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"

然后再重新安装

	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

[wenda]:    https://firewenda.github.io  "wenda"
[stackoverflow]:	http://stackoverflow.com/questions/24652996/homebrew-not-working-on-osx "stackoverflow"
