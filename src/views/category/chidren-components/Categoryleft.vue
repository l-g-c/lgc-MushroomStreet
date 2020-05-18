<template>
  <div class="category-left">
    <BetterScroll class="better-scroll" :click="true">
      <ul>
        <li v-for="(item,index) in title" :key="index" @click="activeClick(index)" 
            :class="{active:index == currentIndex}">{{item.title}}
        </li>
      </ul>
    </BetterScroll>
  </div>
</template>

<script>
import BetterScroll from "../../../components/common/better-scroll/BetterScroll";

export default {
  name: "Categoryleft",
  components:{
    BetterScroll
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props:{
    title: {type: Array},
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index; 
      console.log(index)
      //给父组件发射点击事件
      this.$emit('iidClick',this.title[index].maitKey)   
    }
  }
};
</script>

<style scoped>
li{
  list-style: none;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
}
.active {
  color: hotpink;
  border-left:3px solid hotpink;
  background:white
}
.category-left{
  position: fixed;
  background: #EEEEEE;
}
.better-scroll{
  height: calc(100% - 89px);
}
</style>