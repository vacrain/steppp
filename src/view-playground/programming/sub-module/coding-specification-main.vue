<!--
 * @Author: yhq
 * @Date: 2022-05-09 13:51:53
 * @LastEditTime: 2022-05-27 16:51:05
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: /steppp/src/view-playground/programming/sub-module/coding-specification-main.vue
 * 
-->
<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const { proxy }: any = getCurrentInstance()
const { t } = proxy.$useI18n()
</script>
<template>
    <n-layout has-sider> 编码规范</n-layout>
</template>
