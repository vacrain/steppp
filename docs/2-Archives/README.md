# :footprints: Steppp

> Steppp 是一个**多端应用统一管理** 与 **综合型编程学习实践** 平台
> 基于monorepo，提供渐进式学习、实践、开发、管理 Typescript 前后端分离项目开箱即用体验

## 功能介绍（Features）

1.  外壳：pnpm、turborepo、typescript、eslint、commit-lint、prettier、[定制补丁](https://blog.csdn.net/qq_32429257/article/details/111051217) 等等
2.  注释版：注释全、demo多、实用的封装组件、前后端共享常量/配置/工具...
    1.  [web端完全注释版（web-site）](4-web/README.md) ：vite2 + vue3 + naive-ui + pinia + axios + router + mock + cdn + gzip + i18n + ...
    2.  [后端完全注释版（server-side）](3-server/README.md) ：nestjs + fatify + mysql

3.  开发版：除了必要的函数注释，其他的注释都没有了，开箱即用~

## 环境准备（ENV）

-   node 16+
-   vscode 最新版

## 开始使用（Start）

1. 下载本项目

```sh
# 从gitee下载
> git clone https://gitee.com/vacrain/steppp.git
# 或者从github下载
> git clone https://github.com/vacrain/will.git
```

2. 安装vscode 推荐插件（下载项目后按照下图点击即可，最好是都安装，高亮类的插件不喜欢可以不安装~）
   ![image-20220608073451824](https://raw.githubusercontent.com/vacrain/typora_img/main/2022/2022-06-08_07-34-51_image-20220608073451824.png)

3. 安装依赖

```sh
# 全局卸载 git-cz
> npm uninstall -g git-cz

# 配置npm注册地址为新的淘宝镜像
> npm config set registry https://registry.npmmirror.com/

# 全局安装 pnpm 和 commitizen
> npm install -g pnpm@7.1.7
> npm install -g commitizen@4.2.4

# 安装本项目依赖
> pnpm i
```

4. 配置后端数据库（后端模板项目中新建文件.env，并配置下面内容，粘贴进去要改的！）

```
DB_HOST = 1.2.3.4
DB_USER = root
DB_PASSWORD = root
DB_NAME = 数据库名
DB_PORT = 3306
```

- 启动项目

```sh
# dev运行t0项目
> pnpm run dev:t0

# 启动完成之后访问主页即可
前端地址：http://127.0.0.1:3210 (如果端口号被占用的话，也可能是3211、3212...具体看控制台吧 )
后端地址：http://127.0.0.1:3000
```

- 提交：

```sh
# 根目录运行
> pnpm run commit
```



## 目录说明（Dir）

> 生成目录命令：tree （win自带、Mac和Linux需自行安装）
> 执行前先删除所有node_modules，生成完再恢复

目录参考（2022-06-06）：

- root // 外壳
  1. apps // 在开发的项目
    1. template-[admin/web/desktop/mobile] // 前端模板项目
    2. template-server/api: [common/admin/web/desktop-v1/mobile-v1] // 后端模板项目
  2. packages // 所有项目依赖包
    1. template-shared: base/config/const/native // 模板项目的基础架构
    2. template-[admin/web/desktop/mobile]-ui // 模板项目的通用ui等
  3. docs // 所有项目文档
    1. template-docs // 模板项目的文档
       1. archive // 历史归档
       2. todo // 开发、开会、测试等计划
       3. [admin/web/desktop/mobile/server] // 各端设计文档
    2. common: guideline/useful // 公司开发规范 、测试用例等
    3. README.md // 所有项目介绍
  4. configs // 外壳配置
     1. eslint、prettier、commitlint、cz、npm、docker
  5. README.md // 公司介绍



目录模板：

<details>
<summary>展开查看(日期)</summary>
<pre><code>.
粘贴目录树结构
</code></pre>
</details>


生成历史：

<details>
<summary>展开查看(2022-06-06)</summary>
<pre><code>.
├── README.md
├── apps
│   ├── steppp-playground
│   │   ├── index.html
│   │   ├── mock
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── App.vue
│   │   │   ├── api
│   │   │   ├── assets
│   │   │   ├── base
│   │   │   │   ├── components
│   │   │   │   ├── entry
│   │   │   │   ├── hooks
│   │   │   │   ├── i18n
│   │   │   │   ├── layout
│   │   │   │   ├── typings
│   │   │   │   └── utils
│   │   │   ├── main.ts
│   │   │   ├── view-playground
│   │   │   └── view-web
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── steppp-provider
│   └── steppp-server
│       ├── package.json
│       ├── plugins
│       ├── src
│       │   ├── app.js
│       │   ├── routes
│       │   └── utils
│       └── test
├── docs
│   └── steppp-docs
│       ├── 0-guideline
│       ├── 1-todo
│       ├── 2-tools
│       ├── 3-server
│       ├── 4-web
│       ├── 8_Archives
│       └── README.md
├── package.json
├── packages
│   ├── steppp-shared
│   │   ├── a.js
│   │   └── package.json
│   └── steppp-ui
│       ├── b.js
│       └── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
</code></pre>
</details>

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
- turborepo：monorepo 缓存、pipeline任务链管理
  - 上游：说 A 是 B 的上游，就是 A 中依赖了 B 包
  - 下游：说 A 是 B 的下游，就是 B 中依赖了 A 包

- 。。。

