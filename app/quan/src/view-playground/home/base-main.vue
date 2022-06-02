<!--
 * @Author: vacrain
 * @Date: 2022-04-17 14:24:17
 * @LastEditors: vacrain
 * @LastEditTime: 2022-06-02 07:38:35
 * @FilePath: /steppp-monorepo/app/quan/src/view-playground/home/base-main.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { getMockInfo } from '@/base/utils'
import leftComp from '@/base/components/left-outline.vue'
import { useTestStore } from '../service/test'
import HomeComp from './components/base-item.vue'

const { proxy }: any = getCurrentInstance()
const store = proxy.$store()
const handleShowMessage = (aMsg: string) => {
  window.$message.success(aMsg)
}
const handleShowDialog = () => {
  window.$dialog.success({
    // TODO 这个爆红需要优先处理一下
    label: 'Success use dialog',
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

const testStore = useTestStore()
const testResMsg = computed(() => testStore.message)
const testApi = async () => {
  await testStore.test()
  window.$notification.success({
    content: testResMsg.value,
    meta: 'all done',
  })
}

// 注意 meth 里的方法不要写 （）
const menuItemList: any = [
  {
    name: 'test-server',
    isShowBtn: true,
    meth: testApi,
    comp: HomeComp,
  },
  {
    name: 'home-comp',
    isShowBtn: false,
    meth: null,
    comp: HomeComp,
  },
  {
    name: 'Pinia',
    isShowBtn: true,
    meth: handleShowMessage,
    msg: store.msg,
  },
  {
    name: 'Message',
    isShowBtn: true,
    meth: handleShowMessage,
    msg: 'just a msg',
  },
  {
    name: 'Dialog',
    isShowBtn: true,
    meth: handleShowDialog,
  },
  {
    name: 'Nofitication',
    isShowBtn: true,
    meth: handleShowNotification,
  },
  {
    name: 'LoadingBar',
    isShowBtn: true,
    meth: handleShowLoadingBar,
  },
  {
    name: 'Request',
    isShowBtn: true,
    meth: handleRequest,
  },
]
</script>
<template>
  <n-layout has-sider>
    <n-layout-sider>
      <left-comp :list="menuItemList" />
    </n-layout-sider>
    <n-layout-content :native-scrollbar="false" class="rightContent">
      <n-space vertical>
        <n-card v-for="(item, index) in menuItemList" :id="item.name" :key="index" class="rightContentCard">
          <h3>{{ item.name }}</h3>
          <component :is="item.comp" v-if="!item.isShowBtn" />
          <n-button v-if="item.isShowBtn" type="primary" @click="item.meth(item.msg)">
            {{ 'use' + item.name }}
          </n-button>
        </n-card>
      </n-space>
    </n-layout-content>
  </n-layout>
</template>
<style scoped>
.rightContent {
  height: calc(100vh - 150px);
  overflow: auto;
  padding: 20px 0;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.rightContent::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.rightContentCard {
  margin-bottom: 20px;
}
</style>
