<!--
 * @Author: your name
 * @Date: 2020-03-24 20:17:41
 * @LastEditTime: 2020-03-24 20:32:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\src\views\detail\childComps\DetailNAVBar.vue
 -->
<template>
        <div id="detail">
        <!-- 导航-->
          <nav-bar>
            <div class="back" slot="left" @click="backClick">
              <img src="../../../assets/images/common/back.svg">
            </div>
            <div class="title" slot='center'>
              <div @click="titleClick(index)" class="title-item" :class="{active:index ===  currentIndex}" v-for="(item , index) in titles"  :key="index">
                  {{item}}
              </div>
            </div>
          </nav-bar>
    </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar.vue'


 export default {
    name: 'DetailNavBar',
    data() {
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = index
      },
      backClick(){
        this.$router.back()
      },

    },
    components:{
      NavBar
    },
}
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }

  .back{
    width: 100%;
    height: 100%;
    position:relative;
  }
  .back img{
    position:absolute;
    top:11px;
    left:25%;
  }
</style>
