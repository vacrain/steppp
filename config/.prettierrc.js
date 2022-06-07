/*
 * Author        vacrain
 * CreateDate    2022-06-02
 * LastEditor    vacrain
 * lastEditDate  2022-06-06
 * RelativePath  /.prettierrc.js
 * Description   代码自动格式化配置
 * 参考：
 * https://prettier.io/docs/en/options.html
 * https://www.cnblogs.com/wangpenghui522/p/13727990.html
 * https://www.jianshu.com/p/4be58a69b20f
 */

module.exports = {
  printWidth: 120, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 使用空格进行缩进
  semi: false, // 句尾添加分号
  singleQuote: true, // 使用单引号代替双引号
  trailingComma: 'es5', // 选项：none|es5|all， 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  bracketSpacing: true, // 是否在对象的{}内部两侧加空格 true - { foo: bar } false - {foo: bar}.
  bracketSameLine: false,
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  endOfLine: 'auto', // 结尾是 lf-\n cr-\r lfcr-\n\r  auto-保持现有的行尾设置，必须用auto，因为win和mac系统的换行符不一样，不同系统的人员，格式化效果不同
  htmlWhitespaceSensitivity: 'css', // 是否显示HTML文件中的空格。 有效选项： 'css' - 尊重CSS display属性的设置。 'strict' - 空格被认为是敏感的。 'ignore' - 空格被认为是不敏感的
  embeddedLanguageFormatting: 'auto', // 是否格式化嵌入到JS中的html标记的代码段或者Markdown语法 auto-格式化 off-不格式化
  proseWrap: 'preserve', // 有效选项[always|never|preserve]。当Markdown文本超过printWidth时,是否换行,always-换行 never-不换行 preserve保持原样
  quoteProps: 'as-needed', // 对象的key是否用引号括起来,有三种选项 "as-needed"|"consistent"|"preserve"

  // Pragma
  requirePragma: false, // 若为true，文件顶部加了 /*** @prettier */或/*** @format */的文件才会被格式化
  insertPragma: false, // 当requirePragma参数为true时,此参数为true将向@format标记后面添加一个换行符
  // jsx
  // jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  // jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  // vue
  vueIndentScriptAndStyle: false, // 是否给vue中的 <script> and <style>标签加缩进

  // range 格式化范围 从第几个字节到第几个字节，默认从第一个到无限
  rangeStart: 0, // 仅格式化选中文本 选中文本格式化的起始位置
  rangeEnd: Infinity, // 选中文本格式化的结束位置

  // 重写配置，部分文件定制化
  overrides: [
    {
      files: '*.test.js',
      options: {
        semi: true,
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'html',
        tabWidth: 4,
      },
    },
  ],
}
