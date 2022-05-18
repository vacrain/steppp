<!--
 * @Author: vacrain
 * @Date: 2022-04-19 06:26:50
 * @LastEditors: yhq
 * @LastEditTime: 2022-05-13 16:17:58
 * @FilePath: \naive-ui-steppp\src\base\provider\appProvider.vue
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
import layoutPlayground from '@/base/layout/layoutPlayground.vue'
import layoutWeb1 from '../layout/layoutWeb1.vue'
import { getCurrentInstance, onMounted, ref } from 'vue'
import { getMenuList } from '@/base/utils/menuAdjustment'
const { proxy }: any = getCurrentInstance()
const store = proxy.$store()
const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#4fb233',
        primaryColorHover: '#4fb233',
        fontSize: '16px',
        borderRadius: '16px',
    },
}

const showLayout = ref('')
const endList: any = ref(['playground', 'web'])
const { theme, lang } = useConfig()
const layoutOptions = ref([])
onMounted(() => {
    showLayout.value = sessionStorage.getItem('whichEnd') || '' // 可以改变这个地方的值，就不用走空制页 结合 router
    setLayoutOptions(showLayout.value)
})

//改变端
const changEnd = (val: string) => {
    store.setEnd(val)
    showLayout.value = val
    setLayoutOptions(val)
}
const setLayoutOptions = (val: string) => {
    // 这一步过滤 面包屑的菜单
    val && (layoutOptions.value = getMenuList(store.getEndList(val).fileList))
}
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
                        默认layout是空，选好了以后就关闭选择界面，打开选择的layout
                        现在不要点 web 点了就回不去了，清缓存吧
                        选端时 进页面需要刷新一下
                        -->

                        <n-card
                            v-if="showLayout == ''"
                            title="Steppp 选择layout"
                            :segmented="{
                                content: true,
                            }"
                            class="layoutStyle"
                        >
                            <div
                                @click="changEnd(item)"
                                v-for="(item, index) in endList"
                                :key="index"
                            >
                                {{ item }}
                            </div>
                        </n-card>
                        <layout-playground
                            v-if="showLayout == 'playground'"
                            :layoutOptions="layoutOptions"
                            :appName="store.getEndList(showLayout).appName"
                            @back="changEnd('')"
                        />
                        <layout-web1
                            v-if="showLayout == 'web'"
                            @back="changEnd('')"
                        />
                    </n-loading-bar-provider>
                </n-notification-provider>
            </n-message-provider>
        </n-dialog-provider>
    </n-config-provider>
</template>
<style scoped>
.layoutStyle {
    width: 50%;
    min-height: 500px;
    margin: auto;
    margin-top: 10%;
    background-color: #4fb2339e;
    border: 1px solid rgb(187, 187, 187);
}
.layoutStyle div {
    line-height: 3.8;
    font-size: 20px;
    padding: 0 10px;
}
.layoutStyle div:hover {
    background-color: #25910791;
}
</style>
