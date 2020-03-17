<!--
 * @Author: your name
 * @Date: 2020-03-17 09:50:00
 * @LastEditTime: 2020-03-17 10:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\src\App.vue
 -->
<template>
    <div id="app">
        <router-view/>
        <main-tab-bar/>
    </div>
</template>

<script>
    import MainTabBar from 'components/content/MainTabBar/MainTabBar';

    export default {
        name: 'App',
        components: {
            MainTabBar,
        }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>
