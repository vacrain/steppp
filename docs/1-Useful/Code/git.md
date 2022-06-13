# Git 讲解大全

[toc]

## todo

- [ ] 
- [ ] 整理所有git相关内容
- [ ] 学一下git tag，release啥的
- [ ] git flow
- [ ] https://www.google.com/search?client=firefox-b-d&q=git+head+%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D
- [ ] 

## 基本概念



## 命令说明



```sh
config
log
add
commit
push
pull
reset
branch
reflog
checkout
merge
stash
remote
clone
tag
show



config
参数说明：
-- global // 全局设置
-- list // 查看所有信息







```





## 工作流程





## 其他





### monorepo项目的git菜单设置，按照文件树展示

由于monorepo是超多项目的集合，如果一次修改了多个项目，混在一起是很难code review的，必须要按照文件树显示

清晰不犯错~

![image-20220608071104350](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-12_21-03-04_2022-06-08_07-11-04_image-20220608071104350.png)



### git 自动提交脚本

先运行 whereis bash，我用的是 zsh 所以运行的是 where is zsh，然后会输出 运行正常的地址 `bin/bash`或 `/bin/zsh` ，这就是下面第一行的内容

提交时，只需运行命令 sh ./gitbash.sh '提交描述信息'

**补充说明：**

1、#! /bin/bash，声明脚本解释执行的方式，必须写在第一行；
2、运行报错，找不到 sh 命令如何解决？首先确保已正确安装好 git 工具，在 git 安装目录下有一个 bin 文件夹，里面找到 sh.exe，在系统环境变量中添加相对应的环境，如 C:\Program Files\Git\bin
3、一般 shell 的变量赋值的时候不用带“\$”，$1 值为 _sh ./gitbash.sh '提交描述信息'_ 命令的第一个参数

在~目录创建文件，文件名自己定就好。。我是叫 git-auto.sh，内容如下

```
#! /bin/zsh

# 运行
# sh ./gitbash.sh '提交描述信息'

echo "请输入工程目录："
read project_dir
cd project_dir

git status

git add .

echo "请输入提交说明："
read msg
git commit -m msg

git push

# 空行
# echo ${br/* /}

echo "如果是will和steppp项目再git push gitee即可"



```

### vscode 插件集合

-   gitlens



### vscode 左侧的 source control 自动检测文件

把 .git 文件删掉就好了！



### 关于版本 git version

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



### gitee pr流程

试一下

![image-20220611221254964](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-12-55_image-20220611221254964.png)

创建完：

![image-20220611221349291](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-13-49_image-20220611221349291.png)



review：

![image-20220611221501276](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-15-01_image-20220611221501276.png)



添加评论：

![image-20220611221644127](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-16-44_image-20220611221644127.png)



![image-20220611221756249](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-17-56_image-20220611221756249.png)

pr前

![image-20220611221952562](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-19-52_image-20220611221952562.png)



合并选项：

![image-20220611222224702](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-22-24_image-20220611222224702.png)

选择了第一个 合并分支，然后开始合并 

![image-20220611222323364](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-23-23_image-20220611222323364.png)



完成：

![image-20220611222404984](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_22-24-05_image-20220611222404984.png)











### git 文件的对比修改内容方法

1. git资源管理：![image-20220611175221424](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_17-52-21_image-20220611175221424.png)



2. 文件里右键-commit change

![image-20220611175339394](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_17-53-39_image-20220611175339394.png)

3. 文件目录中的file 历史

![image-20220611175433811](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-11_17-54-33_image-20220611175433811.png)

### 如何保护dev main分支…弄好 main、feat、dev 分支

https://gitee.com/help/articles/4295

https://gitee.com/help/articles/4346






### git auto 脚本

```
#! /bin/zsh


#############################
# constants
log_head=">>"
# emoji=""


#############################
# select project
echo "
$log_head 选择项目:
    1) steppp
    2) will
    *) noti(默认,反正只是gitee私有项目)
"
read project_flag

steppp_dir="/Library/code/projects/my_now/steppp"
will_dir="/Users/wangxiansheng/Documents/notes/0_1_will"
noti_dir="/Library/code/projects/my_now/notia"

case $project_flag in
    1) project_dir=$steppp_dir
    ;;
    2) project_dir=$will_dir
    ;;
    *) project_dir=$noti_dir
    ;;
esac

cd $project_dir

# 空行
echo ${br/* /}

#############################
# status
git_status=`git status | tail -1`
echo "git_status: $git_status"

if [[ $git_status == *clean ]]
then
    printf "\nnothing new ~\n"
    exit
fi

#############################
# config type & msg
echo "$log_head 提交格式: <type>: <subject/msg>
type(必须)
    1)dev: 开发功能(这个不是Angular官方的)
    2)will: 学习文档更新(这也不是Angular的)
    *)anyway: 随便输入代码,反正我就是要提交
subject/msg(必须)
    subject是commit目的的简短描述,不超过50个字符。
    结尾不加句号或其他标点符号。
"

type1="dev"
type2="will"
# 诶！就是要提交！
type9="anyway"

echo "$log_head type:(请输入typeflag,1 or 2)"
read type_flag
case $type_flag in
    1) type=$type1
    ;;
    2) type=$type2
    ;;
    *) type=$type9
    ;;
esac

echo "$log_head subject/msg: (请输入提交说明)"
read msg

#############################
# pull



#############################
# add & commit
echo "\n提交信息: $type (_): $msg"
git add .
git commit -m "$type (_): $msg"

#############################
# push
printf "\n$log_head push start ! (default push to gitee)\n"
git push
case $project_flag in
    1) git push github | echo "\n$log_head push github start !(如果卡住,手动github~)"
    ;;
    2) git push github | echo "\n$log_head push github start !(如果卡住,手动github~)"
    ;;
    *) echo "\n$log_head all done !"
    ;;
esac

```



### git commit 格式规范

Angular 规范
commit message 格式

<type>(<scope>): <subject>

type(必须)
用于说明 git commit 的类别，只允许使用下面的标识。

feat：新功能（feature）
fix/to：修复 bug，可以是 QA 发现的 BUG，也可以是研发自己发现的 BUG。
fix：产生 diff 并自动修复此问题。适合于一次提交直接修复问题
to：只产生 diff 不自动修复此问题。适合于多次提交。最终修复问题提交时使用 fix
docs：文档（documentation）。
style：格式（不影响代码运行的变动）。
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）。
perf：优化相关，比如提升性能、体验。
test：增加测试。
chore：构建过程或辅助工具的变动。
revert：回滚到上一个版本。
merge：代码合并。
sync：同步主线或分支的 Bug。

scope(可选)
scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
例如在 Angular，可以是 location，browser，compile，compile，rootScope， ngHref，ngClick，ngView 等。如果你的修改影响了不止一个 scope，你可以使用\*代替。

subject(必须)
subject 是 commit 目的的简短描述，不超过 50 个字符。
建议使用中文（感觉中国人用中文描述问题能更清楚一些）。
结尾不加句号或其他标点符号。

### Git 本地项目绑定到远程仓库

1. 新建文件夹
2. 终端打开到这个文件夹里
3. git init
4. git remote add origin 仓库连接【https、ssl、都行】



### git push 到指定分支

首先要下载指定分支：

```
git clone -b 【分支名】 【仓库连接】
```

修改过后，还是那三连：

```
git status
git add .
git commit -m"测试提交"
```

然后 push 到指定分支

```
git push
```

### VSCode 中使用 Git 忽略提交代码设置

https://blog.csdn.net/Strive_For_Future/article/details/120952325




### Git 原理

这原理真没啥可说的。。照着教程啥的做一遍就啥都懂了

![img](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-05-31_10-15-10_v2-48f5650ccd761b648e3d909c86b5e9bd_720w.jpg)

### git 命令

```
git add .  日志
git log

查看用户名、邮箱设置
git config --global --list

设置用户名、邮箱
git config --global user.name "xxx"
git config --global user.email "xxx"

查看远端仓库
git remote -v

查看状态
git status

查看文件修改内容
git diff 文件名

============================================
一般全提交交过程：

全部修改内容加载到暂存
git add .

将代码全部提交，这时还没有推到远端
git commit -m"你的描述"

将代码推到远端分支
git push origin 你的分支名

git push成功会显示：
Counting objects: 4, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 556 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/vacrain/learning.git
   5427cae..17e8925  main -> main



```

### Git 提交三连

```
git add .
git commit -m"msg"
git push
```

### 修改 commit 信息

https://www.cnblogs.com/daodaotest/p/13841951.html

### 【Git】Git 报 OpenSSL SSL_read: Connection was reset, errno 10054 的错误如何解决

https://blog.csdn.net/qq_42351033/article/details/114643286

### [win 生成公钥并使用](https://blog.csdn.net/a419419/article/details/80021684)

### git 安装及配置

[参考：win git 安装及配置， 及 IDEA 中配置以及使用 Git Step By Step](https://www.cnblogs.com/bigc008/p/9858201.html)

安装完进行配置：

生成 SSH 的 key：

```
生成命令：
ssh-keygen -t rsa –C "github里注册的邮箱"
填写存放目录，及文件名，目录（/f/ssh）文件名(rsa_1)随便起名哈：
/f/ssh/rsa_1
之后一路回车即可！
```

最后生成类似这些东西，就说明完成了：

```
Your identification has been saved in /f/ssh/qq726_rsa
Your public key has been saved in /f/ssh/qq726_rsa.pub
The key fingerprint is:
SHA256:GrhIVZ1d+p0DDvbvOu6NAXNS7SSafrKv7I1H2X42ZBI 726866011@qq.com
```

git 全局配置：

```
git config --global user.name "用户名"

git config --global user.email "邮箱地址"

下面的可先不做：
git config --global color.ui true

git config --global push.default simple

git config --global core.editor vim

git的全局变量会存放在：~/.gitconfig （这个好像是Linux下的存放位置）

以上的命令，会保存成这样，所以也可以直接按格式在这里填写，或者保存这个文件，以便保存到别的计算机上。

[user]
    name = litifeng
    email = litifeng@example.com
[color]
    ui = true
[push]
    default = simple
[core]
    editor = vim

```

打开 github、登录、进入设置界面，点【SSH and GPG keys】，然后点【New SSH key】：

![image-20210806101055106](https://github.com/vacrain/typora_img/raw/main/assets/imgs/2021/2021-08-06 10-10-56_image-20210806101055106.png)

下面这个公钥，就是之前我们保存的那个：

```
填写描述：
for vac-commit
填写公钥：
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDQAMLnsy+5nMFZ3U3+DmGi1hT2TKsklYISm4sMhFE8Hye86QWkb03+a5wFVP+rMh61CtnUImLO1oMentHDTKi2KRLWCACX02UrA0gZmP2Wn5T24Z4D0wB086t1MCZLIY7pn9ng9VVYr+0p1x3Jo6mUAddIOp8y8tsY9h1GSf6fLTrSjHDAL3DQan3UzrV3r2NLs0khtvIh7KPjswZBn8+8endBRrJKvXiz8X9VKlOwvuvjJx/23I48xme+K4lR7SRiwNduw4+zjXqpCSSU+lbW+nH1Q9sVk05Emo+RYAQpompahPEEJtNX3437M7R1VMTtA/PgWGfE2KKDq2uIizGpyu9Rfm/cXXnwXPe/aosKna2CvybDNyMnfWewKJM4H2QuHgO8jmpNAe5iXvkzv2jDYfe6PVM9r2fzs2qkMuGRpTTCREftJ7Zc6ojrNgaCDIeXXAgorz44Z2kNkqtmh7Q4iBWY/S/JaCK8S2xrm0TAuww5xrvwDUI6sP9VmL7QQVE= 726866011@qq.com


这个公钥的查看方法：
第一步：
cd 到生成密钥的目录，我是【/f/ssh】，要是忘了，那就先挂个脑科的号，然后再从头做一遍
第二步：
cat 自己起的文件名.pub
```

![image-20210806101707374](https://github.com/vacrain/typora_img/raw/main/assets/imgs/2021/2021-08-06 10-17-08_image-20210806101707374.png)

填写完成：

![image-20210806103422916](https://github.com/vacrain/typora_img/raw/main/assets/imgs/2021/2021-08-06 10-34-24_image-20210806103422916.png)

**之后就可以用`git clone`命令去下载你需要的项目了~**

查看 git 配置：

```
 git config --global -l
```

### git 相关文章

[摸清 Git 的门路，就靠这 22 张图](https://mp.weixin.qq.com/s/shGoT9oRn62YSyCO9VEzDQ)

[如何开始在 github 上学习东西？](https://www.zhihu.com/question/30119197)

[在 IDEA 上 Git 的入门使用（IDEA+Git)](https://blog.csdn.net/weixin_39274753/article/details/79722522)

[git](https://blog.csdn.net/weixin_44689154/article/details/107811710?spm=1001.2014.3001.5501)

[Git 基本操作流程](https://tophub.today/link?url=https%3A%2F%2Fwww.cnblogs.com%2Fdechinphy%2Fp%2Fgit.html)

[在 gitee 上创建你的第一个仓库](https://gitee.com/help/articles/4169)

[同上，这个更具体,看到第五步移步下面的教程](https://www.cnblogs.com/mingfeng002/p/8316659.html)

[【git】【eclipse】免密/SSH 方式连接免登录](https://blog.csdn.net/sayyy/article/details/99957973?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242)

[关于 Git 这一篇就够了](https://blog.csdn.net/bjbz_cxy/article/details/116703787)

### 修改提交仓库地址

打开.git 文件夹中的 config 文件，直接修改地址即可

### 如何将代码同时提交到 Github 和码云 Gitee 上

**配置说明** ：

-   查看

这个 origin 就是一个指向远程仓库的名称，是你在 clone 时 git 为你默认创建的。

```
> git remote
origin
```

```
> git remote -v
origin	https://github.com/vacrain/naive-ui-steppp.git (fetch)
origin	https://github.com/vacrain/naive-ui-steppp.git (push)
```

-   重命名，然后查看一下

```
> git remote rename origin github
> git remote
github
> git remote -v
github	https://github.com/vacrain/naive-ui-steppp.git (fetch)
github	https://github.com/vacrain/naive-ui-steppp.git (push)
```

-   添加同名库链接，然后再查看一下

```
> git remote add gitee https://gitee.com/vacrain/naive-ui-steppp.git
> git remote
gitee
github
> git remote -v
gitee	https://gitee.com/vacrain/naive-ui-steppp.git (fetch)
gitee	https://gitee.com/vacrain/naive-ui-steppp.git (push)
github	https://github.com/vacrain/naive-ui-steppp.git (fetch)
github	https://github.com/vacrain/naive-ui-steppp.git (push)
```

-   pull push 带分支提交(==一般 gitee 默认分支是 master 喔！！== 可以去仓库主页设置一下，把 main 设置成默认仓库，或者通过下一步绑定的时候 用 git branch --set-upstream-to=gitee/master main)

```
git push github main
git pull github main

git push gitee main
git pull gitee main
```

-   想不带分支提交，就绑定一下

```
git branch --set-upstream-to=gitee/main main
格式说明
git branch --set-upstream-to=<remote>/<remote_branch> <local_branch>
```

-   移除

```
git remote remove gitee
```

-   参考：

https://blog.csdn.net/gozhuyinglong/article/details/113861993

-   配置好后，每次提交下面两个命令各用一次就好，或者用 vscode 点点点就行

```
git push
git push gitee
```

-   vscode 点点点提交，正常同步 github（如果 github 是第一个 remote 库的话），再点一下下面的按钮，然后选 gitee 提交一下

![image-20220420073253948](https://github.com/vacrain/typora_img/raw/main/assets/imgs/2021/2022-04-20_07-32-54_image-20220420073253948.png)

### git 全局忽略配置

```
vim ~/.gitignore_global
```

![image-20220417155839308](https://github.com/vacrain/typora_img/raw/main/assets/imgs/2021/2022-04-17_15-58-39_image-20220417155839308.png)

在 ~/.gitconfig 中引入 .gitignore_global

```
[core]
	excludesfile = ~/.gitignore_global
```

### 生成 SSH key

查找当前系统是否已经安装

```
rpm -qa |grep ssh
```

配置 https://blog.csdn.net/fish_skyyyy/article/details/119213714

### Mac git push 报错令牌过期

报错内容：

```
➜ notes (main) git push

Username for 'https://github.com': vacrain

Password for 'https://vacrain@github.com':

remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.

remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.

fatal: Authentication failed for 'https://github.com/vacrain/notes.git/'
```

参考：

https://stackoverflow.com/questions/68775869/support-for-password-authentication-was-removed-please-use-a-personal-access-to#

按照这个创建个人令牌以后，git push 输入用户名和刚才的令牌就可以了~

### Git 提交问题

github 不配置好 ssh 是提交不了的哦！！！具体过程就是：（需要基本的网络安全知识，即 非对称加密技术，科班期末必考了属于是）

1. 本机生成 ssh 私钥、公钥
2. github 配置本机公钥
3. git clone 项目
4. git 提交项目
5. 首次提交还会弹出这个页面（同意授权就完事了~ 反正不同意也用不了。。）：<img src="https://github.com/vacrain/typora_img/raw/main/assets/imgs/2021/2022-04-14_16-09-49_Screenshot 2022-04-14 at 16-08-31 Build software better together.png" alt="Screenshot 2022-04-14 at 16-08-31 Build software better together" style="zoom: 50%;" />

vscode 左侧那个竖条里的图标，就这个![img_20220414](https://github.com/vacrain/typora_img/raw/main/assets/imgs/2021/2022-04-14_15-40-27_img_20220414.png)，只能做到 git add 和 git commit ，git push 到远端 github 还是要手动来（无语）

如果 push 返回 443 延迟、超时了，不要紧张，真的就八成是连不上 github，毕竟有 wall~ 2022/4/14 今日就到这里吧，学点别的了！





### Git

```
git-cz

git log - 查看历史提交记录。
git blame <file> - 以列表形式查看指定文件的历史修改记录。
git log --reverse --oneline

切换仓库、重命名、指定仓库的分支进行提交
git remote
git remote -v
git remote rename origin xxx
git remote add yyy repoUrl
git push xxx

```
