# :memo: Info

> 项目基本信息，都放到了项目的README.md中了，包括feat、env、start、dir等等



# :exclamation: Reminders

> 《全栈开发全规范》包含了 前后端编码规范、数据库设计、测试、提交、开会、devops开发流程规范等
>
> 为了易于理解，给出了，简洁描述、减少使用特别专业的术语、参考正例和反例，格式如下：
>
> 1. 规范内容
>    1. 【强制/推荐】简述：详述/原因
>       1. 正例：。。。
>       2. 反例：。。。

## code

> 各种编码规范，参考阿里规范 以及 工作实践总结

### common

> 前后端通用规范

1. 所有量、函数、方法
   1. 【==强制==】不可随意简写：即便是简写，必须使用大型项目公认的单词
      1. 正例：temp、dept、emp等
   2. 【推荐】尽量写全名：在什么领域的、什么种类的什么值，智能代码时代了，不要怕名长
      1. 正例：sysConfigEnvJavaPath、getUserNameByUserId

2. 变量
   1. 【==强制==】数组后缀用List：数组、集合等类型，不要加s那种
      1. 正例：UserList
      2. 反例：Users
3. 常量
   1. 【==强制==】不允许直接使用常量，必须在系统常量文件里定义
      1. 正例：type == appConst.SYS_ENV_TYPE，并在appConst文件中声明常量，SYS_ENV_TYPE = 0
      2. 反例：type == 0
   2. 【==强制==】命名方式：必须全部大写，用`_`分隔
      1. 正例：SYS_CONFIG_API_BASE_URL
4. 文档
   1. 【==强制==】单次定义：不要在两处写同一个声明内容，在哪里用，就在哪里声明，其他的地方要用的话，引用即可
      1. 正例：项目的说明只在README.md中
   2. 



### front-end

> 前端规范
>
> 参考：[阿里2021前端规范](https://developer.aliyun.com/article/850913#slide-35) 、vue开发规范、[CSS命名规则规范整理](https://developer.aliyun.com/article/796876)、
>
> https://blog.csdn.net/qq_22841387/article/details/123422827
>
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

### commit

> 提交规范

1. 一般
   1. 【==强制==】完全遵循Angular规范：无法控制具体提交信息，但是提交的类型，影响的范围还是可以控制的，可以借助commit-lint工具和git-cz来实现该规范
   2. 【推荐】单词尽量少提交：将同一类（type）代码一起提交
      1. 正例：一次修改内容过多，将格式调整的文件一起提交、新功能一起提交、bug fix一起提交

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

1. 库名
   1. 【==强制==】前缀与项目名一致
      1. 正例：项目steppp的数据库名为steppp-local、steppp-dev、steppp-product
2. 表名
   1. 【==强制==】全大写，用`_`分隔
3. 字段
   1. 【==强制==】命名：全小写，用`_`分隔
   2. 【推荐】适当冗余：就是引用了别的表的非主键字段，按照设计范式是不被允许的，但是适当冗余是提高效率、降低复杂度的好手段！
      1. 正例：商品类目名（常用、存储空间小、不常改），可以一并存到商品表中，不过要保证和类目表中信息一致

字段类型及大小：

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
   1. 在[waiting](#:thinking: Wating)里面，产生issue、request

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



# :diamond_shape_with_a_dot_inside: Instruction

## :jack_o_lantern: Playground

> 项目介绍，相关技术学习、开发、介绍等





# :building_construction: TODO

> 开发事项，按照时间排序，由近及远，按月归档

## :hugs: vacrain

### now

- [ ] 
- [ ] 整理规范：GitHub搜guideline，或者Google Java/code/database guideline
- [ ] 用monorepo重构steppp
  - [ ] 保护您的 `develop` 和 `master` 分支，请搜索 分支管理
  - [ ] 分为steppp-web, steppp-server,steppp-docs，steppp-ui，utils
  - [ ] 文档分为main和todo
  - [ ] 参考
    - [ ] monorepo说明
      - [ ] https://juejin.cn/post/6950082433647640612
    - [ ] 教程
      - [ ] 
  
- [ ] mysql【我用的顺手的数据库设计工具(推荐)-哔哩哔哩】 https://b23.tv/M1CQ313 



### 2022-05

- [x] ~~.prettierrc.js 文件中  tabWidth 改成2，然后reload window，再将所有文件 代码格式化~~
  - [x] 4很好，不用改
- [x] 搭建项目 [【快速上手】vite打包配置详解—手把手教你配置vite](https://www.bilibili.com/video/BV1yu411U71S?spm_id_from=333.999.0.0)





## :woman_facepalming: yhq

### now

- [ ] 
- [ ] 用ts实现 设计模式 https://b23.tv/nODb63H 加到steppp
  - [ ] 单例模式



### 2022-05

- [x] 登录
- [x] 面包屑
- [x] axios封装



# :thinking: Wating...

> 全部待做

## dev

> 开发相关

- [ ] 

- [ ] 重做i18n，可以享受插件的便利

- [ ] 看一下vue项目为啥没有生成 package lock

- [ ] 引入Docker

- [ ] 各个view的layout也放到各个view-xxx目录中

- [ ] 所有的请求函数，参考jz项目封装到状态管理里面

- [ ] 用好naive 的notification，loading等

- [ ] 那个mock的api，有空加一下前缀~  比如获取用户信息 /mock-api/getUserInfo，然后真正的服务器端数据来自/api/getUserInfo。。加两个启动脚本，请求函数，加一个参数，是否为mock数据，默认不填参数的话 不是mock数据，填写true，就是mock请求

- [ ] 【Vue3好玩的API-异步组件实现按需加载-哔哩哔哩】 https://b23.tv/cZWbQgV

- [ ] 服务端待选：[nestjs+fastify](https://gitee.com/havealex/Nestjs-Learning/tree/master) or springboot
  ```
  随机yes or no ：
        getAnswer() {
           this.answer = '加载中...'
           axios
              .get('https://yesno.wtf/api')
              .then(response => {
  			 this.answer = response.data
  			 // 然后answer里面就是：
  			 // { "answer": "no", "forced": false, "image": "https://yesno.wtf/assets/no/xxx.gif" }
           })
              .catch(error => {
              this.answer = '错误! 无法访问 API。 ' + error
           })
        }
  ```

- [ ] 切换页面，连续动画效果，学习项目；https://github.com/antfu/vue-starport/blob/main/README.zh-Hans.md
- [ ] 【b站第一个关于stylelint配置的视频！让你的css写得和诗一样优雅！-哔哩哔哩】 https://b23.tv/GUyuNEl  提醒：如果使用sass的 需要多安装 stylelint-scss，同时配置文件.stylelintrc.js 也要修改 plugins: ['stylelint-order', 'stylelint-scss'], rules: {"at-rule-no-unknown": null,"scss/at-rule-no-unknown": true,}
- [ ] 引入工具：https://www.lodashjs.com/docs/lodash.chunk
- [ ] 【尚硅谷Java设计模式（图解+框架源码剖析）-哔哩哔哩】 https://b23.tv/9quokL8



## doc

> 文档相关

- [ ] 
- [ ] 参考 .vscode：vben、soybean-admin
- [ ] package.json参考修改：https://github.com/antfu/vue-starport/blob/main/package.json 



## meeting

- [ ] 
- [ ] 
- [ ] monorepo说明
- [ ] nestjs + fatify使用



## misc

> 其他

- [ ] 

- [ ] :man_teacher: instruction给steppp附上手把手教学视频













