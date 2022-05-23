<!--
 * @Author: yhq
 * @Date: 2022-05-09 13:51:53
 * @LastEditTime: 2022-05-23 17:45:10
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\view-playground\vue3\sub-module\new-features-main.vue
 * 
-->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
    <n-layout has-sider> {{ t('hello') }}</n-layout>
</template>
