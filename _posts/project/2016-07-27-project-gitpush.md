---
layout: post
title: git代码提交方式
category: project
description: git代码提交方式
tags:
    - Git
---

## 设置Git

	git config --global user.name "your_username"
	git config --global user.email "your_email@domain.com"

## 创建一个本地代码库

直接clone线上代码库

	git clone https://github.com/git/*.git

如果你已经在本地的项目上工作了，只是想从远程代码库上取得它最新的版本，移动到项目的根目录下，并发送：

	git pull origin master

或者本地创建

	mkdir mygit
	cd mygit
	git init

## Github的提交方式

	git add . //暂存到本地

最后的“.”符号的意思是“所有文件、文件夹和子文件夹”。假如我们只想要把特定文件添加到源代码控制中去，我们可以指定它们：

	git add a.file, b.file

	git status //查看文件状态
	git commit -m 'message' //存储打标
	git pull //下载服务器代码
	git push //上传代码至服务器

## 暂存

我们在使用git的时候也会遇到这样的情况。当在需要紧急处理一个bug时，工作区内容又没有完成，不适合提交，想暂存起来。git提供了git stash命令来解决这样的需求。

	//暂存当前状态
	git stash
	//显示已暂存列表
	git stash list
	//恢复暂存区和工作区进度
	git stash pop

## 创建分支

	git checkout -b new_feature

或者，你可以先创建一个分支然后手动切换，就像这样：

	git branch new_featuregit checkout new_feature

查看项目下所有分支

	git branch

## 切换分支

	git checkout 分支名

放弃修改直接切换分支（谨慎操作）

	git checkout file-name // 放弃单个文件修改
	git checkout *.js //放弃同后缀名所有文件修改
	git checkout . //放弃所有文件修改

## 合并分支

当你对你的新功能满意了的时候，你想要把它加到主干分支上。当你在你的新功能分支上时，你首先需要加载（stage）并且提交你的文件：

	git add .
	git commit -m "adds my new feature"

然后你移到你的主干分支：

	git checkout master

像这样合并：

	git merge new_feature

## 丢弃分支

相反，如果你打算丢弃你在分支里做的修改，你首先需要加载（stage）你的文件并且在分支里提交：

	git add .
	git commit -m "feature to be discarded"

然后，你移到主干分支：

	git checkout master

## 删除一个分支

如果你要把你的分支合并到主干分支，从主干（master）分支上发送：

	git branch -d new_feature

假如修改已经合并了，它只会删除分支。假如分支没有合并，你会得到一个错误信息。删除一个未合并的分支（通常你不想保留的修改），你需要发送一样的命令附带一个大写D。意思是“强制删除分支，无论如何我不想要它了。”：

	git branch -D new_feature

删除远程分支(git version > 1.7.0)

	//git push origin :branchName //git version < 1.7.0
	git push origin --delete branchName //git version > 1.7.0

删除tag

	git push origin --delete tag tagName

A删除远程分支后，B使用branch -a查看时同步A的删除
	
	git fetch -p

## 回滚到之前的提交状态

	git log

这会输出你的提交的历史记录，像这样：

	commit 744fd32f14604e6dacd458e9415e926574ae0956
	Author: yourname <yourname@domain.com>
	Date:   Wed Jul 27 20:30:43 2016 +0800

如果你想回到上面的这个提交

	git checkout 744fd32f14604e6dacd458e9415e926574ae0956

还想了解更多？请查看Git官方文档[git]或者阮一峰博客：[ruanyifeng]

## .gitconfig 配置

```
[core]
    editor = vim
    quotepath = false
    # 处理windows和linux下换行时\r\n和\n的区别，尽量保持一致
    # autocrlf表示以已输入换行为准，不自动替换，减少fetch后差异的出现
    autocrlf = input
    # eol表示统一使用\n, 在add后自动替换\r\n为\n，减少提交后的差异
    eol = lf
    # 忽略大小写, false表示不忽略大小写
    ignorecase = false
[alias]
    ll = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
    co = checkout
    ci = commit
    br = branch
    st = status
    ps = push
    pl = pull
[color]
    ui = auto
[color "branch"]
    current = yellow reverse
    local = yellow
    remote = green
[color "diff"]
    meta = yellow bold
    frag = magenta bold
    old = red bold
    new = green bold
[color "status"]
    added = yellow
    changed = green
    untracked = cyan
```

[git]: https://git-scm.com/book/zh/v2 "git--local-branching-on-the-cheap"
[ruanyifeng]: http://www.ruanyifeng.com/blog/2012/07/git.html "Git分支管理策略"


