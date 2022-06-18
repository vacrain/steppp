<!--
 * @Author: yhq
 * @Date: 2022-05-13 14:29:25
 * @LastEditTime: 2022-06-02 07:35:55
 * @LastEditors: vacrain
 * @Description: 
 * @FilePath: /steppp-monorepo/apps/quan/src/base/components/bread-crumbs-main.vue
 * 
-->
<!-- 面包屑主页面 -->
<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import leftComp from '@/base/components/left-outline.vue'
import Storage from '@/base/utils/storage'

const { proxy }: any = getCurrentInstance()

// 从本地存储获取 面包屑数组 （侧边栏点击时会进行一个赋值操作）
const menuItemList: any = JSON.parse(Storage.getSessionItem('breadInfo') || '').children || []
// 面包屑点击
const menuOnClick = (i: number) => {
  Storage.setSessionItem('nowPath', menuItemList[i].path)
  proxy.$router.replace({ path: menuItemList[i].path })
}
// 判断是否从面包屑二级列表单击进入  返回真 则显示面包屑主页 假则显示 面包屑子页面
const isShowbreadComp = computed(() => {
  return Storage.getSessionItem('nowPath') === Storage.getSessionItem('nowMenuItemPath')
})
</script>
<template>
  <n-layout v-if="isShowbreadComp" has-sider>
    <n-layout-sider>
      <left-comp :list="menuItemList" />
    </n-layout-sider>
    <n-layout-content :native-scrollbar="false">
      <n-space vertical>
        <n-card v-for="(item, index) in menuItemList" :id="item.name" :key="index" @click="menuOnClick(index)">
          <h3>{{ item.name }}</h3>
        </n-card>
      </n-space>
    </n-layout-content>
  </n-layout>
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="$route.path" />
  </router-view>
</template>
