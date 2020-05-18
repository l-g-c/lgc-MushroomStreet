<template>
  <div id="home">
    <Navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </Navbar>
    <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabClick" 
      v-show="isTabFixed" ref="tabFixed">
    </TabControl>
    <BetterScroll class="better-scroll1" :click="true" :pullupload="true" :probetype="3" ref="scroll" @bsscroll="homeScroll" @pullingup="loadMore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <HomePopular></HomePopular>
      <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabClick" 
        v-show="!isTabFixed" ref="tabContent">
      </TabControl>
      <GoodsList :goods="goods[currentType].list"></GoodsList>
    </BetterScroll>   
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
  </div>
</template>

<script>
//公共组件
import Navbar from "../../components/common/nav-bar/Navbar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import BetterScroll from "../../components/common/better-scroll/BetterScroll";

//Home的子组件
import HomeSwiper from "./children-components/HomeSwiper";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import HomeRecommend from "./children-components/HomeRecommend";
import HomePopular from "./children-components/HomePopular";
import { backTopMixin } from "../../common/mixin"

export default {
  name: "Home",
  mixins:[backTopMixin],
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isTabFixed:false,
    };
  },
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsList,
    BetterScroll,
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //网络请求相关方法
    getHomeMultiData() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;  
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishpullup()
      }).catch(err => {
        this.$refs.scroll.finishpullup()
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:this.currentType = "pop";
          break;
        case 1:this.currentType = "new";
          break;
        case 2:this.currentType = "sell";
      }
      this.$refs.tabFixed.currentIndex = index;
      this.$refs.tabContent.currenIndex = index;
    },
    imageLoad(){
      this.$refs.scroll.bs.refresh()
    },
    homeScroll(position) {
      this.isTabFixed = position.y < -651;
      this.getBackTopShow(position)
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.nav-bar {
  background: hotpink;
  font-size: 16px;
  color: white;
  font-weight: bold;
}
.better-scroll1 {
  height: calc(100% - 94px);
  overflow: hidden;
}
</style>