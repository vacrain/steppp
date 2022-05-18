# Steppp

> 基于 vue3、vite2、naive-ui 开箱即用且全端 layout 统一管理的框架

## Features

1. vue3: mvvm 架构，双向绑定，components api，setup 语法糖，更能 hold 住大项目了
2. vite: 脚手架及打包工具于一体，而且很快是真的。已经配置好了 vite 的基本设置 alias、build、跨域等，还有 eslint、prettier、mock、cdn、gzip 等
3. naive-ui: vue3 + ts 激动人心的 ui 框架，整合了掌控全局的 provider 及大量实用组件
4. 常用 layout: 不管你是想做一个宣传用的官网，还是 web2 类型的平台，还是 admin 端系统，all in one，从此一起管理！
5. 注释全: 可以说是非常适合学习了
6. 二次封装组件: 嗯，还是要封装的，官方的也不全是拿来就很好用的...
7. 完全支持 typescript: 静态类型的 js，护航你的项目，并通过 eslint、prettier 等插件使代码更健壮、安全
8. git 提交管理: 通过 husky、commitlint，好好写提交信息，让版本控制软件的能力最大化
9. axios: 封装好的 AJAX 框架，支持 rest 风格，api 管理首选
10. pinia: 由 vuex 核心成员写的，新一代的状态管理框架，现已加入浏览器开发工具中
11. 国际化: 统一的语种管理，助力你的项目推向国际
12. 路由: 通过视图内声明式的管理路由及菜单（待定）
13. mock: 模拟好了数据再上真家伙！
14. vscode 插件: 经过大量实际开发中的使用，推荐了必安的良心插件
15.

## 环境

什么 os 都 OK

nodejs v16.14.2
pnpm 5.18.2
git-cz 4.5.0

ide 使用 vscode
vscode 插件推荐： 参考 .vscode/extensions.json

安装 node16.14.2 后

```
npm install pnpm -g
npm install git-cz -g
```

## Start

克隆本项目后，安装依赖

```
pnpm install
```

运行、打包、预览

```
pnpm run dev
pnpm run build
pnpm run preview
```

提交（运行后，根据提示填写提交信息即可）

```
git-cz
```

## Dir

> 目录说明
> 生成目录命令：tree -d

-   生成日期：2022/4/22

```
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

```
