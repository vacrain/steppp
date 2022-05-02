/*
 * @Author: vacrain
 * @Date: 2022-05-02 21:52:57
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-02 22:07:24
 * @FilePath: /steppp/changelog.config.js
 * @Description: 提交辅助工具git-cz配置
 *
 */
module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: [
        'feat', // 新特性、新功能（feature）
        'fix', // 修bug
        'chore', // 构建过程或辅助工具的变动
        'docs', // 文档构建与修改
        'style', // 代码格式修改,代码格式化，注意不是 css 修改（不影响代码运行的变动）
        'perf', // 优化相关，比如提升性能、体验
        'refactor', // 代码重构（即不是新增功能，也不是修改bug的代码变动）
        'ci', // 自动集成
        'test', // 增加测试、测试用例修改
    ],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: [
        'type',
        'scope',
        'subject',
        // 'body',
        // 'breaking',
        // 'issues',
        // 'lerna',
    ],
    scopes: ['', 'config', 'router', 'dependence'],
    types: {
        chore: {
            description: 'Build process or auxiliary tool changes',
            emoji: '🛠',
            value: 'chore',
        },
        ci: {
            description: 'CI related changes',
            emoji: '🎡',
            value: 'ci',
        },
        docs: {
            description: 'Documentation only changes',
            emoji: '✏️',
            value: 'docs',
        },
        feat: {
            description: 'A new feature',
            emoji: '🎸',
            value: 'feat',
        },
        fix: {
            description: 'A bug fix',
            emoji: '🐛',
            value: 'fix',
        },
        perf: {
            description: 'A code change that improves performance',
            emoji: '⚡️',
            value: 'perf',
        },
        refactor: {
            description:
                'A code change that neither fixes a bug or adds a feature',
            emoji: '💡',
            value: 'refactor',
        },
        release: {
            description: 'Create a release commit',
            emoji: '🏹',
            value: 'release',
        },
        style: {
            description:
                'Markup, white-space, formatting, missing semi-colons...',
            emoji: '💄',
            value: 'style',
        },
        test: {
            description: 'Adding missing tests',
            emoji: '💍',
            value: 'test',
        },
    },
}
