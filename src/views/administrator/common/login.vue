<template>
  <div class="login-box">
      <p class="title">欢迎来到何笑勤网站后台管理系统</p>
      <div class="login-item">
        <span class="login-item-title">账号:</span>
      <el-input type="text" v-model="username"></el-input>
      </div>
     <div class="login-item">
      <span class="login-item-title">密码:</span>
      <el-input type="password" v-model="password"></el-input>
     </div>
     <div class="login-item" style="text-align:right">
         <el-button type="primary" @click="submit">登录</el-button>
     </div>
  </div>
</template>

<script>
import loginHttp from 'api/loginhttp.js'
import md5 from 'md5'

export default {
  data(){
    return {
      username:'',
      password:'',
    }
  },
  methods:{
    submit(){
      loginHttp({'username':md5(this.username),'password':md5(this.password)});
    }
  }
};
</script>

<style>
.login-box {
  width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  height: 300px;
  position: fixed;
  top: calc(50% - 300px);
  left: calc(50% - 300px);
}
.login-box .title {
  text-align: center;
  margin-bottom: 40px;
  font-size:36px;
  color: #999;
}
.login-box .login-item {
  margin-bottom: 20px;
}
.login-box .login-item .login-item-title{
    margin-bottom: 10px;
    display: block;
}
</style>

