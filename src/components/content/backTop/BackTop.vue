<template>
    <div class="back-top">
      <img src="~assets/images/common/top.png">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
    }
</script>

<style scoped>
  .back-top{
    position: fixed;
    z-index: 11;
    right: 0;
    bottom: 60px;
  }
  .back-top img{
    width: 45px;
    height: 45px;
  }
</style>
