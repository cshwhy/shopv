<!--
 * @Author: your name
 * @Date: 2020-03-19 11:58:19
 * @LastEditTime: 2020-03-21 10:21:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\src\components\common\scroll\Scroll.vue
 -->
<template>
  <div id="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  //创建
  mounted() {
    //创建实例
    this.scroll = new BScroll("#wrapper", {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    //获取上拉位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    //上拉加载
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  components: {
    BScroll
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log(234);
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>
