<template>
  <div class="category">
    <NavBar class="nav-bar">
      <div slot="center">商品分类</div>
    </NavBar>
    <Categoryleft :title="title" @iidClick="iidClick" class="left"></Categoryleft>
    <div class="right">
      <BetterScroll
        class="better-scroll1"
        :click="true"
        :pullupload="true"
        :probetype="3"
        ref="scroll"
        @bsscroll="homeScroll"
        @pullingup="loadMore"
      >
        <Categoryright :rightgoods="rightgoods"></Categoryright>
        <TabControl
          :titles="['综合','新品','销量']"
          class="tab-control"
          @tabclick="tabClick"
          v-show="!isTabFixed"
          ref="tabContent"
        ></TabControl>
        <GoodsList :goods="goods[currentType].list"></GoodsList>
      </BetterScroll>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/nav-bar/Navbar";
import Categoryleft from "./chidren-components/Categoryleft";
import Categoryright from "./chidren-components/Categoryright";
import BetterScroll from "../../components/common/better-scroll/BetterScroll";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

import { getCategory, getCategoryData } from "../../network/category";
import { getHomeGoods } from "../../network/home";

export default {
  name: "Category",
  data() {
    return {
      title: [],
      rightgoods: [],
      iid: 3627,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isTabFixed: false,
    };
  },
  components: {
    NavBar,
    Categoryleft,
    Categoryright,
    BetterScroll,
    TabControl,
    GoodsList
  },
  created() {
    this.getCategory();
    this.getCategoryData(this.iid);
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        this.title = res.data.category.list;
        // console.log(this.titles);
      });
    },
    getCategoryData(iid) {
      getCategoryData(iid).then(res => {
        this.rightgoods = res.data.list;
        console.log(this.rightgoods);
      });
    },
    iidClick(index) {
      //左侧分类的点击事件
      //点击获取对应的iid
      this.iid = index;
      console.log(this.iid);
      this.getCategoryData(this.iid);
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishpullup();
        })
        .catch(err => {
          this.$refs.scroll.finishpullup();
        });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
    imageLoad(){
      this.$refs.scroll.bs.refresh()
    },
    homeScroll(position) {
      this.isTabFixed = position.y < -651;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background: hotpink;
  color: white;
  position: fixed;
  top:0
}
.category {
  width: 100%;
  margin-top: 44px; 
}
.left{
  width: 25%;
}
.right{
  height: 100vh;
  width: 75%;
}
.better-scroll1 {
  height: calc(100% - 89px); 
}

</style>