# Git

[toc]





## 概念说明

### 仓库

![img](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-16_13-06-07_git-command.jpg)

- workspace：工作区
- staging area：暂存区/缓存区
- local repository：版本库或本地仓库
- remote repository：远程仓库



如上图，可以看到，就两种仓库 local repository 和 remote repository

分别是本地的仓库和远程仓库，这两种仓库都可以有分支

而我们只能，同一时刻，在一个编辑器中，在一个分支上coding（就是干活）

本地仓库，只有一个，而远程仓库可以有多个，远程仓库，默认名字为 origin ，可以根据需要改名~



### 分支

不同位置有不同的分支，它们存的是不同主题的代码，大致有已下几种

- 本地的
- 远端的

![image-20220617114041019](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-17_11-40-41_image-20220617114041019.png)





remote 通常有两个设置，fetch和push，可以设置成不同的，默认是clone的

![image-20220617123352805](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-17_12-33-52_image-20220617123352805.png)



### 标签

其实类似分支，只不过不会再有提交了~

### head 是啥

>  就是当前所在的分支

```sh
# 查看head
git branch -r
# 显示下面内容
 gitee/HEAD -> gitee/main
 gitee/main
```



## 使用说明

> 根据字母排序



### 查看帮助

```sh
git xxx -h

# 比如想看一下 git add 有哪些选项
git add -h

git --help
用法：git [--version] [--help] [-C <路径>] [-c <名称>=<取值>]
           [--exec-path[=<路径>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<路径>] [--work-tree=<路径>] [--namespace=<名称>]
           <命令> [<参数>]

这些是各种场合常见的 Git 命令：

开始一个工作区（参见：git help tutorial）
   clone             克隆仓库到一个新目录
   init              创建一个空的 Git 仓库或重新初始化一个已存在的仓库

在当前变更上工作（参见：git help everyday）
   add               添加文件内容至索引
   mv                移动或重命名一个文件、目录或符号链接
   restore           恢复工作区文件
   rm                从工作区和索引中删除文件
   sparse-checkout   初始化及修改稀疏检出

检查历史和状态（参见：git help revisions）
   bisect            通过二分查找定位引入 bug 的提交
   diff              显示提交之间、提交和工作区之间等的差异
   grep              输出和模式匹配的行
   log               显示提交日志
   show              显示各种类型的对象
   status            显示工作区状态

扩展、标记和调校您的历史记录
   branch            列出、创建或删除分支
   commit            记录变更到仓库
   merge             合并两个或更多开发历史
   rebase            在另一个分支上重新应用提交
   reset             重置当前 HEAD 到指定状态
   switch            切换分支
   tag               创建、列出、删除或校验一个 GPG 签名的标签对象

协同（参见：git help workflows）
   fetch             从另外一个仓库下载对象和引用
   pull              获取并整合另外的仓库或一个本地分支
   push              更新远程引用和相关的对象

命令 'git help -a' 和 'git help -g' 显示可用的子命令和一些概念帮助。
查看 'git help <命令>' 或 'git help <概念>' 以获取给定子命令或概念的
帮助。
有关系统的概述，查看 'git help git'。
```



### b、c

#### branch

```sh
git branch [选项] [分支名称]

选项
-a：查看本地及远程仓库中的分支
-d：删除分支
-D：强行删除分支
--set-upstream-to=origin/dev：将远程仓库的分支与本地仓库的分支管理

示例
# 创建dev分支
git branch dev
# 将本地的dev分支与远程仓库origin的dev分支关联
git branch --set-upstream-to=origin/dev dev
# 列出所有分支，当前分支前面会标一个*号
git branch
# 将 temp-001 分支绑定到 8e10946号提交
git branch temp-001 8e10946
```



#### clone

```sh
git clone -b 【分支名】 【仓库连接】

```



#### checkout

```sh
# 从库中检出文件覆盖到工作区
git checkout -- git常用命令.enmd
# 从主分支中创建并切换分支
git checkout -b dev
# 从主分支中创建并切换分支，同时关联到远程仓库origin的dev分支
git checkout -b dev origin/dev
# 切换到master分支
git checkout master

# 使用 git checkout dev 切换到dev，会显示下面内容
# 分别是
Switched to branch 'dev'
Your branch is up to date with 'origin/dev'.
```



#### config

```sh
# 查看所有的配置以及它们所在的文件，按q退出
git config --list --show-origin

# 查看全局配置
git config --global -l

# 查看你的全部配置，按q退出
git config -l
git config --list

# 查看单项配置
git config user.name
git config user.email

# 设置全局用户名和邮箱
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"

```





#### cherry pick

> 就是将指定的提交（commit）应用于其他分支。

```sh
# <commitHash>是提交号，是个哈希值
git cherry-pick <commitHash>
git cherry-pick <HashA> <HashB>
git cherry-pick A..B # 提交 A 必须早于提交 B，否则命令将失败，但不会报错。如果要包含提交 A，可以使用下面的语法。
git cherry-pick A^..B 

# 假设有如下分支结构
 a - b - c - d   Master
         \
           e - f - g Feature
# 切换到master并应用f提交
git checkout master
git cherry-pick f
# 会变成下面的结构
 a - b - c - d - f   Master
         \
           e - f - g Feature

# 参数，不一定是提交的哈希值，分支名也是可以的，表示转移该分支的最新提交
```



### m、p、f

#### merge

```
git merge [选项] 分支名称

选项
--no-ff：禁用Fast forward
-m：merge commit message (for a non-fast-forward merge)

示例

git merge dev
```





#### pull、fetch

```sh
# pull = fetch + merge
git pull <远程主机名> <远程分支名>:<本地分支名>
	# 如果将冒号和后面的branchtest去掉，则表示将远程origin仓库的master分支拉取下来与本地当前分支合并。
git pull <远程主机名> <远程分支名>
	# 以上的git pull操作如果用 fetch 来表示：
git fetch origin master:brantest
git merge brantest
	# 相比起来，git fetch更安全也更符合实际要求，因为可以在merge前，我们可以查看更新情况，根据实际情况再决定是否合并。

# fetch更新本地仓库的两种用法：
	# 方法一
#从远程的origin仓库的master分支下载代码到本地的origin maste
git fetch origin master
#比较本地的仓库和远程参考的区别
git log -p master.. origin/master
#把远程下载下来的代码合并到本地仓库，远程的和本地的合并
git merge origin/master
	# 方法二
# 从远程的origin仓库的master分支下载到本地并新建一个分支temp
git fetch origin master:temp
# 比较master分支和temp分支的不同
git diff temp
# 合并temp分支到master分支
git merge temp
# 删除temp
git branch -d temp


```



#### push

```sh
# 把本地库的内容推送到远程
git push [选项] 远程仓库别名 [本地仓库分支 or 标签名]

# -u：初次推送使用，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令

示例
# 推送当前分支，到指定的远程分支，比如在本地dev分支上呢，推送到远程的dev分支
git push --set-upstream origin dev
# 初次推送master分支到远程仓库
git push -u origin master
# 将dev分支推送至远程仓库，要先checkout dev
git push origin dev
# 将本地标签推送至远程仓库
git push origin v1.0
# 将本地所有标签推送至远程仓库
git push origin --tags
# 将远程仓库中的标签删除
git push origin :refs/tags/v1.0
```





### r、s、t

#### rebase

> 合并提交、合并分支，也叫变基

```sh
# 压缩n个提交 n是要自己改一下的！表示压缩前n个提交
git rebase -i HEAD~n
# 然后进入 vi 操作界面，pick是采用，s是压缩
# wq保存退出后，还会问你的改不改提交信息

# -i 选项说明
# -i, --interactive     let the user edit the list of commits to rebase

# 在 a 分支上，把 b 分支上的提交合进来
git checkout a
git rebase b

# 在 a 分支上，把 b 分支合并进来
git checkout a
git merge b

```



#### reset

```sh
# 回退一个版本，^是一个，^^是两个
git reset --hard HEAD^

提交a -> 提交b -> 提交c (master)
会变成
提交a -> 提交b (master)

```



#### remote

```sh
git remote [选项] [子命令] ["远程仓库的别名"] [远程仓库的url]

选项
-v：显示更详细的信息（抓取和推送的url）

子命令
add：添加远程仓库（即关联本地仓库和远程仓库）需要在本地仓库的主目录中执行该命令
git remote add upstream 远程仓库url

示例

# 通过ssh方式添加远程仓库
git remote add github https://github.com/xxx/yyy.git
# 查看远程仓库名
git remote
# 查看远程仓库详情
git remote -v
# 重命名，origin改成github
git remote rename origin github
# 移除
git remote remove 远程库名


```







#### stash

> 暂存工作区的代码，暂存当前工作现场

```sh
# 暂存当前分支，就是现在编辑器里写了一半的代码
git stash
# 查看暂存历史
git stash -list
# 恢复
git stash apply
# 恢复，并从暂存栈顶移除
git stash pop


示例
# 保存当前工作现场
git stash
# 查看已保存的工作现场
git stash list 
# 恢复现场（单个现场是使用）
git stash apply
# 恢复指定的现场
git stash apply stash@{0}
# 删除保存的现场
git stash drop
# 删除已保存的指定的现场
git stash drop stash@{0}
# 恢复现场并从暂存空间删除
git stash pop
# 恢复指定的现场并从暂存空间删除
git stash pop stash@{0}
```

#### tag

```sh
# 本地打标签
git tag -a v0.1.0 -m "release 0.1.0 version"

# 将标签推送到远程分支
git push origin v0.1.0
```



### 其他

> 也不是不常用哈，就是都借助gui工具了，不需要苦手

```sh
blame
rm
mv
init
show			# 显示标签的详细信息 git show v1.0
log				# 查看日志，一般借助工具查看
reflog		# 显示你的历史命令
diff			# 比较文件修改内容 git diff file，一般借助
status		# 查看修改的文件
add				# 添加到暂存区，接文件名或.
commit		# 提交，-a是先自动add全部，-m是添加提交信息
tag				# 用gitlab上面的工具吧


```





## 工作流

> workflow

### steppp 工作流程

分支说明：

- main：最稳定的
- dev：开发分支
- feat_xxx：特定功能开发
- tag

### misc



![clipboard.png](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-16_17-04-04_bVbxf62.png)



- **master**——最为稳定功能最为完整的随时可发布的代码；
- hotfix——修复线上代码的 bug；
- **develop**——永远是功能最新最全的分支；
- feature——某个功能点正在开发阶段；
- release——发布定期要上线的功能。

简单概括

master 生产主分支,发布到生产环境使用这个分支,由hotfix或者release分支合并过来，不直接提交代码。

develop 主开发分支 , 基于master分支克隆，由feature分支合并过来，一般不直接提交代码。

feature 功能开发分支 , 基于develop分支克隆 , 主要用于新需求新功能的开发，同时存在多个。

release 预发布分支 , 基于feature分支合并到develop之后 , 从develop分支克隆，测试完成后合并到master并tag打上版本号，同时也合并到develop。

hotfix 补丁分支 , 基于master分支克隆 , 主要用于对线上的版本进行BUG修复,完成后合并到master分支和develop分支。



1. clone
2. checkout
3. pull、rebase
4. add、commit
5. 



项目负责人：

1. init
2. push子项目
3. 



```

# 更新master主线上的东西到该分支上
git rebase master
# 切换到master分支
git checkout master
# 更新mybranch分支上的东西到master上
git rebase mybranch
```





![image.png](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-16_17-10-16_bVcHU9n.png)





## 其他

### git 安装

[参考：win git 安装及配置](https://www.cnblogs.com/bigc008/p/9858201.html)







### 关于版本 version

```js
// 版本
major：主版本号，不兼容的API修改
minor：次版本号，向下兼容，功能性增加
patch：修订号，向下兼容，bug fixed

// 版本发布进度
alpha（内测）
beta（公测）
rc （正式版本的候选版本）  Release Candiate

// npm 发布指令
升级补丁版本号：npm version patch。
升级小版本号：npm version minor。
升级大版本号：npm version major。
```




### vscode中monorepo的资源控制显示

由于monorepo是超多项目的集合，如果一次修改了多个项目，混在一起是很难code review的，必须要按照文件树显示

清晰不犯错~

![image-20220608071104350](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-12_21-03-04_2022-06-08_07-11-04_image-20220608071104350.png)






## 参考

- [ ] 一个比较全的说明：[关于 Git 这一篇就够了](https://blog.csdn.net/bjbz_cxy/article/details/116703787)
- [ ] [如何将代码同时提交到Github和码云Gitee上](https://blog.csdn.net/gozhuyinglong/article/details/113861993)
- [ ] [b站上讲的不错的git flow](https://www.bilibili.com/video/BV1bp4y1k7KH?spm_id_from=333.337.search-card.all.click&vd_source=7825461e6c819872003a60230789cbfe)
- [ ] [git 中的 --no-ff 参数是什么意思](https://blog.csdn.net/Destiny_shine/article/details/109674635)
- [ ] [b站学习 git 项目](https://www.bilibili.com/video/BV1pR4y1s79B?p=2&spm_id_from=pageDriver&vd_source=7825461e6c819872003a60230789cbfe) 
  
- [ ] linux mac [生成SSH key](https://blog.csdn.net/fish_skyyyy/article/details/119213714)
  
- [ ] Learn Git Branch：https://learngitbranching.js.org/?NODEMO=&locale=zh_CN
  
- [ ] 仓库地址(可直接fork使用)：https://github.com/yd-organization/github-flow-work
  
- [x] https://segmentfault.com/a/1190000020280903
- [x] https://www.google.com/search?client=firefox-b-d&q=git+%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5
- [x] https://blog.51cto.com/u_12179846/3193110
- [x] https://www.google.com/search?client=firefox-b-d&q=git+head+%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D
- [x] https://frainmeng.github.io/2015/10/29/Git-%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E/
- [x] https://www.google.com/search?client=firefox-b-d&q=git+%E5%91%BD%E4%BB%A4%E5%8F%8A%E8%AF%B4%E6%98%8E
- [x] [git clone、git pull和git fetch的用法及区别](https://segmentfault.com/a/1190000017030384)

