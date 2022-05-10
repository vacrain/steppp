<!--
 * @Author: vacrain
 * @Date: 2022-04-23 07:14:21
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-10 19:23:52
 * @FilePath: /steppp/src/playground/vue3/vue3Main.vue
 * @Description: 
 * 
-->

<script setup lang="ts">
import leftComp from '@/base/components/n-anchor.vue'
import { computed, getCurrentInstance } from 'vue'

const { proxy }: any = getCurrentInstance()
const store = proxy.$store()
console.log(store)
const menuItemList: any = [
    {
        title: 'vue基本使用',
        path: '/vue_basic_usage',
    },
    {
        title: 'vue3新特性',
        path: '/vue_new_features',
    },
]
const menuOnClick = (i: number) => {
    proxy.$router.push(menuItemList[i].path)
}
const isShowbreadComp = computed(() => {
    return (
        menuItemList.filter((item: any) => {
            return item.path == proxy.$pathname
        }).length > 0
    )
})
</script>
<template>
    <n-layout has-sider v-if="!isShowbreadComp">
        <n-layout-sider>
            <left-comp :list="menuItemList" />
        </n-layout-sider>
        <n-layout-content :native-scrollbar="false">
            <n-space vertical>
                <n-card
                    v-for="(item, index) in menuItemList"
                    :key="index"
                    :id="item.title"
                    @click="menuOnClick(index)"
                >
                    <h3>{{ item.title }}</h3>
                </n-card>
            </n-space>
        </n-layout-content>
    </n-layout>
    <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.path" />
    </router-view>
</template>
