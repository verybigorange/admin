<template>
    <div class="login-box">
         <div class="login-item">
            <span class="login-item-title">旧密码:</span>
            <el-input type="password" v-model="oldPsd" placeholder="请输入旧密码"></el-input>
         </div>
        <div class="login-item">
            <span class="login-item-title">新密码:</span>
            <el-input type="password" v-model="newPsd" placeholder="请输入新密码"></el-input>
        </div>
        <div class="login-item" style="text-align:right">
            <el-button type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>


<script>
import changePsd from 'api/changePsd'
import md5 from 'md5'

export default {
  data() {
    return {
      oldPsd: "",
      newPsd: ""
    }
  },
  methods:{
      submit(){
          changePsd({"oldPsd":md5(this.oldPsd),"newPsd":md5(this.newPsd)});
      }
  }
};
</script>


<style scoped>
.login-box {
  width: 600px;
  /* margin: 40px auto;
  border-radius: 8px; */
  height: 300px;
  position: absolute;
  top: calc(50% - 300px);
  left: calc(50% - 300px);
}
.login-box .title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  color: #999;
}
.login-box .login-item {
  margin-bottom: 20px;
}
.login-box .login-item .login-item-title {
  margin-bottom: 10px;
  display: block;
}
</style>
