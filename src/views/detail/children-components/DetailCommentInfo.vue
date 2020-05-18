<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-top">
      <div class="top-title">用户评价</div>
      <div class="top-more">更多>></div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span>{{commentInfo.created | showData}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
    </div>
  </div>
</template>

<script>
import {dateFormat} from "../../../common/data"

export default {
  name:"DetailCommentInfo",
  props:{
    commentInfo:Object
  },
  filters:{
     showData(value) {
       return dateFormat(new Date(value*1000),'yyyy-MM-dd')
     }
  }
}
</script>

<style scoped>
.comment-top{
  width:100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  margin-top: 20px;
  color:white;
  background: hotpink;
}
.top-title{
  float: left;
  margin-left: 10px;
}
.top-more{
  float: right;
  margin-right: 10px;
}
.info-user {
  margin: 10px;
}
.info-user img{
  width: 60px;
  height: 60px;
  border-radius: 100px;
}
.info-user span{
  position: relative;
  top:-25px;
  left: 15px;
}
.info-detail p{
  font-size: 14px;
  padding: 12px;
}
.info-other span:first-child{
  color: brown;
  margin: 15px;
  font-size: 13px;
}
.info-other span:last-child{
  padding: 10px;
  font-size: 12px;
}
.info-imgs img{
  width: 100%;
  padding: 10px;
}
</style>