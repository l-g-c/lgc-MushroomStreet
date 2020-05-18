<template>
  <div id="detail">
    <!-- 创建顶部导航 -->
    <DetailNavBar @titleClick="titleClick" ref="nav" />
    <BetterScroll class="content" ref="scroll" @bsscroll="bScroll" :probetype="3">
      <!-- 创建轮播图 -->
      <DetailSwiper :top-images="topImages" />
      <!-- 商品基本信息 -->
      <DetailBaseInfo :goods="goodsInfo" />
      <!-- 商家基本信息 -->
      <DetailShopInfo :shop="shop" />
      <!-- 商品详情展示 -->
      <DetailGoodsInfo :detailInfo="detailInfo" @imgload="imageLoad" />
      <!-- 商品参数展示 -->
      <DetailParamsInfo :paramsInfo="paramsInfo" ref="goods" />
      <!-- 商品评论展示 -->
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment" />
      <!-- 热门推荐 -->
      <DetailRecommendInfo :recommendInfo="recommendInfo" ref="recommend" />
    </BetterScroll>
    <!-- 底部导航 -->
    <DetailBottomBar @addCart="addCart" />
     <!-- 返回顶部 -->
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
  </div>
</template>

<script>
import BetterScroll from "../../components/common/better-scroll/BetterScroll";

import {
  getDetailData,
  GoodsInfo,
  GoodsParams,
  getRecommendData
} from "../../network/detail";
import DetailNavBar from "./children-components/DetailNavBar";
import DetailSwiper from "./children-components/DetailSwiper";
import DetailBaseInfo from "./children-components/DetailBaseInfo";
import DetailShopInfo from "./children-components/DetailShopInfo";
import DetailGoodsInfo from "./children-components/DetailGoodsInfo";
import DetailParamsInfo from "./children-components/DetailParamsInfo";
import DetailCommentInfo from "./children-components/DetailCommentInfo";
import DetailRecommendInfo from "./children-components/DetailRecommendInfo";
import DetailBottomBar from "./children-components/DetailBottomBar";
import { debounce } from "../../common/fangdou";
import { backTopMixin } from "../../common/mixin";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      positionY: [],
      getPositionY: null,
      currentIndex: 0
    };
  },
  mixins: [backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    BetterScroll,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  created() {
    //创建时获取数据
    this.iid = this.$route.params.id;
    console.log(this.iid);
    
    //请求详情页基本数据
    getDetailData(this.iid).then(res => {
      console.log(res);
      let data = res.result;
      //获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goodsInfo = new GoodsInfo(
        data.columns,
        data.itemInfo,
        data.shopInfo
      );
      //获取商家信息
      this.shop = data.shopInfo;
      //商品详情展示
      this.detailInfo = data.detailInfo;
      //获取商品参数
      this.paramsInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论数据
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //请求热门推荐数据
    getRecommendData().then(res => {
      this.recommendInfo = res.data.list;
    });
    this.getPositionY = debounce(() => {
      this.positionY = [];
      this.positionY.push(0);
      this.positionY.push(-this.$refs.goods.$el.offsetTop + 44);
      this.positionY.push(-this.$refs.comment.$el.offsetTop + 44);
      this.positionY.push(-this.$refs.recommend.$el.offsetTop + 44);
    }, 300);
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.bs.refresh();
      this.getPositionY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.bs.scrollTo(0, this.positionY[index], 1000);
    },
    bScroll(position) {
      // console.log(position);
      let y = position.y;
      for (let i in this.positionY) {
        if (
          this.currentIndex != i &&
          ((y <= this.positionY[+i] &&
            y > this.positionY[+i + 1] &&
            i < this.positionY.length - 1) ||
            (i == this.positionY.length - 1 && y <= this.positionY[+i]))
        ) {
          // console.log(i);
          this.$refs.nav.currentIndex = i;
          this.currentIndex = i;
        }
      }
      this.getBackTopShow(position);
    },
    addCart() {
      console.log("加入购物车");
      //获取购物车需要展示的信息
      let cartInfo = {};
      cartInfo.img = this.topImages[0];
      cartInfo.title = this.goodsInfo.title;
      cartInfo.desc = this.goodsInfo.desc;
      cartInfo.price = this.goodsInfo.highNowPrice;
      cartInfo.iid = this.iid;   
      //将商品加入到购物车
      this.$store.dispatch("addCart", cartInfo); 
    },
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 100;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 104px);
}
</style>