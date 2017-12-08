<template>
    <div class="photos-container">
        <h3>相册</h3>
        <h4>Photos</h4>
        <hr class="solid-hr-b" />
        <div class="clearfix">
            <h5 class="pull-left">相册</h5>
            <span class="pull-right more">更多</span>
        </div>
        <hr class="dashed-hr-t" />
        <div class="photos-content clearfix">
            <div class="photo-wrapper pull-left">
                <h6>2017年照片</h6>
            </div>
            <div class="photo-wrapper pull-left">
                <h6>2017年照片</h6>
            </div>
            <div class="photo-wrapper pull-left">
                <h6>2017年照片</h6>
            </div>
            <div class="photo-wrapper pull-left">
                <h6>2017年照片</h6>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Photos'
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
    hr {
        border: none;
        margin: 0;
    }
    .solid-hr-b {
        height: 4px;
        margin-top: 22px;
        background-color: #b23e2f;
    }
    .dashed-hr-t {
        height: 0;
        border-top: 1px dashed  #b23e2f;
    }
    .photos-content {
        height: 305px;
        width: 1015px;
        background-image: url('../../../assets/img/index_nav_bk.jpg');
        background-size: 100px;
        overflow: hidden;
        padding: 15px 4.5px
    }
    .photo-wrapper {
        background-color: #f5f5f5;
        width: 235px;
        height: 275px;
        margin: 15px 0 15px 15px;
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
