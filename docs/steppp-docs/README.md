# :footprints: Steppp

> 基于monorepo策略， 渐进式学习、实践、开发前后端分离项目

## 功能介绍（Features）

1.  [web端（web-site）](4-web/README.md) 
2.  [后端（server-side）](3-server/README.md) 
3. turborepo + vite2 + vue3 + typescript + naive-ui + fatify
4. vue3: mvvm 架构，双向绑定，components api，setup 语法糖，更能 hold 住大项目了
5. vite: 脚手架及打包工具于一体，而且很快是真的。已经配置好了 vite 的基本设置 alias、build、跨域等，还有 eslint、prettier、mock、cdn、gzip 等
6. naive-ui: vue3 + ts 激动人心的 ui 框架，整合了掌控全局的 provider 及大量实用组件
7. 常用 layout: 不管你是想做一个宣传用的官网，还是 web2 类型的平台，还是 admin 端系统，all in one，从此一起管理！
8. 注释全: 可以说是非常适合学习了
9. 二次封装组件: 嗯，还是要封装的，官方的也不全是拿来就很好用的...
10. 完全支持 typescript: 静态类型的 js，护航你的项目，并通过 eslint、prettier 等插件使代码更健壮、安全
11. git 提交管理: 通过 husky、commitlint，好好写提交信息，让版本控制软件的能力最大化
12. axios: 封装好的 AJAX 框架，支持 rest 风格，api 管理首选
13. pinia: 由 vuex 核心成员写的，新一代的状态管理框架，现已加入浏览器开发工具中
14. 国际化: 统一的语种管理，助力你的项目推向国际
15. 路由: 通过视图内声明式的管理路由及菜单（待定）
16. mock: 模拟好了数据再上真家伙！
17. vscode实用插件介绍

## 环境准备（env）

-   vscode 最新版
-   vscode 插件请参考 .vscode/extensions.json
-   node 16

## 相关命令（commands）

- 下载本项目

```sh
# 从gitee下载
> git clone https://gitee.com/vacrain/steppp.git
# 或者从github下载
> git clone https://github.com/vacrain/will.git
```

- 安装依赖

```sh
# 全局卸载 git-cz
> npm uninstall -g git-cz

# 全局安装 pnpm 和 commitizen
> npm install -g pnpm@7.1.7
> npm install -g commitizen@4.2.4

# 安装本项目依赖
> pnpm i
```

- 配置数据库

```
# /steppp/apps/steppp-server/.env
DB_HOST = 1.2.3.4
DB_USER = root
DB_PASSWORD = root
DB_NAME = 数据库名
DB_PORT = 3306
```

- 启动项目

```sh
> pnpm run dev

# 启动完成之后访问主页即可
前端首页：http://127.0.0.1:3210 (如果端口号被占用的话，也可能是3211、3212...)
后端首页：http://127.0.0.1:3000
```

- 开发用命令

```sh
# 须知：（查看帮助方式 pnpm help add）
# -r               每个子包都安装
# -D               安装到dev依赖里，build时不随项目一起打包
# -w               安装到root，也就是当前workspace
# --filter=子包名   指定子包

# 想给指定项目安装依赖：
> cd apps
> pnpm add A依赖名 B依赖名 --filter=子项目名

# 给每个子项目都来一份：
> cd apps
> pnpm add A依赖名 B依赖名 -r

# 其他：
# 安装所有子项目的依赖
> pnpm i -r
```

- 提交：

```sh
# 根目录运行
> pnpm run commit
```



## 目录说明（Dir）

> 生成目录命令：tree

- root：提交、代码格式化、lint、脚本管理外壳、[定制补丁](https://blog.csdn.net/qq_32429257/article/details/111051217) 等等lints & prettier, turborepo,
  - apps
    - xxx-admin
    - xxx-web
    - xxx-mobile
    - xxx-server
      - api
        - web
        - v1
        - admin
    - yyy-admin
    - yyy-web
    - yyy-mobile
    - yyy-server
      - api
        - web
        - v1
        - admin
  - packages
    - xxx-shared
    - yyy-shared
    - ui
      - web-ui
      - mobile-ui
    - native
  - docs
    - guideline
    - useful
    - xxx-docs
      - todo
      - web
      - admin
      - server
      - README.md
    - yyy-docs
      - todo
      - web
      - admin
      - server
      - README.md
    - README.md



2022-06-02 大更新
monorepo
pinia，及其插件使用
axios
server
fastify
mysql
turborepo




  1. apps
     1. web-template
            2. web-playground
                   3. web-web1
                          4. web-web2
                                 5. mobile
                                        6. server
     1. api
       1. web
          1. template
          2. playground
          3. web1
          4. web2
  2. packages
         1. shared
       2. config
       3. const
          2. native
          3. web-ui
          4. mobile-ui



<details>
<summary>展开查看(2022/6/2)</summary>
<pre><code>.
├── .husky // commit 拦截校验
├── .vscode // vscdoe配置
├── .commitlintrc.js // 校验配置
├── .cz-config.js // 提交辅助配置
├── .eslintignore // eslint验证无视文件配置
├── .eslintrc.js // eslint配置
├── .gitignore // 版本管理黑名单
├── .npmrc // npm配置
├── .prettierignore // 代码格式化黑名单
├── .prettierrc.js // 自动代码格式化配置
├── LICENSE // 开源协议
├── package.json // 本项目的校验管理
├── pnpm-lock.yaml // 锁定版本
├── README.md // 当前文件
├── docs // 项目文档
└── apps // monorepo主项目
    ├── quan // 前端vue项目
    │   ├── README.md
    │   ├── index.html
    │   ├── mock
    │   │   └── index.ts
    │   ├── node_modules
    │   ├── package.json
    │   ├── src
    │   │   ├── App.vue
    │   │   ├── api
    │   │   ├── assets
    │   │   ├── base
    │   │   │   ├── components
    │   │   │   ├── entry
    │   │   │   ├── hooks
    │   │   │   ├── i18n
    │   │   │   ├── layout
    │   │   │   ├── typings
    │   │   │   └── utils
    │   │   ├── main.ts
    │   │   ├── view-playground
    │   │   └── view-web
    │   ├── tsconfig.json
    │   ├── tsconfig.node.json
    │   └── vite.config.ts
    ├── server // 服务端项目
    │   ├── README.md
    │   ├── node_modules
    │   ├── package.json
    │   ├── plugins
    │   ├── pnpm-lock.yaml
    │   ├── src
    │   │   ├── app.js
    │   │   ├── routes // 接口都在这里
    │   │   └── utils
    │   └── test
    │       └── test.http // 接口测试，需要配合插件使用
    ├── shared // 各个子项目共享内容
    ├── node_modules
    ├── package.json // monorepo的主package配置
    ├── pnpm-lock.yaml // ...
    └── pnpm-workspace.yaml // monorepo项目目录配置
</code></pre>
</details>

<details>
<summary>展开查看(2022/4/22)</summary>
<pre><code>.
├── src
│   ├── assets
│   │   ├── css // ssc
│   │   ├── js // sj
│   │   ├── media // 各种静态媒体文件咯
│   │   │   └── public
│   │   └── plugins // 插件
│   ├── etc // 就是你项目招新人了，不要让他动这里的东西！
│   │   ├── api // ipa
│   │   ├── config // 软件的全局设定，比如常量、路由
│   │   ├── typings // 打开看看吧，全是全局声明，各种type、interface
│   │   ├── pinia // 状态管理，没用stroe因为和providers首字母重了
│   │   ├── providers // provider啥的，全局拿捏了属于是
│   │   └── utils // 系统工具包
│   │       └── hooks // app的hooks
│   └── spec // 具体业务
│       ├── field1 // 一个demo说明
│       ├── home // 主页
│       ├── pinia // pinia演示
│       └── ... // 其他demo演示
└── steppp-docs // 全部文档（好像就一个文件，bushi
</code></pre>
</details>






## 其他须知（others）

- 文档目录，推荐使用 Typora 打开，并进行查看、编辑 ！
- monorepo：多仓库合并管理策略
- pnpm：最适合 monorepo 的包管理器
- turborepo：monorepo 缓存、任务链管理
- pipeline：管道，建议查一下下水道的剖面图，就很像下面的结构，就是任务的执行、依赖拓扑结构，用于配置任务链

```
下面的 | 就像是一个个水管子，下面整个叫pipeline
        |
        |
    一一一一一一
    |        |
一一一一一
|       |

```

- 上游：说 A 是 B 的上游，就是 A 中依赖了 B 包
- 下游：说 A 是 B 的下游，就是 B 中依赖了 A 包
- commit-lint：提交校验

