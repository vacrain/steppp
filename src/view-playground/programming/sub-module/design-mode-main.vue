<!--
 * @Author: yhq
 * @Date: 2022-05-09 09:55:00
 * @LastEditTime: 2022-05-27 15:44:27
 * @LastEditors: yhq
 * @Description: 
 * @FilePath: /steppp/src/view-playground/programming/sub-module/design-mode-main.vue
 * 
-->
<script setup lang="ts">
import leftComp from '@/base/components/left-outline.vue'

const menuItemList = [
    {
        name: '单例模式',
        describe: `
        确保一个类只有一个实例，而且自行实例化，并向整个系统提供这个实例
        1.如何确保一个类只有一个实例？
            构造方法不能公开，不能被外界实例化使用private修饰
            这个实例是当前类的类成员变量 用static修饰
        2. 向整个系统提供这个实例
            使用方法向外界提供这个实例
        3. 根据对象实例化时机不同可以分为饿汉式和懒汉式
         单例模式一般以无状态的 工具类模式进行提供
         因为在使用过程中状态可能随时被改变
         举例：序列号生成器、web页面的计数器等等都可以使用单例模式
        `,
        exampleList: [
            {
                name: '饿汉式：',
                code: `
                class Singleton {
                    private static Singleton singleton = new Singleton();
                    private Singleton() {

                    }
                    public static Singleton getInstance() {
                                return singleton
                    }
                }`,
            },
            {
                name: '懒汉式：在第一次使用时实例化',
                code: `
                class Singleton{
                    private volatile static Singleton singleton;
                    private Singleton(){
                    }

                    public  static Singleton getInstance(){
                        if(singleton == null){
                            synchronized (Singleton.class){
                                if(singleton == null){
                                    singleton = new Singleton();
                                }
                            }
                        }
                        return singleton;
                    }
                }`,
            },
        ],
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
                <n-card
                    v-for="(item, index) in menuItemList"
                    :key="index"
                    :id="item.name"
                    :segmented="{
                        content: true,
                        footer: 'soft',
                    }"
                    :title="item.name"
                >
                    <template #action>
                        <n-code :code="item.describe"> </n-code>
                    </template>
                    <div
                        class="exampleStyle"
                        v-for="(example, exampleIndex) in item.exampleList"
                        :key="exampleIndex"
                    >
                        {{ example.name }}
                        <n-code language="javascript" :code="example.code">
                        </n-code>
                    </div>
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
.exampleStyle {
    margin-bottom: 30px;
}
</style>
