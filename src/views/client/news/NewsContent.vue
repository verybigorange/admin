<template>
    <div class="container">
        <div class="center">
            <!-- <ul>
                <li class="news-type active">全部</li>
                <li class="news-type">业界新闻</li>
            </ul> -->
            <div class="news-wrapper">
                <div class="news-item clearfix" v-for="(item,index) in tableData" :key="index" @click="$router.push('/news/detail?news_id='+item.news_id)" style="cursor:pointer">
                    <div class="news-banner pull-left">
                        <img :src="item.pic_url" alt="新闻照片">
                    </div>
                    <div class="news-content pull-right">
                        <h5 class="news-title">{{item.news_title}}</h5>
                        <p class="news-date">{{item.news_date}}</p>
                        <p>
                          {{item.news_plainText.substr(0,200)+'...'}}
                        </p>
                    </div>
                </div>
                <div class="page-wrapper news">
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
    </div>
</template>

<script>
import { news_select } from 'api/news';
import { convertUTCTimeToLocalTime } from 'utils/index'

export default {
  name: "NewsContent",
  async mounted(){
    // 首次请求数据
    let { count,list } = await news_select({limit:this.limit,currentPage:this.currentPage});
    this.total = count;
    this.tableData = list;
  },
  data(){
    return {
      index:0,//表格索引
      tableData: [], //表格数据
      limit:4,  //每页显示数量
      total:0,  //总数
      currentPage:1, //当前页,
      convertUTCTimeToLocalTime:convertUTCTimeToLocalTime
    }
  },
  methods:{
       // 切换分页
    async pageChange(size){
      this.currentPage = size;
      let { list } = await news_select({limit:this.limit,currentPage:this.currentPage});
      this.tableData = list;
    },
  }
}
</script>

<style lang="less" scoped>
    .center {
        width: 1024px;
        margin: 0 auto;
        height: 100%;
    }
    p {
        color: #666;
        font-size: 16px;
        line-height: 22px;
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
        font-size: 18px;
        color: #b23e2f;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    ul {
        list-style: none;
        font-size: 18px;
        overflow: hidden;
        padding: 0;
        &>li {
            float: left;
            padding: 0 15px;
            height: 30px;
            line-height: 30px;
            border: solid 1px #b23e2f;
            color: #b23e2f;
            text-align: center;
            &+li {
                margin-left: 15px;
            }
            &.active {
                background-color: #b23e2f;
                color: #fff;
            }
        }
    }
    .news-banner {
        width: 400px;
        height: 256px;
        overflow: hidden;
        &>img {
            height: 100%;
        }
    }
    .news-item {
        margin: 25px 0;
    }
    .news-content {
        width: 595px;
    }
    .news-date {
        color: #989898;
        font-size: 14px;
        text-align: left;
        margin-top: 10px;
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