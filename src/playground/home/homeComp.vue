<!--
 * @Author: vacrain
 * @Date: 2022-04-30 08:16:51
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-05 05:48:06
 * @FilePath: /steppp/src/playground/home/homeComp.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
const { proxy }: any = getCurrentInstance()

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

const NameList = ref([])
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
    // mockData = await axios.get(import.meta.env.VITE_BASE_API)
    proxy.$api.getNameList().then((res: any) => {
        NameList.value = res.info.name
        console.log(res, 'res')
    })
    // proxy.$api.getProduct()
}
getInfo()
</script>
<template>
    <span v-for="(item, index) in NameList" :key="index">{{ item }}、</span>
</template>
