<!--
 * @Author: yhq
 * @Date: 2022-05-24 10:27:19
 * @LastEditTime: 2022-05-24 13:54:17
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\app.vue
 * 
-->
<script setup lang="ts">
import {
    NConfigProvider,
    NMessageProvider,
    NDialogProvider,
    NNotificationProvider,
    NLoadingBarProvider,
    GlobalThemeOverrides,
} from 'naive-ui'
import { useConfig } from '@/base/hooks/use-config'
import MessageApi from '@/base/components/message-api.vue'
const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#4fb233',
        primaryColorHover: '#4fb233',
        fontSize: '16px',
        borderRadius: '16px',
    },
}
const { theme, lang } = useConfig()
</script>
<template>
    <n-dialog-provider>
        <n-message-provider>
            <n-notification-provider>
                <n-loading-bar-provider>
                    <MessageApi />
                </n-loading-bar-provider>
            </n-notification-provider>
        </n-message-provider>
    </n-dialog-provider>
    <n-config-provider
        class="demo"
        :locale="lang"
        :theme="theme"
        :theme-overrides="themeOverrides"
    >
        <router-view></router-view>
    </n-config-provider>
</template>
<style scoped></style>
