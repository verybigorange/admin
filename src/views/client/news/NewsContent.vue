<template>
    <div class="container">
        <div class="center">
            <h3>新闻中心</h3>
            <h4>News Center</h4>
            <ul>
                <li class="news-type active">全部</li>
                <li class="news-type">业界新闻</li>
            </ul>
            <div class="news-wrapper">
                <div class="news-item clearfix">
                    <div class="news-banner pull-left">
                        <img :src="require('assets/img/news_photo.png')" alt="新闻照片">
                    </div>
                    <div class="news-content pull-right">
                        <h5 class="news-title">关于何笑勤，你最想了解的几个问题</h5>
                        <p class="news-date">2017-10-11</p>
                        <p>
                        字默舟，生于一九五六年，四川洪雅人。中原书画院研究员，眉山地区美协会
                        员。　八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。自学三十
                        余年深入传统的研修，并把现代精神与笔墨融合其中不断的求索，勤奋笔耕，力求
                        突破与创新
                        </p>
                    </div>
                </div>
                <div class="news-item clearfix">
                    <div class="news-banner pull-left">
                        <img :src="require('assets/img/news_photo.png')" alt="新闻照片">
                    </div>
                    <div class="news-content pull-right">
                        <h5 class="news-title">关于何笑勤，你最想了解的几个问题</h5>
                        <p class="news-date">2017-10-11</p>
                        <p>
                        字默舟，生于一九五六年，四川洪雅人。中原书画院研究员，眉山地区美协会
                        员。　八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。自学三十
                        余年深入传统的研修，并把现代精神与笔墨融合其中不断的求索，勤奋笔耕，力求
                        突破与创新
                        </p>
                    </div>
                </div>
                <div class="news-item clearfix">
                    <div class="news-banner pull-left">
                        <img :src="require('assets/img/news_photo.png')" alt="新闻照片">
                    </div>
                    <div class="news-content pull-right">
                        <h5 class="news-title">关于何笑勤，你最想了解的几个问题</h5>
                        <p class="news-date">2017-10-11</p>
                        <p>
                        字默舟，生于一九五六年，四川洪雅人。中原书画院研究员，眉山地区美协会
                        员。　八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。自学三十
                        余年深入传统的研修，并把现代精神与笔墨融合其中不断的求索，勤奋笔耕，力求
                        突破与创新
                        </p>
                    </div>
                </div>
                <div class="news-item clearfix">
                    <div class="news-banner pull-left">
                        <img :src="require('assets/img/news_photo.png')" alt="新闻照片">
                    </div>
                    <div class="news-content pull-right">
                        <h5 class="news-title">关于何笑勤，你最想了解的几个问题</h5>
                        <p class="news-date">2017-10-11</p>
                        <p>
                        字默舟，生于一九五六年，四川洪雅人。中原书画院研究员，眉山地区美协会
                        员。　八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。自学三十
                        余年深入传统的研修，并把现代精神与笔墨融合其中不断的求索，勤奋笔耕，力求
                        突破与创新
                        </p>
                    </div>
                </div>
                <div class="page-wrapper news">
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
</template>

<script>
export default {
  name: "NewsContent"
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