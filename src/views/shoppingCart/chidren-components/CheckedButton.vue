<template>
  <div class="click-button" :class="{active:ischeck}" @click="checkClick">
    <img src="../../../assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
import{mapGetters} from "vuex"

export default {
  name:"CheckedButton",
  props:{
    ischeck:Boolean
  },
  methods:{
    checkClick(){
      this.$emit('checkClick')
    }
  }
};
</script>

<style scoped>
.click-button {
  width: 18px;
  height: 18px;
  border-radius:50%;
  border: 1px solid #ccc;
  cursor: pointer; 
}
.active{
  background: hotpink;
  border: 1px solid hotpink;
}
</style>