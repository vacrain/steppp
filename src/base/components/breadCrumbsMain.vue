<!--
 * @Author: yhq
 * @Date: 2022-05-13 14:29:25
 * @LastEditTime: 2022-05-13 14:39:07
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\base\components\breadCrumbsMain.vue
 * 
-->
<!-- 面包屑主页面 -->
<script setup lang="ts">
import leftComp from '@/base/components/n-anchor.vue'
import { computed, getCurrentInstance } from 'vue'
const { proxy }: any = getCurrentInstance()
const menuItemList: any =
    JSON.parse(sessionStorage.getItem('breadList') || '') || []
const menuOnClick = (i: number) => {
    proxy.$router.push(menuItemList[i].key)
}
const isShowbreadComp = computed(() => {
    return window.location.pathname == sessionStorage.getItem('nowMenuItemPath')
})
</script>
<template>
    <n-layout has-sider v-if="isShowbreadComp">
        <n-layout-sider>
            <left-comp :list="menuItemList" />
        </n-layout-sider>
        <n-layout-content :native-scrollbar="false">
            <n-space vertical>
                <n-card
                    v-for="(item, index) in menuItemList"
                    :key="index"
                    :id="item.label"
                    @click="menuOnClick(index)"
                >
                    <h3>{{ item.label }}</h3>
                </n-card>
            </n-space>
        </n-layout-content>
    </n-layout>
    <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.path" />
    </router-view>
</template>
