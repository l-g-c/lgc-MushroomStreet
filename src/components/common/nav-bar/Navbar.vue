<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>  
  </div>
</template>

<script>
export default {
  name:'Navbar'
}
</script>

<style scoped>
  .nav-bar{
    width:100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    position: sticky;
    top: 0;  
    z-index: 10; 
  }
  .nav-bar .left,.right{
    width: 60px;
  }
  .nav-bar .center{
    flex: 1;   
  }
</style>