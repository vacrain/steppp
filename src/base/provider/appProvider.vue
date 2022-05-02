<!--
 * @Author: vacrain
 * @Date: 2022-04-19 06:26:50
 * @LastEditors: vacrain
 * @LastEditTime: 2022-05-01 21:38:52
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
import LayoutPlayground from '@/base/layout/layoutPlayground.vue'
import layoutWeb1 from '../layout/layoutWeb1.vue'
import { ref } from 'vue'

const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#4fb233',
        primaryColorHover: '#4fb233',
        fontSize: '16px',
        borderRadius: '16px',
    },
}

const showLayout = ref('')

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
                        <!-- 这里是一个很简陋的主页，可以选择layout
                        默认layout是空，选好了以后就关闭选择界面，打开选择的layout -->
                        <div v-if="showLayout == ''">
                            <h1>Steppp 选择layout</h1>
                            <span @click="showLayout = 'playground'"
                                >playground </span
                            ><br />
                            <span @click="showLayout = 'web1'">web1</span>
                        </div>

                        <layout-playground v-if="showLayout == 'playground'" />
                        <layout-web1 v-if="showLayout == 'web1'" />
                    </n-loading-bar-provider>
                </n-notification-provider>
            </n-message-provider>
        </n-dialog-provider>
    </n-config-provider>
</template>
