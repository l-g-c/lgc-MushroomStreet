<template>
  <div id="app">
    <keep-alive  exclude="Detail">
      <router-view></router-view>
    </keep-alive>
      <MainTabbar></MainTabbar>
  </div>
</template>

<script>
  import MainTabbar from './components/common/tab-bar/MainTabbar'

  export default {
    name: 'App',
    components:{
      MainTabbar
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
  @import "./assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>
