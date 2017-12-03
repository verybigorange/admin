<template>
    <div class="news-container">
        <h3>新闻中心</h3>
        <h4>News Center</h4>
        <hr class="solid-hr-b" />
        <div class="clearfix">
            <h5 class="pull-left">新闻中心</h5>
            <span class="pull-right more">更多</span>
        </div>
        <div class="photos-content">
            <hr class="solid-hr-t" />
            <div class="news-item clearfix">
                <div class="news-item-l pull-left">
                    <h6>关于何笑勤你最想了解的几个问题</h6>
                    <p class="news-date">2017-10-11</p>
                    <p class="news-content">字默舟，生于一九五六年，四川洪雅人。中原书画院研究员，眉山地区美协会员。　八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。自学三十余年，深入传统的研修，并把现代精神与笔墨融合其中不断的求索，勤奋笔耕，力求突破与创新、自然与物象变与合的统一感悟、生化，其作品深得同行和前辈认可。</p>
                </div>
                <div class="news-item-r pull-right">
                    <span class="news-detail">详细</span>
                </div>
            </div>
            <hr class="solid-hr-t" />
            <div class="news-item clearfix">
                <div class="news-item-l pull-left">
                    <h6>关于何笑勤你最想了解的几个问题</h6>
                    <p class="news-date">2017-10-11</p>
                    <p class="news-content">字默舟，生于一九五六年，四川洪雅人。中原书画院研究员，眉山地区美协会员。　八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。自学三十余年，深入传统的研修，并把现代精神与笔墨融合其中不断的求索，勤奋笔耕，力求突破与创新、自然与物象变与合的统一感悟、生化，其作品深得同行和前辈认可。</p>
                </div>
                <div class="news-item-r pull-right">
                    <span class="news-detail">详细</span>
                </div>
            </div>
            <hr class="solid-hr-t" />
            <div class="news-item clearfix">
                <div class="news-item-l pull-left">
                    <h6>关于何笑勤你最想了解的几个问题</h6>
                    <p class="news-date">2017-10-11</p>
                    <p class="news-content">字默舟，生于一九五六年，四川洪雅人。中原书画院研究员，眉山地区美协会员。　八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。自学三十余年，深入传统的研修，并把现代精神与笔墨融合其中不断的求索，勤奋笔耕，力求突破与创新、自然与物象变与合的统一感悟、生化，其作品深得同行和前辈认可。</p>
                </div>
                <div class="news-item-r pull-right">
                    <span class="news-detail">详细</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="less" scoped>
    h3 {
        font-size: 35px;
        color: #b23e2f;
        text-align: center;
        margin: 25px 0 10px;
    }
    h4 {
        font-size: 24px;
        color: #999999;
        text-align: center;
        
        margin: 15px 0 30px;
        margin-top: 10px;
        padding-top: 0;
    }
    h5 {
        font-size: 28px;
        color: #b23e2f;
        margin: 12px 20px
    }
    h6 {
        font-size: 23px;
        color: #b23e2f;
        margin: 30px 20px 10px;
    }
    hr {
        border: none;
        margin: 0;
    }
    .solid-hr-b {
        height: 4px;
        margin-top: 22px;
        background-color: #b23e2f;
    }
    .solid-hr-t {
        height: 0;
        border-top: 1px solid  #b23e2f;
    }
    .news-date {
        font-size: 17px;
        color: #666;
        margin: 15px 20px;
    }
    .news-content {
        font-size: 12px;
        color: #666;
        margin: 15px 20px;
        line-height: 18px;
    }
    .news-item-l {
        width: 860px;
    }
    .news-detail {
        display: block;
        width: 65px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        border: 1px solid #b23e2f;
        color: #b23e2f;
        font-size: 23px;
        margin: 100px 20px 0 0;
        cursor: pointer;
    }

    .more {
        display: block;
        width: 68px;
        height: 35px;
        background-color: #b23e2f;
        color: #fff;
        font-size: 23px;
        text-align: center;
        line-height: 35px;
        margin: 10px 20px;
    }
</style>
