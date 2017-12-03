<template>
  <div class="index-container">
    <Header/>
    <div class="main center-content">
      <Profile/>
      <Photos/>
      <News/>
    </div>
    <footer class="footer center-content"> 
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Header from './Header'
import Profile from './Profile'
import Photos from './Photos'
import News from './News'
import Footer from './Footer'
export default {
  components: {
    Header,
    Profile,
    Photos,
    News,
    Footer
  }
}
</script>

<style lang="less" scoped>
  .center-content {
    width: 1024px;
    margin: 0 auto
  }

  .index-container {
    background-color: #f6f0e2;
  }
</style>




