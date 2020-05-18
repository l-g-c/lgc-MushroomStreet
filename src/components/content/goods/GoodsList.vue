<template>
  <div class="goods">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsitem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }

    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:5px;
  }
</style>