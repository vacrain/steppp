<!--
 * @Author: vacrain
 * @Date: 2022-04-17 14:24:17
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-01 11:27:40
 * @FilePath: /steppp/src/playground/home/homeMain.vue
 * @Description: 
 * 
-->

<script lang="ts">
export const routePath = '/'
export const menuName = 'Home'
</script>
<script setup lang="ts">
import { getMockInfo } from '@/base/utils/api/request'
// import Home1 from './homeComp1.vue'

import { mainStore } from '@/base/entry/store'
const store = mainStore()

const reminders = []
for (let i = 0; i < 10; i++) {
    reminders.push({
        content: '',
    })
}

const handleShowMessage = (aMsg: string) => {
    window.$message.success(aMsg)
}
const handleShowDialog = () => {
    window.$dialog.success({
        title: 'Success use dialog',
        content: 'Cool',
        positiveText: 'Wow!',
        onPositiveClick: () => {
            window.$message.success('Great!')
        },
    })
}
const handleShowNotification = () => {
    window.$notification.success({
        content: 'Will be success',
        meta: 'I think so',
    })
}
const handleShowLoadingBar = () => {
    window.$loadingBar.start()
}

const handleRequest = async () => {
    await getMockInfo()
}
</script>
<template>
    <n-space vertical>
        <n-card>
            <h3>home - 1</h3>
            <!-- <Home1 /> -->
        </n-card>
        <n-card>
            <h3>Pinia</h3>
            <n-button type="primary" @click="handleShowMessage(store.msg)">
                usePinia
            </n-button>
        </n-card>
        <n-card>
            <h3>Message</h3>
            <n-button type="primary" @click="handleShowMessage('just a msg')">
                useMessage
            </n-button>
        </n-card>
        <n-card>
            <h3>Dialog</h3>
            <n-button type="primary" @click="handleShowDialog">
                useDialog
            </n-button>
        </n-card>
        <n-card>
            <h3>Nofitication</h3>
            <n-button type="primary" @click="handleShowNotification">
                useNotification
            </n-button>
        </n-card>
        <n-card>
            <h3>LoadingBar</h3>
            <n-button type="primary" @click="handleShowLoadingBar">
                useLoadingBar
            </n-button>
        </n-card>
        <n-card>
            <h3>Request</h3>
            <n-button type="primary" @click="handleRequest">
                useRequest
            </n-button>
        </n-card>
    </n-space>
</template>
