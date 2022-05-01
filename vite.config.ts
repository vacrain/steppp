/*
 * @Author: vacrain
 * @Date: 2022-04-17 13:41:29
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-01 11:53:17
 * @FilePath: /steppp/vite.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by notia, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import importToCDN from 'vite-plugin-cdn-import'
import viteCompression from 'vite-plugin-compression'

// 真正的root
const rootPath = process.cwd()
// const srcPath = rootPath + '/src'
// const distPath = rootPath + '/dist'
// const assetDistPath = !!prodPath ? prodPath + '/assets' : distPath + '/assets'

// __filename
// console.log(__filename)
// /Library/code/projects/my_now/pnpm-init-vite-latest/tools/vite.config.ts

// 分环境配置
// export default defineConfig(({ command, mode }) => {
//     if (command === 'serve') {
//         return {
//             // dev 独有配置
//         }
//     } else {
//         // command === 'build'
//         return {
//             // build 独有配置
//         }
//     }
// })

///////////////////////////////
///https://vitejs.dev/config///
///////////////////////////////
export default defineConfig({
    // define 全局常量

    // index.html 所在目录
    // 默认 process.cwd()
    // console.log(process.cwd()) => /Library/code/projects/my_now/pnpm-init-vite-latest/tools
    // root: srcPath,

    // 开发或生产环境服务的公共基础路径
    // 默认： /
    // 为防止部署项目时发生资源路径访问错误的隐患，这里配置相对路径 ./ 来避免发生。
    base: './',

    // mode 默认： 'development'（serve），'production'（build）
    // 在配置中指明将会把 serve 和 build 时的模式 都 覆盖掉。所以别动了

    plugins: [
        vue(),
        // mock
        viteMockServe({
            mockPath: 'mock',
        }),
        // CDN
        importToCDN({
            modules: [
                // 生产环境还有点问题。。
                // { name: 'vue', var: 'Vue', path: 'https://unpkg.com/vue@next' },
            ],
        }),
        // compress
        viteCompression(),
    ],

    // publicDir 默认public ，设为false可关闭
    // dev时在/处提供
    // product时，放到outDir 根目录中
    publicDir: false,

    // 静态资源引入 ，一般头部引入，这样alias 用path.resolve()配置没问题的
    resolve: {
        alias: {
            '@': resolve(rootPath, 'src'),
        },
    },

    // server
    server: {
        port: 3210,
        // 设置完启动后会显示，Network:  http://192.168.13.15:3000/ 然后就可以根据ip访问了
        host: '0.0.0.0',
        // 启动后自动打开
        open: true,
        // 跨域
        proxy: {
            '/ss': {
                target: 'https://saucenao.com/search.php?db=999&output_type=2&url=https://pica.zhimg.com/v2-178387c7e8e907910d715e890bfd7519_1440w.jpg?source=172ae18b&api_key=33d4bee5c19583cd3756ee47f2ebef8edd5bef7e',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/ss/, ''),
            },
        },
    },

    build: {
        // terser会比默认的慢几十倍，所以尽量还是不要写console和debugger
        // minify: "terser", // 默认为esbuild
        // terserOptions: {
        //     compress: {
        //         drop_console: true, // 生产环境移除console
        //         drop_debugger: true, // 生产环境移除debugger
        //     },
        // },

        reportCompressedSize: false, // 禁用 压缩大小报告,以提高大型项目的构建性能。

        // 打包输出文件夹配置，不配置，就都在assets里
        rollupOptions: {
            input: {
                main: resolve(rootPath, './index.html'),
                // 多主页配置 https://cn.vitejs.dev/guide/build.html#multi-page-app
                // nested: resolve(__dirname, 'nested/index.html'),
            },
            output: {
                // 配置输出文件夹
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
                assetFileNames: '[ext]/[name]-[hash].[ext]',
            },
        },
    },
})
