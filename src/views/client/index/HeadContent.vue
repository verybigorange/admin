<template>
   <header>
      <section class="index-banner">
        <img style="width: 100%;" :src="require('assets/img/banner_01.jpg')" alt="banner">
      </section>
      <nav class="index-nav-bar">
        <el-menu
            :router=true
            class="index-nav-content clearfix"
        >
            <el-menu-item
                v-for="(item, index) in navs"
                :key="index"
                :index="item.path"
                class="nav-item"
                :class="{active: item.path=='/'}"
            >
            {{item.title}}
            </el-menu-item>
        </el-menu>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navs: [
        {
          path: '/',
          title: '首页'
        },
        {
          path: '/profile',
          title: '个人简介'
        },
        {
          path: '/works',
          title: '作品展示'
        },
        {
          path: '/album',
          title: '相册'
        },
        {
          path: '/news',
          title: '新闻中心'
        },
        {
          path: '/contact',
          title: '联系我们'
        }
      ]
    }
  },
  methods: {
    navChange(e) {
      let index = e.target.dataset.index
      this.$router.push(index)
    }
  }
}
</script>

<style scoped lang="less">
  .index-banner {
    max-height: 350px;
    overflow: hidden;
  }
  .index-nav-bar{
    height: 40px;
    background-image: url('../../../assets/img/index_nav_bk.jpg');
    background-size: 100px;
    line-height: 40px;
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
    background-color: transparent;
  }
  li.nav-item{
    float: left;
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #b23e2f;
    cursor: pointer;
    &.active {
      background-color: #b23e2f;
      color: #fff;
    }
    &:hover {
      background-color: #b23e2f;
      color: #fff;
    }
  }
</style>