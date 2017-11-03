<template>
  <div class="layout">
      <header class="header">
          <span class="title pull-left"><i class="el-icon-menu" style="margin-right:10px;"></i>后台管理系统</span>
          <div class="pull-right">
               <el-dropdown>
                <span class="el-dropdown-link">
                  管理员<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >修改密码</el-dropdown-item>
                  <el-dropdown-item >退出系统</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </div>
      </header>
      <div class="main">
        <aside>
          <slider></slider>
        </aside>
        <section class="main-content">
            <div style="padding:20px 50px; ">
                 <router-view></router-view>
            </div>
        </section>
      </div>
     
  </div>
</template>

<script>
import slider from "views/common/slider";

export default {
  components: {
    slider
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  background: #409eff;
  color: #fff;
  padding: 0 50px;
}

.header .title {
  font-size: 18px;
}

.layout {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 100%;
}

.main {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  flex: 1;
}

.aside {
  width: 200px;
}

.main-content {
  flex: 1;
}

.el-dropdown{
  color: #fff;
  font-size: 16px;
}
</style>
