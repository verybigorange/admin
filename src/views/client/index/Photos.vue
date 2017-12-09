<template>
    <div class="photos-container">
        <h3>相册</h3>
        <h4>Photos</h4>
        <hr class="solid-hr-b" />
        <div class="clearfix">
            <h5 class="pull-left">相册</h5>
            <span class="pull-right more" @click="$router.push('/album')" style="cursor:pointer">更多</span>
        </div>
        <hr class="dashed-hr-t" />
        <div class="photos-content clearfix">
            <div class="photo-wrapper pull-left" v-for="(item,index) in photoList" :key="index" >
                <img class="photo-pic" :src="item.pic_url" alt="照片未加载成功" @click="currentBigPic=index">
                <p style="color:#b23e2f;text-align:center;" class="photo_title">{{item.pic_title}}</p>
                <div class='big-pic' v-show='currentBigPic==index' @click='currentBigPic=-1'>
                    <img :src="item.pic_url" alt="图片未加载成功">
                </div>
            </div>
            
        </div>
    </div>

</template>

<script>
import { photo_select } from 'api/photo';

export default {
  name: 'Photos',
  async mounted(){
       let { list } = await photo_select({limit:4,currentPage:1});
       this.photoList = list;
  },
  data(){
      return {
          currentBigPic:-1, // 当前显示的大图
          photoList:[]
      }
  }
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
    .photo_title{
        overflow: hidden;
        width: 84%;
        margin: 0 auto;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .photo-wrapper {
        cursor: pointer;
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
    .photo-pic{
        display: block;
        width: 210px;
        height: 200px;
        margin:  20px auto;
    }
</style>
