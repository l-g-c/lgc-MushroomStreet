<template>
  <div class="recommend-info">
    <div class="info-head">热门推荐</div>
    <div class="goods">
      <GoodsListItem v-for="(item,index) in recommendInfo" :key="index" :goodsitem="item"></GoodsListItem>
    </div>
  </div>
</template>

<script>
import GoodsListItem from '../../../components/content/goods/GoodsListItem'

export default {
  name:'DetailRecommendInfo',
  props:{
    recommendInfo:Array
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  .recommend-info{
    padding: 5px;
  }
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:5px;
  } 
  .info-head{
    font-size: 16px;
    line-height-step: 40px;
    padding:20px 0 5px 10px;
    color:#000;
  }
</style>