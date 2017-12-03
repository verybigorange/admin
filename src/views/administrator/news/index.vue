<template>
  <div>
     <el-button type="deflaut" class="pull-right" @click="addWork">添加新闻</el-button>
       <el-table
      :data="tableData"
      style="width: 100%;margin-top:30px;">
      <el-table-column
        prop="news_title"
        label="标题"
       >
      </el-table-column>
      <el-table-column
         prop="news_date"
         label="发布时间"
      >
      </el-table-column>
      <el-table-column
        width="250"
        prop="handle"
        label="操作"
        type="index"
        :index="index"
      >
        <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="handleDelete(scope.row.work_id,scope.row.pic_name,scope.$index)">删除</el-button>
            <el-button type="info" size="mini" @click="handleEdit(scope.row.work_id)">编辑</el-button>
            <el-button type="success" size="mini" @click="handleDetail(scope.row.work_id)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    style="margin-top:20px;"
    class="pull-right"
    layout="prev, pager, next"
    :page-size="limit"
    @current-change = 'pageChange'
    :total="total">
  </el-pagination>
  </div>
</template>

<script>
import { work_select,delete_work } from 'api/works';
import { comment_delete_all } from 'api/comment';

export default {
  mounted(){
    console.log(this.$route.params.type)
  },
  data(){
    return {
      index:0,//表格索引
      tableData: [], //表格数据
      limit:5,  //每页显示数量
      total:0,  //总数
      currentPage:1, //当前页,
    }
  },
  methods:{
     addWork(){
       this.$router.push('/admin/newsAdd');
    },
    // 切换分页
    async pageChange(size){
      this.currentPage = size;
      let { list } = await work_select({limit:this.limit,currentPage:this.currentPage});
      this.tableData = list;
    },
    // 新闻编辑
    handleEdit(id){
      this.$router.push("/admin/worksEdit?id="+id);
    },
    //新闻删除
    async handleDelete(id,pic_name,index){
      // 删除后返回新数据
      let res = await delete_work({id,pic_name});
      if(res == 1){
         this.total--;
         this.tableData.splice(index,1);
         //删除作品并删除相关所有评论
         comment_delete_all({work_id:id});
      }
    },
    //查看新闻详情
    handleDetail(id){
       this.$router.push("/admin/worksDetail?id="+id);
    },
  }
}
</script>

<style scoped>

</style>