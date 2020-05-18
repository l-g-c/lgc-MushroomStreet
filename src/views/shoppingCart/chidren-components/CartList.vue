<template>
  <div class="cart-list">
    <CartListitem v-for="(item,index) in cartList" :key="index" :item="item"></CartListitem>
  </div>
</template>

<script>
import CartListitem from "./CartListitem";
import{mapGetters} from 'vuex'

export default {
  name: "CartList",
  components: {
    CartListitem
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  }
};
</script>

<style>
</style>