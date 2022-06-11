# :exclamation: Reminders

> 本《全栈开发全规范》包含了 前后端编码规范、数据库设计、测试、提交、开会、devops开发流程规范等
>
> 本着约束大于规范的原则，尽量将规范实现到工具、插件中，通过环境约束代码质量，而非人脑。。已实现的规范可以标注一下
>
> 为了易于理解，给出了，简洁描述、减少使用特别专业的术语、参考正例和反例，格式如下：
>
> 1. 规范的内容
>    1. 【强制/推荐】简述
>       1. 详述/原因
>       2. 正例：。。。
>       3. 反例：。。。
>
> 参考：[现代软件工程讲义 7 设计阶段 Spec](https://www.cnblogs.com/xinz/archive/2012/11/17/2775039.html)

[toc]

## code

> 各种编码规范，参考阿里规范 以及 工作实践总结

### common

> 前后端通用规范

1. 重构

   1. 【==强制==】先看所有的gitignore！
      1. 移到新目录时，可能会落下一些忽略的重要内容

2. 所有文件名

   1. 【==强制==】不可用中文命名
      1. 很容易出现乱码

3. 所有量、函数、方法
   1. 【==强制==】命名不可随意简写
      1. 即便是简写，必须使用大型项目公认的单词
      2. 正例：temp、dept、emp等
   2. 【推荐】尽量写全名
      1. 在什么领域的、什么种类的什么值，智能代码时代了，不要怕名长
      2. 正例：sysConfigEnvJavaPath、getUserNameByUserId

4. 常量、变量
   1. 【==强制==】数组后缀用List
      1. 数组、集合等类型，不要加s那种
      2. 正例：UserList
      3. 反例：Users

   1. 【==强制==】不可直接使用常量
      1. 必须在相关常量文件里定义声明后，再使用用
      2. 正例：type == appConst.SYS_ENV_TYPE，并在appConst文件中声明常量，SYS_ENV_TYPE = 0
      3. 反例：type == 0
   2. 【==强制==】常量规范命名
      1. 必须全部大写，用`_`分隔
      2. 正例：SYS_CONFIG_API_BASE_URL



### front-end

> 前端规范
>
> 参考：
>
> [阿里2021前端规范](https://developer.aliyun.com/article/850913#slide-35) 、
>
> vue开发规范、
>
> [CSS命名规则规范整理](https://developer.aliyun.com/article/796876)、
>
> https://blog.csdn.net/qq_22841387/article/details/123422827
>

1. Common 
   1. 【==强制==】安装vscode 各种lint相关插件、prettier格式化代码插件
   2. 【==强制==】文件、目录命名，全小写
   3. 【==强制==】文件、目录名，如含有多个单词，用`-`分隔
      1. 正例：view-home

2. vue命名约定
   1. 【==强制==】vue组件不可用单个单词：避免和HTML原生标签重名
   2. 




### back-end

1. 【==强制==】文件、目录命名，驼峰式，XxxYyy
2. 控制层
3. 业务层
4. 数据层



## others

> 其他规范

### doc

> 文档规范

1. common
   1. 【==强制==】内容只一次说明
      1. 不要在两处写同一个内容说明，在哪里用，就在哪里写，其他的地方一定要用的话，引用即可
      2. 正例：项目的说明只在doc子项目的根目录README.md中

### commit

> 提交规范

1. 一般
   1. 【==强制==】完全遵循Angular规范：无法控制具体提交信息，但是提交的类型，影响的范围还是可以控制的，可以借助commit-lint工具和git-cz来实现该规范
   2. 【推荐】少量多次：尽量将同一类（type）代码一起提交
      1. 正例：一次修改内容过多，将格式调整的文件一起提交、新功能一起提交、bug fix一起提交、文档一起提交

2. version
   1. 【推荐】遵循 [semver](https://link.juejin.cn?target=https%3A%2F%2Fdocs.npmjs.com%2Fabout-semantic-versioning%2F) 语义化版本（[验证小工具](https://link.juejin.cn?target=https%3A%2F%2Fsemver.npmjs.com%2F)），格式一般为 `{major}.{minor}.{patch}`。
      1. 正例：发 alpha/beta 版，1.0.1 版本已发布，发下一个 beta 版：1.0.2-beta.1
         1. `major`：大功能/特性更新、对用户使用方式**有影响**；
         2. `minor`：新功能、对用户使用方式**无影响**；
         3. `patch`：bug 修复/不影响用户

   2. 【推荐】**^0.x.y** 版本匹配问题。例如：用户配置 `"^0.9.0"`，匹配不了 0.10.0 版本（如下图）。建议正式版从 1.x 开始发版。
      1. 正例：正式版 不发0.10.0，发1.0.0




### DB

> Mysql数据库设计规范，包括命名、各类数据大小

1. 编码
   1. 【==强制==】存表情要用utfmb4

2. 库
   1. 【==强制==】命名：前缀与项目名一致
      1. 正例：项目steppp的不同环境的数据库，命名为steppp-local、steppp-dev、steppp-product
   2. 
3. 表
   1. 【==强制==】命名：全大写，用`_`分隔
   1. 【==强制==】不可使用复数
   1. 
4. 字段通用
   1. 【==强制==】命名：全小写，用`_`分隔
   2. 【==强制==】不可绑定外键：都在服务器端完成验证
   3. 【推荐】适当冗余：就是引用了别的表的非主键字段，按照设计范式是不被允许的，但是适当冗余是提高效率、降低复杂度的好手段！
      1. 正例：商品类目名（特点：常用、存储空间小、不常更改），可以存到商品表中，不过要保证和类目表中信息一致！
5. 字段 - 字符类
   1. 【==强制==】varchar不可超过5000字节：varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索 引效率。
   2. 【==强制==】长度不变用char
6. 字段 - 数值类
   1. 【==强制==】小数类型必须用 decimal：禁止使用 float 和 double。 说明：float 和 double 在存储的时候，存在精度损失的问题，很可能在值的比较时，得到不正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数分开存储。

7. SQL
   1. 【==强制==】使用ISNULL()来判断是否为NULL值。
      1. NULL<>NULL的返回结果是NULL，不是false
      2. NULL=NULL的返回结果是NULL，不是true。
      3. NULL<>1的返回结果是NULL，而不是true。

   2. 【==强制==】不要使用count(列名)或count(常量)来替代count(*)，count(*)就是SQL92定义的
      1. 标准统计行数的语法，跟数据库无关，跟NULL和非NULL无关。
      2. 说明：count(*)会统计值为NULL的行，而count(列名)不会统计此列为NULL值的行。

8. 其他
   1. 【==强制==】禁止使用存储过程
   2. 

常用字段类型、大小：

```
language、id、type、status、mode、method、flag、
  tinyint		4
  smallint	6
  int				11、20
	bigint		11

charge（费用）、price（定价）
	decimal(12,2)

info、message、name、no、desc、outline、note、detail
  char
  varchar
	text

date、from、to、
	datetime

```

一般数据源：

1. mock 试验
2. mysql 存主要
3. mongo 存静态，评论、日志等
4. redis 缓存



### Test

> 测试规范，参考工作测试文件





### Meeting

> 开会参考

1. time
   1. 【推荐】在早上或晚上：早上能明确大家要做啥，晚上方便讨论事项
2. doc
   1. 【==强制==】提前准备：开会提前定好大致内容，尽量节省大家时间
   2. 【推荐】避免形式化：分享内容不必形式化，讲清楚最近自己做的demo就很好，不能成为文档的奴隶



### devops-workflow

> devops开发流程

1. 产生需求
   1. 在waiting里面，产生issue、request

2. 分配
   1. 选择合适人选
   2. 创建文档

3. 对应人员pull repos
   1. pull文档
   2. pull代码

4. 开始处理
   1. 文档中，记录关键内容
   2. 修改对应的代码
5. 本地环境测试
   1. 如失败返回第4步

6. 检查代码（code review），提交
7. 测试环境ci/cd完成，到测试环境中测试
   1. 如失败返回第4步

8. 生产环境ci/cd完成，到生产环境中测试
   1. 如失败返回第4步

9. 关闭需求 并完成单次开发任务

