<!--
 * @Author: vacrain
 * @Date: 2022-04-30 08:16:51
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:53:38
 * @FilePath: /steppp/src/playground/home/home1.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import axios from 'axios'

// mock
// let mockData = { statusText: "" };
// const getInfo = async () => {
//     mockData = await axios.get("/api/get");
//     console.log(mockData);
// };
// getInfo();

// 跨域
// let mockData2 = { config: { method: "" } };
// const getInfo2 = async () => {
//     mockData2 = await axios.get("/ss");
//     console.log(mockData2.config.method);
// };
// getInfo2();

// 开发 生产 切换模式
let mockData = {}
const getInfo = async () => {
    // mock
    // mockData = await axios.get("/api/get");

    // console.log(import.meta.env);
    // 会打印这个：
    // {
    // "VITE_BASE_API": "/api/get", // 这个 是会根据环境变化的
    // "BASE_URL": "/",
    // "MODE": "development", // 还有这个 是会根据环境变化的
    // "DEV": true,
    // "PROD": false,
    // "SSR": false
    // }

    // 自动根据当前环境获取api地址
    // 不as string 一下，dev没事，build完了
    mockData = await axios.get(import.meta.env.VITE_BASE_API as string)
    console.log(mockData)
}
getInfo()
</script>
<template>hihihi<br /></template>
