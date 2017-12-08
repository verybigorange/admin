<template>
  <div class="container">
       <div class="center">
            <h3>相册</h3>
            <h4>Photo album</h4>
            <div class="photo-wrapper clearfix">
                <div class="photo-item pull-left">
                    <div class="photo-content">
                        <img src="../../../assets/img/news_photo.png" alt="图片">
                    </div>
                    <p class="photo-desc">2017年照片</p>
                </div>
                 <div class="photo-item pull-left">
                    <div class="photo-content">
                        <img src="../../../assets/img/news_photo.png" alt="图片">
                    </div>
                    <p class="photo-desc">2017年照片</p>
                </div>
                 <div class="photo-item pull-left">
                    <div class="photo-content">
                        <img src="../../../assets/img/news_photo.png" alt="图片">
                    </div>
                    <p class="photo-desc">2017年照片</p>
                </div>
                 <div class="photo-item pull-left">
                    <div class="photo-content">
                        <img src="../../../assets/img/news_photo.png" alt="图片">
                    </div>
                    <p class="photo-desc">2017年照片</p>
                </div>
                 <div class="photo-item pull-left">
                    <div class="photo-content">
                        <img src="../../../assets/img/news_photo.png" alt="图片">
                    </div>
                    <p class="photo-desc">2017年照片</p>
                </div>
                 <div class="photo-item pull-left">
                    <div class="photo-content">
                        <img src="../../../assets/img/news_photo.png" alt="图片">
                    </div>
                    <p class="photo-desc">2017年照片</p>
                </div>
                <div class="photo-item pull-left">
                    <div class="photo-content">
                        <img src="../../../assets/img/news_photo.png" alt="图片">
                    </div>
                    <p class="photo-desc">2017年照片</p>
                </div>
                <div class="photo-item pull-left">
                    <div class="photo-content">
                        <img src="../../../assets/img/news_photo.png" alt="图片">
                    </div>
                    <p class="photo-desc">2017年照片</p>
                </div>
            </div>
             <div class="page-wrapper album">
                        <el-pagination
                            background=true
                            layout="prev, pager, next"
                            :total="199"
                        >
                        </el-pagination>
                </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumContent'
}
</script>

<style scoped lang="less">
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
    .photo-wrapper {
        width: 1032px;
        margin-left: -8px;
    }
    .photo-item {
        width: 250px;
        height: 300px;
        margin-left: 8px;
        &>.photo-content {
            width: 220px;
            height: 220px;
            overflow: hidden;
            text-align: center;
            border: 15px solid #fff;
            &>img {
                height: 100%;
            }
        }
        &>.photo-desc {
            text-align: center;
            color: #b23e2f;
            font-size: 15px;
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