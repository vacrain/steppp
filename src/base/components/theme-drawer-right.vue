<!--
 * @Author: yhq
 * @Date: 2022-05-26 13:46:59
 * @LastEditTime: 2022-05-26 17:38:21
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: /steppp/src/base/components/theme-drawer-right.vue
 * 
-->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useConfig } from '@/base/hooks/use-config'
import { onMounted, ref, watch } from 'vue'
import { getSeItem } from '@/base/utils'
const { changeTheme, setOsTheme } = useConfig()
const { t } = useI18n()
const osTheme = ref<any>(false)
const darkTheme = ref(false)
defineProps({
    isShow: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(['back'])
const onSubmit = () => {
    setOsTheme(osTheme.value)
    !osTheme.value && changeTheme(darkTheme.value)
    emit('back')
}
watch(
    () => osTheme.value,
    value => {
        if (value) {
            darkTheme.value = false
        }
    }
)
onMounted(() => {
    osTheme.value = !!getSeItem('useOsTheme') || false
    console.log(osTheme.value)
    if (osTheme.value) {
        darkTheme.value = false
    } else {
        darkTheme.value = getSeItem('theme') == 'dark'
    }
})
</script>
<template>
    <n-drawer :show="isShow" :width="502">
        <n-drawer-content>
            <template #header> {{ t('setUpThemes') }} </template>
            <template #default>
                <n-divider title-placement="center"> 主题模式 </n-divider>
                <n-space justify="space-between">
                    夜间模式<n-switch
                        :disabled="osTheme"
                        v-model:value="darkTheme"
                    />
                </n-space>
                <n-space justify="space-between">
                    使用操作系统主题<n-switch v-model:value="osTheme" />
                </n-space>
            </template>
            <template #footer>
                <n-button @click="onSubmit">{{ t('confirm') }}</n-button>
            </template>
        </n-drawer-content>
    </n-drawer>
</template>
