<template>
  <div class="wrapper" style="height: 100px;background: red ;">
    <ul class="content" >
      <li>123</li><li>123</li>
      <li>123</li><li>123</li>
      <li>123</li><li>123</li>
      <li>123</li><li>123</li>
      <li>123</li><li>123</li>
      <li>123</li><li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li><li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Category",
      mounted() {
        new BScroll(document.querySelector('.wrapper'))
      }
      // created() {
        //     new BScroll(document.querySelector('.wrapper'))
        // }
    }
</script>

<style scoped>

</style>
