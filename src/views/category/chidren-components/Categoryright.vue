<template>
  <div class="cartgory-right">
    <div v-for="(item,index) in rightgoods" :key="index" class="right-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>

export default {
  name:'Categoryright',
  props:{
    rightgoods:{type: Array}
  },
}
</script>1

<style scoped>
.cartgory-right img{
  width: 70px;
  height: 70px;
}
.cartgory-right{
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
}
.right-item{
  flex:1;
  font-size: 13px;
  padding: 10px;
  text-align: center;  
}
</style>