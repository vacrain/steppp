<script setup lang="ts">
import { useMessage, useDialog, useNotification, useLoadingBar } from 'naive-ui'
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
// mount something
import { useConfig } from '@/base/hooks/useConfig'
import breadCrumb from '@/base/components/n-breadcrumb.vue'
const { proxy }: any = getCurrentInstance()
// mount on window
window.$message = useMessage()
window.$dialog = useDialog()
window.$notification = useNotification()
window.$loadingBar = useLoadingBar()
const collapsed = ref(false)
// config
const { theme, lang, changeTheme, changeLang } = useConfig()
const showLang = computed(() => {
    return lang.value.name === 'zh-CN' ? '中文' : 'English'
})
const emit = defineEmits(['back'])
defineProps({
    layoutOptions: {
        type: Array,
        default: () => {
            return []
        },
    },
    appName: {
        type: String,
        default: '',
    },
})
//返回初始选择端
const goBack = () => {
    emit('back')
}
const activeName = ref('/')
const breadInfo = ref({})
const handleMenuSelect = (value: string) => {
    setActiveName(value)
    proxy.$router.push({
        path: value,
    })
}

// 该步骤是 防止页面刷新拿不到值
proxy.$router.beforeEach((to: any, from: any, next: any) => {
    setBreadInfo()
    next()
})
onMounted(() => {
    setBreadInfo()
    setActiveName(proxy.$pathname)
})
const setBreadInfo = () => {
    breadInfo.value = JSON.parse(sessionStorage.getItem('breadInfo') as any)
}
const setActiveName = (val: string) => {
    activeName.value = val
}
</script>
<template>
    <n-layout has-sider class="app-layout" position="absolute">
        <n-layout-sider
            position="absolute"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="280"
            :collapsed="collapsed"
            class="app-layout-sider"
            show-trigger="bar"
            style="border-top-right-radius: 16px"
            @collapse="collapsed = true"
            @expand="collapsed = false"
        >
            <span class="app-layout-sider__title"> {{ appName }}</span>

            <n-menu
                :value="activeName"
                :options="layoutOptions"
                :collapsed-width="64"
                :collapsed-icon-size="22"
                @update:value="handleMenuSelect"
            />
        </n-layout-sider>
        <n-layout
            position="absolute"
            style="min-width: 1080px; transition: all 0.3s"
            :style="{ left: collapsed ? '10px' : '280px' }"
        >
            <n-layout-header bordered>
                <breadCrumb :breadcrumb-info="breadInfo" />
                <div style="padding-right: 40px">
                    <span style="margin-right: 20px" @click="changeTheme">{{
                        theme === null ? '浅色' : '深色'
                    }}</span>
                    <span style="margin-right: 20px" @click="changeLang">{{
                        showLang
                    }}</span>
                    <span @click="goBack">back</span>
                </div>
            </n-layout-header>
            <n-layout-content
                class="layout-content"
                style="border-radius: 0 16px 16px"
            >
                <div style="padding: 20px 40px">
                    <router-view v-slot="{ Component }">
                        <component :is="Component" :key="$route.path" />
                    </router-view>
                </div>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<style scoped>
.app-layout-sider__title {
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    padding-left: 20px;
    height: 28px;
    color: #333;
    font-weight: 500;
    font-size: 20px;
}

.n-layout-header {
    padding: 24px;
    display: flex;
    justify-content: space-between;
}

.n-layout-header span {
    cursor: pointer;
}
</style>
