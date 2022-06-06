# :building_construction: TODOs

> 开发事项，按照时间排序，由近及远，按月归档

[toc]

## Vacrain - todo

 [vacrain.md](vacrain.md) 

## Yhq - todo

 [yhq.md](yhq.md) 



# :thinking: Wating...

> 全部待做

## dev

> 开发相关

- [ ] 

- [ ] 整理pinia，参考https://juejin.cn/post/7063376847198748702

- [ ] turbo kill 已有进程

- [ ] 找一下，去除所有文件注释的方法。。包括sh、js、ts、vue、各种配置文件等等

- [ ] 整理css工程化选型，less scss tailwind 等等 https://www.postcss.com.cn/

  - [ ] 【b站第一个关于stylelint配置的视频！让你的css写得和诗一样优雅！-哔哩哔哩】 https://b23.tv/GUyuNEl  提醒：如果使用sass的 需要多安装 stylelint-scss，同时配置文件.stylelintrc.js 也要修改 plugins: ['stylelint-order', 'stylelint-scss'], rules: {"at-rule-no-unknown": null,"scss/at-rule-no-unknown": true,}

- [ ] vite + electron：https://www.npmjs.com/package/vite-plugin-electron

- [ ] 参考整理一下 vue 官方例子https://staging-cn.vuejs.org/examples/#todomvc

- [ ] 做一个server端的判断，如果没有mysql配置，就不连mysql了

- [ ] 重做i18n，可以享受插件的便利

- [ ] 看一下vue项目为啥没有生成 package lock

- [ ] 配置Docker

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
- [ ] 
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



# :diamond_shape_with_a_dot_inside: Instruction

## :jack_o_lantern: Playground

> 项目介绍，相关技术学习、开发、介绍等
