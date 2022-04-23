<!--
 * @Author: vacrain
 * @Date: 2022-04-18 06:03:28
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-23 07:14:58
 * @FilePath: /naive-ui-steppp/src/spec/field1/demoXxx.vue
 * @Description: 
 * 
-->
<script setup lang="ts"></script>
<template>
    <n-space vertical>
        <template v-for="n in 10" :key="n">
            <n-space>
                <n-input :value="n" type="text" />
            </n-space>
            <n-divider />
        </template>
    </n-space>
</template>
