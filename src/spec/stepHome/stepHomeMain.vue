<script setup lang="ts"></script>
<template>
    <n-space vertical>
        <template v-for="n in 3" :key="n">
            <n-space>
                <n-input :value="n" type="text" />
            </n-space>
            <n-divider />
        </template>
    </n-space>
</template>
