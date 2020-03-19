<template>
  <div class="goods-item">
      <img :src="goodsItem.show.img">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">
          <img src="../../../assets/images/common/collect.svg">
          {{goodsItem.cfav}}</span>
      </div>
  </div>

</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
          goodsItem:{
            type:Object,
            default(){
              return Object;
            }
          }
        }
    }
</script>

<style scoped>
  .goods-item{
    width: 50%;
    padding:3px;
    /*box-sizing: border-box;*/
    /*flex: 0 0 50%;*/
  }

  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }

  .goods-info{
    font-size: 12px;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    color: var(--color-high-text);
  }
  .collect{
    padding-left: 5px;
  }
  .collect img{
    width: 14px;
    height: 14px;
  }
  /*.goods-info .collect::before{*/
  /*  position: absolute;*/
  /*  left: 97px;*/
  /*  !*position: relative;*!*/
  /*  content: '';*/
  /*  z-index: 1000;*/
  /*  background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;*/
  /*  width: 14px;*/
  /*  height: 14px;*/
  /*}*/


</style>
