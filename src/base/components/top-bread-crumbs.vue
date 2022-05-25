<!--
 * @Author: yhq
 * @Date: 2022-05-09 15:11:01
 * @LastEditTime: 2022-05-24 18:12:41
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\base\components\top-bread-crumbs.vue
 * 
-->
<!-- 页面顶部面包屑 -->
<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue'
import { getSeItem } from '@/base/utils'
const { proxy }: any = getCurrentInstance()
const breadcrumbInfo: any = ref({})
proxy.$router.afterEach(() => {
    setBreadInfo()
})
onMounted(() => {
    setBreadInfo()
})
const setBreadInfo = () => {
    breadcrumbInfo.value = JSON.parse(getSeItem('breadInfo') as any) || {}
}
const breadcrumbItemOnClick = (path: string) => {
    proxy.$router.push(path)
}
</script>

<template>
    <n-breadcrumb>
        <n-breadcrumb-item @click="breadcrumbItemOnClick(breadcrumbInfo.path)">
            {{ breadcrumbInfo.name }}
        </n-breadcrumb-item>
        <n-breadcrumb-item
            v-for="(item, index) in breadcrumbInfo.children"
            :key="index"
            @click="breadcrumbItemOnClick(item.path)"
        >
            {{ item.name }}
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>
