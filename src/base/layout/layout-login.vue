<!--
 * @Author: yhq
 * @Date: 2022-05-24 10:13:32
 * @LastEditTime: 2022-05-24 15:47:22
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: \naive-ui-steppp\src\base\layout\layout-login.vue
 * 
-->
<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'
const { proxy }: any = getCurrentInstance()
const store = proxy.$store()
const formItem = ref({
    userName: '',
    password: '',
    viewType: 'playground',
})
const rules = ref({
    userName: {
        required: true,
        message: '请输入用户名',
    },
    password: {
        required: true,
        message: '请输入密码',
    },
})
const viewList = ref(['playground', 'web'])
const loading = ref(false)
const handleValidateButtonClick = () => {
    proxy.$refs.loginFormRef
        .validate((errors: any) => {
            if (!errors) {
                goLogin()
            }
        })
        .catch(() => {
            return
        })
}
const goLogin = () => {
    store.setEnd(formItem.value.viewType)
    sessionStorage.setItem('token', '1231223')
    proxy.$router.push('/')
}
</script>
<template>
    <div class="login_box">
        <h1>登录页</h1>
        <n-form
            ref="loginFormRef"
            :model="formItem"
            :rules="rules"
            label-placement="left"
            label-width="auto"
            require-mark-placement="left"
            size="medium"
        >
            <n-form-item label="用户名" path="userName">
                <n-input v-model:value="formItem.userName" placeholder="" />
            </n-form-item>
            <n-form-item label="密码" path="password">
                <n-input
                    type="password"
                    show-password-on="click"
                    v-model:value="formItem.password"
                    placeholder=""
                />
            </n-form-item>
            <n-form-item label="选择view-type">
                <n-radio-group v-model:value="formItem.viewType">
                    <n-radio-button
                        v-for="(view, index) in viewList"
                        :key="index"
                        :value="view"
                        :label="view"
                    />
                </n-radio-group>
            </n-form-item>
            <n-button
                :disabled="loading"
                type="primary"
                @click="handleValidateButtonClick"
            >
                验证
            </n-button>
        </n-form>
    </div>
</template>
<style scoped>
.login_box {
    width: 30%;
    height: 300px;
    margin: auto;
    margin-top: 200px;
}
.login_box > h1 {
    text-align: center;
}
</style>
