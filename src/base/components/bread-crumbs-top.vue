<!--
 * @Author: yhq
 * @Date: 2022-05-09 15:11:01
 * @LastEditTime: 2022-05-30 14:11:47
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: /steppp/src/base/components/bread-crumbs-top.vue
 * 
-->
<!-- 页面顶部面包屑 -->
<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue'
import Storage from '@/base/utils/storage'

const { proxy }: any = getCurrentInstance()

const breadcrumbInfo: any = ref({})
const nowPath = ref('')
proxy.$router.afterEach(() => {
    setBreadInfo()
    setNowPath()
})
onMounted(() => {
    setBreadInfo()
    setNowPath()
})
const setNowPath = () => {
    nowPath.value =
        Storage.getSessionItem('nowPath') || breadcrumbInfo.value.path
}
const setBreadInfo = () => {
    breadcrumbInfo.value =
        JSON.parse(Storage.getSessionItem('breadInfo') as any) || {}
}
const breadcrumbItemOnClick = (path: string) => {
    Storage.setSessionItem('nowPath', path)
    nowPath.value = path
    proxy.$router.push(path)
}
</script>

<template>
    <n-tabs type="card" class="breadCrumbInfo" :value="nowPath" animated>
        <n-tab
            :tab="breadcrumbInfo.name"
            :name="breadcrumbInfo.path"
            @click="breadcrumbItemOnClick(breadcrumbInfo.path)"
        >
        </n-tab>
        <n-tab
            v-for="(item, index) in breadcrumbInfo.children"
            :key="index"
            :tab="item.name"
            :name="item.path"
            @click="breadcrumbItemOnClick(item.path)"
        >
        </n-tab>
    </n-tabs>
</template>
<style scoped>
.breadCrumbInfo ::v-deep(.n-tabs-tab) {
    border-top-left-radius: 5px !important;
    border-top-right-radius: 5px !important;
}
</style>
