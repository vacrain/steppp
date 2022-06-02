<!--
 * @Author: yhq
 * @Date: 2022-05-24 13:50:21
 * @LastEditTime: 2022-05-24 13:51:43
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\base\components\message-api.vue
 * 
-->
<script setup lang="ts">
import { useMessage, useDialog, useNotification, useLoadingBar } from 'naive-ui'
// mount on window
window.$message = useMessage()
window.$dialog = useDialog()
window.$notification = useNotification()
window.$loadingBar = useLoadingBar()
</script>
<template>
  <div></div>
</template>
