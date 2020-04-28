<template>
  <div>
    <Navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </Navbar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommend="recommend"></HomeRecommend>
    <HomePopular></HomePopular>
    <TabControl :titles="['流行','新款','精选']" class="tab-control"></TabControl>
      <ul>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
        <li>lgc</li>
      </ul>
  </div>
</template>

<script>
//公共组件
import Navbar from "../../components/common/nav-bar/Navbar";
import TabControl from "../../components/content/tabControl/TabControl"

//Home的子组件
import HomeSwiper from "./children-components/HomeSwiper";
import {getHomeMultidata} from "../../network/home";
import HomeRecommend from "./children-components/HomeRecommend";
import HomePopular from "./children-components/HomePopular"

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommend:[]
    };
  },
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl
  },
  created() {
    this.getHomeMultiData();
  },
  methods: {
    //网络请求相关方法
    getHomeMultiData() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background: hotpink;
  font-size: 18px;
  color: white;
  font-weight: bold;
}
.tab-control{
  position: sticky;
  top:44px
}
</style>