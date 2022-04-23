<!--
 * @Author: vacrain
 * @Date: 2022-04-22 20:28:26
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-22 20:35:29
 * @FilePath: /naive-ui-steppp/steppp-docs/steppp-main.md
 * @Description:
 *
    -->

# Steppp Docs

[toc]

# Thought

## concept

> 一些想法，离实际开发有段距离

可以按照提示进行学习，修改 layout、完成业务

## Next

> 下一个版本开发时，再考虑的



# >> Now <<

## >> 0.0.0 <<

> 主要技术点的基本实现都加进去~
>
> 学习步骤也介绍好！

### Refs

主要内容内，留一个条，用于系统 tip。。

做好base里面后，基本就是一个万能模板了。。可以从0开发业务

做好 layout：

- [ ] layout-web1：web1.0 类型的 layout，就是类似个人主页那种，通过isMobile判断是否改变样式 
- [ ] Layout-electron：win、mac端的桌面应用界面。。 
- [ ] Layout-app：一般手机软件那种layout
- [ ] Layout-web2：类似现在的各种播客、视频平台那种，通过isMobile判断是否改变样式，多半是参考b站、知乎啥的样式
- [ ] Layout-admin：后台管理layout，通过isMobile判断是否改变样式
- [ ] 



### 目录结构说明

```

## 结构目录说明
├── src
│   ├── assets
│   │   ├── css // ssc
│   │   ├── js // sj
│   │   ├── media // 各种静态媒体文件咯
│   │   │   └── public
│   │   └── plugins // 插件
│   ├── base // 就是你项目招新人了，不要让他动这里的东西！
│   │   ├── api // ipa
│   │   ├── config // 软件的全局设定，比如常量、路由
│   │   ├── d // 打开看看吧，全是全局声明
│   │   ├── pinia // 状态管理，没用stroe因为和providers首字母重了
│   │   ├── providers // provider啥的，全局拿捏了属于是
│   │   └── utils // 系统工具包
│   │       └── hooks // app的hooks
│   └── spec // 具体业务
│       ├── field1 // 一个demo说明
│       ├── home // 主页
│       └── pinia // pinia演示
│       └── ... // 其他demo演示
└── steppp-docs // 全部文档（好像就一个文件，bushi

```

# Archive...

> 一些不用的、过时的