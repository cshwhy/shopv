<template>
  <div class="goods">
      <goods-list-item  v-for="(item , index) in goods" :goods-item="item"/>
  </div>
</template>

<script>

  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods{
    box-sizing: border-box;
    padding: 0 3px;
    display: flex;
    flex-wrap: wrap;
  }


</style>
