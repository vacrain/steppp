<!--
 * @Author: vacrain
 * @Date: 2022-05-01 21:20:29
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-13 16:07:23
 * @FilePath: \naive-ui-steppp\src\base\layout\layoutWeb1.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
const emit = defineEmits(['back'])
const back = () => {
    emit('back')
}
</script>
<template>
    <h1>
        我是web的首页
        <n-gradient-text type="info" @click="back">
            返回初始选择端
        </n-gradient-text>
    </h1>
    <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.path" />
    </router-view>
</template>
