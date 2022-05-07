<!--
 * @Author: yhq
 * @Date: 2022-05-07 17:02:29
 * @LastEditTime: 2022-05-07 17:43:03
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\playground\naiveUI\naiveUIMain.vue
 * 
-->
<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.path" />
    </router-view>
</template>
