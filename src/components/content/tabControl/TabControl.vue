<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      @click="activeClick(index)"
      :class="{active:index == currentIndex}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {type: Array}
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index;
      this.$emit('tabclick',index);     
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background: white;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px 10px;
}
.active {
  color: hotpink;
}
.active span {
  border-bottom: 3px solid hotpink;
}
</style>