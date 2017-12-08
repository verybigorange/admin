<template>
    <div class="container">
        <div class="center">
            <h3>作品展示</h3>
            <h4>Exhibition of works</h4>
            <div class="works-detail-wrapper">
                <div class="works-detail-image">
                    <img style="width: 100%" :src="require('../../../assets/img/works_03.jpg')" alt="作品图片" />
                </div>
                <h5>《作品名称》</h5>
                <p class="works-label clearfix">
                    <span class="view-num pull-left">浏览222次</span>
                    <span class="comment-num pull-right"><i class="el-icon-edit-outline"></i>217</span>
                </p>
                <p class="comment-text">评论</p>
                <div class="works-comments">
                    <div class="comment-item">
                        <p class="comment-person">游客评论</p>
                        <p class="comment-date">10:14</p>
                        <p class="comment-content">fdjlfjlfdsaldfjdslfjlasdjflasjfljhahahaf dflfjldfs jlsdfjjdls  jfdlsfjla </p>
                    </div>
                    <div class="page-wrapper works">
                        <el-pagination
                            background=true
                            layout="prev, pager, next"
                            :total="199"
                        >
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "WorksContent"
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
        font-size: 22px;
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
