<template>
    <div>
        <h3>作品上传</h3>
        <div class="box">
            <div class="item">
                    <p>作品图片：</p>
                    <div class="content">
                        <el-upload
                        class="upload-demo"
                        action="/api/upload/"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture"
                        :limit='1'>
                        <el-button size="small" type="primary">点击上传作品图片</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    </div>
                
            </div>
        
            <div class="item">
                <p>作品类型：</p>
                <div class="content">
                    <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </div>
                
            </div>   

            <div class="item">
                <p>作品名称：</p>
                <div class="content">
                    <el-input type="text" v-model="title" placeholder="请输入作品名称"></el-input>
                </div>
                
            </div>   

            <div class="item">
                <p>首页展示:</p>
                <div class="content">
                    <el-radio v-model="radio" label="否">否</el-radio>
                <el-radio v-model="radio" label="是">是</el-radio>
                </div>
            </div>  

            <div class="item">
                <p>作品浏览量:</p>
                <div class="content">
                    <el-input type="" v-model.number="count" placeholder="请输入作品浏览量"></el-input>
                </div>
            </div>  
            
            <div class="item">
                <el-button type="success" class="pull-right" @click="submit">提交</el-button>
            </div>

        </div>
    </div>
    
</template>

<script>

import { worksAdd,delete_pic } from 'api/works';

export default {
  data() {
    return {
      fileList: [], //回显用的
      options: [
        {
          value: "山水",
          label: "山水"
        },
        {
          value: "人物",
          label: "人物"
        },
        {
          value: "花鸟",
          label: "花鸟"
        },
        {
          value: "临摹",
          label: "临摹"
        }
      ],
      value: "", //下拉
      radio: "0", //单选
      count: "",
      url:"", //作品地址，
      title:"",
      pic_name:"", //图片名称
    };
  },
  methods: {
    handleSuccess(data) {
        this.url = data;
        this.pic_name = data.replace('/api/img/','');
    },
    handleRemove() {
        //删除图片
        delete_pic({pic_name:this.pic_name});
        this.url = "";
        this.pic_name = "";
    },
    submit(){
        worksAdd({
            type:this.value,
            url:this.url,
            title:this.title,
            show:this.radio,
            count:this.count,
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



