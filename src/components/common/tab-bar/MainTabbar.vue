<template>
  <Tabbar>
    <TabbarItem path="/home" activeColor="hotpink">
      <div class="fa fa-home" slot="tab-icon"></div>
      <div class="fa fa-home" slot="tab-icon-active"></div>
      <div slot="tab-text">首页</div>
    </TabbarItem>
    <TabbarItem path="/category" activeColor="hotpink">
      <div class="fa fa-th-large" slot="tab-icon"></div>
      <div class="fa fa-th-large" slot="tab-icon-active"></div>
      <div slot="tab-text">分类</div>
    </TabbarItem>
    <TabbarItem path="/cart" activeColor="hotpink">
      <div class="fa fa-shopping-cart" slot="tab-icon"></div>
      <div class="fa fa-shopping-cart" slot="tab-icon-active"></div>
      <div slot="tab-text">购物车</div>
    </TabbarItem>
    <TabbarItem path="/profile" activeColor="hotpink">
      <div class="fa fa-user" slot="tab-icon"></div>
      <div class="fa fa-user" slot="tab-icon-active"></div>
      <div slot="tab-text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from './Tabbar'
import TabbarItem from './Tabbar-item'
export default {
  name:"MainTabbar",
   components:{
      Tabbar,
      TabbarItem
    }
}
</script>

<style>

</style>