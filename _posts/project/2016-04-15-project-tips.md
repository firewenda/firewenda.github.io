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

[wenda]:    https://firewenda.github.io  "wenda"
