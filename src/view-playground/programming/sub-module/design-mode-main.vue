<!--
 * @Author: yhq
 * @Date: 2022-05-09 09:55:00
 * @LastEditTime: 2022-05-30 16:43:50
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
        定义
            单例模式就是保证一个类仅有一个实例，并提供一个访问它的全局访问点（静态方法）。
        优点 
            1. 由于单例模式在内存中只有一个实例，减少了内存开支，特别是一个对象需要频繁地创建、销毁时，而且创建或销毁时性能又无法优化，单例模式的优势就非常明显。
            2. 由于单例模式只生成一个实例，所以减少了系统的性能开销。
            3. 单例模式可以避免对资源的多重占用。
            4. 单例模式可以在系统设置全局的访问点，优化和共享资源访问。
        缺点 
            1. 单例模式一般没有接口，扩展困难，若要扩展，除了修改代码基本上没有第二种途径可以实现。
            2. 单例模式对测试是不利的。在并行开发环境中，如果单例模式没有完成，是不能进行测试的，没有接口也不能使用mock的方式虚拟一个对象。
            3. 单例模式与单一职责原则有冲突。
        使用场景
            需要频繁的进行创建和销毁的对象、创建对象时耗时过多或耗费资源过多（即：重量级对象），但又经常用到的对象、工具类对象、频繁访问的数据库或文件的对象（比如数据源、session工厂等）
        `,
        exampleList: [
            {
                name: '饿汉式（静态常量）会造成内存浪费',
                code: `
                class Singleton {
                    //1.构造器私有化，外部不能new
                    private constructor() {};

                    //2.本类内部创建对象实例化
                    private static instance: Singleton = new Singleton();

                    //3.提供一个公有的静态方法，返回实例对象
                    public static getInstance(): Singleton {
                        return this.instance;
                    }
                }`,
            },
            {
                name: '懒汉式（线程不安全）js是基于单线程运行代码，所以不存在线程不安全问题，推荐该种方法。',
                code: `
                class Singleton{
                    private constructor(){return};

                    private static instance: Singleton

                    public  static getInstance(): Singleton{
                        if(this.instance === undefined){
                            this.instance = new Singleton()
                        }
                        return this.instance;
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
                        <n-code language="typescript" :code="example.code">
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
