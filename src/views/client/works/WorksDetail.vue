<template>
    <div class="center">
        <div class="works-detail-wrapper">
            <div class="works-detail-image">
                <img style="max-height:450px;cursor:pointer" :src="pic_url" alt="作品图片" @click="currentBigPic = true" />
            </div>
            <h5>《{{work_title}}》</h5>
            <p class="works-label clearfix">
                <span class="view-num pull-left">浏览{{view_count}}次</span>
                <!-- <span class="comment-num pull-right"><i class="el-icon-edit-outline"></i>217</span> -->
            </p>
            <el-input type="textarea" v-model="txt" placeholder="120个字以内" :maxlength=120 :autosize="{ minRows: 2, maxRows: 4}"></el-input>
            <span class="comment-btn" @click="commit">发表</span>
            <div style="clear:both;"></div>
            <div class="works-comments">
                <div class="comment-item" v-for="(item,index) in tableData" :key="index">
                    <p class="comment-person">游客评论</p>
                    <p class="comment-date">{{convertUTCTimeToLocalTime(item.comment_date)}}</p>
                    <p class="comment-content">{{item.comment}}</p>
                </div>
                <div class="page-wrapper works">
                    <el-pagination
                        :background=true
                        layout="prev, pager, next"
                        :page-size="limit"
                        @current-change = 'pageChange'
                        :total="total"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class='big-pic' v-show='currentBigPic' @click='currentBigPic=false'>
            <el-slider v-model="value" :show-tooltip="false"></el-slider>
            <img :src="pic_url" alt="图片未加载成功">
        </div>
    </div>
</template>

<script>
import { comment_all,comment_add } from 'api/comment';
import { work_select_id } from 'api/works';
import { convertUTCTimeToLocalTime } from 'utils/index.js' 

export default {
  name: "WorksContent",
  data() {
    return {
      tableData: [],
      work_id:0, //作品id
      limit:5,  //每页显示数量
      total:0,  //总数
      currentPage:1, //当前页,
      pic_url:'',
      view_count:0,
      work_title:'',
      currentBigPic:false,
      txt:"", //评论内容
      convertUTCTimeToLocalTime:convertUTCTimeToLocalTime
    };
  },
    async mounted(){
    //获取作品id
    this.work_id = this.$route.query.id*1;

    //回显
    let res = await work_select_id({id:this.work_id});
    this.pic_url = res.pic_url;
    this.work_title = res.work_title;
    this.view_count = res.view_count;

    // 首次请求数据
    let { count,list } = await comment_all({limit:this.limit,currentPage:this.currentPage,work_id:this.work_id});
    this.total = count;
    this.tableData = list;
  },
  methods:{
    // 切换分页
    async pageChange(size){
      this.currentPage = size;
      let { list } = await comment_all({limit:this.limit,currentPage:this.currentPage,work_id:this.work_id});
      this.tableData = list;
    },
    commit(){
        if(!this.txt) return
        let res = comment_add({id:this.work_id,comment:this.txt}).then(res=>{
            if(res != '0'){
                this.total ++;
                this.tableData.unshift(res);
                this.txt = '';
            }
        })
       
    }
  }
}
</script>

<style lang="less" scoped>
    .center {
        width: 1024px;
        margin: 0 auto;
        height: 100%;
    }
    h3 {
        color: #b23e2f;
        font-size: 30px;
        border-left: 5px solid #b23e2f;
        padding-left: 45px;
        margin-left: -45px;
        margin-top: 50px;
        margin-bottom: 15px;
    }
    h4 {
        color: #989898;
        font-size: 23px;
        margin-top: 15px;
        margin-bottom: 40px;
    }
    h5 {
        font-size: 23px;
        text-align: left;
        color: #b23e2f;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .works-detail-wrapper {
        width: 800px;
        margin: 0 auto;
    }
    
    .view-num,.comment-num {
        color: #666;
        margin: 10px 20px;
    }

    .comment-text {
        border: 1px solid #999;
        color: #999;
        padding: 12px 18px;
        font-size: 20px;
    }

    .comment-person {
        color: #4c4c4c;
        font-size: 22px;
        margin-bottom: 10px;
        &::before {
            content: '';
            display: inline-block;
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background-color: #999;
            position: relative;
            vertical-align: middle;
            margin-right: 5px;
            top: 10px;
        }
    }

    .comment-date {
        color: #999;
        font-size: 16px;
        margin-left: 60px;
        margin-top: -16px;
    }

    .comment-content {
        margin-left: 60px;
        color: #4c4c4c;
        font-size: 18px;
        word-break: break-all;
    }

    .page-wrapper {
        text-align: center;
        margin: 30px 0 80px;
    }
    
    .works-detail-image{
        display: flex;
        justify-content: center;
    }
    .comment-btn{
        width: 90px;
        height: 30px;
        line-height: 30px;
        background: #b23e2f;
        color: #fff;
        display: block;
        text-align: center;
        letter-spacing: 5px;
        margin-top:20px; 
        float: right;
        cursor: pointer;
    }
    
    .page-wrapper {
        text-align: center;
        margin: 30px 0 80px;
    }
</style>

<style>
    div.page-wrapper .el-pagination * {
        background-color: transparent;
    }
    div.page-wrapper .el-pager > .number.active {
        background-color: #b23e2f;
        color: #fff;
    }
</style>