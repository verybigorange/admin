<template>
    <div class="detail">
        <h3>作品详情</h3>
        <div class="detail-pic">
             <img :src="require('assets/img/3.jpg')" alt="">
             <p class="title ">22222<span class="view-count">浏览量:111</span></p>
             
        </div>
        <hr/>
       <el-table
    :data="tableData"
    style="width: 100%;"
    max-height="350">
    <el-table-column
      prop="comment"
      label="评论"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          删除该评论
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="block" style="margin:20px 0;">
  <el-pagination
    class="pull-right"
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[
                {
                    comment:"啊啊啊啊啊啊啊啊啊啊啊啊"},
                 {
                    comment:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
                }, {
                    comment:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
                },
            ]
        }
    }
};
</script>

<style lang="less" scoped>
.detail-pic {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  img {
    max-height: 300px;
    display: block;
  }
  .title{
      text-align: center;
      width: 100%;
      font-size: 18px;
      .view-count{
          font-size: 14px;
          margin-left: 20px;
          color:#999;
      }
  }
}


.comment{

}
</style>


