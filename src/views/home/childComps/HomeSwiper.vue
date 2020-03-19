<template>
  <Swiper>
    <swiper-item v-for="(item , index) in banner">
      <a :href="item.link">
        <img style="height: 100%; width: 100%" :src="item.image">
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>

    import {Swiper, SwiperItem} from '../../../components/common/swiper';

    export default {
        name: "HomeSwiper",
        props:{
          banner:{
            type:Array,
            default(){
              return[]
            }
          }
        },
      components:{
        Swiper, SwiperItem
      }
    }
</script>

<style scoped>

</style>
