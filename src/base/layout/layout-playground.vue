<script setup lang="ts">
import { ref, computed, onMounted, getCurrentInstance, nextTick } from 'vue'
import { useConfig } from '@/base/hooks/use-config'
import breadCrumb from '@/base/components/bread-crumbs-top.vue'
import rightThemeDrawer from '@/base/components/theme-drawer-right.vue'
import { useI18n } from 'vue-i18n'
import { getMenuList, setSeItem, getSeItem, clearSeItem } from '@/base/utils'
const { t } = useI18n()
const { proxy }: any = getCurrentInstance()
const store = proxy.$store()
// config
const { lang, changeLang } = useConfig()
const showLang = computed(() => {
    return lang.value.name === 'zh-CN' ? 'English' : '中文'
})
const whichEnd = getSeItem('whichEnd')
const layoutOptions = getMenuList(store.getEndInfo(whichEnd).fileList)
const appName = store.getEndInfo(whichEnd).appName
const activeName = ref('/')
const collapsed = ref(false)
const breadCrumbShow = ref(true)
const rightThemeDrawerShow = ref(false)
const handleMenuSelect = (value: string) => {
    setActiveName(value)
    proxy.$router.push({
        path: value,
    })
    setSeItem('nowMenuItemPath', value)
    setSeItem('nowPath', value)
    breadCrumbShow.value = false
    nextTick(() => {
        breadCrumbShow.value = true
    })
}

onMounted(() => {
    setActiveName(getSeItem('nowMenuItemPath') || '/')
})
//返回初始选择端
const goBack = () => {
    clearSeItem()
    proxy.$router.push('/login')
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
                <div>
                    <breadCrumb v-if="breadCrumbShow" />
                </div>
                <div>
                    <span
                        style="margin-right: 20px"
                        @click="rightThemeDrawerShow = true"
                        >{{ t('setUpThemes') }}</span
                    >
                    <span style="margin-right: 20px" @click="changeLang">{{
                        showLang
                    }}</span>
                    <span @click="goBack">{{ t('back') }}</span>
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
    <rightThemeDrawer
        :isShow="rightThemeDrawerShow"
        @back="rightThemeDrawerShow = false"
    />
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
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
}

.n-layout-header span {
    cursor: pointer;
}
</style>
