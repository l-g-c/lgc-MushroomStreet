<template>
  <div class="profile">
    <NavBar class="nav-bar">
      <div slot="center">商城</div>
    </NavBar>
    <div class="profile-top">  
      <div class="fa fa-user-circle fa-4x left"></div> 
      <div class="right">></div> 
      <div class="user-center">
        <p><a href="">登录</a>/<a href="">注册</a></p>     
        <div class="fa fa-mobile fa-2x"></div><span>暂无绑定手机号</span> 
      </div>    
    </div>
    <div class="profile-center">
      <ul>
        <li>
          <p>0.00 <span>元</span></p>
          <p>我的余额</p>
        </li>
        <li>
          <p>0 <span>个</span></p>
          <p>我的优惠</p>
        </li>
        <li>
          <p>0 <span>分</span></p>
          <p>我的积分</p>
        </li>
      </ul>
    </div>
    <div class="profile-bottom">
      <ul>
        <li><span class="fa fa-envelope"></span>我的消息</li>
        <li><span class="fa fa-building"></span>积分商城</li>
        <li><span class="fa fa-credit-card"></span>会员卡</li>
        <li><span class="fa fa-shopping-cart"></span>我的购物车</li>
        <li><span class="fa fa-shopping-bag"></span>下载购物APP</li> 
      </ul>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/common/nav-bar/Navbar";

export default {
  name:"Profile",
  components:{
    NavBar
  }
}
</script>

<style>
.nav-bar {
  background: hotpink;
  color: white;
  border-bottom:2px solid #ffffff ;
}
.profile-top{
  background: hotpink;
  color: white;
  padding: 30px;
}
.profile-top span{
  font-size: 13px;
  margin-left: 5px;
}
a{
  color:white;
  text-decoration: none;
}
.user-center{
  margin: 10px 0  0 80px;
}
.right{
  line-height: 55px;
}
.profile-center ul{
  list-style: none;
  display: flex;
  text-align: center;
  padding: 15px 0 20px 0;
  border-bottom:10px solid #dddddd ;
}
.profile-center li{
  flex: 1; 
  border-right: 1px solid #dddddd;
}
.profile-center li:last-child{
  border-right: none;
}
.profile-center li p:first-child{
  color: hotpink;
  font-size: 20px;
  font-weight: bold;
}
.profile-center li p:last-child{
  font-size: 12px;
  margin-top: 10px;
}
.profile-center li span{
  font-weight: normal;
  color: black;
  font-size: 13px;
}
.profile-bottom ul li{
  list-style: none;
  margin: 10px;
  padding: 10px 0 10px 20px;
  font-size: 13px;
  border-bottom:1px solid #dddddd ;
  margin: 0;
}
.profile-bottom ul li:last-child{
  border-bottom: none;
}
.profile-bottom ul li:nth-child(3){
  border-bottom: 10px solid #dddddd;
}
.profile-bottom ul li span{
  margin-right: 10px;
  color: hotpink;
}
</style>