<template>
  <div id="home">
    <!--头部-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
<!--    轮播图-->
    <home-swiper :banner="banner"/>
    <!--推荐-->
    <recommend-view :recommend="recommend"/>
    <!--本周流行-->
    <home-feature-view/>
    <!--内容精选导航-->
    <tab-control class="tab-control" :titles="titles"></tab-control>
    <!--内容精选-->
    <goods-list :goods="goods.pop.list"></goods-list>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import HomeFeatureView from "./childComps/HomeFeatureView";

  import {getHomeMultidata , getHomeGoods} from "../../network/home";   //default才能去掉大括号


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      HomeFeatureView,
      TabControl,
      GoodsList,
    },
    data(){
      return{
        banner:[],
        dKeyword:[],
        keywords:[],
        recommend:[],
        titles: ['流行','新品','精选'],
        goods:{
          pop:{
            page:0,
            list:[]
          },
          new:{
            page:0,
            list:[]
          },
          sell:{
            page:0,
            list:[]
          },
        }
      }
    },
    created() {
      //多个请求
      this.getHomeMultidata();

      //商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{

      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banner = res.data.banner.list;
          this.dKeyword =res.data.dKeyword.list;
          this.keywords = res.data.keywords.list;
          this.recommend = res.data.recommend.list;
        });
      },

      getHomeGoods(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
        });
      }



    }



  }
</script>

<style scoped>

  #home{
    padding-top: 44px;
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

  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
