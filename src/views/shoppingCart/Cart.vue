<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <BetterScroll class="content" :click="true">
      <CartList></CartList>
    </BetterScroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import NavBar from "../../components/common/nav-bar/Navbar";
import CartList from "./chidren-components/CartList";
import CartBottomBar from "./chidren-components/CartBottomBar";
import BetterScroll from "../../components/common/better-scroll/BetterScroll";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    BetterScroll
  },
  computed: {
    ...mapGetters(["cartLength", "CartList"])
  }
};
</script>

<style scoped>
.nav-bar {
  background: hotpink;
  color: white;
}
.cart{
  height: 100vh;
}
.content{
  height: calc(100% - 138px);
}
</style>