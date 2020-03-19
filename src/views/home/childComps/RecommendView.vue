<template>
  <div class="recommend">
    <div v-for="(item ,index) in recommend">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
          recommend:{
            type:Array,
            default() {
              return [];
            }
          }
        }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 ;
    border-bottom: #eeeeee solid 8px;
  }
  .recommend div{
    flex: 1;
    font-size: 12px;
  }
  .recommend div a img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
  }
</style>
