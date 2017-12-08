 <template>
    <div class="container">
        <div class="center">
            <h3>作品展示</h3>
            <h4>Exhibition of works</h4>
            <ul @click="handleTypeChange">
                <li v-for="(item, index) in types" class="works-type" :class="{active: type == item}" :key="index">{{item}}</li>
            </ul>
            <div class="works-content">
               <div class="works-item" v-for="(item, index) in data" :key="index">
                   <img style="width: 100%" :src="item.pic_url" alt="作品">
                   <div class="works-desc">
                      <h6>《{{item.work_title}}》</h6>
                      <p><span class="works-view"><i class="el-icon-view"></i>{{item.view_count}}</span><span class="works-edit"><i class="el-icon-edit-outline"></i>17</span></p>
                   </div>
               </div>
            </div>
            <div class="page-wrapper works">
                <el-pagination
                    background=true
                    layout="prev, pager, next"
                    :total="total"
                    :page-size="limit"
                    @@current-change = "pageChange"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { work_select } from 'api/works'
export default {
    name: "WorksContent",
    async mounted() {
         // 首次请求数据
        let { count,list } = await work_select({limit:this.limit,currentPage:this.currentPage});
        this.total = count;
        this.data = list;
    },
    data() {
        return {
            type: '全部', //作品类型
            limit:9,  //每页显示数量
            total:0,  //总数
            currentPage:1, //当前页,
            data: [], //作品数据,
            types: ['全部', '山水', '花鸟', '人物', '临摹']
        }
    },
    methods: {
        async pageChange(pageNum) {
            this.currentPage = pageNum

            let response
            if (this.type === '全部') {
                response = await work_select({limit:this.limit, currentPage:this.currentPage})
            } else {
                response = await work_select({limit:this.limit, currentPage:this.currentPage, type:this.type})
            }
            this.total = response.count;
            this.data = response.list;
        },
        handleTypeChange(e) {
            let type = e.target.textContent
            this.type = type
            this.pageChange.call(this, this.currentPage)
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
    p {
        text-indent: 2em;
        color: #666;
        font-size: 22px;
        line-height: 38px;
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
        font-size: 30px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    h6 {
        padding: 0;
        margin: 0;
        font-size: 16px;
        margin-top: 10px;
    }
    ul {
        list-style: none;
        font-size: 18px;
        overflow: hidden;
        padding: 0;
        &>li {
            float: left;
            width: 60px;
            height: 30px;
            line-height: 30px;
            border: solid 1px #b23e2f;
            color: #b23e2f;
            text-align: center;
            cursor: pointer;
            &:hover {
                background-color: #b23e2f;
                color: #fff;
            }
            &+li {
                margin-left: 15px;
            }
            &.active {
                background-color: #b23e2f;
                color: #fff;
            }
        }
    }
    .works-content {
        width: 1042px;
        margin: 0 auto;
        overflow: hidden;
        margin-left: -18px;
        column-count: 4;
        column-gap: 0;
    }
    .works-item {
        width: 242.5px;
        height: auto;
        margin-left: 18px;
        margin-bottom: 10px;
        margin-top: 8px;
        box-shadow: 0px 0px 10px #888888;
        display: inline-block;
        break-inside: avoid;
    }
    .works-desc {
        background-color: #fff;
        overflow: hidden;
        padding-left: 5px;
        &>p {
            margin: 0;
        }
    }
    .works-view,.works-edit{
        font-size: 15px;
        margin-left: -35px;
        &>i.el-icon-view {
            margin-left: -45px;
        }
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
