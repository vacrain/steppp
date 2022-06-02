<!--
 * @Author: vacrain
 * @Date: 2022-05-01 21:20:29
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-30 13:56:32
 * @FilePath: /steppp/src/base/layout/layout-web1.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import Storage from '@/base/utils/storage'

const { proxy }: any = getCurrentInstance()

const back = () => {
  Storage.clearSessionItem()
  proxy.$router.push('/login')
}
</script>
<template>
  <h1>
    我是web的首页
    <n-gradient-text type="info" @click="back"> 返回登录页 </n-gradient-text>
  </h1>
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="$route.path" />
  </router-view>
</template>
