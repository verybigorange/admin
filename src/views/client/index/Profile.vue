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
                <el-carousel
                    class="photo-shows1"
                    :interval="4000"
                    type="card"
                    height="360px"
                    @change="handleImgChange"
                >
                    <el-carousel-item
                        v-for="(img, index)  in imgArrs"
                        :key="index"
                        class="show1-Wrapper"
                    >
                        <img  @click="handleImgClick(img)" style="height:100%" :src="img.pic_url" :alt="img.work_title">
                    </el-carousel-item>
                    <h5 class="wrks-title-1">{{imgArrs[activeIndex]? imgArrs[activeIndex].work_title : ''}}</h5>
                </el-carousel>
                <div class="photo-shows2">
                    <hr class="solid-line"/>
                    <div class="clearfix">
                        <h5 class="pull-left">作品展示</h5>
                        <span class="pull-right more" @click="handleMoreClick">更多</span>
                    </div>
                    <div class="photo-shows2-container">
                        <hr class="dash-line"/>
                         <swiper class="photo-shows2-content" :options="swiperOption" ref="mySwiper">
                            <!-- slides -->
                            <swiperSlide v-for="(img, index) in imgArrs" :key="index">
                                <div @click="handleImgClick(img)" class="img-wrapper2" :style="{'background-image': 'url('+img.pic_url +')'}">
                                </div>
                                <p class="img-title-2">{{img.work_title}}</p>
                            </swiperSlide>
                            <!-- Optional controls -->
                            <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                        </swiper>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </div>
                </div>
            </section>
      </div>
      <div class="cjsx">
          <img :src="require('assets/img/cjsx0.jpg')" alt="长江三峡卷轴" />
      </div>
  </article>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { work_home_show } from 'api/works'
export default {
    name: 'Profile',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            imgArrs: [],
            swiperOption: {
                loop: true,
                loopAdditionalSlides: 3,
                autoplay: true,
                slidesPerView: 4,
                spaceBetween: 13.333,
                height: 160,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            activeIndex: 0
        }
    },
    async mounted() {
        this.imgArrs = await work_home_show()
    },
    methods: {
        handleImgChange(activeIndex, prevIndex) {
            this.activeIndex = activeIndex
        },
        handleImgClick(img) {
            this.$router.push(`/works/detail?id=${img.work_id}`)
        },
        handleMoreClick() {
            this.$router.push(`/works`)
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
}
</script>


<style lang="less" scoped>
    .wrks-title-1 {
        position: absolute;
        top: 308px;
        left: 250px;
        z-index: 10000;
        color: #fff;
        font-weight: normal;
        font-size: 24px;
    }
    .swiper-button-prev {
        // background: #badd;
        width: 29px;
        height: 56px;
        position: relative;
        left: 15px;
        top: -98px;
        font-size: 50px;
        background-image: url('../../../assets/img/prev.png');
        background-repeat: no-repeat;
    }
    .swiper-button-next {
        // background: #badd;
        width: 29px;
        height: 56px;
        position: relative;
        left: 645px;
        top: -130px;
        background-image: url('../../../assets/img/next.png');
        background-repeat: no-repeat;
    }
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
    .img-title-2 {
        text-align: center;
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
        width: 1190px;
        margin-left: -250px;
        background-color:rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .show1-Wrapper {
        text-align: center;
        cursor: pointer;
    }

    .photo-shows2 {
        height: 360px;
        width: 100%;
    }
    .img-wrapper2 {
        width: 130px;
        height: 130px;
        overflow: hidden;
        background-color: #e6e6e6;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
    }

    .photo-shows2-container {
        background-image: url('../../../assets/img/index_nav_bk.jpg');
        background-size: 100px;
        height: 100%;
        width: 100%;
    }
    .photo-shows2-content {
        width: 560px;
        height: 180px;
        padding: 10px;
        margin-top: 40px;
        margin-left: 55px;
        background-color: #fff;
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
        cursor: pointer;
    }
</style>
<style lang="less">
    .photo-shows1>.el-carousel__indicators.el-carousel__indicators--outside {
        position: relative;
        background-color: rgba(0, 0, 0, 0.5);
        width: 690px;
        left: 250px;
        top: -50px;
        height: 50px;
        text-align: right;
        line-height: 50px;
        &>li.el-carousel__indicator {
            width: 15px;
            height: 15px;
            border: none;
            padding: 0;
            margin: 5px;
            border-radius: 100%;
            background-color: #eee;
            &>.el-carousel__button {
                width: 15px;
                height: 15px;
                border-radius: 50%;
            }
            &.is-active {
                &>.el-carousel__button {
                    background-color: #b23e2f;
                }
            } 
        }
    }
    .photo-shows1 .el-carousel__mask {
        background-color: rgba(0,0,0,0);
    }
</style>
