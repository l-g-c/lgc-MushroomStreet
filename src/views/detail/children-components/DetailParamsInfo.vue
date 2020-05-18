<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(item,index) in paramsInfo.size" :key="index" class="info-size">
      <tr v-for="(tr,index1) in item" :key="index1">
        <td v-for="(td,index2) in tr" :key="index2">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item,index) in paramsInfo.info" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.img.length !== 0">
      <img :src="paramsInfo.img" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: Object
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  margin: 10px;
  width: 95%;
}
tr td {
  border: 1px silver solid;
  font-size: 14px;
  padding: 5px;
}
.info-param-key{
  font-size: 14px;
  padding: 5px 5px;
}
.info-param-value{
  color: red;
  font-size: 14px;
}
</style>