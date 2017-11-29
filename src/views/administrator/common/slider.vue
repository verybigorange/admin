<template>
      <el-row class="tac" style="width:200px;">
            <el-col :span="24" >
                <el-menu
                  class="el-menu-vertical-demo"
                  :router=true
                  >
                  <el-menu-item index="news">
                    <!-- <i class="el-icon-menu"></i> -->
                    <span slot="title">资讯管理</span>
                  </el-menu-item>
                   <el-menu-item index="photo">
                    <!-- <i class="el-icon-menu"></i> -->
                    <span slot="title">相册管理</span>
                  </el-menu-item>
                  <el-submenu index="">
                    <template slot="title">
                      <span>作品管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="quanbu" :route="{path:'works',query: { type: 'all' }}">全部</el-menu-item>
                      <el-menu-item index="shanshui" :route="{path:'works',query: { type: 'shanshui' }}">山水</el-menu-item>
                      <el-menu-item index="renwu" :route="{path:'works',query: { type: 'person' }}">人物</el-menu-item>
                      <el-menu-item index="huaniao" :route="{path:'works',query: { type: 'flower' }}">花鸟</el-menu-item>
                      <el-menu-item index="linmo" :route="{path:'works',query: { type: 'linmo' }}">临摹</el-menu-item>
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


