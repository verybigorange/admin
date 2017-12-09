<template>
    <div class="center">
        <div class="portrait-content pull-left">
            <img style="width: 100%" :src="require('assets/img/protrait_01.jpg')" alt="大师肖像">
        </div>
        <div class="profile-desc pull-right">
            <h5 class="name">何笑勤</h5>
            <p class="profile-text">
                字默舟，生于一九五六年，四川洪雅人。<br/>
                中原书画院研究员，眉山地区美协会员。<br/>　
                八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。
                自学三十余年，深入传统的研修，并把现代精神与笔墨融合其中不
                断的求索，勤奋笔耕，力求突破与创新、自然与物象变与合的统一
                感悟、生化，其作品深得同行和前辈认可。二○○二年代表作\"长
                江三峡图卷\"（长31米）被中国长江三峡工程总公司收藏。
            </p>
            <p class="main-works">
                 主要作品：《横绝峨嵋岭》、《横绝峨嵋岭》、
            </P>
        </div>
    </div>
</template>

<script>
import NavGations from '../common/NavGations'
export default {
    components: {
        NavGations
    }
}
</script>

<style lang="less" scoped>
    .center {
        width: 1024px;
        margin: 0 auto;
        height: 100%;
    }
    h5 {
        font-size: 30px;
        margin: 0;
        padding: 0;
        padding-top: 30px;
        padding-left: 30px;
    }
    p {
        padding-left: 30px;
        color: #666;
        font-size: 20px;
        line-height: 32px;
    }
    .portrait-content {
        width: 400px;
        height: 470px;
        overflow: hidden;
        &>img {
            height: 100%;
        }
    }
    .profile-desc {
        width: 600px;
    }
    .main-works {
        font-size: 25px;
    }
</style>