/*
 * Author        vacrain
 * CreateDate    2022-06-02
 * LastEditor    vacrain
 * lastEditDate  2022-06-21
 * RelativePath  /.cz-config.js
 * Description   cz工具配置
 * 参考：https://zhuanlan.zhihu.com/p/69635847
 */
module.exports = {
  types: [
    // 修改了的话，需要同步修改以下内容：
    //  .commitlintrc.js 中的type-enum
    //  本文件中的 allowBreakingChanges
    { value: ':sparkles: feat', name: '✨ feat:       新增功能' },
    { value: ':bug: fix', name: '🐛 fix:        修复bug' },
    { value: ':memo: docs', name: '📝 docs:       文档变更' },
    { value: ':lipstick: style', name: '💄 style:      代码格式' },
    { value: ':zap: perf', name: '⚡️ perf:       性能优化' },
    { value: ':recycle: refactor', name: '♻️  refactor:   代码重构（不包括 bug 修复、功能新增）' },
    { value: ':building_construction: chore', name: '🏗️  chore:      构建或辅助工具的变动（不影响源文件、测试用例）' },
    { value: ':rocket: release', name: '🚀 release:    发布新版本' },
    { value: ':rewind: revert', name: '⏪ revert:     回滚 commit' },
    { value: ':white_check_mark: test', name: '✅ test:       测试用例变更' },
    { value: ':construction_worker: ci', name: '👷 ci:         修改 CI 配置、脚本' },
  ],
  scopes: [
    ['*', '项目整体'],
    ['demo', '代码学习与实践'],
    ['app', '应用开发'],
    ['pkg', '公用依赖'], // package
    ['', '不选'],
    ['custom', '以上都不行？我来自己写'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(15)} ${description}`,
    }
  }),

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  messages: {
    type: '确保本次提交遵循 Angular 规范！\n选择你要提交的类型（type）：',
    scope: '\n选择一个影响范围（scpoe可选）：',
    customScope: '请输入自定义的影响范围（custom scpoe）：',
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（body可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（footer可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？',
  },

  allowBreakingChanges: [':sparkles: feat', ':bug: fix'], // 数组中的type会询问填写breaking（列举非兼容性重大的变更）
  subjectLimit: 66, // subject 最大长度
  breaklineChar: '|', // break line
}
