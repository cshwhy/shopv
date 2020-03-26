<!--
 * @Author: your name
 * @Date: 2020-03-17 09:50:00
 * @LastEditTime: 2020-03-24 16:01:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\src\App.vue
 -->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
