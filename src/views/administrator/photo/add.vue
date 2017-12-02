<template>
    <div>
        <h3>照片上传</h3>
        <div class="box">
            <div class="item">
                    <p>相片：</p>
                    <div class="content">
                        <el-upload
                        class="upload-demo"
                        action="/api/upload/"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture"
                        :limit='1'>
                        <el-button size="small" type="primary">点击上传相片</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    </div>
                
            </div>
        
           

            <div class="item">
                <p>照片名称：</p>
                <div class="content">
                    <el-input type="text" v-model="title" placeholder="请输入照片名称"></el-input>
                </div>
            </div>   

            
            <div class="item">
                <el-button type="success" class="pull-right" @click="submit">提交</el-button>
            </div>

        </div>
    </div>
    
</template>

<script>

import { photoAdd } from 'api/photo';

export default {
  data() {
    return {
      fileList: [], //回显用的
      url:"", //照片地址，
      title:"",
      pic_name:"", //图片名称
    };
  },
  methods: {
    handleSuccess(data) {
        this.url = data;
        this.pic_name = data.replace('/api/static/img/','');
    },
    handleRemove() {
        //删除图片
        delete_pic({pic_name:this.pic_name});
        this.url = "";
        this.pic_name = "";
    },
    submit(){
        photoAdd({
            url:this.url,
            title:this.title,
            pic_name:this.pic_name
        })
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  margin: 0 auto;
  .item {
    padding-left: 50px;
    margin-bottom: 20px;

    .content {
      padding-left: 60px;
    }
  }
}
</style>





