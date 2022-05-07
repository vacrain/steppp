<!--
 * @Author: yhq
 * @Date: 2022-05-07 17:40:01
 * @LastEditTime: 2022-05-07 17:43:07
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\playground\naiveUI\menuTest\menuMain.vue
 * 
-->
<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.path" />
    </router-view>
</template>
