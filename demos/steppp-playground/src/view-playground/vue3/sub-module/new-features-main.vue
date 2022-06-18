<!--
 * @Author: yhq
 * @Date: 2022-05-09 13:51:53
 * @LastEditTime: 2022-05-27 16:51:24
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: /steppp/src/view-playground/vue3/sub-module/new-features-main.vue
 * 
-->
<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const { proxy }: any = getCurrentInstance()
const { t } = proxy.$useI18n()
</script>
<template>
  <n-layout has-sider> {{ t('hello') }}</n-layout>
</template>
