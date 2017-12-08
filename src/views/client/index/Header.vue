<template>
   <header>
      <section class="index-banner">
        <img style="width: 100%" :src="require('assets/img/banner_01.jpg')" alt="banner">
      </section>
      <nav class="index-nav-bar">
        <ul class="index-nav-content clearfix">
          <li class="nav-item">首页</li>
          <li class="nav-item">个人简介</li>
          <li class="nav-item">作品展示</li>
          <li class="nav-item">相册</li>
          <li class="nav-item">新闻中心</li>
          <li class="nav-item">联系我们</li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
  .index-banner {
    max-height: 350px;
    overflow: hidden;
  }
  .index-nav-bar{
    height: 60px;
    background-image: url('../../../assets/img/index_nav_bk.jpg');
    background-size: 100px;
    line-height: 60px;
    text-align: center;
    margin-top: 20px;
    border-bottom: 8px solid #b23e2f;
  }
  .index-nav-content{
    text-decoration: none;
    list-style: none;
    width: 900px;
    margin: 0 auto;
    overflow: hidden;
  }
  li.nav-item{
    float: left;
    width: 150px;
    height: 60px;
    font-size: 30px;
    color: #b23e2f;
  }
</style>