/*
 * Author        vacrain
 * CreateDate    2022-06-02
 * LastEditor    vacrain
 * lastEditDate  2022-06-21
 * RelativePath  /.eslintrc.js
 * Description   steppp全局eslint配置
 * 参考 https://cn.eslint.org/docs/user-guide/configuring
 */
const { readGitignoreFiles, readPrettierignoreFiles } = require('eslint-gitignore')

const offRules = {
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/require-await': 'off',
  'arrow-parens': 'off',
  'class-methods-use-this': 'off',
  'import/extensions': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-unresolved': 'off',
  'import/prefer-default-export': 'off',
  indent: 'off',
  'max-classes-per-file': 'off',
  'no-empty-function': 'off',
  'no-shadow': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  semi: 'off',
}

const errorRules = {
  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      allowSingleExtends: true,
    },
  ],
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      classes: true,
      functions: false,
      typedefs: false,
    },
  ],
  'no-param-reassign': [
    'error',
    {
      ignorePropertyModificationsFor: ['state', 'acc', 'e'],
      props: true,
    },
  ],
}

const warnRules = {
  '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true, varsIgnorePattern: '^_' }],
}

// https://cn.eslint.org/docs/user-guide/configuring#configuration-file-formats
module.exports = {
  // https://cn.eslint.org/docs/user-guide/configuring#using-configuration-files-1
  root: true,

  ignorePatterns: [...readGitignoreFiles(), ...readPrettierignoreFiles(), '.eslintrc.js'],

  // https://cn.eslint.org/docs/user-guide/configuring#configuring-plugins
  // https://cn.eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin
  plugins: ['vue', '@typescript-eslint', '@typescript-eslint/eslint-plugin'],

  // https://cn.eslint.org/docs/user-guide/configuring#configuration-file-formats
  // https://cn.eslint.org/docs/user-guide/configuring#using-eslintrecommended
  // https://cn.eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin
  extends: [
    // eslint typescript prettier
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // others
    'airbnb-base',
  ],

  // https://cn.eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
    es6: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
    jest: true,
  },

  // https://cn.eslint.org/docs/user-guide/configuring#specifying-globals
  globals: {
    PROJECT_BUILD_TIME: 'readonly',
    AMap: 'readonly',
    BMap: 'readonly',
    TMap: 'readonly',
  },

  // https://cn.eslint.org/docs/user-guide/configuring#specifying-parser
  parser: '@typescript-eslint/parser',

  // https://cn.eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },

  // https://cn.eslint.org/docs/user-guide/configuring#configuring-rules
  rules: {
    ...offRules,
    ...errorRules,
    ...warnRules,
  },

  // https://cn.eslint.org/docs/user-guide/configuring#specifying-processor
  // https://cn.eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files
  overrides: [
    {
      files: ['*.vue'],
      extends: [
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-recommended',
      ],
      rules: {
        'no-undef': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': [
          'error',
          {
            ignores: ['index'],
          },
        ],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
            pathGroups: [
              {
                group: 'external',
                pattern: 'vue',
                position: 'before',
              },
              {
                group: 'external',
                pattern: 'vue-router',
                position: 'before',
              },
              {
                group: 'external',
                pattern: 'vuex',
                position: 'before',
              },
              {
                group: 'external',
                pattern: 'pinia',
                position: 'before',
              },
              {
                group: 'external',
                pattern: 'naive-ui',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/config',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/settings',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/enum',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/plugins',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/layouts',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/views',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/components',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/router',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/store',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/composables',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/hooks',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/service',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/utils',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/assets',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/**',
                position: 'before',
              },
              {
                group: 'internal',
                pattern: '@/interface',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['vue', 'vue-router', 'vuex', 'pinia', 'naive-ui'],
          },
        ],
      },
      parser: 'vue-eslint-parser',
    },
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off',
      },
    },
    {
      files: ['bin/*.js', 'lib/*.js'],
      excludedFiles: '*.test.js',
      rules: {
        quotes: ['error', 'single'],
      },
    },
  ],
}
