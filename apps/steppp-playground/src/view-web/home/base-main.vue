<!--
 * @Author: yhq
 * @Date: 2022-05-13 15:42:46
 * @LastEditTime: 2022-05-23 17:28:00
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\view-web\home\base-main.vue
 * 
-->
<script setup lang="ts"></script>
<template>
  <h1>我是web的home页，简陋了点</h1>
</template>
<style scoped>
.rightContent {
  height: calc(100vh - 150px);
  overflow: auto;
  padding: 20px 0;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.rightContent::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.rightContentCard {
  margin-bottom: 20px;
}
</style>
