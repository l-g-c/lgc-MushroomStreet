<template>
  <div>
    <Swiper class="swiper-image">
      <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper,SwiperItem } from "../../../components/common/swiper/index"

export default {
  name:"DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:Array
  }
}
</script>

<style scoped>
  .swiper-image{
    height: 300px;
    overflow: hidden;
  }
</style>