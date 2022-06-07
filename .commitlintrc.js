/*
 * Author        vacrain
 * CreateDate    2022-06-02
 * LastEditor    vacrain
 * lastEditDate  2022-06-07
 * RelativePath  /.commitlintrc.js
 * Description   提交校验配置
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],

  // 遵循Angular规范:
  //    header: <type>[(<scope)]: <subject>
  //    body:...
  //    footer:...
  rules: {
    // 都有哪些type
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新特性、新功能（feature）
        'fix', // 修bug
        'docs', // 文档构建与修改
        'style', // 代码格式修改,代码格式化，注意不是 css 修改（不影响代码运行的变动）
        'perf', // 优化相关，比如提升性能、体验
        'refactor', // 代码重构（即不是新增功能，也不是修改bug的代码变动）
        'chore', // 构建过程或辅助工具的变动
        'release', // 发布新版本
        'revert', // 回滚 commit
        'test', // 增加测试、测试用例修改
        'ci', // 修改 CI 配置、脚本
      ],
    ],

    // header 部分
    'header-max-length': [2, 'never', 72], // header 最长72

    //  -case参考,可选值如下
    // 'lower-case' 小写 lowercase
    // 'upper-case' 大写 UPPERCASE
    // 'camel-case' 小驼峰 camelCase
    // 'kebab-case' 短横线 kebab-case
    // 'pascal-case' 大驼峰 PascalCase
    // 'sentence-case' 首字母大写 Sentence case
    // 'snake-case' 下划线 snake_case
    // 'start-case' 所有首字母大写 start-case

    // <type> 部分
    'type-empty': [2, 'never'], // <type> 不能为空
    'type-case': [2, 'always', 'lower-case'], // <type>格式小写

    // <scope> 部分
    // 'scope-empty': [2, 'never'], // <scope> 不能为空
    'scope-case': [2, 'always', 'lower-case'], // <scope> 格式 小写

    // <subject> 部分
    'subject-empty': [2, 'never'], // <subject> 不能为空
    'subject-full-stop': [2, 'never', '.'], // <subject> 以.为结束标志
    'subject-case': [2, 'never', []],

    // body 部分
    'body-leading-blank': [2, 'always'], // body换行

    // footer 部分
    'footer-leading-blank': [1, 'always'], // <footer> 以空行开头
  },
}
