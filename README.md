# steppp

> remade by monorepo

## 须知：
- docs 文档目录，推荐使用 Typora 打开进行查看编辑 ！
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


## 相关命令

- 第一次下载项目：
```sh
# 全局卸载 git-cz
> npm uninstall -g git-cz

# 全局安装 pnpm 和 commitizen
> npm install -g pnpm@7.1.7
> npm install -g commitizen@4.2.4

# 安装本项目依赖
> pnpm i

# 启动项目
pnpm run dev

# 之后访问主页即可
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


## 项目目录说明
### 简单说明

- root：提交、lint管理外壳
  - apps：主项目
    - quan：前端项目
    - server：后端项目
    - shared：共享配置、工具等
  - docs：项目文档

### 详细说明

> 生成目录命令：tree

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
