<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data(){
    return {
      imgLenght:0,
      num:0
    }
  },
  props: {
    detailInfo:Object
  },
  methods: {
    imageLoad(){
      this.num++;
      if(this.num === this.imgLenght){
        this.$emit('imgload')
      }     
    }
  },
  watch:{
    detailInfo(){
      this.imgLenght = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>

<style scoped>
  .info-list img{
    width: 100%;
  }
  .start{
    border: 1px solid #000;
    width: 25%;
    float: left;
  }
  .end{
    border: 1px solid #000;  
    width: 25%;
    float: right;
  }
  .desc{
    font-size: 14px;
    padding: 20px;
  }
  .info-key{
    margin: 10px;
    margin-left:20px;
    font-size: 15px;
  }
</style>