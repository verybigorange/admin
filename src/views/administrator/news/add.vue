<template>
  <div class="components-container">
    <!-- <div class="info"></div> -->
    <!-- <p class="title">新闻内容编辑</p> -->
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
      <!-- <UE :defaultMsg=defaultMsg :config=config :id=ue2 ref="ue2"></UE> -->
    </div>
     <el-button type="primary" class="pull-right" @click="getUEContent()">提交</el-button>
  </div>
</template>
<style>
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
  .editor-container{
    margin-bottom: 20px;
  }
</style>
<script>
  import UE from 'components/ue/ue.vue';
  export default {
    components: {UE},
    data() {
      return {
        defaultMsg: '',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        ue1: "ue1", // 不同编辑器必须不同的id
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent(); // 调用子组件方法
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
    }
  };
</script>



