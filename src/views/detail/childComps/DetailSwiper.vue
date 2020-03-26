<template>
   <swiper>
     <swiper-item class="swiper-item" v-for="(item , index) in topImage">
       <img :src="item">
     </swiper-item>
   </swiper>
</template>

<script>
  import {Swiper , SwiperItem} from "../../../components/common/swiper";
    export default {
        name: "DetailSwiper",
        props:{
          topImage:{
            type:Array,
            default(){
              return []
            }
          }
        },
        components:{
          Swiper,
          SwiperItem
        }
    }
</script>

<style scoped>
  .swiper-item{
    height: 300px;
    overflow: hidden;
  }
</style>
