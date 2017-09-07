<template>
  <div class="login">
    <img src="../assets/bg.png">
    <div class='login-input'>
      <el-input v-model="phoneNum" placeholder="请输入手机号"></el-input>
       <el-input v-model="cans" placeholder="请输入验证码"></el-input>
       <el-button>获取验证码</el-button>
       <el-button type="primary">登录</el-button>
     </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      phoneNum:'',
      cans:'',
    }
  }
}
</script>

<style>
.login-input{
  width: 70%;
  margin: 0 auto;
  margin-top: 30%;
}
.el-input{
   margin-bottom: 20%;
}
.el-input__inner{
  height: 46px;
}
.el-input:nth-child(2){
  width: 60%;
  float:left;
}
.el-button{
  height: 46px;
  float: right;
}
.el-button--primary{
  width: 100%;
  border-radius: 10px;
}
img{
  width: 70%;
  margin-top: 20%;
}
</style>
