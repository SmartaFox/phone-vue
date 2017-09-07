<template>
  <div class="button">
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2"><el-badge is-dot class="item">收藏夹</el-badge></el-menu-item>
  <el-menu-item index="3">个人分享</el-menu-item>
  <el-menu-item index="4">我的管理</el-menu-item>
</el-menu>

  </div>
</template>

<script>
export default {
  name: 'button',
  data(){
    return{
      
    }
  }
}
</script>

<style >
.el-menu-demo{
  border-top: 1px solid #000;
  background: #7b92af;
}
li.el-menu-item{
  width:25%;
  font-size: 16px;
  
}
.el-badge__content{
  margin-top: 15px;
  margin-right: -5px;
  background: #fff;
  box-shadow: 0 0 5px #fff;
}
.el-badge__content:after{
  content: '';
  width: 8px;
  height: 8px;
  display: inline-block;
  background: #333;
  border-radius: 50%;
  margin-bottom: 5px;
}
</style>
