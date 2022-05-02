/*
 * @Author: vacrain
 * @Date: 2022-05-02 20:51:47
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-02 21:14:21
 * @FilePath: /steppp/.commitlintrc.js
 * @Description:
 *
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],

    rules: {
        'type-enum': [
            2,
            'always',
            [
                'del', // 删除功能
                'fix', // 解决问题
                'bump', // 修改某个版本号
                'conf', // 配置文件修改
                'refactor', // 必须进行重构的代码
                'reformat', // 代码格式化
                'optimize', // 代码性能优化
                'start', // 开始做某事，比如创建分支等
                'end', // 结束做某事，比如删除分支等
                'style', // 仅代码格式改动
                'docs', // 文档构建与修改
                'chore', // 构建过程或辅助工具的变动
            ],
        ],

        'header-max-length': [2, 'never', 72], // header 最长72

        'type-empty': [2, 'never'], // <type> 不能为空
        'type-case': [2, 'always', 'lower-case'], // <type>格式小写

        'scope-empty': [2, 'never'], // <scope> 不能为空
        'scope-case': [2, 'always', 'lower-case'], // <scope> 格式 小写

        // <subject> 格式
        // 可选值
        // 'lower-case' 小写 lowercase
        // 'upper-case' 大写 UPPERCASE
        // 'camel-case' 小驼峰 camelCase
        // 'kebab-case' 短横线 kebab-case
        // 'pascal-case' 大驼峰 PascalCase
        // 'sentence-case' 首字母大写 Sentence case
        // 'snake-case' 下划线 snake_case
        // 'start-case' 所有首字母大写 start-case
        'subject-empty': [2, 'never'], // <subject> 不能为空
        'subject-full-stop': [2, 'never', '.'], // <subject> 以.为结束标志
        'subject-case': [2, 'never', []],

        'body-leading-blank': [2, 'always'], // body换行

        'footer-leading-blank': [1, 'always'], // <footer> 以空行开头
    },
}
