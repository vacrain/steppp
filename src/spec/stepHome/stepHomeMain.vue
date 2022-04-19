<script setup lang="ts">
import { getMockInfo } from "@/base/utils/request";

const reminders = [];
for (let i = 0; i < 10; i++) {
    reminders.push({
        content: "",
    });
}

const handleShowMessage = () => {
    window.$message.success("I can use message");
};
const handleShowDialog = () => {
    window.$dialog.success({
        title: "Success use dialog",
        content: "Cool",
        positiveText: "Wow!",
        onPositiveClick: () => {
            window.$message.success("Great!");
        },
    });
};
const handleShowNotification = () => {
    window.$notification.success({
        content: "Will be success",
        meta: "I think so",
    });
};
const handleShowLoadingBar = () => {
    window.$loadingBar.start();
};

const handleRequest = async () => {
    await getMockInfo();
};
</script>
<template>
    <n-space vertical>
        <n-card>
            <h3>Message</h3>
            <n-button type="primary" @click="handleShowMessage">
                useMessage
            </n-button>
        </n-card>
        <n-card>
            <h3>Dialog</h3>
            <n-button type="primary" @click="handleShowDialog">
                useDialog
            </n-button>
        </n-card>
        <n-card>
            <h3>Nofitication</h3>
            <n-button type="primary" @click="handleShowNotification">
                useNotification
            </n-button>
        </n-card>
        <n-card>
            <h3>LoadingBar</h3>
            <n-button type="primary" @click="handleShowLoadingBar">
                useLoadingBar
            </n-button>
        </n-card>
    </n-space>
</template>
