<!--
 * @Author: yhq
 * @Date: 2022-05-09 15:11:01
 * @LastEditTime: 2022-05-10 10:15:33
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\base\components\top-bread-crumbs.vue
 * 
-->
<!-- 页面顶部面包屑 -->
<script setup lang="ts">
defineProps({
    breadcrumbInfo: {
        type: Object,
        default: () => {
            return {}
        },
    },
})
</script>

<template>
    <n-breadcrumb>
        <n-breadcrumb-item :href="breadcrumbInfo.path">
            {{ breadcrumbInfo.name }}
        </n-breadcrumb-item>
        <n-breadcrumb-item
            v-for="(item, index) in breadcrumbInfo.children"
            :key="index"
            :href="item.path"
        >
            {{ item.name }}
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>
