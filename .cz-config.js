/*
 * Author        vacrain
 * CreateDate    2022-06-02
 * LastEditor    Vacrain
 * lastEditDate  2022-06-11
 * RelativePath  /.cz-config.js
 * Description   cz工具配置
 * 参考：https://zhuanlan.zhihu.com/p/69635847
 */
module.exports = {
  types: [
    // 修改了的话，需要同步修改 ./.commitlintrc.js ！！！
    { value: 'feat', name: '✨ feat:       新增功能' },
    { value: 'fix', name: '🐛 fix:        修复bug' },
    { value: 'docs', name: '✏️  docs:       文档变更' },
    { value: 'style', name: '💄 style:      代码格式' },
    { value: 'perf', name: '⚡️ perf:       性能优化' },
    { value: 'refactor', name: '♻️  refactor:   代码重构（不包括 bug 修复、功能新增）' },
    { value: 'chore', name: '🏗  chore:      构建或辅助工具的变动（不影响源文件、测试用例）' },
    { value: 'release', name: '🚀 release:    发布新版本' },
    { value: 'revert', name: '⏪ revert:     回滚 commit' },
    { value: 'test', name: '🤺 test:       测试用例变更' },
    { value: 'ci', name: '🎡 ci:         修改 CI 配置、脚本' },
  ],
  scopes: [
    ['whole', '整体都会受影响'],
    ['demos', '代码学习与实践'],
    ['apps', '应用开发'],
    ['packages', '应用共用'],
    ['todo', '计划相关'],
    ['other', '其他修改'],
    ['custom', '以上都不是？我要自定义'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`,
    }
  }),
  messages: {
    type: '确保本次提交遵循 Angular 规范！\n选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    customScope: '请输入自定义的 scope：',
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（body可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（footer可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？',
  },

  allowBreakingChanges: ['feat', 'fix'], // 填写的type，会询问填写breaking（列举非兼容性重大的变更），不写就不会问
  subjectLimit: 66, // subject 最大长度
  breaklineChar: '|', // break line
}
