<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { storeToRefs } from 'pinia'
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  NLoadingBarProvider,
  NThemeEditor,
} from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import { useConfig } from '@/base/hooks/use-config'
import MessageApi from '@/base/components/message-api.vue'

hljs.registerLanguage('typescript', typescript)
const { proxy }: any = getCurrentInstance()
const store = proxy.$store()
const { themeOverrides } = storeToRefs(store)
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
  <n-config-provider class="demo" :locale="lang" :theme="theme" :theme-overrides="themeOverrides">
    <n-theme-editor> </n-theme-editor>
    <n-config-provider :hljs="hljs">
      <router-view></router-view>
    </n-config-provider>
  </n-config-provider>
</template>
<style scoped></style>
