/*
 * Author        vacrain
 * CreateDate    2022-06-02
 * LastEditor    Vacrain
 * lastEditDate  2022-06-11
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
      // 下列type的含义请查看 ./.cz-config.js
      ['feat', 'fix', 'docs', 'style', 'perf', 'refactor', 'chore', 'release', 'revert', 'test', 'ci'],
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
