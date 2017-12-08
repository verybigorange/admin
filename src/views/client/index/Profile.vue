<template>
  <article class="clearfix">
      <h3>个人简介</h3>
      <h4>Personal profile</h4>
      <div class="profile-content">
            <section class="summary pull-left">
                <div class="portrait-content">
                    <img style="width: 100%" :src="require('assets/img/portrait.jpg')" alt="大师肖像">
                </div>
                <h5 class="name">何笑勤</h5>
                <p class="profile-text">字默舟，生于一九五六年，四川洪雅人。中原书画院研究员，眉山地区美协会员。　八岁开始学画，早年曾受画坛前辈钱松岩、李琼玖等先生的指教。自学三十余年，深入传统的研修，并把现代精神与笔墨融合其中不断的求索，勤奋笔耕，力求突破与创新、自然与物象变与合的统一感悟、生化，其作品深得同行和前辈认可。</p>
                <section class="qr-section">
                    <div class="qr-content pull-left">
                        <img style="width: 100%" :src="require('assets/img/qr_code.jpg')" alt="二维码">
                    </div>
                    <div class="qr-text pull-left">
                        <span>扫描二维码访问</span>
                        </br>
                        <span>该艺术家微官网</span>
                    </div>
                </section>
            </section>
            <section class="shows pull-right">
                <el-carousel class="photo-shows1">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3> 轮播图{{item}}</h3>
                    </el-carousel-item>
                </el-carousel>
                <div class="photo-shows2">
                    <hr class="solid-line"/>
                    <div class="clearfix">
                        <h5 class="pull-left">作品展示</h5>
                        <span class="pull-right more">更多</span>
                    </div>
                    <div class="photo-shows2-container">
                        <hr class="dash-line"/>
                        <el-carousel class="photo-shows2-content">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3> 轮播图{{item}}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </section>
      </div>
  </article>
</template>

<script>
export default {
  name: 'Profile'
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
    h5.name {
        margin: 12px 5px;
    }

    hr {
        outline: none;
        border: none;
        margin: 0;
        padding: 0;
    }

    .solid-line {
        height: 4px;
        margin-top: 22px;
        background-color: #b23e2f;
    }

    .dash-line {
        height: 0;
        border-top: 1px dashed  #b23e2f;
    }

    .portrait-content {
        width: 275px;
        height: 360px;
    }

    .profile-text {
        width: 260px;
        margin: 12px 10px 10px 5px;
        font-size: 14px;
        line-height: 24px;
    }

    .qr-content {
        width: 72px;
        height: 72px;
    }

    .qr-text {
        font-size: 18px;
        line-height: 30px;
        margin: 8px 20px;
        &>span {
            padding: 0;
            margin: 0;
            
        }
    }

    .summary {
        width:  280px;
        height: 720px;
        padding: 0 15px;
        overflow: hidden;
        background-color: #f5f5f5;

    }

    .shows {
        width: 690px;
        height: 720px;
        overflow: hidden;
    }

    .photo-shows1 {
        height: 360px;
        width: 100%;
        background-color: #f5f5f5;
    }
    .photo-shows2 {
        height: 360px;
        width: 100%;
    }

    .photo-shows2-container {
        background-image: url('../../../assets/img/index_nav_bk.jpg');
        background-size: 100px;
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
