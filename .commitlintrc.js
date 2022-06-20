/*
 * Author        vacrain
 * CreateDate    2022-06-02
 * LastEditor    vacrain
 * lastEditDate  2022-06-20
 * RelativePath  /.commitlintrc.js
 * Description   提交校验配置
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],

  // config from commitlint-config-git-commit-emoji
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  // 遵循Angular规范:
  //    header: <type>[(<scope)]: <subject>
  //    body:...
  //    footer:...
  rules: {
    // 每一项rule后的数组：
    // 第一位为level，可选0,1,2，0为disable，1为warning，2为error
    // 第二位为应用与否，可选always|never
    // 第三位该rule的值

    //  -case参考,可选值如下
    // 'lower-case' 小写 lowercase
    // 'upper-case' 大写 UPPERCASE
    // 'camel-case' 小驼峰 camelCase
    // 'kebab-case' 短横线 kebab-case
    // 'pascal-case' 大驼峰 PascalCase
    // 'sentence-case' 首字母大写 Sentence case
    // 'snake-case' 下划线 snake_case
    // 'start-case' 所有首字母大写 start-case

    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],

    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'], // <type> 不能为空
    'type-enum': [
      2,
      'always',
      // 下列type的含义请查看 ./.cz-config.js
      // ['feat', 'fix', 'docs', 'style', 'perf', 'refactor', 'chore', 'release', 'revert', 'test', 'ci'],
      [
        ':sparkles: feat',
        ':bug: fix',
        ':memo: docs',
        ':lipstick: style',
        ':zap: perf',
        ':recycle: refactor',
        ':building_construction: chore',
        ':rocket: release',
        ':rewind: revert',
        ':white_check_mark: test',
        ':construction_worker: ci',
      ],
    ],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'], // <subject> 以.为结束标志
  },
}
