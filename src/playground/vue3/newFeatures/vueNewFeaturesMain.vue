<!--
 * @Author: yhq
 * @Date: 2022-05-09 13:51:53
 * @LastEditTime: 2022-05-09 14:25:17
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\playground\vue3\newFeatures\vueNewFeaturesMain.vue
 * 
-->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
    <n-layout has-sider> {{ t('hello') }}</n-layout>
</template>
