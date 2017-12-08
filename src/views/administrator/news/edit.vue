<template>
  <div class="components-container">
    <!-- <div class="info"></div> -->
    
    <h3 class="title">添加新闻</h3>
    <div class="main">
          <div class="box">
            <p>新闻标题：</p>
            <el-input type="text" placeholder="请输入新闻标题" v-model="title"></el-input>
          </div>

          <div class="box">
              <p>新闻发布的日期：</p>
              <el-date-picker
                v-model="date"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
          </div>
  
          <div class="editor-container">
            <p>新闻内容：</p>
            <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
            <!-- <UE :defaultMsg=defaultMsg :config=config :id=ue2 ref="ue2"></UE> -->
          </div>
           <el-button type="primary" class="pull-right" @click="submit()">提交</el-button>
    </div>
    
    
  </div>
</template>
<style scoped lang='less'>
.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
.editor-container {
  margin-bottom: 20px;
}
.main{
  padding-left: 40px;
  padding-bottom: 40px;
}
.box {
  width: 500px;
  margin: 10px 0 20px;
}

</style>
<script>
import UE from "components/ue/ue.vue";
import { news_select_id,news_edit } from 'api/news';

export default {
  components: { UE },
  async mounted(){
       //获取新闻id
     this.news_id = this.$route.query.id*1;
     let res = await news_select_id({id: this.news_id});
        
    //回显
     
     this.title = res.news_title;
     this.content = res.news_content
     this.date = res.news_date;
     this.plainText = res.news_plainText;
     this.$refs.ue.insertHtml(this.content);
  },
  data() {
    return {
      defaultMsg: "",
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350,
      },
      ue1: "ue1", // 不同编辑器必须不同的id
      title: "", //新闻标题
      content: "", //新闻内容
      date: "", //新闻发布的日期
      plainText:"", //新闻的存文本
      news_id:-1 //新闻的id
    };
  },
  methods: {
    submit() {
      this.content = this.$refs.ue.getUEContent(); // 调用子组件方法
      this.plainText =  this.$refs.ue.getContentTxt(); //获得纯文本
      
      news_edit({title:this.title,date:this.date,content:this.content,plainText:this.plainText,id:this.news_id});
    }
  }
};
</script>



