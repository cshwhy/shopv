<!--
 * @Author: your name
 * @Date: 2020-03-18 10:50:53
 * @LastEditTime: 2020-03-21 11:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\src\views\home\childComps\HomeSwiper.vue
 -->
<template>
  <Swiper>
    <swiper-item v-for="(item , index) in banner">
      <a :href="item.link">
        <img style="height: 100%; width: 100%" :src="item.image" @load="imageLoad" />
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style scoped>
</style>
