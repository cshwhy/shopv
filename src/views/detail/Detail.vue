<!--
 * @Author: your name
 * @Date: 2020-03-24 18:37:04
 * @LastEditTime: 2020-03-24 20:24:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\src\views\detail\Detail.vue
 -->
<template>
  <div id="detail">
    <!-- 导航-->
    <detail-nav-bar/>
    <detail-swiper :top-image="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import {getDetail,Goods,Shop} from "network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages:[],
        shop:{},
        goods:{},
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
    },
    created() {
      this.iid = this.$route.params.iid,
      getDetail(this.iid).then(res => {
        // console.log(res);
        //获取顶部图片
        this.topImages = res.result.itemInfo.topImages
        // console.log(res.result.itemInfo.topImages)
        // this.shop = new Shop(res.result.shopInfo)

        this.goods = res.result.itemInfo;
        // console.log(res.result.itemInfo)
        // this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.services)
      });
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
