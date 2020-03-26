<template>
  <div id="home">
    <!--头部-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control v-show="isTabShow"  ref="tabcontrol" @tabClick="tabClick" :titles="titles"></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!--轮播图-->
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad" />
      <!--推荐-->
      <recommend-view :recommend="recommend" />
      <!--本周流行-->
      <home-feature-view />
      <!--内容精选导航  所有组件都有一个属性  el  获取组件中元素-->
      <tab-control v-show="!isTabShow"  ref="tabcontrol" @tabClick="tabClick" :titles="titles"></tab-control>
      <!--内容精选-->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import { getHomeMultidata, getHomeGoods } from "../../network/home"; //default才能去掉大括号

import { debounce } from "../../common/utils";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新品", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop:0,
      isTabShow:false,
      saveY:0
    };
  },
  destroyed() {   //销毁



    // console.log('销毁home')
  },
  created() {
    //多个请求
    this.getHomeMultidata();

    //商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;


    // console.log('离开home');
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
    // console.log('进入home');
  },
  methods: {
    /**
     *事件监听相关方法
     */

    tabClick(value) {
      // console.log(value);
      switch (value) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    backClick() {
      //回到顶部
      this.$refs.scroll.scrollTo(0, 0);
    },

    contentScroll(value) {
      if (value.y > -1000) this.isShowBackTop = false;
      else this.isShowBackTop = true;

      this.isTabShow = (-value.y) > this.tabOffsetTop
    },

    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();

      // this.getHomeGoods(this.currentType);
      // this.$refs.scroll.finishPullUp();
      // this.$refs.scroll.scroll.refresh();
    },

    swiperImageLoad(){
       this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop-44
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = res.data.page;
      });
    }

    // debounce(func,delay){

    //   let timer = null
    //   return function (...agrs) {
    //     if(timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       func.apply(this,agrs)
    //     },delay)
    //   }
    // },
  },
  mounted() {
    //监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50); //延迟刷新

    this.$bus.$on("itemImageLoad", () => {
      refresh();
      // this.$refs.scroll.scroll.refresh();
      // console.log(234);
      // refresh();
    });
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

/*.content {*/
/*  overflow: hidden;*/
/*  position: absolute;*/
/*  top: 44px;*/
/*  bottom: 49px;*/
/*  left: 0;*/
/*  right: 0;*/
/*}*/

.content {
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>
