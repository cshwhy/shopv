<template>
    <div class="tab-control">
      <div @click="active(index)" v-for="(item , index) in titles" :class="{active:index === currentIndex?'active':''}">
         <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      props:{
        titles:{
          type:Array,
          default(){
            return []
          }
        }
      },
      data(){
        return {
          currentIndex:0,
        }
      },
      methods:{
        active(value){
          this.currentIndex = value
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    /*justify-content: center;*/
    /*align-content: center;*/
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control div{
    height: 40px;
    line-height: 40px;
    flex: 1;
  }

  .active{
    color: var(--color-high-text);

  }

  .active span{
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px;
  }


</style>
