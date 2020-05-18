<template>
  <div class="bottom-bar">
    <div class="all-checked left">
      <CheckedButton :ischeck="ischeck" @checkClick="allCheck"></CheckedButton>
    </div>
    <div class="left bottom-info">
      <span class="all-ch left">全选</span>
      <span class="all-price">合计:¥{{allPrice}}</span>
      <span class="right buy-end">去结算({{carCount}})</span>
    </div>
  </div>
</template>

<script>
import CheckedButton from "./CheckedButton";
import {mapGetters} from "vuex";

export default {
  name:"CartBottomBar",
  components: {
    CheckedButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    allPrice() {
      return this.cartList.filter(item => item.check).reduce((preValue,item) => {
        return preValue + item.count*item.price
      },0).toFixed(2)
    },
    carCount() {
      return this.cartList.filter(item => item.check).reduce((preValue,item) => {
        return preValue + item.count
      },0)
    },
    ischeck(){
      //every 所有为真才是真,有一个假就是假
      return this.cartList.every(item => item.check)
    }
  },
  methods:{
    allCheck(){
      //1.判断是否有未选中按钮
      let boo = this.cartList.every(item => item.check)
      //2.有未被选中的进行全选操作,没有未被选中的进行全部取消
      if(boo){
        this.$store.commit('clearCheck')
      }else{
        this.$store.commit('allCheck')
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 44px;
  background: #ddd;
  position: fixed;
  bottom: 45px;
  left: 0;
  text-align: right;
}
.all-checked {
  position: relative;
  width: 10%;
  padding-left: 10px;
  top: 12px;
}
.bottom-info {
  width: 90%;
}
.right {
  float: right;
  text-align: center;
}
span {
  line-height: 44px;
}
.all-ch {
  margin-right: 20px;
}
.all-price {
  font-size: 18px;
  margin-right: 10px;
}
.buy-end {
  background: orangered;
  width: 100px;
  height: 44px;
  color: white;
}
</style>