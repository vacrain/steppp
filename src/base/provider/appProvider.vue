<!--
 * @Author: vacrain
 * @Date: 2022-04-19 06:26:50
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 21:06:32
 * @FilePath: /steppp/src/base/provider/appProvider.vue
 * @Description: 
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

import { useConfig } from '@/base/hooks/useConfig'
import AppPlayground from '@/base/layout/layoutPlayground.vue'

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
    <n-config-provider
        class="demo"
        :locale="lang"
        :theme="theme"
        :theme-overrides="themeOverrides"
    >
        <n-dialog-provider>
            <n-message-provider>
                <n-notification-provider>
                    <n-loading-bar-provider>
                        <app-playground />
                    </n-loading-bar-provider>
                </n-notification-provider>
            </n-message-provider>
        </n-dialog-provider>
    </n-config-provider>
</template>
