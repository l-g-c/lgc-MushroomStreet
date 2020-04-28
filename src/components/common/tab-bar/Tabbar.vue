<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tab-bar{
    position: fixed;
    width: 100%;
    left: 0px;
    bottom: 0px;
    display: flex;
    background: #eee;
    height: 45px;
    font-size: 14px;
  }

</style>
