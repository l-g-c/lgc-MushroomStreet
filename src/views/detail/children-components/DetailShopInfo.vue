<template>
  <div class="shop-info">
    <!-- 店铺名 -->
    <div class="shop-top">
      <img :src="shop.shopLogo" alt />
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <!-- 店铺详情 -->
    <div class="shop-middle">
      <!-- 左边 -->
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.cSells | sellsFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-all">
          <div class="all-count">{{shop.cGoods}}</div>
          <div class="all-text">全部宝贝</div>
        </div>       
      </div>
      <!-- 右边 -->
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'store-better' : item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more' : item.isBetter}">
              <span>{{item.isBetter ?'高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shoop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data(){
    return {
      isBetter:true
    }
  },
  props: {
    shop: {
      type: Object
    }
  },
  filters: {
    sellsFilter(value) {
      if (value < 10000) {
        return value;
      }
      return (value/10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
  .shop-top img{
    width: 60px;
    height: 60px;
    margin-left: 30px;
    border-radius:50%;
    border: 1px solid #ccc;
  }
  .shop-title{
    display:block;
    margin-left:100px;
    margin-top: -40px;
  }
  .shop-middle{
    display: flex;
    margin-top: 50px;
    text-align: center;
  }
  .shop-middle-left{
    flex: 1;
    display: flex;
    margin-left: 20px;
  }
  .info-sells{
    flex:1
  }
  .sells-count{
    margin-top: 6px;
    font-size: 20px;
  }
  .sells-text{
    margin-top: 15px;
    font-size: 14px;
  }
  .info-all{
    flex:1
  }
  .all-count{
    margin-top: 6px;
    font-size: 20px;
  }
  .all-text{
    margin-top: 15px;
    font-size: 14px;
  }
  .shop-middle-right{
    flex: 1;
    margin-left: 60px;
    font-size: 15px;
  }
  .shoop-bottom{   
    margin: 50px 0 50px 130px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius:15px;
    text-align: center;
    background: #cccccc; 
  }
</style>