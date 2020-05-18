<template>
  <div class="list-item">
    <div class="item-button">
      <CheckedButton :ischeck="item.check" @checkClick="changeCheck"></CheckedButton>
    </div>
    <div class="item-img">
      <img :src="item.img" alt />
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述:{{item.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">¥ {{item.price}}</div>
        <div class="item-count right">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedButton from "./CheckedButton";
export default {
  name: "CartListitem",
  components: {
    CheckedButton
  },
  props: {
    item: Object
  },
  methods:{
    changeCheck(){
      // this.item.check = !this.item.check
      this.$store.commit('changeCheck',this.item)
    }
  }
};
</script>

<style scoped>
.list-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-button {
  position: relative;
  width: 15%;
  top: 45px;
  left: 0px;
}
.item-img img {
  width: 80px;
  height: 120px;
  border-radius: 5px;
  margin-left: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
}
.item-title,.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 5px;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
.item-bottom {
  margin-top: 35px;
}
.item-bottom .item-price {
  color: orangered;
}
</style>