<!--
 * @Author: yhq
 * @Date: 2022-05-06 14:10:34
 * @LastEditTime: 2022-05-12 18:53:40
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\base\components\n-anchor.vue
 * 
-->
<!-- 页面左侧大纲 -->
<script setup lang="ts">
defineProps({
    list: {
        type: Array as () => Array<any>,
        default: () => {
            return []
        },
    },
})
</script>

<template>
    <n-anchor
        class="widthStyle"
        :show-rail="true"
        :show-background="true"
        :ignore-gap="true"
        ><n-anchor-link
            v-for="(item, index) in list"
            :title="item.label"
            :href="'#' + item.label"
            :key="index"
        />
    </n-anchor>
</template>
<style scoped>
.widthStyle {
    width: 160px;
}
</style>
