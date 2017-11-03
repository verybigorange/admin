<template>
      <el-row class="tac" style="width:200px;">
            <el-col :span="24" >
                <el-menu
                  class="el-menu-vertical-demo"
                  router=true
                  >
                  
                  <el-menu-item index="home">
                    <!-- <i class="el-icon-setting"></i> -->
                    <span slot="title">首页管理</span>
                  </el-menu-item>

                  <el-menu-item index="news">
                    <!-- <i class="el-icon-menu"></i> -->
                    <span slot="title">资讯管理</span>
                  </el-menu-item>

                  <el-submenu index="">
                    <template slot="title">
                      <!-- <i class="el-icon-location"></i> -->
                      <span>作品管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="shanshui" :route="{path:'works',query: { type: '123' }}">山水画</el-menu-item>
                      <el-menu-item index="shuimo" :route="{path:'works',query: { type: '456' }}">水墨画</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
           </el-col>
       </el-row>
</template>

<script>
export default {
  methods:{
    
  }
};
</script>

<style scoped>

</style>


